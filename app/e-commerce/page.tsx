import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import ECommerceExperience from "../components/industries/e-commerce";

export const metadata: Metadata = {
  title: "B2B eCommerce Development Services | Capyngen",
  description: "Scale faster with expert B2B eCommerce development services. Capyngen develops complex B2B workflows, pricing engines and ERP-connected e-commerce stores.",
};

export default function ECommercePage() {
  return <><Navbar /><ECommerceExperience /><CleaningCta /><Footer /></>;
}
