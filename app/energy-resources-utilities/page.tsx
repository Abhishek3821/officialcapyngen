import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import EnergyExperience from "../components/industries/energy";

export const metadata: Metadata = {
  title: "Energy Software Development Company | Capyngen",
  description: "Reshape energy operations with energy software development: smart grid, utility billing, renewable energy, oil & gas ERP, energy analytics and smart meter data management.",
};

export default function EnergyPage() {
  return <><Navbar /><EnergyExperience /><CleaningCta /><Footer /></>;
}
