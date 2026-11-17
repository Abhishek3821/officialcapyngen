import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import DigitalMarketingHero from "../components/digital-marketing/hero";
import DigitalMarketingSections from "../components/digital-marketing/sections";

export const metadata: Metadata = {
  title: "Digital Marketing Services That Drive Real Growth | Capyngen",
  description: "Capyngen is a full-funnel digital marketing agency in India offering SEO, SMM, PPC, content marketing, email marketing, and CRO services that drive real growth.",
};

export default function DigitalMarketingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip bg-white outline-none"><DigitalMarketingHero /><DigitalMarketingSections /></main><CleaningCta /><Footer /></>;
}
