import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GameCardMobile from "@/components/page-top/GameCardMobile";
import { Genre, SingleGame } from "@/types";

const GameCard = ({
  data,
  matchingGenres,
}: {
  data: SingleGame | undefined;
  matchingGenres: Genre[] | undefined;
}) => {
  return (
    <div className="w-full flex md:w-[96%] mx-auto md:gap-5 max-w-[900px]  h-fit md:pt-5 2xl:pt-28 pt-4">
      <div className="max-md:w-[80%] shadow-md max-md:max-w-[380px] lg:max-w-[320px]  aspect-[3/4] flex mx-auto max-md:rounded-2xl  relative overflow-clip pb-4 md:w-2/5 md:rounded-l-[45px]">
        <Image
          src={data?.imageUrl || "/uncharted.png"}
          alt="game"
          sizes="(min-width: 1040px) 320px, (min-width: 780px) 33.33vw, (min-width: 520px) 380px, calc(70vw + 30px)"
          fill
          className="object-cover object-top"
        />
        <div className="w-full h-full z-10 flex justify-center md:hidden ">
          <GameCardMobile data={data} matchingGenres={matchingGenres} />
          <Button
            className="w-fit mx-auto rounded-xl self-end text-lg bg-main-green/80 border-black/50 border-2 hover:bg-main-green/60 sm:h-11 sm:px-8 z-10"
            size="default"
          >
            <a
              target="_blank"
              href={`https://www.g2a.com/search?query=${data?.slug || "uncharted-legacy-of-thieves-collection"}&gtag=fc26a8ed9b`}
            >
              Find Best Price
            </a>
          </Button>
        </div>
      </div>
      <div className="hidden shadow-md  md:flex w-3/5 rounded-r-[45px]    py-3 px-6  space-y-4  flex-col border-2 border-white md:max-h-[calc(45vw+10px)]  lg:max-h-[427px]">
        <div className="text-center space-y-1">
          <h1 className="font-semibold text-xl drop-shadow-lg">
            {data?.name || "Uncharted: Legacy of Thieves Collection"}
            <span className="drop-shadow-md text-sm pl-2">
              ({data?.releaseYear || "2022"})
            </span>
          </h1>
          <p className="self-center text-center max-w-[90%] mx-auto">
            {matchingGenres?.map((genre, i) => {
              if (i > 3) return null;
              return (
                <span key={i}>
                  {genre.name}
                  {i + 1 < matchingGenres?.length && i < 3 && " / "}
                </span>
              );
            }) || "Action / Adventure"}
          </p>
        </div>
        <p className="flex-1 overflow-auto">
          {data?.summary ||
            data?.storyline ||
            "Uncharted: Legacy of Thieves Collection is a remastered collection of two games in the Uncharted saga: Uncharted 4: A Thief’s End and Uncharted: The Lost Legacy. This includes multiple graphical options with varying framerates and resolutions, faster load times and DualSense haptic feedback and adaptive triggers."}
        </p>
        <Button className="w-fit mx-auto rounded-xl" size="md">
          <a
            target="_blank"
            href={`https://www.g2a.com/search?query=${data?.slug || "uncharted-legacy-of-thieves-collection"}&gtag=fc26a8ed9b`}
          >
            Find Best Price
          </a>
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
