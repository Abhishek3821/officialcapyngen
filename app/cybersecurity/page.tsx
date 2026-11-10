import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CybersecurityHero, CybersecuritySections } from "../components/cybersecurity/content";

export const metadata: Metadata = {
  title: "Cybersecurity | Capyngen",
  description: "Thoughtful cybersecurity guidance, strategic planning, and practical insight to help your business move forward with confidence.",
};

export default function CybersecurityPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><CybersecurityHero /><CybersecuritySections /></main><Footer /></>;
}
