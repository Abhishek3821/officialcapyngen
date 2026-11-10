import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NetworkSolutionsHero, NetworkSolutionsSections } from "../components/network-solutions-services/content";

export const metadata: Metadata = {
  title: "Network Solutions & Services | Capyngen",
  description: "Discover connected ideas, thoughtful service, and new perspectives with Capyngen’s Network Solutions & Services.",
};

export default function NetworkSolutionsServicesPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><NetworkSolutionsHero /><NetworkSolutionsSections /></main><Footer /></>;
}
