import React from "react";
import { Badge } from "../ui/badge";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const ArticleCard = () => {
  return (
    <div className="bg-black h-[350px] min-w-65 max-w-65 rounded-third font-poppins relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="article-card-image"
        fill
        className="object-cover"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-color to-transparent" />

      {/* Content di atas image */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className="px-2 py-1 rounded-full font-semibold text-base"
          >
            Category
          </Badge>
          <Link href={"/"} className="bg-white dark:text-dark-color rounded-full p-2">
            <MdArrowOutward className="text-xl font-semibold" />
          </Link>
        </div>
        <div>
          <h1 className="font-semibold text-white text-xl md:text-2xl">
            Judul Artikel
          </h1>
          <p className="text-white/70 line-clamp-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime nobis consequuntur id soluta dolores, optio deserunt natus nulla in nesciunt quas, laborum placeat mollitia dolore tempore earum eaque ipsum?</p>
        </div>
      </div>
    </div>
  );
};
