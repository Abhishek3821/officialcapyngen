import Hero from "./components/hero";
import Features from "./components/features";
import MoodBoard from "./components/mood-board";
import AtAGlance from "./components/at-a-glance";
import Adventure from "./components/adventure";
import Architecture from "./components/architecture";
import Projects from "./components/projects";
import LivingSpaces from "./components/living-spaces";
import Agenda from "./components/agenda";
import IndustriesWeServe from "./components/industries-we-serve";
import ProjectShowcase from "./components/project-showcase";
import PhotoCollage from "./components/photo-collage";
import CleaningCta, { type CtaContent } from "./components/cleaning-cta";
import HomeFaq from "./components/home-faq";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const cta: CtaContent = {
  eyebrow: "Intelligent digital growth.",
  heading: <>READY TO MAKE THE SWITCH TO <span>SMARTER</span> TECHNOLOGY?</>,
  text: "Join the movement toward intelligent digital growth! Learn how the Top IT company in India can help your business scale with custom software, AI, and cloud solutions.",
  button: "Contact Us",
  actionNote: <>Custom software,<br />AI, and cloud solutions.</>,
  footerTop: "Build smarter.", footerBottom: "Grow faster.", footerIndex: "/ INTELLIGENT DIGITAL GROWTH",
  plate: <>Built once.<br />Supported always.</>,
  captionLeft: "Smarter technology", captionRight: "CUSTOM SOFTWARE, AI, AND CLOUD",
  cardTitle: "One team.", cardText: "Every solution.",
  seal: <>Different path.<br />Real growth.</>,
  bottleTitle: <>grow<br />faster.</>, bottleText: "BUILD SMARTER",
  visualNote: "Learn how the Top IT company in India can help your business scale.",
};

export default function Home() {
  return (
    <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flow-root min-h-screen w-full min-w-0 max-w-full bg-white outline-none">
      <Hero />
      <Features />
      <MoodBoard />
      <AtAGlance />
      <Adventure />
      <Architecture />
      <Projects />
      <LivingSpaces />
      <IndustriesWeServe />
      <Agenda />
      <ProjectShowcase />
      <PhotoCollage />
      <CleaningCta content={cta} />
      <HomeFaq />
    </main>
    <Footer />
    </>
  );
}
