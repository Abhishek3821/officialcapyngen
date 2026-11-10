import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EnergyExperience from "../components/industries/energy";

export const metadata: Metadata = {
  title: "Energy, Resources & Utilities | Capyngen",
  description: "Thoughtful digital experiences for energy, resources and utilities. Connect people, platforms and a world of possibilities.",
};

export default function EnergyPage() {
  return <><Navbar /><EnergyExperience /><Footer /></>;
}
