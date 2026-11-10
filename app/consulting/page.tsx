import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ConsultingHero from "../components/consulting/hero";
import ConsultingSections from "../components/consulting/sections";

export const metadata: Metadata = {
  title: "Consulting | Capyngen",
  description: "Travel beyond the ordinary. Scroll through extraordinary destinations and find inspiration for your next journey.",
};

export default function ConsultingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="min-w-0 outline-none"><ConsultingHero /><ConsultingSections /></main><Footer /></>;
}
