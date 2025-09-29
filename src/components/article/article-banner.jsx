import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const ArticleBanner = () => {
  return (
    <section className="pt-20 pb-13 margin">
      <div className=" relative w-full h-[70svh] min-h-[400px] overflow-hidden rounded-third">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center bg-secondaryColor"
          src="https://images.unsplash.com/photo-1686888730451-0365cabd6779?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="vision-banner"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-color to-transparent" ></div>

        {/* text */}
        <div className="space-y-3 font-poppins absolute bottom-0 p-10">
            <Badge className={"bg-main-2/30 border-main-2 text-white text-base backdrop-blur-2xl"} variant={"outline"} >Nature</Badge>
          <h1 className="text-4xl sm:text-[60px] font-bold text-white">Lorem ipsum dolor sit amet.</h1>
          <p className="text-lg line-clamp-2 text-white/70" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae temporibus blanditiis debitis perferendis doloribus amet deserunt dolores ullam velit non iusto quasi, saepe hic, sequi odio, doloremque cupiditate odit pariatur.</p>
          <Link href={"/"}  >
            <Button className="mt-5 rounded-full" variant={"secondary"} >Lihat Selengkapnya..</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
