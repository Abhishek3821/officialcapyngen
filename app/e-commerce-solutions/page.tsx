import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MedicalHero, MedicalAbout, MedicalMission, MedicalVision, MedicalWhatWeDo, MedicalConnections, MedicalCampaigns, MedicalImpact, EcommerceFaq } from "../components/e-commerce-solutions/medical-presentation";

export const metadata: Metadata = {
  title: "Best Ecommerce Solutions Company in India | Capyngen",
  description: "Stores That Convert, Not Just Load. Sharp strategy. Tangible revenue. International Ecommerce Software Development by Capyngen.",
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
      <EcommerceFaq />
    </main>
    <Footer />
  </>;
}
