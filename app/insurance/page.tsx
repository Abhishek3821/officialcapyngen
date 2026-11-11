import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import InsuranceExperience from "../components/industries/insurance";

export const metadata: Metadata = {
  title: "Insurance | Capyngen",
  description: "Capture life's best moments. Discover creative perspectives, thoughtful journeys, and practical ideas for growing businesses with Capyngen.",
};

export default function InsurancePage() {
  return <><Navbar /><InsuranceExperience /><Footer /></>;
}
