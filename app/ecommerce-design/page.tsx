import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EcommerceDesignHero from "../components/ecommerce-design/hero";
import BrandVision from "../components/brand-vision";
import CompanyProductsServices from "../components/company-products-services";
import BrandsShine from "../components/brands-shine";
import SocialProjects from "../components/social-projects";
import { AiApproach } from "../components/custom-ai/services";
import CrmGrowth from "../components/crm-growth";
import WebDevelopmentCta from "../components/web-development-cta";

export const metadata: Metadata = {
  title: "Ecommerce Design | Capyngen",
  description: "Beautiful storefronts, thoughtful product pages, and seamless shopping journeys. Discover ecommerce design by Capyngen.",
};

export default function EcommerceDesignPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none">
      <EcommerceDesignHero />
      <BrandVision />
      <CompanyProductsServices />
      <BrandsShine />
      <SocialProjects />
      <AiApproach />
      <CrmGrowth />
      <WebDevelopmentCta />
    </main>
    <Footer />
  </>;
}
