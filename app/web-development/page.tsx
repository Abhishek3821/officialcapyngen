import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WebDevelopmentHero from "../components/web-development-hero";
import InsideStories from "../components/inside-stories";
import RecentAccolades from "../components/recent-accolades";
import VisualDiary from "../components/visual-diary";
import BrandVision from "../components/web-development/brand-vision";
import FashionMarket from "../components/fashion-market";
import BrandsShine from "../components/web-development/brands-shine";
import SocialProjects from "../components/web-development/social-projects";
import WebDevelopmentFaq from "../components/web-development/faq";
import WebDevelopmentCta from "../components/web-development/cta";

export const metadata: Metadata = {
  title: "Best Website Development Company in Gurugram | Capyngen",
  description: "As a top web development company in Gurugram, we provide in-depth requirement analysis, captivating UI/UX design, robust development structure, and hassle-free maintenance and support.",
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
        <WebDevelopmentFaq />
        <WebDevelopmentCta />
      </main>
      <Footer />
    </>
  );
}
