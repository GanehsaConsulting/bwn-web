import React from "react";
import { ArticleCard } from "./article-card";
import { HeaderSection } from "../header-section";
import Image from "next/image";

export const ArticleRecommend = () => {
  return (
    <section className=" margin py-20">
      <div className="relative overflow-hidden bg-dark-color flex items-center justify-between px-10 py-13 rounded-third gap-7 h-[500]">
        <Image
          src="https://i.pinimg.com/736x/42/f4/0e/42f40e7939ab815bd5f83f20b533b9d4.jpg"
          alt="bg-cta"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-15">
          <HeaderSection
            badge="おすすめ記事"
            badgeColor="border-main-2 bg-main-2/20 drop-shadow-blur text-white dark:border-main-1 dark:bg-main-1/20 backdrop-blur-md shadow-md"
            title1="Recommend"
            title2="Article"
            titleStyle="text-white"
          />
          <div className="flex items-center gap-4">
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </section>
  );
};
