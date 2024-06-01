import React from "react";
import { HiOutlineCursorClick } from "react-icons/hi";

const FeelingLuckyButton = () => {
  return (
    <div className="md:absolute  md:translate-x-[-50%] md:translate-y-[-50%]">
      <div className="xxxx w-full max-md:h-[75px] bg-main-black rounded-b-full text-white content-center text-center relative  md:z-10 md:w-[400px] lg:w-[500px] md:aspect-square md:rounded-full overflow-clip">
        <div className=" w-[calc(100%-12px)] text-white flex items-center  justify-center  max-md:h-[calc(100%-8px)] rounded-b-full md:aspect-square  md:rounded-full   absolute left-[6px] top-0 md:top-[6px] md:left-[5px] md:grid md:grid-cols-2 md:grid-rows-2  bg-main-black ">
          <button className="col-start-2 row-start-2  md:-rotate-45 cursor-pointer  md:space-y-2 md:mt-[-30px] md:ml-[-30px]">
            <HiOutlineCursorClick className="h-8 w-8 rotate-[250deg] mx-auto max-md:hidden" />
            <p className=" text-2xl sm:text-[26px] lg:text-3xl text-white ">
              Feelin' Lucky?
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeelingLuckyButton;
