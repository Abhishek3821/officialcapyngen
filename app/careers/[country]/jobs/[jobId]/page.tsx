import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import CareerJobDetail from "../../../_careers/CareerJobDetail";

export const metadata: Metadata = {
  title: "Job Details | Capyngen Careers",
  description: "Role details, responsibilities and requirements for this opening at Capyngen.",
};

export default function CareerJobDetailPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <CareerJobDetail />
      </Suspense>
      <Footer />
    </>
  );
}
