import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import EnterpriseHero from "../components/enterprise-solutions/hero";
import EnterpriseSections from "../components/enterprise-solutions/sections";

export const metadata: Metadata = {
  title: "Advanced Enterprise Solutions for IT and Clouds | Capyngen",
  description: "Capyngen is one of the best enterprise solutions for your business, with years of experience assisting customers and clients with digital transformation.",
};

export default function EnterpriseSolutionsPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><EnterpriseHero /><EnterpriseSections /></main><CleaningCta /><Footer /></>;
}
