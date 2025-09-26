"use client";

import { HeaderSection } from "../header-section";
import {
  Leaf,
  Users,
  Cpu,
  Building2,
  Handshake,
  CheckCircle,
} from "lucide-react";
import { IoLeaf } from "react-icons/io5";
import { PiBrainBold } from "react-icons/pi";
import { MdPeople } from "react-icons/md";
import { FaHandshake, FaAngleDoubleUp } from "react-icons/fa";

export const mission = [
  {
    id: 1,
    icon: <IoLeaf />,
    image:
      "https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    indo: "Menyediakan produk pertanian, perkebunan, dan perikanan berkualitas tinggi.",
    jp: "高品質な農業、農園業、漁業製品を提供すること。",
  },
  {
    id: 2,
    icon: <FaAngleDoubleUp />,
    image:
      "https://plus.unsplash.com/premium_photo-1661376745450-08db5346075b?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    indo: "Meningkatkan kapasitas SDM melalui pelatihan dan pendampingan berstandar internasional dan meningkatkan kesejahteraan sumber daya manusia.",
    jp: "国際基準のトレーニングと支援を通じて人材の能力を向上させ、人材の福祉を高めること。",
  },
  {
    id: 3,
    icon: <PiBrainBold />,
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    indo: "Menerapkan teknologi agrikultur modern yang efisien dan ramah lingkungan.",
    jp: "効率的かつ環境に優しい現代農業技術を導入すること。",
  },
  {
    id: 4,
    icon: <MdPeople />,
    image:
      "https://images.unsplash.com/photo-1726245220310-9d2daeb9d0f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    indo: "Memberdayakan komunitas lokal untuk membangun ekonomi agrikultur yang mandiri.",
    jp: "自立した農業経済の構築に向けて地域コミュニティを活性化すること。",
  },
  {
    id: 5,
    icon: <FaHandshake />,
    image: "https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg",
    indo: "Menjalin kemitraan strategis dengan institusi nasional dan internasional, khususnya dari Jepang.",
    jp: "特に日本を含む国内外の機関と戦略的パートナーシップを築くこと。",
  },
];

export const VisionMission = () => {
  const icons = [Leaf, Users, Cpu, Building2, Handshake];

  return (
    <section
      id="vision-&-mission"
      className="md:mb-0 mb-24 flex flex-col gap-10"
    >
      {/* VISION */}
      <div className="px-5" >
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
      </div>

      {/* MISSION */}
      <div >
        <div className="header-margin text-start mb-5 font-poppins">
          <HeaderSection
            badge="ミッション"
            badgeColor="border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
            title1="OUR MISSION"
          />
        </div>

        <div className="carousel w-full gap-5 py-5 font-poppins">
          {mission.map((el, idx) => (
            <div
              key={idx}
              className={`min-w-[85lvw] md:min-w-[25lvw] h-[70lvh] rounded-third overflow-hidden relative group
                                ${idx === 0 ? "ml-5 md:ml-24 2xl:ml-80" : ""} ${
                idx === mission.length - 1 ? "mr-5 md:mr-24 2xl:mr-80" : ""
              }
                                `}
            >
              <img
                className="w-full h-full object-cover  rounded-third"
                src={el.image}
                alt={el.indo}
              />
              <div className="gradient-blur h-[50%] duration-300 ease-in-out bg-gradient-to-t from-dark-color to-transparent absolute "></div>
              <div className="absolute top-5 left-5 text-2xl bg-main-2/80 backdrop-blur-md p-3 rounded-third">
                <div className="text-white">{el.icon}</div>
              </div>
              <div className="absolute z-[50] bottom-5 left-5 right-5 text-white ">
                <div className="md:translate-y-[50%] group-hover:translate-y-0 duration-200 delay-75">
                  <div className="text-base font-medium tracking-wide brightness-200 opacity-80">
                    {el.indo}
                  </div>
                  <h1 className="font-bold text-2xl">{el.label}</h1>
                  <h2 className="text-sm opacity-60">{el.desc}</h2>
                </div>
                <div
                  tabIndex={0}
                  className="duration-300 ease-in-out md:translate-y-[200%] group-hover:translate-y-0 group-focus:translate-y-0 delay-100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
