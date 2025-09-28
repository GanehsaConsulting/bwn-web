import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const CTA = () => {
  return (
    <section className="flex justify-center items-center margin">
      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-third">
        {/* Background Image full mengikuti container */}
        <Image
          src="https://i.pinimg.com/736x/ec/95/b8/ec95b8b285419ddac902430604a3e5ee.jpg"
          alt="bg-cta"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center text-center  px-6 bg-black/40">
          <h1 className="text-white  font-poppins font-semibold text-2xl md:text-4xl">
            Lorem Ipsum dolor sit amet
          </h1>
          <p className="max-w-2xl mt-4 text-sm md:text-base text-white/70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            quasi fugit? Nihil nobis maxime beatae sapiente asperiores odio
            nostrum explicabo!
          </p>
          <Button variant="secondary" className={"mt-6"} >Get in touch</Button>
        </div>
      </div>
    </section>
  );
};
