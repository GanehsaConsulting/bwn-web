import React from "react";
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
    titleJPN: "日本との排他的な連携",
    descJPN:
      "先進的な農業・園芸技術と、著名な日本人専門家との共同研修によって支えられています。",
  },
  {
    id: 2,
    titleIDN: "Fokus pada Pendidikan & SDM Lokal",
    descIDN:
      "Membentuk tenaga kerja agrikultur yang modern, kompeten, dan bersertifikasi internasional.",
    titleJPN: "教育と地域人材に注力",
    descJPN: "国際認証を持つ、現代的で有能な農業人材を育成します。",
  },
  {
    id: 3,
    titleIDN: "Produk Alami Tanpa Pestisida",
    descIDN:
      "Menghasilkan produk yang aman dikonsumsi, sehat, dan mendukung gaya hidup berkelanjutan.",
    titleJPN: "無農薬の自然由来製品",
    descJPN:
      "安心して摂取できる健康的な製品を提供し、持続可能なライフスタイルを支援します。",
  },
  {
    id: 4,
    titleIDN: "Teknologi Modern",
    descIDN:
      "Menggunakan inovasi seperti smart farming, mesin-mesin modern, sensor pertumbuhan, dan manajemen berbasis data.",
    titleJPN: "最新技術の活用",
    descJPN:
      "スマート農業、最新の機械、成長センサー、データに基づく管理などの革新技術を導入しています。",
  },
  {
    id: 5,
    titleIDN: "Ramah Lingkungan & Berkelanjutan",
    descIDN:
      "Semua proses kami dirancang untuk menjaga ekosistem dan mengurangi dampak lingkungan.",
    titleJPN: "環境に優しく持続可能",
    descJPN:
      "すべてのプロセスは生態系を保護し、環境への影響を最小限に抑えるよう設計されています。",
  },
  {
    id: 6,
    titleIDN: "Pemberdayaan Komunitas Lokal",
    descIDN:
      "Melibatkan dan meningkatkan kesejahteraan petani, pekebun, dan nelayan melalui pelatihan dan kemitraan.",
    titleJPN: "地域コミュニティのエンパワーメント",
    descJPN:
      "研修やパートナーシップを通じて、農家・園芸家・漁師の福祉を向上させ、積極的に関与しています。",
  },
  {
    id: 7,
    titleIDN: "Kualitas Ekspor Berstandar Dunia",
    descIDN: "Produk kami memenuhi persyaratan mutu untuk pasar internasional.",
    titleJPN: "世界基準の輸出品質",
    descJPN: "当社の製品は、国際市場の品質基準を満たしています。",
  },
  {
    id: 8,
    titleIDN: "Pendekatan Terintegrasi",
    descIDN:
      "Menggabungkan tiga sektor — pertanian, perkebunan, dan perikanan — dalam satu ekosistem bisnis yang saling menguatkan.",
    titleJPN: "統合アプローチ",
    descJPN:
      "農業、園芸、漁業という3つのセクターを融合し、互いに補完し合うビジネスエコシステムを構築しています。",
  },
];

export const CompanyStrengths = () => {
  return (
    <section className="my-20 margin">
      <div className="mb-10">
        <HeaderSection
          badge="会社の強み"
          badgeColor="border-main-2 bg-main-2/20 dark:border-main-1 dark:bg-main-1/20"
          title1="COMPANY STRENGTHS"
        />
      </div>

      <div className="grid grid-cols-2 bg-sec-light dark:bg-sec-dark rounded-third">
        <Accordion
          type="single"
          collapsible
          className="w-full p-5"
          defaultValue="item-1"
        >
          {companyStrengths.map((e) => (
            <AccordionItem value={`item-${e.id}`}>
              <AccordionTrigger>{e.titleIDN}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{e.descIDN}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex h-full w-full justify-center items-center overflow-hidden relative rounded-r-third">
          <Image
            src="https://plus.unsplash.com/premium_photo-1680553491336-644d5955ea50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="strength-image"
            className="object-cover"
            priority
            fill
          />
        </div>
      </div>
    </section>
  );
};
