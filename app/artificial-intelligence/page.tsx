import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ArtificialIntelligenceHero from "../components/artificial-intelligence/hero";
import ArtificialIntelligenceSections from "../components/artificial-intelligence/sections";

export const metadata: Metadata = {
  title: "Artificial Intelligence | Capyngen",
  description: "Bring your people, projects, and ideas together with thoughtful AI solutions that simplify workflows and make room for better collaboration.",
};

export default function ArtificialIntelligencePage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><ArtificialIntelligenceHero /><ArtificialIntelligenceSections /></main><Footer /></>;
}
