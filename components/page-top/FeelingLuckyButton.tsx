import React from "react";
import { HiOutlineCursorClick } from "react-icons/hi";

const FeelingLuckyButton = ({
  getRandomGame,
  isPending,
}: {
  getRandomGame: () => void;
  isPending?: boolean;
}) => {
  return (
    <div className="absolute top-0 max-md:w-screen  md:top-[-195px] md:left-[-195px] lg:top-[-250px] lg:left-[-250px] max-sm:min-w-[330px] ">
      <button
        disabled={isPending}
        onClick={getRandomGame}
        className="bg-gradient-to-br from-main-red via-45% via-main-red to-main-red-dark   z-30 cursor-pointer w-[calc(100%-12px)] text-white flex items-center  justify-center  max-md:h-[calc(100%-8px)] rounded-b-full md:aspect-square  md:rounded-full   absolute left-[6px] top-0 md:top-[6px] md:left-[5px] md:grid md:grid-cols-2 md:grid-rows-2 "
      >
        <div className="col-start-2 row-start-2 md:space-y-2 md:mt-[-30px] md:ml-[-30px] md:-rotate-45 ">
          <HiOutlineCursorClick className="h-8 w-8 rotate-[250deg] mx-auto max-md:hidden" />
          <p className=" text-2xl sm:text-[26px] lg:text-3xl text-white">
            Feelin&apos; Lucky?
          </p>
        </div>
      </button>
      <div className="animated-border z-[0] w-full max-md:h-[75px] bg-gradient-to-br from-main-red via-45% via-main-red to-main-red-dark rounded-b-full text-white content-center text-center relative  md:z-10 md:w-[390px] lg:w-[500px] md:aspect-square md:rounded-full overflow-clip"></div>
    </div>
  );
};

export default FeelingLuckyButton;
