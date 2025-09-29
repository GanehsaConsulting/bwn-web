import React from "react";
import { ArticleCard } from "./article-card";
import { HeaderSection } from "../header-section";
import Image from "next/image";

export const ArticleRecommend = () => {
  return (
    <section className="py-20 margin">
      <div className="relative overflow-hidden bg-dark-color h-[650px] sm:h-fit  flex items-center rounded-third">
        {/* Background */}
        <Image
          src="https://i.pinimg.com/736x/42/f4/0e/42f40e7939ab815bd5f83f20b533b9d4.jpg"
          alt="bg-cta"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10  w-full ">
          <div className="gradient-blur-to-r absolute left-0 top-0 w-[100vh] h-full z-30"></div>
          {/* Header */}
          <div className="absolute z-50 flex justify-center items-center h-full   top-0 rounded-l-main p-12">
            <HeaderSection
              badge="おすすめ記事"
              badgeColor="border-main-2 bg-main-2/20 drop-shadow-blur text-white dark:border-main-1 dark:bg-main-1/20 backdrop-blur-md shadow-md"
              title1="Recommend"
              title2="Article"
              titleStyle="text-white"
            />
          </div>

          {/* Cards */}
          <div className="carousel gap-4 w-full ps-130 sm:px-12 py-10">
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
            <ArticleCard type="recommend" />
          </div>
        </div>
      </div>
    </section>
  );
};
