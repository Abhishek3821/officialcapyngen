import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AiHero, AiAbout, AiContents } from "../components/custom-ai/intro";
import { AiReimagined, AiServices, AiResults } from "../components/custom-ai/services";
import { AiGrowthChart, AiProcessCase, AiCommerceCase } from "../components/custom-ai/cases";
import { AiFaq } from "../components/custom-ai/faq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom AI Solutions That Transform Business | Capyngen",
  description: "The top custom AI solution company in India focuses on your operational pain point as our first step, then creates the minimum viable platform that demonstrates value, and then expands from there.",
};

export default function CustomAiSolutionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={`${styles.page} min-w-0 max-w-full outline-none`}>
        <AiHero />
        <AiAbout />
        <AiContents />
        <AiReimagined />
        <AiServices />
        <AiResults />
        {/* Wrapped so these taller sections can grow beyond the fixed one-screen height in page.module.css. */}
        <div><AiGrowthChart /></div>
        <AiProcessCase />
        <AiCommerceCase />
        <div><AiFaq /></div>
      </main>
      <Footer />
    </>
  );
}
