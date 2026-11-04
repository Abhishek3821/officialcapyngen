import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CompanyAboutSection from "../components/company-about-section";
import CompanyFashionHero from "../components/company-fashion-hero";
import CompanyCoreValues from "../components/company-core-values";
import CompanyBusinessOverview from "../components/company-business-overview";
import CompanyProductsServices from "../components/company-products-services";
import CompanyClientPortfolio from "../components/company-client-portfolio";
import CompanyFutureOutlook from "../components/company-future-outlook";
import CompanyVisionStatement from "../components/company-vision-statement";
import CompanyOverviewCta from "../components/company-overview-cta";

export const metadata: Metadata = {
  title: "Company Overview | Capyngen",
  description: "Explore Capyngen's company profile and the digital experiences we create through strategy, design and technology.",
};

export default function CompanyOverviewPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 outline-none">
        <CompanyFashionHero />
        <CompanyAboutSection />
        <CompanyCoreValues />
        <CompanyBusinessOverview />
        <CompanyProductsServices />
        <CompanyClientPortfolio />
        <CompanyFutureOutlook />
        <CompanyVisionStatement />
        <CompanyOverviewCta />
      </main>
      <Footer />
    </>
  );
}
