"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <section className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl md:text-4xl">This site do not exist</h1>
      <button
        onClick={handleClick}
        className="border-2 border-black px-2 py-1 hover:bg-black/5 transition md:text-lg"
      >
        Back To Main Site
      </button>
    </section>
  );
};

export default NotFound;
