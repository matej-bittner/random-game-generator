"use client";
import React, { useState } from "react";
import Image from "next/image";

const GameInfo = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <div className="w-full h-full absolute ">
      <Image
        src="/icons/arrow-up.svg"
        alt="arrow-up"
        height={50}
        width={50}
        className={`bg-white/40 h-fit absolute  bottom-4 left-3 rounded-2xl backdrop-blur-sm cursor-pointer ${openInfo && "rotate-180"}`}
        onClick={() => setOpenInfo(!openInfo)}
      />
      <div
        className={`w-full bg-sky-300 h-full px-2 pt-2 flex flex-col items-center ${!openInfo && "hidden"}`}
      >
        <h2 className="font-semibold text-lg">Assassin's Creed Valhalla</h2>
        <p>2022</p>
      </div>
    </div>
  );
};

export default GameInfo;
