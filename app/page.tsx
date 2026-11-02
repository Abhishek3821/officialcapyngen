import Hero from "./components/hero";
import Features from "./components/features";
import MoodBoard from "./components/mood-board";
import AtAGlance from "./components/at-a-glance";
import Adventure from "./components/adventure";
import Architecture from "./components/architecture";
import CrmGrowth from "./components/crm-growth";
import Projects from "./components/projects";
import LivingSpaces from "./components/living-spaces";
import Agenda from "./components/agenda";
import IndustriesWeServe from "./components/industries-we-serve";
import ProjectShowcase from "./components/project-showcase";
import PhotoCollage from "./components/photo-collage";
import CleaningCta from "./components/cleaning-cta";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

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
      <CrmGrowth />
      <Projects />
      <LivingSpaces />
      <IndustriesWeServe />
      <Agenda />
      <ProjectShowcase />
      <PhotoCollage />
      <CleaningCta />
    </main>
    <Footer />
    </>
  );
}
