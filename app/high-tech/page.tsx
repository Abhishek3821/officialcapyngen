import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import HighTechExperience from "../components/industries/high-tech";

export const metadata: Metadata = {
  title: "High-Tech Software Development Company | Capyngen",
  description: "Guiding leaders through complexity with clarity and purpose. Capyngen empowers companies with cutting-edge IT solutions that drive innovation, efficiency, and operational excellence.",
};

export default function HighTechPage() {
  return <><Navbar /><HighTechExperience /><CleaningCta /><Footer /></>;
}
