import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BankingHero from "../components/banking/hero";
import BankingSolutions from "../components/banking/solutions";
import BankingExperienceCollage from "../components/banking/experience-collage";
import BankingConsideredExperiences from "../components/banking/considered-experiences";
import styles from "./page.module.css";
import BankingCreativeProjects from "../components/banking/creative-projects";
import BankingInteriorPavilion from "../components/banking/interior-pavilion";
import BankingClientVoices from "../components/banking/client-voices";
import BankingVillaPlans from "../components/banking/villa-plans";

export const metadata: Metadata = {
  title: "Banking | Capyngen",
  description: "Thoughtful digital experiences for modern banking. Explore Capyngen's banking design, platform development and connected customer journeys.",
};

export default function BankingPage() {
  return <><div className={styles.page}><Navbar /><main id="main-content" tabIndex={-1} className="outline-none"><BankingHero /><BankingExperienceCollage /><BankingConsideredExperiences /><BankingCreativeProjects /><BankingInteriorPavilion /><BankingClientVoices /><BankingVillaPlans /><BankingSolutions /></main></div><Footer /></>;
}
