"use client";
import React, { useEffect, useState, useTransition } from "react";
import GameCard from "@/components/GameCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FindGame } from "@/actions/find-game";
import { Genre, SingleGame } from "@/types";
import { FilterForm } from "@/components/FilterForm";
import FeelingLuckyButton from "@/components/FeelingLuckyButton";
import { getAllGenres } from "@/actions/genres";

const Page = () => {
  const [data, setData] = useState<SingleGame | undefined>();
  const [error, setError] = useState<string | undefined>("");
  const [genres, setGenres] = useState<Genre[] | undefined>([]);
  const [matchingGenres, setMatchingGenres] = useState<Genre[] | undefined>();
  const [isPending, startTransition] = useTransition();
  const getGenres = () => {
    getAllGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch(() => {
        // setError("Něco se nepovedlo");
      });
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (genres && data) {
      const matchingGenres = genres.filter((genre) =>
        data.genres.includes(genre.id),
      );
      setMatchingGenres(matchingGenres);
    }
  }, [data, genres]);

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      goodRated: false,
    },
  });

  function onSubmit(values: z.infer<typeof SearchSchema>) {
    setError("");
    startTransition(() => {
      FindGame(values).then((data) => {
        setError(data?.error);
        setData(data);
      });
    });
  }

  return (
    <main className="h-full min-h-screen bg-gradient-to-b from-main-orange to-main-lime space-y-2  pb-20 relative">
      {/*feelin lucky button*/}
      <FeelingLuckyButton />
      {/*heading*/}
      <div className="flex flex-col gap-3 sm:gap-4 text-center justify-center px-6 md:pt-10 xl:pt-12 md:gap-5">
        <h1 className="font-bold drop-shadow-md text-3xl sm:text-4xl md:text-[41px] lg:text-5xl">
          GamesToPlay<span className="text-lg">.com</span>
        </h1>
        <p className="font-medium drop-shadow-md leading-tight sm:text-lg md:text-xl">
          If you are bored and want to play some
          <br className="max-md:hidden xl:hidden" /> game you are in the right
          place
        </p>
      </div>
      {/*form*/}
      <div className="space-y-4 h-fit  relative md:pt-10 md:px-6">
        <div className="px-6">
          <FilterForm
            onSubmit={onSubmit}
            error={error}
            isPending={isPending}
            form={form}
            genres={genres}
          />
        </div>
        {/*image info*/}
        <div className="w-full h-fit md:pt-8 xl:pt-4">
          <GameCard data={data} matchingGenres={matchingGenres} />
        </div>
      </div>
    </main>
  );
};

export default Page;
