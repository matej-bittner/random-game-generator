"use client";
import React, { useState, useTransition } from "react";
import { FilterForm } from "@/components/FilterForm";
import GameCard from "@/components/GameCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import FeelingLuckyButton from "@/components/FeelingLuckyButton";
import { FindGame } from "@/actions/find-game";
import { singleGame } from "@/types";

const Page = () => {
  const [data, setData] = useState<singleGame | undefined>();

  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      genre: "",
      goodRated: false,
    },
  });

  function onSubmit(values: z.infer<typeof SearchSchema>) {
    setError("");
    console.log(values);
    startTransition(() => {
      FindGame(values).then((data) => {
        setError(data?.error);
        setData(data);
      });
    });
  }

  return (
    <main className="h-full min-h-screen bg-gradient-to-b from-main-orange to-main-lime space-y-2  pb-20">
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
          />
        </div>
        {/*image info*/}
        <div className="w-full h-fit md:pt-8 xl:pt-4">
          <GameCard data={data} />
        </div>
      </div>
    </main>
  );
};

export default Page;
