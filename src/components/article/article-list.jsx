import React from "react";
import { ArticleCard } from "./article-card";

export const ArticleList = () => {
  return (
    <section className="margin">
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-5
          sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-7 sm:px-0
        "
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="shrink-0 min-w-[85%] snap-start sm:min-w-0"
          >
            <ArticleCard />
          </div>
        ))}
      </div>
    </section>
  );
};
