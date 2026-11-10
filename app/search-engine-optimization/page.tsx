import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SeoHero from "../components/seo/hero";
import SeoSections from "../components/seo/sections";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO) | Capyngen",
  description: "Unlock your business potential with search engine optimization by Capyngen. Clear strategy, useful content, and a stronger technical foundation for organic growth.",
};

export default function SeoPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><SeoHero /><SeoSections /></main><Footer /></>;
}
