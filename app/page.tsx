import React from "react";
import TopComponent from "@/components/page-top/TopComponent";
import { AccordionInfo } from "@/components/page-bottom/AccordionInfo";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="bg-main-white h-full min-h-screen w-full ">
      <header className="flex flex-col gap-3 max-md:pt-[90px] sm:gap-4 text-center justify-center px-6 md:pt-10 xl:pt-12 md:gap-5 ">
        <h1 className="font-bold drop-shadow-md text-3xl sm:text-4xl md:text-[41px] lg:text-5xl">
          GamesToPlayWhen
          <span className="text-lg">
            <br className="min-[370px]:hidden" />
            .com
          </span>
        </h1>
        <p className="font-medium drop-shadow-md leading-tight sm:text-lg md:text-xl">
          If you are bored and want to play some
          <br className="max-md:hidden xl:hidden" /> game you are in the right
          place
        </p>
      </header>
      <div className="flex max-2xl:flex-col gap-4 pt-8 2xl:w-fit mx-auto">
        <TopComponent />
        <Separator className="w-[98%] mx-auto 2xl:hidden" />
        <div className="w-full flex flex-col max-w-[900px] mx-auto 2xl:max-w-[600px] 2xl:w-[400px] 2xl:pt-[160px]">
          <h2 className="text-center font-medium drop-shadow-md leading-tight text-xl md:text-2xl">
            About Project
          </h2>
          <AccordionInfo />
        </div>
      </div>
    </div>
  );
};

export default Page;
