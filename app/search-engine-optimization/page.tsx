import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import SeoHero from "../components/seo/hero";
import SeoSections from "../components/seo/sections";

export const metadata: Metadata = {
  title: "AI-Powered SEO Services | Search Engine Optimization | Capyngen",
  description: "Boost your brand visibility with AI-Powered SEO Services. Capyngen offers cost-effective, results-focused Search Engine Optimization services that put your business first and keep it there.",
};

export default function SeoPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><SeoHero /><SeoSections /></main><CleaningCta /><Footer /></>;
}
