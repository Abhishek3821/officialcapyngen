import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ECommerceExperience from "../components/industries/e-commerce";

export const metadata: Metadata = {
  title: "E-Commerce | Capyngen",
  description: "Discover extraordinary journeys, from Norway’s wild landscapes to the streets of Japan and the coast of Cape Town. Explore a new perspective with Capyngen.",
};

export default function ECommercePage() {
  return <><Navbar /><ECommerceExperience /><Footer /></>;
}
