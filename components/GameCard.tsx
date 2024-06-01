import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import GameInfo from "@/components/GameInfo";
import { singleGame } from "@/types";

const GameCard = ({ data }: { data: singleGame | undefined }) => {
  return (
    <div className="w-full flex md:w-[96%] mx-auto md:gap-5 max-w-[900px]">
      <div className="max-md:w-[80%] max-md:max-w-[380px] lg:max-w-[320px]  aspect-[3/4] flex mx-auto max-md:rounded-2xl  relative overflow-clip shadow-md pb-4 md:w-2/5 md:rounded-l-[45px]">
        <Image
          src={data?.imageUrl || "/test-game.png"}
          alt="game"
          fill
          className="object-cover object-top"
        />
        <div className="w-full h-full z-10 flex justify-center md:hidden">
          <GameInfo />
          <Button className="bg-main-orange-light text-black text-md sm:text-lg self-end rounded-xl z-10 hover:bg-main-orange/50">
            <Link href="">Find Best Price</Link>
          </Button>
        </div>
      </div>
      <div className="hidden shadow-md  md:flex w-3/5 rounded-r-[45px] bg-gradient-to-t from-main-orange/20 to-main-lime/20   py-3 px-6  space-y-4  flex-col border-2 border-white md:max-h-[calc(45vw+10px)]  lg:max-h-[427px]">
        <div className="text-center space-y-1">
          <h1 className="font-semibold text-xl drop-shadow-lg">{data?.name}</h1>
          <p className="drop-shadow-md">{data?.releaseYear}</p>
        </div>
        <p className="flex-1 overflow-auto">
          {data?.summary || data?.storyline}
        </p>
        <Button className="bg-main-orange-light text-black text-md text-lg lg:text-xl  rounded-xl z-10 mx-auto flex shadow-lg border-2 border-black hover:bg-main-orange/50">
          <Link href="">Find Best Price</Link>
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
