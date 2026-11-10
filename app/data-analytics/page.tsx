import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DataAnalyticsSections from "../components/data-analytics/sections";

export const metadata: Metadata = {
  title: "Data & Analytics | Capyngen",
  description: "Thoughtfully designed spaces, connected customer experiences, and the power of data-driven decisions. Explore a new perspective with Capyngen.",
};

export default function DataAnalyticsPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 overflow-x-clip outline-none"><DataAnalyticsSections /></main><Footer /></>;
}
