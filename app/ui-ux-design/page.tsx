import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UiUxHero from "../components/ui-ux-design/hero";
import UiUxSections from "../components/ui-ux-design/sections";

export const metadata: Metadata = {
  title: "UI/UX Design | Capyngen",
  description: "Explore thoughtful UI/UX design by Capyngen, featuring a bold land discovery experience and inspiring digital layouts.",
};

export default function UiUxDesignPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
        <UiUxHero />
        <UiUxSections />
      </main>
      <Footer />
    </>
  );
}
