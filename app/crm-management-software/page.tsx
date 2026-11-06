import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TravelHero, LatestStories, TrekkerHighlights } from "../components/devops-solutions/travel-intro";
import { JourneySimplified, LovedPlaces, TravelerTestimonials, TravelerExperiences } from "../components/crm-management-software/travel-crm";

export const metadata: Metadata = {
  title: "CRM & Management Software | Capyngen",
  description: "Explore a travel-inspired CRM experience with stories, booking journeys, destinations, and testimonials.",
};

export default function CrmManagementSoftwarePage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <TravelHero label="Capyngen / CRM & Management Software" />
      <LatestStories />
      <TrekkerHighlights />
      <JourneySimplified />
      <LovedPlaces />
      <TravelerTestimonials />
      <TravelerExperiences />
    </main>
    <Footer />
  </>;
}
