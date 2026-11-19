import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import CommunicationMediaExperience from "../components/industries/communication-media";

export const metadata: Metadata = {
  title: "Communication Media IT Software Development | Capyngen",
  description: "Communication media IT software development for broadcasters, telecom operators and information service providers.",
};

export default function CommunicationMediaPage() {
  return <><Navbar /><CommunicationMediaExperience /><CleaningCta /><Footer /></>;
}
