import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TravelLogisticsExperience from "../components/industries/travel-logistics";

export const metadata: Metadata = {
  title: "Travel & Logistics | Capyngen",
  description: "Discover Asia. Live the journey. Explore thoughtful travel inspiration, nature-led escapes, and beautiful places to stay with Capyngen.",
};

export default function TravelLogisticsPage() {
  return <><Navbar /><TravelLogisticsExperience /><Footer /></>;
}
