import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import { AppPortfolioHero, AppAboutSection, AppContactStrip } from "../components/app-development/intro";
import { AppAirlineCaseStudy, AppResortCaseStudy, AppBaliCaseStudy } from "../components/app-development/case-studies";
import { AppStatsStrip, AppServicesSection, AppTestimonials, AppSnapshot } from "../components/app-development/details";

export const metadata: Metadata = {
  title: "App Development | Capyngen",
  description: "Explore Capyngen's mobile app development approach, services, and travel-inspired product concepts.",
};

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
        <AppPortfolioHero />
        <AppAboutSection />
        <AppContactStrip />
        <AppAirlineCaseStudy />
        <AppStatsStrip />
        <AppServicesSection />
        <AppTestimonials />
        <AppResortCaseStudy />
        <AppSnapshot />
        <AppBaliCaseStudy />
        <CleaningCta />
      </main>
      <Footer />
    </>
  );
}
