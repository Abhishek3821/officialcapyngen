import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppLuxuryHero, AppWhyUs, AppFeaturedGetaway, AppSolutionsFaq } from "../components/application-solutions/luxury";
import { AppIndiaJourney, AppTourAbout } from "../components/application-solutions/india";
import { AppBlog, AppMission, AppProtection, AppWayOfLife, AppGuides } from "../components/application-solutions/stories";

export const metadata: Metadata = {
  title: "Custom Application Solutions Company in India | Capyngen",
  description: "As the best application development company, we develop scalable custom application solutions that meet your business's unique requirements, whether on web or mobile.",
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
      <AppSolutionsFaq />
    </main>
    <Footer />
  </>;
}
