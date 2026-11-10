import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EnterpriseHero from "../components/enterprise-solutions/hero";
import EnterpriseSections from "../components/enterprise-solutions/sections";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Capyngen",
  description: "Explore new perspectives with Capyngen’s Enterprise Solutions, brought to life through an immersive mountain landscape and a scrollable image gallery.",
};

export default function EnterpriseSolutionsPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><EnterpriseHero /><EnterpriseSections /></main><Footer /></>;
}
