import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WebDevelopmentHero from "../components/web-development-hero";
import InsideStories from "../components/inside-stories";
import RecentAccolades from "../components/recent-accolades";
import VisualDiary from "../components/visual-diary";
import BrandVision from "../components/brand-vision";
import FashionMarket from "../components/fashion-market";
import BrandsShine from "../components/brands-shine";
import SocialProjects from "../components/social-projects";
import CleaningCta from "../components/cleaning-cta";

export const metadata: Metadata = {
  title: "Web Development | Capyngen",
  description: "Bring your ideas to life with custom web design and development from Capyngen. Explore our work and start your next website project.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full bg-white outline-none">
        <WebDevelopmentHero />
        <InsideStories />
        <RecentAccolades />
        <VisualDiary />
        <BrandVision />
        <FashionMarket />
        <BrandsShine />
        <SocialProjects />
        <CleaningCta />
      </main>
      <Footer />
    </>
  );
}
