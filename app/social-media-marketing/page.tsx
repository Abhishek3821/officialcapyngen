import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SocialMediaHero from "../components/social-media-marketing/hero";
import SocialMediaSections from "../components/social-media-marketing/sections";

export const metadata: Metadata = {
  title: "Social Media Marketing (SMM) | Capyngen",
  description: "Explore visual storytelling and creative social media experiences by Capyngen, brought to life through an immersive, scrollable destination gallery.",
};

export default function SocialMediaMarketingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><SocialMediaHero /><SocialMediaSections /></main><Footer /></>;
}
