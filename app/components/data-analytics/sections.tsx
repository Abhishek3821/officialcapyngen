"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import s from "./sections.module.css";

const projects = [
  { name: "Commercials", count: "200+ projects", image: "restaurant", alt: "Warm contemporary restaurant with sculptural lighting" },
  { name: "Residential", count: "400+ projects", image: "pendant", alt: "Sculptural pendant lighting in a thoughtfully styled interior" },
  { name: "Kitchen", count: "300+ projects", image: "kitchen", alt: "Bright contemporary kitchen with carefully considered details" },
];
const steps = [
  { title: "900+ projects all over the world", text: "We’ve crafted interiors in cities across the globe — from Europe to Africa!" },
  { title: "Bespoke Design Tailored to You", text: "Your space. Your style. We design around what matters to you." },
  { title: "From Sketch to Launch, We’re With You", text: "We guide you through every step — simple, smooth, stress-free." },
];
const services = [
  { title: "Content Management", text: "Centralize and manage all customer contact information in one place.", image: "content", alt: "Creative professionals collaborating on customer content" },
  { title: "Sales Pipeline Management", text: "Track and manage your sales process for better customer engagement.", image: "sales", alt: "Sales team working together with connected digital tools" },
  { title: "Mobile CRM Access", text: "Access and manage customer data from anywhere on your mobile device.", image: "mobile", alt: "Professional accessing information on a smartphone" },
];

function Photo({ name, alt, className = "", priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  return <Image src={`/images/data-analytics/${name}.jpg`} alt={alt} width={1400} height={1000} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 55vw, 750px" preload={priority} className={`${s.photo} ${className}`} />;
}
function ArrowLink({ children = "Read More", href, coral = false }: { children?: React.ReactNode; href: string; coral?: boolean }) {
  return <a href={href} className={`${s.cta} ${coral ? s.coralButton : ""}`}>{children}<span aria-hidden="true">→</span></a>;
}
function StepIcon({ index }: { index: number }) {
  const paths = ["M9 18h6m-6 3h6M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z", "M5 5h14v16H5V5Zm3-3v6m8-6v6M5 10h14m-10 5 2 2 4-4", "m4 4 16 16m-3-17 4 4L7 21l-4-4L17 3ZM5 9l4-4m6 14 4-4", "m14 5 5-2-2 5-4 1-5 11-4-2 7-10-1-4 4-2v3Z", "M9 15 5 19m4-8-5 1-1 5 6-2m4-6 2 6 5-1 1-5M9 15c7-1 11-7 12-12-5 1-11 5-12 12Zm-4 5-2 1 1-3m11-10h.01"];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

export default function DataAnalyticsSections() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [tourIndex, setTourIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const tour = [{ image: "interior-hero", title: "The art of feeling at home" }, { image: "dining", title: "Designed for everyday moments" }, { image: "restaurant", title: "Spaces that bring us together" }];
  return <>
    <section className={s.hero} aria-labelledby="data-hero-heading"><div className={s.heroInner}>
      <div className={s.heroCopy}><span className={s.heroEyebrow}>THOUGHTFUL SPACES. TIMELESS DESIGN.</span><h1 id="data-hero-heading"><em>Interio</em> — The Modern<br />Art of Simplicity</h1><p>Step into a world defined by quiet elegance. Our studio is celebrated for beautiful modern spaces with thoughtful layouts. The potential of every home is found in the details.</p><ArrowLink href="#professionals" /></div>
      <div className={s.heroVisual}><Photo name="interior-hero" alt="Elegant modern living room with natural textures, plants, and soft neutral furnishings" priority /><button type="button" className={s.watch} onClick={() => dialog.current?.showModal()}><span>View the space</span><b aria-hidden="true">▶</b></button></div><span className={s.heroFootnote}>SPACES TO LIVE. ROOM TO DREAM.</span>
    </div></section>

    <section id="professionals" className={`${s.section} ${s.welcome}`} aria-labelledby="data-professionals-heading">
      <div className={s.welcomeCollage}><Photo name="dining" alt="Inviting dining space with modern furniture and natural light" className={s.tallPhoto} /><div className={s.collageRight}><Photo name="kitchen" alt="A light-filled kitchen designed for everyday living" /><blockquote><p>This is one of the most beautiful and functional interiors I’ve seen. Interio transformed our space into something we’re proud of.</p><footer><Image src="/images/client-1.jpg" alt="" width={38} height={38} /><span>Emma, Homeowner</span><span className={s.stars}>★★★★★<small>A little love for our work</small></span></footer></blockquote></div></div>
      <div className={s.welcomeCopy}><h2 id="data-professionals-heading">Welcome for<br /><em>Professionals</em></h2><p>We specialize in helping forward-thinking individuals and companies elevate their spaces. Whether it’s a high-end residential apartment or a stylish co-working hub, our work blends functionality and timeless beauty.</p><p className={s.signature}>Jimmy Kelondy <span>CEO</span></p><ArrowLink href="#projects" /></div>
    </section>

    <section id="projects" className={`${s.section} ${s.projects}`} aria-labelledby="data-projects-heading">
      <div className={s.projectIntro}><h2 id="data-projects-heading">900+ Projects All<br /><em>Over the World</em></h2><p>From New York to Tokyo, our portfolio spans continents and cultures. Our team brings tailored design solutions to a variety of spaces — always with a focus on quality and innovation.</p><ArrowLink href="#process" /></div>
      <div className={s.projectGallery}><div className={s.projectCards}>{projects.map((_, offset) => { const project = projects[(selectedProject + offset) % projects.length]; return <a href="#process" key={project.name} className={`${s.projectCard} ${offset === 0 ? s.activeProject : ""}`}><Photo name={project.image} alt={project.alt} /><div><h3>{project.name}</h3><p>{project.count}</p></div></a>; })}</div><div className={s.pagination}><span aria-hidden="true" /><div role="group" aria-label="Choose featured project">{projects.map((project, index) => <button key={project.name} type="button" onClick={() => setSelectedProject(index)} aria-label={`Feature ${project.name} projects`} aria-pressed={selectedProject === index} className={selectedProject === index ? s.selected : ""}>{index + 1}</button>)}</div></div><span className={s.srOnly} role="status">Featured: {projects[selectedProject].name}</span></div>
    </section>

    <section id="process" className={`${s.section} ${s.process}`} aria-labelledby="data-process-heading"><div><Photo name="restaurant" alt="A restaurant bringing beautiful materials, lighting, and people together" className={s.processPhoto} /><ol className={s.timeline}>{["Concept", "Plan", "Design", "Build", "Launch"].map((label, index) => <li key={label}><StepIcon index={index} /><span className={s.timelineDot} /><span>{label}</span></li>)}</ol></div><div className={s.processCopy}><h2 id="data-process-heading">Our work process make<br /><em>your dream true</em></h2><ol className={s.steps}>{steps.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>

    <section className={`${s.section} ${s.story}`} aria-labelledby="data-story-heading"><div><h2 id="data-story-heading">Our work process make<br /><em>your dream true</em></h2><p>From first conversation to final styling, every detail is carefully considered. Beautiful spaces are made when thoughtful design and everyday life come together.</p><a href="/contact-us" className={s.textLink}>Let’s bring your ideas to life <span aria-hidden="true">→</span></a></div><div className={s.storyVisual}><Photo name="interior-hero" alt="Soft textures and natural tones in a welcoming contemporary living room" /><details className={s.storyNote}><summary>Bring “Stay a While” comfort into the spaces you love. <span aria-hidden="true">＋</span></summary><p>Natural textures, soft lighting, and a little room to breathe. Our approach begins with how you want to feel, then brings every element together around you.</p></details></div></section>

    <section id="customer-engagement" className={s.engagement} aria-labelledby="data-engagement-heading"><div className={s.crmInner}><div className={s.engagementHeading}><span className={s.eyebrow}>KEEP YOUR CUSTOMERS ENGAGED, ALWAYS</span><h2 id="data-engagement-heading">Engage with Your <em>Customers</em><br />Instantly</h2><p>Gain real-time insights, automate repetitive tasks, and connect with your customers across multiple channels. Experience the power of effortless customer relationship management.</p><ArrowLink href="#crm-services" coral>Learn More</ArrowLink></div><div className={s.stickers} aria-hidden="true"><span>WEBSITE</span><span>INTERFACE</span><span>ANIMATION</span><span>BRANDING</span></div><ul className={s.benefits}>{[{ title: "Data-Driven Decisions", text: "Make smarter decisions with advanced analytics." }, { title: "Seamless Integration", text: "Sync your CRM with your favorite tools." }, { title: "Omnichannel Communication", text: "Engage customers on platforms they prefer." }].map(item => <li key={item.title}><span aria-hidden="true">✓</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ul><Photo name="crm-workspace" alt="A connected workspace for building better customer relationships" className={s.engagementPhoto} /></div></section>

    <section className={`${s.section} ${s.integration}`} aria-labelledby="data-integration-heading"><div className={s.integrationVisual}><Photo name="crm-integration" alt="Professionals using a laptop to connect their business tools" /><span className={s.integrationBadge}>Connected. Simplified.</span></div><div><span className={s.eyebrow}>CONNECT YOUR CRM SOFTWARE EASILY</span><h2 id="data-integration-heading">Effortless Integration<br />with Your <em>Favourite</em><br />Tools</h2><p>Seamlessly connect your CRM with apps you already use. Stay in control while keeping your workflows smooth and uninterrupted.</p><ArrowLink href="#crm-services" coral>Browse All Services</ArrowLink></div></section>

    <section id="crm-services" className={`${s.section} ${s.services}`} aria-labelledby="data-services-heading"><div className={s.servicesHeading}><span className={s.eyebrow}>OUR SERVICES</span><h2 id="data-services-heading">You keep the <em>CRM</em> Advantage</h2></div><div className={s.serviceGrid}>{services.map(service => <a href={`/contact-us?service=${encodeURIComponent(service.title)}`} className={s.serviceCard} key={service.title}><Photo name={service.image} alt={service.alt} /><div><h3>{service.title}<span aria-hidden="true">↗</span></h3><p>{service.text}</p></div></a>)}</div></section>

    <dialog ref={dialog} aria-label="Interior space tour" className={s.tourDialog} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><div className={s.tourContent}><button className={s.closeTour} type="button" onClick={() => dialog.current?.close()} aria-label="Close space tour">×</button><Photo name={tour[tourIndex].image} alt={tour[tourIndex].title} /><div className={s.tourCaption}><h2>{tour[tourIndex].title}</h2><div><button type="button" aria-label="Previous space" onClick={() => setTourIndex((tourIndex + tour.length - 1) % tour.length)}>←</button><span aria-live="polite">{tourIndex + 1} / {tour.length}</span><button type="button" aria-label="Next space" onClick={() => setTourIndex((tourIndex + 1) % tour.length)}>→</button></div></div></div></dialog>
  </>;
}
