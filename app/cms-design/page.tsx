import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Magazine from "../components/cms-design/magazine";

export const metadata: Metadata = {
  title: "Best CMS Website Design Services | Capyngen",
  description: "Capyngen, Best CMS Design Company in India. Safe, scalable, and world-class CMS-enabled websites ready to meet international web standards.",
};

export default function CmsDesignPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip bg-[#fafaf7] outline-none"><Magazine /></main><Footer /></>;
}
