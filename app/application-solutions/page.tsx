import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppLuxuryHero, AppWhyUs, AppFeaturedGetaway } from "../components/application-solutions/luxury";
import { AppIndiaJourney, AppTourAbout } from "../components/application-solutions/india";
import { AppBlog, AppMission, AppProtection, AppWayOfLife, AppGuides } from "../components/application-solutions/stories";

export const metadata: Metadata = {
  title: "Application Solutions | Capyngen",
  description: "Explore Capyngen's travel, property, and agriculture-inspired application experiences.",
};

export default function ApplicationSolutionsPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full overflow-x-clip outline-none">
      <AppLuxuryHero />
      <AppWhyUs />
      <AppFeaturedGetaway />
      <AppIndiaJourney />
      <AppTourAbout />
      <AppBlog />
      <AppMission />
      <AppProtection />
      <AppWayOfLife />
      <AppGuides />
    </main>
    <Footer />
  </>;
}
