import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta, { type CtaContent } from "../components/cleaning-cta";
import ConsultingHero from "../components/consulting/hero";
import ConsultingSections from "../components/consulting/sections";

export const metadata: Metadata = {
  title: "Consulting Services in India | Capyngen",
  description: "The technology and digital consulting firm offers consultancy services for many companies in the same world, in particular Indian companies.",
};

const cta: CtaContent = {
  eyebrow: "A complimentary consultation.",
  heading: <>Request a<br /><span>Complimentary</span><br />Consultation</>,
  text: "Explore our strategy technology stacks Reach out to our lead consultants at Capyngen to assess your system architecture and develop a high-ROI roadmap for your growth.",
  button: "Request a Consultation",
  actionNote: <>Reach out to our<br />lead consultants.</>,
  footerTop: "Your vision.", footerBottom: "Our expertise.", footerIndex: "/ HIGH-ROI ROADMAP",
  plate: <>Assess. Design.<br />Grow.</>,
  captionLeft: "Your system architecture", captionRight: "A HIGH-ROI ROADMAP",
  cardTitle: "Strategy to execution.", cardText: "Tangible value.",
  seal: <>A roadmap<br />for your growth.</>,
  bottleTitle: <>high<br />ROI.</>, bottleText: "LEAD CONSULTANTS",
  visualNote: "Strategy is nothing without execution.",
};

export default function ConsultingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="min-w-0 outline-none"><ConsultingHero /><ConsultingSections /></main><CleaningCta content={cta} /><Footer /></>;
}
