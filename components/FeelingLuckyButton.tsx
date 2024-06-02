import React from "react";
import { HiOutlineCursorClick } from "react-icons/hi";

const FeelingLuckyButton = () => {
  return (
    <div className="md:absolute  md:top-[-200px] md:left-[-200px] lg:top-[-250px] lg:left-[-250px]">
      <div className="xxxx w-full max-md:h-[75px] bg-main-black rounded-b-full text-white content-center text-center relative  md:z-10 md:w-[400px] lg:w-[500px] md:aspect-square md:rounded-full overflow-clip">
        <button className=" cursor-pointer w-[calc(100%-12px)] text-white flex items-center  justify-center  max-md:h-[calc(100%-8px)] rounded-b-full md:aspect-square  md:rounded-full   absolute left-[6px] top-0 md:top-[6px] md:left-[5px] md:grid md:grid-cols-2 md:grid-rows-2  bg-main-black ">
          <div className="col-start-2 row-start-2 md:space-y-2 md:mt-[-30px] md:ml-[-30px] md:-rotate-45 ">
            <HiOutlineCursorClick className="h-8 w-8 rotate-[250deg] mx-auto max-md:hidden" />
            <p className=" text-2xl sm:text-[26px] lg:text-3xl text-white">
              Feelin' Lucky?
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FeelingLuckyButton;
