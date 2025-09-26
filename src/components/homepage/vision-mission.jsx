"use client";

import { HeaderSection } from "../header-section";
import { Leaf, Users, Cpu, Building2, Handshake, CheckCircle } from "lucide-react";

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
  const icons = [Leaf, Users, Cpu, Building2, Handshake];

  return (
    <section id="vision-&-mission" className="md:mb-0 mb-24 px-5 space-y-16">
      {/* VISION */}
      <div className="relative w-full h-[80vh] min-h-[400px] overflow-hidden rounded-third">
        {/* Background Image */}
        <img
          className="absolute inset-0 h-full w-full object-cover object-center bg-secondaryColor"
          src="https://plus.unsplash.com/premium_photo-1677849935697-94cea04f344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="vision-banner"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content di pojok kiri bawah */}
        <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-10 font-poppins sm:text-left text-center">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <h1 className="text-[60px] sm:text-[120px] md:text-[200px] lg:text-[250px] font-semibold text-white drop-shadow-lg">
              VISION
            </h1>
            <p className="text-white text-sm sm:text-lg lg:text-xl sm:leading-relaxed bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-4 sm:p-6">
              Menjadi pionir dalam agribisnis berkelanjutan yang berbasis
              teknologi, pendidikan, dan produk alami berkualitas global.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="text-center mb-12 margin font-poppins">
        <h1 className="text-[60px] sm:text-[120px] font-semibold text-main-2 drop-shadow-lg">
          MISSION
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
          Visi kami diwujudkan melalui misi nyata yang berfokus pada
          keberlanjutan, teknologi, dan pemberdayaan masyarakat.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 margin">
        {mission.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-darkColor shadow-md rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-start">
                <Icon className="w-10 h-10 text-main-2" />
              </div>

              {/* Indo */}
              <h3 className="text-base sm:text-lg font-semibold text-darkColor dark:text-white">
                {item.indo}
              </h3>

              {/* JP */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.jp}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
