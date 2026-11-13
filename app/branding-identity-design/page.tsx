import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  SustainableLuxuryHero,
  SustainableProperties,
  GrowingSpaces,
  OutstandingClients,
  WhyChooseNavik,
  BetterReturns,
  PrecisionGrowing,
} from "../components/application-solutions/sustainable";

export const metadata: Metadata = {
  title: "Best Branding and Identity Design Services in India | Capyngen",
  description: "We are a brand identity design company, and we ensure your brand maintains a consistent look and feel at each touchpoint.",
};

export default function BrandingIdentityDesignPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full overflow-x-clip outline-none">
        <SustainableLuxuryHero />
        <SustainableProperties />
        <GrowingSpaces />
        <OutstandingClients />
        <WhyChooseNavik />
        <BetterReturns />
        <PrecisionGrowing />
      </main>
      <Footer />
    </>
  );
}
