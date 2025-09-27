"use client";

import React, { useState } from "react";
import { HeaderSection } from "../header-section";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const companyStrengths = [
  {
    id: 1,
    titleIDN: "Kolaborasi Eksklusif dengan Jepang",
    descIDN:
      "Didukung oleh teknologi pertanian dan perkebunan modern, serta pelatihan bersama spesialis Jepang ternama.",
    image:
      "https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    titleIDN: "Fokus pada Pendidikan & SDM Lokal",
    descIDN:
      "Membentuk tenaga kerja agrikultur yang modern, kompeten, dan bersertifikasi internasional.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    titleIDN: "Produk Alami Tanpa Pestisida",
    descIDN:
      "Menghasilkan produk yang aman dikonsumsi, sehat, dan mendukung gaya hidup berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1708329376074-aee3c5931115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    titleIDN: "Teknologi Modern",
    descIDN:
      "Menggunakan inovasi seperti smart farming, mesin-mesin modern, sensor pertumbuhan, dan manajemen berbasis data.",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 5,
    titleIDN: "Ramah Lingkungan & Berkelanjutan",
    descIDN:
      "Semua proses kami dirancang untuk menjaga ekosistem dan mengurangi dampak lingkungan.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 6,
    titleIDN: "Pemberdayaan Komunitas Lokal",
    descIDN:
      "Melibatkan dan meningkatkan kesejahteraan petani, pekebun, dan nelayan melalui pelatihan dan kemitraan.",
    image:
      "https://images.unsplash.com/photo-1585545335894-05922f25129d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    titleIDN: "Kualitas Ekspor Berstandar Dunia",
    descIDN: "Produk kami memenuhi persyaratan mutu untuk pasar internasional.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 8,
    titleIDN: "Pendekatan Terintegrasi",
    descIDN:
      "Menggabungkan tiga sektor — pertanian, perkebunan, dan perikanan — dalam satu ekosistem bisnis yang saling menguatkan.",
    image:
      "https://images.unsplash.com/photo-1504718855392-c0f33b0d1807?q=80&w=870&auto=format&fit=crop",
  },
];

export const CompanyStrengths = () => {
  const [activeImage, setActiveImage] = useState(companyStrengths[0].image);
  const [fadeKey, setFadeKey] = useState(0);

  const handleImageChange = (img) => {
    setFadeKey((prev) => prev + 1);
    setActiveImage(img);
  };

  return (
    <section className="my-20 margin">
      <div className="mb-10 md:mb-15">
        <HeaderSection
          badge="会社の強み"
          badgeColor="border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
          title1="Company Strengths"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-sec-light dark:bg-sec-dark rounded-third overflow-hidden">
        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full p-6 sm:p-8 md:p-10"
          defaultValue="item-1"
        >
          {companyStrengths.map((e) => (
            <AccordionItem key={e.id} value={`item-${e.id}`}>
              <AccordionTrigger onClick={() => handleImageChange(e.image)}>
                {e.titleIDN}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance text-sm sm:text-base">
                <p>{e.descIDN}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Image */}
        <div className="relative h-64 sm:h-80 md:h-auto w-full flex justify-center items-center">
          <Image
            key={fadeKey}
            src={activeImage}
            alt="strength-image"
            className="object-cover transition-opacity duration-700 opacity-0 animate-fadeIn"
            priority
            fill
          />
        </div>
      </div>
    </section>
  );
};