import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import CleaningCta from "../../../components/cleaning-cta";
import CareerSearch from "../../_careers/CareerSearch";
import { CAREER_COUNTRIES, countryToSlug, slugToCountry } from "../../_careers/careerRoutes";

export function generateStaticParams() {
  return CAREER_COUNTRIES.map((country) => ({ country: countryToSlug(country) }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const country = slugToCountry((await params).country);
  return {
    title: `Jobs in ${country} | Capyngen Careers`,
    description: `Search and filter current job openings at Capyngen in ${country}.`,
  };
}

export default function CareerSearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <CareerSearch />
      </Suspense>
      <CleaningCta />
      <Footer />
    </>
  );
}
