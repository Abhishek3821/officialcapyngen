import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta, { type CtaContent } from "../components/cleaning-cta";
import RealEstateExperience from "../components/industries/real-estate";

export const metadata: Metadata = {
  title: "Real Estate Software Development | Capyngen",
  description: "Smart tools for listings, leads, and deals. Everything your real estate business needs, in one place.",
};

const cta: CtaContent = {
  eyebrow: "A smart move. A stronger brand.",
  heading: <>Ready to turn<br />your <span>real estate</span><br />business around?</>,
  text: "IT and marketing under one roof. Get more leads, close faster, and build a brand people remember.",
  button: "Book Free Consultation",
  actionNote: <>IT and marketing<br />under one roof.</>,
  footerTop: "Get more leads.", footerBottom: "Close faster.", footerIndex: "/ A STRONGER BRAND",
  plate: <>Listings, leads,<br />and deals.</>,
  captionLeft: "Your next deal", captionRight: "A BRAND PEOPLE REMEMBER",
  cardTitle: "Good for your leads.", cardText: "Thoughtful by design.",
  seal: <>A smarter kind<br />of listing.</>,
  bottleTitle: <>more<br />leads.</>, bottleText: "SELL SMARTER",
  visualNote: "Your market, your pace, your next deal.",
};

export default function RealEstatePage() {
  return <><Navbar /><RealEstateExperience /><CleaningCta content={cta} /><Footer /></>;
}
