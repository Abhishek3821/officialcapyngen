import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import { CompareModules, ExploreOrinite, OriniteBrand, Ownership, ProductDetails, ProductsHero, SuiteOverview, WhyOrinite } from "../components/our-products/sections";

export const metadata: Metadata = {
  title: "Our Products – Orinite HRMS, CRM & Business Management | Capyngen",
  description: "Orinite is a proprietary SaaS product brand of Capyngen Private Limited, with HRMS, CRM and business management solutions for modern businesses.",
};

export default function OurProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none">
        <ProductsHero />
        <SuiteOverview />
        <OriniteBrand />
        <ProductDetails />
        <CompareModules />
        <WhyOrinite />
        <Ownership />
        <ExploreOrinite />
      </main>
      <CleaningCta />
      <Footer />
    </>
  );
}
