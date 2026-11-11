import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RealEstateExperience from "../components/industries/real-estate";

export const metadata: Metadata = {
  title: "Real Estate | Capyngen",
  description: "Step into a world of fresh perspectives. Explore a cinematic gallery, intelligent ideas, ocean inspiration, connected routes, and memorable journeys.",
};

export default function RealEstatePage() {
  return <><Navbar /><RealEstateExperience /><Footer /></>;
}
