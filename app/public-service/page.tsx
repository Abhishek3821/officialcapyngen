import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PublicServiceExperience from "../components/industries/public-service";

export const metadata: Metadata = {
  title: "Public Service | Capyngen",
  description: "Discover a shared perspective on nature, communities, and the places that bring us together. Explore Capyngen’s Public Service experience.",
};

export default function PublicServicePage() {
  return <><Navbar /><PublicServiceExperience /><Footer /></>;
}
