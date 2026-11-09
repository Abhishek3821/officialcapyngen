import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DigitalMarketingHero from "../components/digital-marketing/hero";
import DigitalMarketingSections from "../components/digital-marketing/sections";

export const metadata: Metadata = {
  title: "Digital Marketing | Capyngen",
  description: "Bring your ideas to life with distinctive campaign visuals, creative direction, and AI-powered digital marketing by Capyngen.",
};

export default function DigitalMarketingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip bg-white outline-none"><DigitalMarketingHero /><DigitalMarketingSections /></main><Footer /></>;
}
