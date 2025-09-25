import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { HeaderSection } from "../header-section";

export const AboutUs = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-8 margin py-10 md:py-16 min-h-screen ">
      <HeaderSection
        badge="会社概要"
        badgeColor="border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
        title1="About PT. Bifudo"
        title2="Warna Nusantara"
      />

      <div className="flex-1 w-full">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-sm">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background image"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <p className=" text-sm font-poppins sm:text-3xl font-semibold dark:font-normal text-main">
          PT. BWN berfokus pada agribisnis berkelanjutan melalui teknologi
          Jepang, agrikultur alami, dan pengembangan SDM.
        </p>
        <div className=" flex flex-col justify-center gap-3 ">
          <p className=" text-sm font-normal ">
            PT. Bifudo Warna Nusantara adalah perusahaan yang bergerak di bidang
            pertanian, perkebunan, dan perikanan, yang menggabungkan inovasi
            teknologi Jepang, praktik agrikultur alami, dan pengembangan sumber
            daya manusia sebagai landasan utama dalam membangun ekosistem
            agribisnis yang berkelanjutan dan berstandar internasional.
          </p>
          {/* <p className=" text-sm sm:text-xl font-normal text-white">
            Kami percaya bahwa pertanian masa depan bukan hanya tentang hasil
            panen, tetapi tentang bagaimana kita merawat alam, memberdayakan
            manusia, dan membangun solusi yang bertahan dalam jangka panjang.
            Karena itu, seluruh proses bisnis kami dirancang untuk menciptakan
            nilai tambah dari hulu ke hilir — dari edukasi, budidaya, hingga
            produk siap ekspor.
          </p> */}
          <Button className={"w-fit rounded-full text-sm"}>
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
};
