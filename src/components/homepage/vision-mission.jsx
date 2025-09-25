"use client";

import Image from "next/image";
import { HeaderSection } from "../header-section";

const sections = [
  {
    title: "MAIN GARDEN",
    size: "42 m2",
    image: "https://jp-nusantara.com/wp-content/uploads/company01.jpg",
  },
  {
    title: "STAIRCASE",
    size: "14 m2",
    image: "/images/vision/staircase.jpg",
  },
];

export const mission = [
  {
    id: 1,
    indo: "Menyediakan produk pertanian, perkebunan, dan perikanan berkualitas tinggi.",
    jp: "高品質な農業、農園業、漁業製品を提供すること。",
  },
  {
    id: 2,
    indo: "Meningkatkan kapasitas SDM melalui pelatihan dan pendampingan berstandar internasional dan meningkatkan kesejahteraan sumber daya manusia.",
    jp: "国際基準のトレーニングと支援を通じて人材の能力を向上させ、人材の福祉を高めること。",
  },
  {
    id: 3,
    indo: "Menerapkan teknologi agrikultur modern yang efisien dan ramah lingkungan.",
    jp: "効率的かつ環境に優しい現代農業技術を導入すること。",
  },
  {
    id: 4,
    indo: "Memberdayakan komunitas lokal untuk membangun ekonomi agrikultur yang mandiri.",
    jp: "自立した農業経済の構築に向けて地域コミュニティを活性化すること。",
  },
  {
    id: 5,
    indo: "Menjalin kemitraan strategis dengan institusi nasional dan internasional, khususnya dari Jepang.",
    jp: "特に日本を含む国内外の機関と戦略的パートナーシップを築くこと。",
  },
];

export const VisionMission = () => {
  return (
    <section className="margin mt-20 py-15 flex flex-col gap-15 ">
      <HeaderSection
        badge="会社概要"
        badgeColor="border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
        title1="Visi & Misi"
        title2="PT. Bifudo Warna Nusantara"
      />

      <div className="grid grid-cols-2">
        <div></div>
        <div className="space-y-5">
          <Image
            width={700}
            height={700}
            src="https://jp-nusantara.com/wp-content/uploads/company01.jpg"
            alt="vision-banner"
          />
          <p className="text-4xl font-bold">VISI</p>
          <p className="text-2xl font-normal">
            Menjadi pionir dalam agribisnis berkelanjutan yang berbasis
            teknologi, pendidikan, dan produk alami berkualitas global.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="space-y-5">
          <Image
            width={700}
            height={700}
            src="https://jp-nusantara.com/wp-content/uploads/arjuna01.jpg"
            alt="mission-banner"
          />
          <p className="text-4xl font-bold">MISI</p>
          <div>
            {mission.map((e) => (
              <div key={`misi-${e.id}`} className="flex items-center gap-3 text-xl font-normal" >
                <span>{e.id}.</span>
                <span>{e.indo}</span>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>

      {/* CTA
      <div className="mt-12 flex justify-end">
        <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
          View Project
        </button>
      </div> */}
    </section>
  );
};
