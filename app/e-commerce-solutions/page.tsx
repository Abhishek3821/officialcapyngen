import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MedicalHero, MedicalAbout, MedicalMission, MedicalVision, MedicalWhatWeDo, MedicalConnections, MedicalCampaigns, MedicalImpact } from "../components/e-commerce-solutions/medical-presentation";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Capyngen",
  description: "Explore a healthcare-focused digital presentation by Capyngen.",
};

export default function ECommerceSolutionsPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <MedicalHero />
      <MedicalAbout />
      <MedicalMission />
      <MedicalVision />
      <MedicalWhatWeDo />
      <MedicalConnections />
      <MedicalCampaigns />
      <MedicalImpact />
    </main>
    <Footer />
  </>;
}
