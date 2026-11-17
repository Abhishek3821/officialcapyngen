import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import SocialMediaHero from "../components/social-media-marketing/hero";
import SocialMediaSections from "../components/social-media-marketing/sections";

export const metadata: Metadata = {
  title: "Growth-Driven SMM Services That Convert | Capyngen",
  description: "Capyngen grows and scales your social presence with data-driven content plans and designed paid ads to generate viral engagement.",
};

export default function SocialMediaMarketingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><SocialMediaHero /><SocialMediaSections /></main><CleaningCta /><Footer /></>;
}
