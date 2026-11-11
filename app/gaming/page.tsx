import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GamingExperience from "../components/industries/gaming";

export const metadata: Metadata = {
  title: "Gaming | Capyngen",
  description: "Redefining the future of digital collections. Explore immersive perspectives, memorable stories, and inspiration for your next adventure.",
};

export default function GamingPage() {
  return <><Navbar /><GamingExperience /><Footer /></>;
}
