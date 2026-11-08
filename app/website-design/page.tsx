import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WebsiteDesignHero from "../components/website-design/hero";
import WebsiteDesignSections from "../components/website-design/sections";

export const metadata: Metadata = {
  title: "Website Design | Capyngen",
  description: "Explore thoughtful website design services from Capyngen.",
};

export default function WebsiteDesignPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
        <WebsiteDesignHero />
        <WebsiteDesignSections />
      </main>
      <Footer />
    </>
  );
}
