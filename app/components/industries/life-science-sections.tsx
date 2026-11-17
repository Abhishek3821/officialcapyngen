"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import s from "./life-science-sections.module.css";

const solutions = [
  { title: "Clinical Trial Management Software (CTMS)", place: "Clinical discovery", image: "/images/life-science/bali-temple.jpg" },
  { title: "Laboratory Information Management Systems (LIMS)", place: "Laboratory operations", image: "/images/enterprise-solutions/maldives-resort.webp" },
  { title: "Digital Healthcare Solutions", place: "Healthcare", image: "/images/destinations/swiss-alps.webp" },
  { title: "Pharma IT Services", place: "Pharma", image: "/images/consulting/phi-phi.jpg" },
  { title: "Medical Research Software", place: "Research", image: "/images/life-science/glacier.jpg" },
  { title: "Biotech Software Solutions", place: "Biotech", image: "/images/application-solutions/growers.webp" },
];
const challenges = [
  { title: "Protect IP", text: "Research assets remain susceptible to breaches, leaks from insiders, and data loss.", image: "/images/destinations/swiss-alps.webp", icon: "plant" },
  { title: "Support Research", text: "Scientists require dependable and secure access to apps and datasets anywhere and at all times.", image: "/images/life-science/glacier.jpg", icon: "waves" },
  { title: "Scale Through Growth", text: "Raising rounds and buying rounds exceed my capacity to support.", image: "/images/application-solutions/growers.webp", icon: "people" },
  { title: "Prepare for AI", text: "AI projects require research data that is governed, open, and secure.", image: "/images/enterprise-solutions/alpine-lake.webp", icon: "plant" },
];
const reasons = ["Domain Expertise", "Compliance-Ready Software", "Smart Data Management", "Scalable Secure Platforms", "AI ML Integration", "Long-Term Partnership"];
const challengeText = "Biotech & Life Science Labs Leverage Data, collaboration, and innovation to Accelerate Research. But Fast Growth, Growing Security Threats and a Complex Research Environment Bring Risks Without IT.";
const faqs = [
  { q: "Q1. What makes Capyngen a reliable life science software development company?", a: "Real-world domain expertise and state-of-the-art engineering. As a life science software company, we design software platforms around how labs, clinicians, and researchers work, not cookie-cutter templates." },
  { q: "Q2. What is included in your life sciences IT services?", a: "Our life sciences IT services include modernisation of infrastructure, application management, security, data privacy, and ongoing support. All of our services aim to minimise operational risk and to drive research forward." },
  { q: "Q3. Do you build custom clinical and laboratory software?", a: "Yes. Our life science software development team creates CTMS, LIMS, digital healthcare software, and medical research software. All our solutions are tailored to your workflows, compliance needs, and data models." },
  { q: "Q4. How can AI in life sciences help my organisation?", a: "AI in life sciences is helping to speed up drug discovery, improve clinical trial matching, automate data processing, and surface insights from large data sets of research. We create AI tools that allow scientists to do what they do best, better." },
  { q: "Q5. What are life sciences technology solutions for growing companies?", a: "As biotech and pharma companies grow, their life sciences technology solutions need to scale without the corresponding increase in complexity. We architect cloud platforms and application architectures for rounds of funding, acquisitions, and growth across the US." },
  { q: "Q6. Can you help with regulatory compliance like HIPAA, FDA, and GDPR?", a: "Yes. Our approach to life sciences software development integrates compliance into the architecture from day one, from data privacy, audit trails, and access to controls, to reporting requirements." },
  { q: "Q7. How do you protect sensitive research data and intellectual property?", a: "All our services are equipped with multi-layer security like encryption, endpoint detection, SIEM, and auto-backups. Safeguarding information assets and the research IP is at the heart of our life sciences IT services." },
  { q: "Q8. How long does a life sciences software project take?", a: "Timelines are scope. A single LIMS or CTMS module can go live in 10-14 weeks. Entire platform build and multi-system integration can take 4-8 months. We provide a timeline before we begin." },
  { q: "Q9. Do you provide support after deployment?", a: "Yes. Our solutions, which span training, documentation, and ongoing support, are there for you and your research throughout your growth and change in the labs and the regulations." },
  { q: "Q10. How do I start with Capyngen's life sciences software development team?", a: "Contact us via our contact form below. We will then book a discovery call to discuss your research, compliance, or platform problem and map out a pragmatic way forward with no obligation." },
];
function MissionIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{name === "plant" ? <path d="M12 21V10m0 5C4 15 3 9 4 5c6-1 9 3 8 10Zm0-3c0-7 4-10 9-10 1 6-2 10-9 10ZM7 21h10" /> : name === "waves" ? <path d="M3 5c3-4 5 4 9 0s6 4 9 0M3 12c3-4 5 4 9 0s6 4 9 0M3 19c3-4 5 4 9 0s6 4 9 0" /> : <><circle cx="8" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" /><path d="M2 21v-5a6 6 0 0 1 12 0v5H2Zm12-9a5 5 0 0 1 8 4v5h-8M6 16v5m4-5v5m8-5v5" /></>}</svg>;
}

export default function LifeScienceSections() {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function updateEdges() {
    const element = track.current;
    if (!element) return;
    const next = { start: element.scrollLeft <= 2, end: element.scrollLeft >= element.scrollWidth - element.clientWidth - 2 };
    setEdges(previous => previous.start === next.start && previous.end === next.end ? previous : next);
  }
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  function scroll(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? element.clientWidth) + 22), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return <div className={s.root}>
    <section className={s.destinations} aria-labelledby="life-destinations-heading"><div className={s.sectionTop}><div><span className={s.eyebrow}>CLINICAL DISCOVERY · LABORATORY OPERATIONS</span><h2 id="life-destinations-heading" className={s.title}>Life Sciences <em>Software Solutions</em></h2></div><p>Platforms for driving clinical discovery, laboratory operations, and healthcare.</p><div className={s.arrows}><button type="button" aria-label="Previous solutions" aria-controls="life-destination-track" disabled={edges.start} onClick={() => scroll(-1)}>←</button><button type="button" aria-label="Next solutions" aria-controls="life-destination-track" disabled={edges.end} onClick={() => scroll(1)}>→</button></div></div><div id="life-destination-track" ref={track} className={s.destinationTrack} onScroll={updateEdges} role="region" aria-roledescription="carousel" aria-label="Life sciences software solutions" tabIndex={0} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); scroll(event.key === "ArrowRight" ? 1 : -1); } }}>
      {solutions.map((item, i) => <article key={item.title} className={s.destinationCard}><Link href="/contact-us" className={s.destinationPhoto} aria-label={`Contact us about ${item.title}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 80vw, (max-width: 1000px) 45vw, 33vw" /><span className={s.place}>✳ {item.place}</span></Link><div className={s.cardCopy}><div className={s.tripMeta}><span>SOFTWARE SOLUTION</span><span aria-hidden="true">0{i + 1}</span></div><h3 className={s.cardTitle}>{item.title}</h3></div></article>)}
    </div></section>

    <section className={s.mission} aria-labelledby="life-mission-heading"><div className={s.missionCopy}><span className={s.eyebrow}>CHALLENGES</span><h2 id="life-mission-heading" className={s.title}>Challenges Facing <br />Life Sciences <br /><em>Technology Solutions</em></h2><p>{challengeText}</p><div className={s.missionActions}><Link href="/contact-us" className={s.primary}>Contact Us <span aria-hidden="true">→</span></Link></div></div><div className={`${s.missionCards} ${s.fourCards}`}>{challenges.map(item => <div key={item.title} className={s.missionCard}><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 80vw, 25vw" /><span className={s.missionShade} /><span className={s.missionContent}><span className={s.missionIcon}><MissionIcon name={item.icon} /></span><h3 className={s.cardTitle}>{item.title}</h3><span className={s.missionDescription}>{item.text}</span></span></div>)}</div></section>

    <section className={s.discovery} aria-labelledby="life-discovery-heading"><div className={s.discoveryCopy}><span className={s.eyebrow}>WHY CAPYNGEN</span><h2 id="life-discovery-heading" className={s.title}>Why Capyngen for <br />Life Sciences <em>Software Development?</em></h2><p>Reliable healthcare platforms from clinical domain expertise combined with cutting-edge engineering:</p><div className={s.commitments}>{reasons.map(item => <span key={item}>{item}</span>)}</div><Link href="/contact-us" className={s.primary}>Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.discoveryCollage}><div className={s.hikerPhoto}><Image src="/images/application-solutions/hiker.webp" alt="Clinical domain expertise" fill sizes="(max-width: 700px) 65vw, 35vw" /><span>Clinical domain expertise.</span></div><div className={s.couplePhoto}><Image src="/images/industries/manufacturing-travellers.png" alt="Cutting-edge engineering" fill sizes="(max-width: 700px) 65vw, 35vw" /><span>Cutting-edge engineering.</span></div><span className={s.collageMark} aria-hidden="true">✳</span></div></section>

    <section className={s.faq} aria-labelledby="life-faq-heading"><span className={s.eyebrow}>LIFE SCIENCE SOFTWARE DEVELOPMENT</span><h2 id="life-faq-heading" className={s.title}>Frequently Asked <em>Questions</em></h2><div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
  </div>;
}
