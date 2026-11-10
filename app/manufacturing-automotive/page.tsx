import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ManufacturingExperience from "../components/industries/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing & Automotive | Capyngen",
  description: "Go beyond the expected with connected digital experiences for manufacturing and automotive teams.",
};

export default function ManufacturingPage() {
  return <><Navbar /><ManufacturingExperience /><Footer /></>;
}
