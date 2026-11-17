import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import { CybersecurityHero, CybersecuritySections } from "../components/cybersecurity/content";

export const metadata: Metadata = {
  title: "Cybersecurity Services: Protect Your Applications and Networks | Capyngen",
  description: "Capyngen delivers end-to-end information cybersecurity services to business organisations, reducing cyber risk and preventing cybersecurity incidents and compliance infractions.",
};

export default function CybersecurityPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><CybersecurityHero /><CybersecuritySections /></main><CleaningCta /><Footer /></>;
}
