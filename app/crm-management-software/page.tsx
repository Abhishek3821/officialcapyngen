import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CrmHero, CrmProcess, CrmAi } from "../components/crm-management-software/crm-intro";
import { JourneySimplified, LovedPlaces, TravelerTestimonials, TravelerExperiences, CrmFaq } from "../components/crm-management-software/travel-crm";

export const metadata: Metadata = {
  title: "CRM & Management Software Provider | Capyngen",
  description: "Keep in touch with your customers, increase sales and make your customers come back using the most innovative CRM & management software by Capyngen.",
};

export default function CrmManagementSoftwarePage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <CrmHero />
      <CrmProcess />
      <CrmAi />
      <JourneySimplified />
      <LovedPlaces />
      <TravelerTestimonials />
      <TravelerExperiences />
      <CrmFaq />
    </main>
    <Footer />
  </>;
}
