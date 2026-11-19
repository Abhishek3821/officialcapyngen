import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import PublicServiceExperience from "../components/industries/public-service";

export const metadata: Metadata = {
  title: "Public Service Software Development | Capyngen",
  description: "Capyngen brings digital transformation and technology-based solutions to public sector organisations: citizen portals, smart city platforms, public finance ERP and e-government apps.",
};

export default function PublicServicePage() {
  return <><Navbar /><PublicServiceExperience /><CleaningCta /><Footer /></>;
}
