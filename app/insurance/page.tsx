import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import InsuranceExperience from "../components/industries/insurance";

export const metadata: Metadata = {
  title: "Insurance Software Development Services | Capyngen",
  description: "Modernizing your InsurTech business with our insurance software development services.",
};

export default function InsurancePage() {
  return <><Navbar /><InsuranceExperience /><CleaningCta /><Footer /></>;
}
