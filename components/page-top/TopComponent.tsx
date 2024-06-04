"use client";
import React, { useEffect, useState, useTransition } from "react";
import GameCard from "@/components/page-top/GameCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdvanceSearchSchema, SearchSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FindGame } from "@/actions/find-game";
import { Genre, SingleGame } from "@/types";
import { FilterForm } from "@/components/page-top/FilterForm";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import FeelingLuckyButton from "@/components/page-top/FeelingLuckyButton";
import { RandomGame } from "@/actions/random-game";

import { FindGameAdvance } from "@/actions/find-game-advance";

const TopComponent = ({ genres }: { genres: Genre[] }) => {
  const [data, setData] = useState<SingleGame | undefined>();
  const [error, setError] = useState<string | undefined>("");
  const [matchingGenres, setMatchingGenres] = useState<Genre[] | undefined>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (genres && data && !error && data.genres) {
      const matchingGenres = genres.filter((genre) =>
        data.genres.includes(genre.id),
      );
      setMatchingGenres(matchingGenres);
    }
  }, [data, genres, error]);

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      goodRated: false,
    },
  });

  function onSubmit(values: any) {
    setError("");
    startTransition(() => {
      if (values?.action) {
        FindGameAdvance(values).then((data) => {
          setError(data?.error);
          setData(data);

          if (data.error && window.innerWidth > 1535) {
            toast({
              className: cn(
                "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-main-red border-main-red-dark",
              ),
              variant: "destructive",
              title: `${data.error}`,
              description: "Maybe try to change filter settings.",
            });
          }
        });
      } else {
        FindGame(values).then((data) => {
          setError(data?.error);
          setData(data);

          if (data.error && window.innerWidth > 1535) {
            toast({
              className: cn(
                "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-main-red border-main-red-dark",
              ),
              variant: "destructive",
              title: `${data.error}`,
              description: "Maybe try to change filter settings.",
            });
          }
        });
      }
    });
  }

  const getRandomGame = () => {
    setError("");
    startTransition(() => {
      RandomGame().then((data: SingleGame) => {
        setError(data?.error);
        setData(data);
      });
    });
  };

  return (
    <section className="  h-fit md:max-2xl:px-6 2xl:w-fit 2xl:min-w-[900px]">
      <FeelingLuckyButton isPending={isPending} getRandomGame={getRandomGame} />
      {/*form*/}
      <FilterForm
        onSubmit={onSubmit}
        error={error}
        isPending={isPending}
        form={form}
        genres={genres}
      />
      {/*image info*/}
      <GameCard data={data} matchingGenres={matchingGenres} />
    </section>
  );
};

export default TopComponent;
