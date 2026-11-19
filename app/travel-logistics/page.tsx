import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import TravelLogisticsExperience from "../components/industries/travel-logistics";

export const metadata: Metadata = {
  title: "Smart Travel Software Development Company | Capyngen",
  description: "Intelligent technology solutions for travel, transportation & logistics. Capyngen builds booking platforms, fleet management, warehouse software and AI-powered logistics.",
};

export default function TravelLogisticsPage() {
  return <><Navbar /><TravelLogisticsExperience /><CleaningCta /><Footer /></>;
}
