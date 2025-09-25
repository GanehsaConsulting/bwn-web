"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1632703272101-bdd8ae6fd091?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581572947563-9a2853401810?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1683476383052-150b12031d17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const ComingSoon = () => {
  const [index, setIndex] = useState(0);

  // Auto ganti gambar tiap 6 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden font-mona">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={images[index]}
                alt="Background image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between p-6 md:p-16 lg:p-20">
          {/* Heading & Description */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Coming Soon
            </h1>

            {/* Wrapper Liquid Glass hanya di mobile */}
            <div className="mt-6 rounded-xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 sm:bg-none backdrop-blur-md bg-white/10 md:bg-transparent md:backdrop-blur-0 p-4 rounded-2xl">
                <p className="text-base text-justify text-white/90">
                  PT. Bifudo Warna Nusantara adalah perusahaan yang bergerak di
                  bidang pertanian, perkebunan, dan perikanan, yang
                  menggabungkan inovasi teknologi Jepang, praktik agrikultur
                  alami, dan pengembangan sumber daya manusia sebagai landasan
                  utama dalam membangun ekosistem agribisnis yang berkelanjutan
                  dan berstandar internasional.
                </p>

                <p className="text-base text-justify text-white/90">
                  PT. Bifudo Warna
                  Nusantara（ビフド・ワルナ・ヌサンタラ社）は、農業、農園業、漁業の分野で活動する企業であり、日本の技術革新、自然農法の実践、人材育成を融合させた、国際基準に対応した持続可能なアグリビジネス・エコシステムの構築を目指しています。
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center max-w-5xl">
            <img
              src="/logo-typography.png"
              alt="logo-pt"
              className="h-10 sm:h-14 object-contain grayscale brightness-90000"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
