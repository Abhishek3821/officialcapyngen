import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import ManufacturingExperience from "../components/industries/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Software Development Company | Capyngen",
  description: "Capyngen is a manufacturing software development expert: ERP software, supply chain management, IoT-enabled smart factory platforms and custom fleet management solutions.",
};

export default function ManufacturingPage() {
  return <><Navbar /><ManufacturingExperience /><CleaningCta /><Footer /></>;
}
