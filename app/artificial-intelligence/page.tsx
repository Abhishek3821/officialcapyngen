import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ArtificialIntelligenceHero from "../components/artificial-intelligence/hero";
import ArtificialIntelligenceSections from "../components/artificial-intelligence/sections";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services and Solutions | Capyngen",
  description: "AI allows businesses to automate processing flows, evaluate data, and create intelligent components in current applications.",
};

export default function ArtificialIntelligencePage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><ArtificialIntelligenceHero /><ArtificialIntelligenceSections /></main><Footer /></>;
}
