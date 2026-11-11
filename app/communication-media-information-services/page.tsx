import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CommunicationMediaExperience from "../components/industries/communication-media";

export const metadata: Metadata = {
  title: "Communication, Media & Information Services | Capyngen",
  description: "A fresh perspective on memorable experiences and a connected world. Explore on-water inspiration, thoughtful security, and practical digital solutions.",
};

export default function CommunicationMediaPage() {
  return <><Navbar /><CommunicationMediaExperience /><Footer /></>;
}
