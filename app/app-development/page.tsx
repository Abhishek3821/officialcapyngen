import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AppDevelopmentCta from "../components/app-development/cta";
import AppDevelopmentFaq from "../components/app-development/faq";
import { AppPortfolioHero, AppAboutSection, AppContactStrip } from "../components/app-development/intro";
import { AppAirlineCaseStudy, AppResortCaseStudy, AppBaliCaseStudy } from "../components/app-development/case-studies";
import { AppStatsStrip, AppServicesSection, AppTestimonials, AppSnapshot } from "../components/app-development/details";

export const metadata: Metadata = {
  title: "Best App Development Company in Gurgaon | Capyngen",
  description: "From app concept to a real app, as a top app development company in Gurugram we help brands build fully functional apps that their customers will want to use.",
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
        <AppDevelopmentFaq />
        <AppDevelopmentCta />
      </main>
      <Footer />
    </>
  );
}
