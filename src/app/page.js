import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { AboutUs } from "@/components/homepage/about-us";
import { CompanyStrengths } from "@/components/homepage/company-strengths";
import { HomeBanner } from "@/components/homepage/home-banner";
import { VisionMission } from "@/components/homepage/vision-mission";

export default function Home() {
  return (
    <main>
      <HomeBanner/>
      <AboutUs/>
      <VisionMission/>
      <CompanyStrengths/>
      <CTA/>
      <Footer/>
    </main>
  );
}
