import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "../../../../../components/navbar";
import Footer from "../../../../../components/footer";
import CleaningCta from "../../../../../components/cleaning-cta";
import JobApplicationForm from "../../../../_careers/JobApplicationForm";

export const metadata: Metadata = {
  title: "Apply | Capyngen Careers",
  description: "Submit your application to join the Capyngen team.",
};

export default function JobApplicationPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <JobApplicationForm />
      </Suspense>
      <CleaningCta />
      <Footer />
    </>
  );
}
