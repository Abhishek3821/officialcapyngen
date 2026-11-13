import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UiUxHero from "../components/ui-ux-design/hero";
import UiUxSections from "../components/ui-ux-design/sections";

export const metadata: Metadata = {
  title: "Best UI/UX Design Services in India | Capyngen",
  description: "Capyngen develops interfaces that feel natural, solve your users' needs, and are welcoming, user-friendly, and personalised.",
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
