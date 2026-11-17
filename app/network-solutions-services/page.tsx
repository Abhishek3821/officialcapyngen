import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import { NetworkSolutionsHero, NetworkSolutionsSections } from "../components/network-solutions-services/content";

export const metadata: Metadata = {
  title: "Creative Network Solutions Services for Businesses | Capyngen",
  description: "At Capyngen, we offer the most reliable, secure, and easily deployable technology network solutions services to help grow your business to its full potential.",
};

export default function NetworkSolutionsServicesPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><NetworkSolutionsHero /><NetworkSolutionsSections /></main><CleaningCta /><Footer /></>;
}
