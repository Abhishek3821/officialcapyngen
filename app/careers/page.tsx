import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import Careers from "./_careers/Careers";

export const metadata: Metadata = {
  title: "Careers | Capyngen",
  description: "Build products that power tomorrow. Explore career opportunities at Capyngen across India, the Americas, Asia Pacific, Europe, the Middle East and Africa.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <Careers />
      <CleaningCta />
      <Footer />
    </>
  );
}
