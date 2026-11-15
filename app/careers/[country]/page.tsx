import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CountryCareers from "../_careers/CountryCareers";
import { CAREER_COUNTRIES, countryToSlug, slugToCountry } from "../_careers/careerRoutes";

export function generateStaticParams() {
  return CAREER_COUNTRIES.map((country) => ({ country: countryToSlug(country) }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const country = slugToCountry((await params).country);
  return {
    title: `Careers in ${country} | Capyngen`,
    description: `Explore open roles at Capyngen in ${country} across engineering, design, AI & data, marketing and business.`,
  };
}

export default function CountryCareersPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
        <CountryCareers />
      </Suspense>
      <Footer />
    </>
  );
}
