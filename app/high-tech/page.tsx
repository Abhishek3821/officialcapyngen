import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HighTechExperience from "../components/industries/high-tech";

export const metadata: Metadata = {
  title: "High Tech | Capyngen",
  description: "Journey to all world corners. Explore extraordinary landscapes, thoughtful travel stories, and new perspectives with Capyngen.",
};

export default function HighTechPage() {
  return <><Navbar /><HighTechExperience /><Footer /></>;
}
