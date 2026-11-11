import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ManufacturingExperience from "../components/industries/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing & Automotive | Capyngen",
  description: "Explore the world with thoughtful journeys, inspiring destinations, travel guides, and a fresh perspective from Capyngen.",
};

export default function ManufacturingPage() {
  return <><Navbar /><ManufacturingExperience /><Footer /></>;
}
