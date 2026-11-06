import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TravelHero, TopDestinations, LatestStories, TrekkerHighlights } from "../components/devops-solutions/travel-intro";
import { TopDestination, MoreThanProperty, OurProperties } from "../components/devops-solutions/travel-details";

export const metadata: Metadata = {
  title: "DevOps Solutions | Capyngen",
  description: "Explore Capyngen's destination-inspired DevOps showcase and digital experiences.",
};

export default function DevOpsSolutionsPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <TravelHero />
      <TopDestinations />
      <LatestStories />
      <TrekkerHighlights />
      <TopDestination />
      <MoreThanProperty />
      <OurProperties />
    </main>
    <Footer />
  </>;
}
