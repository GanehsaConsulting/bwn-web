import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";

export const AboutUs = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-8 margin py-10 md:py-16 min-h-screen">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-sm sm:text-lg md:text-xl rounded-full px-3 sm:px-4 md:px-5 py-1 md:py-2 w-fit border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
        >
          会社概要
        </Badge>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
          About PT. Bifudo Warna Nusantara
        </h1>
      </div>

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
      <div className="grid lg:grid-cols-3 gap-10">
        <p className=" text-sm sm:text-xl font-semibold dark:font-normal text-main">
          PT. Bifudo Warna Nusantara adalah perusahaan yang bergerak di bidang
          pertanian, perkebunan, dan perikanan, yang menggabungkan inovasi
          teknologi Jepang, praktik agrikultur alami, dan pengembangan sumber
          daya manusia sebagai landasan utama dalam membangun ekosistem
          agribisnis yang berkelanjutan dan berstandar internasional.
        </p>
        <div className="lg:col-span-2 flex flex-col justify-center p-7 gap-5 bg-main-3/90 dark:bg-main-2/50 rounded-third" >
          <p className=" text-sm sm:text-xl font-normal text-white">
            Kami percaya bahwa pertanian masa depan bukan hanya tentang hasil
            panen, tetapi tentang bagaimana kita merawat alam, memberdayakan
            manusia, dan membangun solusi yang bertahan dalam jangka panjang.
            Karena itu, seluruh proses bisnis kami dirancang untuk menciptakan
            nilai tambah dari hulu ke hilir — dari edukasi, budidaya, hingga
            produk siap ekspor.
          </p>
          <Button variant={"secondary"} className={"w-fit rounded-full"} >Lihat Selengkapnya</Button>
        </div>
      </div>
    </section>
  );
};
