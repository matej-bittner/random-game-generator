"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Genre, SingleGame } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
const GameCardMobile = ({
  data,
  matchingGenres,
}: {
  data: SingleGame | undefined;
  matchingGenres: Genre[] | undefined;
}) => {
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
      <AnimatePresence>
        {openInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 100,
              transition: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
            className={`w-full  h-full px-4 pt-2 flex gap-1 flex-col items-center bg-white/80`}
          >
            <h2 className="font-semibold text-lg text-center">
              {data?.name || "Uncharted: Legacy of Thieves Collection"}
              <span className="drop-shadow-md text-sm pl-1">
                ({data?.releaseYear || "2022 "})
              </span>
            </h2>
            <p className="self-center text-center max-w-[90%] mx-auto text-sm font-medium">
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
            <p className="text-left overflow-auto mb-20 text-sm">
              {data?.summary ||
                data?.storyline ||
                "Uncharted: Legacy of Thieves Collection is a remastered collection of two games in the Uncharted saga: Uncharted 4: A Thief’s End and Uncharted: The Lost Legacy. This includes multiple graphical options with varying framerates and resolutions, faster load times and DualSense haptic feedback and adaptive triggers."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameCardMobile;
