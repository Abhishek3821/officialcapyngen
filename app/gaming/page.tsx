import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta, { type CtaContent } from "../components/cleaning-cta";
import GamingExperience from "../components/industries/gaming";

export const metadata: Metadata = {
  title: "Game Development Company | Capyngen",
  description: "Smart tech and marketing for studios, esports brands, and developers. Built to keep players coming back.",
};

const cta: CtaContent = {
  eyebrow: "A smart move. A bigger game.",
  heading: <>Ready to level up<br />your <span>gaming</span><br />project?</>,
  text: "Get the tech, the marketing, and the support in one place. Let’s build something players will love.",
  button: "Get a Free Consultation",
  actionNote: <>A quick chat is all<br />it takes to start.</>,
  footerTop: "Tech and marketing.", footerBottom: "Support in one place.", footerIndex: "/ A BIGGER GAME",
  plate: <>Build it. Launch it.<br />Grow it.</>,
  captionLeft: "Built around players", captionRight: "SOMETHING PLAYERS WILL LOVE",
  cardTitle: "Good for your players.", cardText: "Built to scale.",
  seal: <>A smoother kind<br />of play.</>,
  bottleTitle: <>level<br />up.</>, bottleText: "BUILT TO SCALE",
  visualNote: "Let’s build something players will love.",
};

export default function GamingPage() {
  return <><Navbar /><GamingExperience /><CleaningCta content={cta} /><Footer /></>;
}
