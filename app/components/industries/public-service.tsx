"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "./public-service.module.css";

const photos = {
  pillars: "/images/public-service/stone-pillars.jpg",
  forest: "/images/public-service/forest.jpg",
  waterfall: "/images/public-service/waterfall.jpg",
  lake: "/images/consulting/alpine-lake.jpg",
  mountains: "/images/destinations/swiss-alps.webp",
  village: "/images/enterprise-solutions/toraja-houses.webp",
};
const services = [
  { title: "Citizen Portals", text: "Consistent access to portals, scheduling and public information." },
  { title: "Smart City Platforms", text: "Built for citywide throughput and non-stop reliability." },
  { title: "Public Finance ERP", text: "Shared IT solutions that break down silos." },
  { title: "E-Government Apps", text: "Online digitised requests instead of paper-based delays." },
];
const practical = [
  { title: "Streamline Government Workflows", text: "Connect collaboration and communication with unified repositories and communications. Speed up paper-based delays with online digitised requests." },
  { title: "Support Citizen Services", text: "Help, if needed, to provide consistent access to portals, scheduling systems and public information so citizens can most effectively use government services. Good infrastructure allows agencies to provide consistent service to the communities they serve." },
  { title: "Standardise Department Systems", text: "Break down silos and eliminate entry or conflicting records via shared IT solutions. Processes are also standardised and manual work is reduced when individual departments have access to common tools." },
  { title: "Prepare Long-Term Systems", text: "Scale our public sector IT offerings as your users and transactions grow. They adapt easily to new industry standards and are monitored to last." },
];
const modernisation = [
  { title: "Cloud Solutions for Government Strategy", image: photos.lake, text: "We analyse your current environment and determine which workloads can run in the cloud. Migrate: We develop a migration plan, provision cloud resources, and migrate systems to the cloud in stages to ensure continuous service." },
  { title: "Hybrid and Legacy System Support", image: photos.waterfall, text: "Stuck on legacy systems? Capyngen assists in sustaining existing operational systems in terms of stability, security, and performance while preparing them for modernisation. Supports monitoring, patching, and identifying risks, leading to fewer disruptions." },
];
const solutions = ["Public Sector ERP Solutions", "Citizen Service Portals", "E-Government Solutions", "Smart City Platforms", "Healthcare IT for Government", "Education & Learning Portals", "Transport & Mobility IT", "Utility Management Software", "Public Safety & Emergency Response Systems"];
const features = [
  { title: "Transparency & Auditability", image: photos.village, text: "Clear audit trail and dashboards readily available to the public to ensure trust." },
  { title: "Scalability", image: photos.forest, text: "Support for use across the city and a nationwide rollout." },
  { title: "Industry-specific Security & Compliance", image: photos.mountains, text: "Encryption, access control by role, and compliance matrix for local laws and standards." },
  { title: "Integration", image: photos.waterfall, text: "Modernise legacy systems by connecting APIs and data platforms." },
];
const steps = [
  { title: "Consultation & Needs Capture", text: "Identify policy goals, data policies, and citizen needs." },
  { title: "Design & Compliance Planning", text: "Architecture, security, and accessibility (WCAG) design, like UI/UX design for a government website." },
  { title: "Development & Integration", text: "Secure coding, API integration and legacy migration." },
  { title: "Testing & Certification", text: "Comprehensive testing of performance, security, and accessibility to meet audit standards." },
  { title: "Deployment & Training", text: "Staged rollout, admin training and change management." },
  { title: "Operate & Optimize", text: "Iterative feature delivery through monitoring and analytics." },
];
const reasons = [
  { title: "Proven Results", text: "Providing our public sector customers with the best IT solutions with measurable improvement in service delivery." },
  { title: "End-to-End Delivery", text: "Strategic UI/UX design of public sector websites, build, deployment and 24/7 support." },
  { title: "Custom & Secure", text: "We create tailored software solutions more exactly for public sector workflows, rather than offering generic, one-size-fits-all products." },
];
const faqs = [
  { q: "Q1. What makes Capyngen a reliable public sector software development partner?", a: "We leverage governance expertise and engineering with a compliance-first approach. As a public sector software development partner, we develop systems that mimic government operations, approvals, audits, citizen data, and the structure of departments." },
  { q: "Q2. What is included in your public sector IT services?", a: "Public sector IT services include citizen portals, ERP, smart city platforms, e-governance, cloud modernisation and long-term support. Every solution is delivered to ensure business continues as usual." },
  { q: "Q3. Do you provide custom public service software development?", a: "Yes. Our public safety team develops citizen service portals, utility management software, transportation solutions, and public safety applications tailored to your department's policies and operational procedures." },
  { q: "Q4. What are public sector software solutions for large agencies?", a: "Our public sector software solutions manage city-wide transaction volumes, support multi-department access roles, and comply with strict audit requirements. They are designed to scale from a single municipal entity to a nationwide deployment." },
  { q: "Q5. Can you modernise legacy government systems without downtime?", a: "Yes. We maintain hybrid and legacy estates while phased modernisation is completed. Services are live while we migrate data and clients, and stability is ensured by monitoring and patch management." },
  { q: "Q6. How do you handle security and compliance in government projects?", a: "Security at every level: encryption, role-based access controls, and audit trails, mapped to local laws and standards. Security and accessibility testing is part of our government software development process and is conducted before deployment." },
  { q: "Q7. What are government IT solutions for citizen-facing services?", a: "Our solutions for government IT comprise of citizen portals, scheduling, and appointment applications, access to public records, and e-governance applications so citizens can do stuff online instead of being in an office." },
  { q: "Q8. Do you follow accessibility standards for government websites?", a: "Yes. WCAG accessibility standards are taken into account when we are creating content so that the digital platform is accessible to citizens with disabilities. Accessibility is checked at the testing stage, not assumed." },
  { q: "Q9. How long does a public sector software project take?", a: "Timeframes scope. A citizen portal alone takes 1014 weeks to deploy. In comparison, comprehensive smart city platforms or ERP with multiple departments require 610 months to implement in phases." },
  { q: "Q10. How do I start with Capyngen's public sector software development team?", a: "Contact us via our form. We will arrange a meeting to understand policy goals, citizen needs, and data regulations, then formulate a realistic delivery plan free of charge." },
];

function Leaf({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 62 52" fill="none" aria-hidden="true"><path d="M30 39C2 45 6 16 25 4c7 15 12 25 5 35Z" fill="#a9c654" /><path d="M24 43C18 17 48 30 59 14c6 25-10 41-35 29Z" fill="#6c9c49" /><path d="M17 47c7-9 13-16 25-21" stroke="#789a42" strokeWidth="2" strokeLinecap="round" /></svg>;
}
function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return <div className={`${s.photo} ${className}`}><Image src={src} alt={alt} fill preload={priority} sizes="(max-width: 700px) 100vw, 60vw" /></div>;
}
function Heading({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return <div className={s.sectionHeading}><h2 id={id} className={s.title}>{title}</h2><p>{subtitle}</p><span aria-hidden="true" /></div>;
}

export default function PublicServiceExperience() {
  const [selected, setSelected] = useState(0);
  return <div className={s.page}>
    <svg className={s.clipDefinitions} aria-hidden="true"><defs><clipPath id="public-hero-curve" clipPathUnits="objectBoundingBox"><path d="M.08 0H1V.66C1 .88 .7 .86 .68 1C.48 .95 .8 .45 .46 .39C.15 .35 .17 .13 .08 0Z" /></clipPath><clipPath id="public-contents-curve" clipPathUnits="objectBoundingBox"><path d="M.35 0H1V1H.1C-.15 .78 .43 .72 .24 .49C.07 .29 .15 .31 .35 0Z" /></clipPath><clipPath id="public-panorama-curve" clipPathUnits="objectBoundingBox"><path d="M0 0H1V.81C.89 .98 .78 .76 .65 .86C.43 1 .29 .59 .13 .73C.06 .79 .02 .72 0 .67Z" /></clipPath></defs></svg>
    <main id="main-content" tabIndex={-1}>
      <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="public-title"><Photo src={photos.pillars} alt="Public service software development" className={s.heroPhoto} priority /><div className={s.heroCopy}><Leaf className={s.heroLeaf} /><p className={s.heroLabel}>Public Sector</p><h1 id="public-title" className={s.longTitle}><em>Public Service</em><br />Software Development</h1><p className={s.heroSubtitle}>Capyngen brings digital transformation and technology-based solutions to public sector organisations, enabling governance, municipal efficiency, and Citizen engagement.</p><Link href="#public-contents" className={s.primary}>Explore solutions <span aria-hidden="true">↗</span></Link><span className={s.heroSignature}>CAPYNGEN / PUBLIC SERVICE</span></div></section>

      <section id="public-contents" className={`${s.section} ${s.contents}`} aria-labelledby="public-contents-title"><div className={s.contentsCopy}><span className={s.eyebrow}>GOVERNANCE. EFFICIENCY. ENGAGEMENT.</span><h2 id="public-contents-title" className={s.title}>Modern Public IT Services</h2><nav aria-label="Modern public IT services">{services.map((item, index) => <a href="#public-solutions" key={item.title}><span>{String(index + 1).padStart(2, "0")}.</span><div><strong>{item.title}</strong><p>{item.text}</p></div><b aria-hidden="true">↗</b></a>)}</nav></div><Photo src={photos.waterfall} alt="Modern public IT services" className={s.contentsPhoto} /></section>

      <section id="public-natural-world" className={s.chapter} aria-labelledby="public-chapter-title"><Photo src={photos.lake} alt="Transform public services with innovations" className={s.panorama} /><div className={s.chapterCopy}><span className={s.chapterLabel}>INNOVATIONS</span><h2 id="public-chapter-title" className={s.title}>Transform Public Services <br /><em>With Innovations</em></h2><p>Governments may improve citizens&apos; access to services, simplify them and use digital technology to provide these services.</p></div></section>

      <section id="public-principles" className={`${s.section} ${s.principles}`} aria-labelledby="public-principles-title"><Heading id="public-principles-title" title="Practical Technology Solutions for the Public Sector" subtitle="Government agencies have control over critical infrastructure and public trust." /><Photo src={photos.forest} alt="Practical technology solutions for the public sector" className={s.forestBanner} /><div className={s.principleGrid}>{practical.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section id="public-places" className={`${s.section} ${s.places}`} aria-labelledby="public-places-title"><Heading id="public-places-title" title="Government IT Infrastructure and Network Modernisation" subtitle="Capyngen assists public agencies in balancing innovative solutions with operational stability." /><div className={s.placeGrid}>{modernisation.map(item => <Link href="/contact-us" className={s.placeCard} key={item.title} aria-label={`Contact us about ${item.title}`}><div className={s.placePhoto}><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 90vw, 50vw" /><h3>{item.title}</h3></div><p>{item.text}</p><span>Contact Us <b aria-hidden="true">↗</b></span></Link>)}</div></section>

      <section id="public-solutions" className={`${s.section} ${s.reflection}`} aria-labelledby="public-reflection-title"><div><span className={s.eyebrow}>LOCAL, REGIONAL AND NATIONAL GOVERNMENT</span><h2 id="public-reflection-title" className={s.title}>Public Sector <br /><em>Solutions We Offer</em></h2><span className={s.reflectionMark} aria-hidden="true">✦</span><p>End-to-end, open, and modular software architecture for the public sector, built more exactly for local, regional, and national government.</p><ul className={s.solutionList}>{solutions.map(item => <li key={item}>{item}</li>)}</ul><Link href="/contact-us" className={s.textLink}>Contact Us <span aria-hidden="true">↗</span></Link></div><Photo src={photos.lake} alt="Public sector solutions we offer" className={s.reflectionPhoto} /></section>

      <section id="public-connections" className={`${s.section} ${s.connections}`} aria-labelledby="public-connections-title"><Heading id="public-connections-title" title="Features of Public Sector IT Solutions" subtitle="Built for citywide throughput, comprehensive role-based access and non-stop reliability." /><div className={s.connectionGrid}>{features.map(item => <div key={item.title}><Photo src={item.image} alt={item.title} /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></section>

      <section id="public-beyond" className={`${s.section} ${s.beyond}`} aria-labelledby="public-beyond-title"><Heading id="public-beyond-title" title="How We Implement Public Sector Projects" subtitle="A risk-reduced, time-to-value-focused consumption model that enables more engagement for government stakeholders." /><div className={s.diagram}><svg viewBox="0 0 1000 510" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M250 75H405V255h190V75h155M250 255h500M250 435h155V255h190v180h155" stroke="#a4b594" strokeWidth="2" /></svg><div className={s.diagramGrid}>{steps.map((item, index) => <button type="button" key={item.title} className={s["node" + index]} aria-pressed={selected === index} onClick={() => setSelected(index)}><strong>Step {String(index + 1).padStart(2, "0")}</strong><span>{item.title}</span></button>)}<div className={s.hub}><Leaf /><strong>Implement</strong><span>Risk-reduced.<br />Time-to-value focused.</span></div></div></div><div className={s.beyondDetail} aria-live="polite" aria-atomic="true"><strong>{steps[selected].title}</strong><p>{steps[selected].text}</p></div></section>

      <section className={`${s.section} ${s.perspective}`} aria-labelledby="public-perspective-title"><Heading id="public-perspective-title" title="Why Choose Capyngen for Public Sector IT?" subtitle="We offer transparent governance, robust security measures, and ongoing assistance in our government interactions:" /><div className={s.perspectiveBody}><div><span className={s.smallLeaf} aria-hidden="true">✦</span><h3>Transparent governance. <br /><em>Robust security.</em></h3>{reasons.map(item => <p key={item.title}><strong>{item.title}</strong><br />{item.text}</p>)}<Link href="/contact-us" className={s.textLink}>Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.natureMosaic}><span>Proven results.</span><Photo src={photos.mountains} alt="Proven results for public sector customers" /><Photo src={photos.forest} alt="End-to-end delivery" /><span>End-to-end delivery.</span><span>Custom &amp; secure.</span><Photo src={photos.pillars} alt="Custom and secure public sector software" /></div></div></section>

      <section className={`${s.section} ${s.future}`} aria-labelledby="public-future-title"><Heading id="public-future-title" title="Deliver Public Services Without Operational Uncertainty" subtitle="Modernise government systems without breaking continuity." /><div className={s.futureBody}><div><h3>Modernise government systems without breaking continuity.</h3><span className={s.eyebrow}>INFRASTRUCTURE. INTEGRATION. CONTINUITY.</span><p>Capyngen supports infrastructure, integrating systems, and making sure services remain constant while you scale up to exceed public demand.</p><Link href="/contact-us" className={s.primary}>Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.futureGrid}><article><span /><h3>Services remain constant.</h3><p>Supporting infrastructure and integrating systems without breaking continuity.</p></article><Photo src={photos.mountains} alt="Government systems modernisation" /><Photo src={photos.waterfall} alt="Integrated public sector systems" /><article><span /><h3>Scale to public demand.</h3><p>Services that keep pace while you scale up to exceed public demand.</p></article></div></div></section>

      <section className={`${s.section} ${s.faq}`} aria-labelledby="public-faq-title"><Heading id="public-faq-title" title="Frequently Asked Questions" subtitle="Public sector software development" /><div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
    </main>
  </div>;
}
