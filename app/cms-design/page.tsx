import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Magazine from "../components/cms-design/magazine";

export const metadata: Metadata = {
  title: "CMS Design | Capyngen",
  description: "Explore a beautifully designed editorial experience: inspiring stories, curated collections, reader voices, and a thoughtful magazine layout by Capyngen.",
};

export default function CmsDesignPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip bg-[#fafaf7] outline-none"><Magazine /></main><Footer /></>;
}
