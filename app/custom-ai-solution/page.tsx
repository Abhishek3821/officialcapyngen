import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AiHero, AiAbout, AiContents } from "../components/custom-ai/intro";
import { AiApproach, AiServices, AiResults } from "../components/custom-ai/services";
import { AiGrowthChart, AiProcessCase, AiCommerceCase } from "../components/custom-ai/cases";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom AI Solution | Capyngen",
  description: "Explore Capyngen's custom AI approach, services, and illustrative business use cases.",
};

export default function CustomAiSolutionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={`${styles.page} min-w-0 max-w-full outline-none`}>
        <AiHero />
        <AiAbout />
        <AiContents />
        <AiApproach />
        <AiServices />
        <AiResults />
        <AiGrowthChart />
        <AiProcessCase />
        <AiCommerceCase />
      </main>
      <Footer />
    </>
  );
}
