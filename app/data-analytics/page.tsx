import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import DataAnalyticsSections from "../components/data-analytics/sections";

export const metadata: Metadata = {
  title: "Best Data Analytics Services in India | Capyngen",
  description: "Delivering Actionable Insights, Dashboards, and Reporting for Businesses. Grow your business with Capyngen's Data-driven Methods and analytics services.",
};

export default function DataAnalyticsPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 overflow-x-clip outline-none"><DataAnalyticsSections /></main><CleaningCta /><Footer /></>;
}
