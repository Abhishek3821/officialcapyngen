"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "./healthcare-sections.module.css";

const technologies = [
  { title: "AI & Machine Learning", icon: "globe", text: "The primary areas where AI is applied in healthcare include predictive health analytics and the customisation of healthcare services." },
  { title: "Cloud Platforms", icon: "sea", text: "Cloud platforms provide hospitals and gyms with a platform for safely storing and administering their information and also offering scalability of their services to their customers." },
  { title: "Data Security & HIPAA Compliance Tools", icon: "ship", text: "These are safety procedures networks to guarantee discretion, and augment the trustworthiness of doctors and their customers." },
  { title: "IoT & Wearables Integration", icon: "mountain", text: "A remote patient monitoring system is an IoT and wearable device integration example." },
];
const pins = [
  { name: "EHR Systems", x: 24, y: 32 },
  { name: "Payment Systems", x: 51, y: 28 },
  { name: "Wearable Devices", x: 74, y: 35 },
  { name: "Telemedicine", x: 34, y: 66 },
  { name: "Cloud Platforms", x: 86, y: 76 },
];
const integrations = [
  { title: "Electronic Health Record (EHR) Systems", text: "Protect patient records linked through clinical processes." },
  { title: "Payment Systems", text: "Simplified member billing and subscriptions." },
  { title: "Wearable Device Integrations", text: "Health metrics from health trackers synced live." },
];
const audiences = [
  { name: "Hospitals", image: "/images/healthcare-fitness/cycling-road.jpg", text: "From hospital systems to clinics." },
  { name: "Pharmacies", image: "/images/healthcare-fitness/cycling-adventure.jpg", text: "From pharmacies to gym chains." },
  { name: "Practitioners", image: "/images/healthcare-fitness/cycling-rider.jpg", text: "From gym chains to sole practitioners." },
];
const reasons = [
  { name: "Proven Expertise", subtitle: "01", icon: "mountain", text: "Vast experience creating HIPAA-compliant healthcare software.", features: ["In-depth knowledge of healthcare data regulations", "Audit-ready development processes", "Security built into every layer"] },
  { name: "Tailored Solutions", subtitle: "02", icon: "sea", text: "IT solutions that are flexible, scalable and secure.", features: ["Tailored to your clinical workflows", "Uses accumulated patient data to predict need", "Enterprise-grade security standards"] },
  { name: "Track Record", subtitle: "03", icon: "route", text: "Capyngen's work covers the areas of healthcare app development and the fitness industry.", features: ["Healthcare app development experience", "Fitness and wellness platform delivery", "Cross-domain healthcare knowledge"] },
  { name: "Lifecycle Support", subtitle: "04", icon: "shirt", text: "Guidance throughout every phase: strategy, implementation, and the product's evolution.", features: ["Strategy and planning guidance", "Full implementation support", "Continuous product improvement"] },
];
const supportText = "Our key focus is on Healthcare & Fitness IT. We have operational experience working with EHRs, HIPAA-compliant telemedicine and wearable technology. From hospital systems to clinics and from pharmacies to gym chains and sole practitioners, we understand the pressure you face around compliance and the need to be online and available. Our managed IT services for healthcare and fitness organisations deliver greater efficiency, data security and audit-readiness.";
const faqs = [
  { q: "Q1. What makes Capyngen a reliable healthcare and fitness software development company?", a: "Established knowledge of clinical workflows coupled with compliance-first engineering. As a healthcare and fitness software development company, we design your platform based on how clients, patients, and gym members actually use it, not a template." },
  { q: "Q2. What is included in your healthcare and fitness IT services?", a: "Our services for healthcare and fitness include hospital management software, telemedicine software, patient management software, digital fitness apps and managed support. We focus on reducing admin, as well as keeping information safe and secure." },
  { q: "Q3. Do you build custom healthcare and fitness platforms?", a: "Yes. Our healthcare and fitness app developers craft hospital management software, telemedicine apps, fitness, and patient management apps. We develop all products from scratch based on your workflows, needs, and existing systems." },
  { q: "Q4. Which healthcare and fitness technology solutions do you offer?", a: "Health and fitness technology solutions we provide - get EHR integration ensure seamless integration of wearable technology data with existing systems - secure telemedicine solutions - sync smart wearable data - custom AI-enabled health analytics - cloud infrastructure catering to HIPAA and GDPR compliance." },
  { q: "Q5. Can you integrate with our existing EHR and CRM systems?", a: "Yes. We integrate the new solution with your current EHR, CRM, payment gateways, and wearables, so data is synchronised across clinical and fitness functions." },
  { q: "Q6. How do you handle HIPAA and data privacy compliance?", a: "Compliance is built into the architecture from day one: audit trails, role-based access, encryption, and secure data handling. Our healthcare and fitness software development process includes compliance validation before launch." },
  { q: "Q7. Do you develop telemedicine and remote patient monitoring platforms?", a: "Yes. We develop secure online platforms that enable video consultation, appointment scheduling, and remote patient monitoring. We are taking the security of telemedicine platforms very seriously and consider it a core feature and not an afterthought." },
  { q: "Q8. How long does a healthcare and fitness software project take?", a: "Timelines are based on scope. A single-purpose fitness or patient portal app will launch in 8-12 weeks. End-to-end hospital management systems with EHR integrations average 4-8 months. We are transparent about our timelines upfront." },
  { q: "Q9. Do you provide support after deployment?", a: "Yes, all of our healthcare and fitness IT services provide for elements of monitoring, security patching, performance tuning, and feature updates. We continue to stay engaged as rules and devices evolve." },
  { q: "Q10. How do I start with Capyngen's healthcare and fitness software development team?", a: "Contact us using our contact form. We will set up a discovery call to learn your clinical, fitness, or compliance pain points and provide you with a real-world roadmap at no cost." },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18ZM5 7h14M5 17h14",
    sea: "M3 18c3-3 4 3 8 0s5 3 10 0M3 22c3-3 4 3 8 0s5 3 10 0M6 14h12M7 14V8h10v6M9 8V3h6v5M6 3h12M12 3v11",
    ship: "M3 14 12 10l9 4-3 6H6l-3-6ZM7 12V6h10v6M10 6V2h4v4M12 10v10M2 22c3-3 5 3 10 0s7 3 10 0",
    mountain: "m2 21 7-14 5 10 4-9 5 13H2ZM6 13l3 2 3-2M16 12l2 2 2-2",
    route: "M6 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm18-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 15V7c0-6 10 4 10-2m8 4v8c0 6-10-4-10 2",
    shirt: "m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4c0 5-8 5-8 0Z",
  };
  return <svg viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.globe} /></svg>;
}

function WorldMap() {
  return <svg viewBox="0 0 600 330" fill="none" role="img" aria-label="Illustrated world map"><defs><linearGradient id="health-map-colour" x1="80" y1="20" x2="550" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#c3cbb7" /><stop offset=".5" stopColor="#6d8273" /><stop offset="1" stopColor="#a3ac94" /></linearGradient><filter id="health-map-texture" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="3" seed="8" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="5" /></filter></defs><g fill="url(#health-map-colour)" filter="url(#health-map-texture)" opacity=".9"><path d="m32 66 22-17 23 1 11-19 28 6 15-12 41 13 12 20 32 7-6 17-24 3-14 23-25 5-7 18-19 5-2 21 19 20 9 16-15 2-17-18-15-13-21-6-9-24-18-8-9-23-15-7Z" /><path d="m190 27 25-14 30 7-8 22-24 14-20-9Z" /><path d="m162 171 28-1 30 18 23 20-8 29-17 13-7 27-19 26-12-5 4-22-10-26-10-21-7-30Z" /><path d="m277 80 10-16 16 1 6-13 24-4 7-18 15 8-3 17 19-9 19 2 25-10 34 7 17-8 41 17 22 18 26 3 18 16-6 12-23-1-2 16-23 7-9 19-18 5-11 23-16-7-5 17-20-4-4-23-14-13-6-23-12-1-8 11-25-9-12-12-21 1-7-13-15 1-12-9Z" /><path d="m285 116 20-3 26 10 9 22 18 19-10 20-5 29-18 28-17-4-7-31-11-22-18-16-5-22Z" /><path d="m364 182 10 6-4 26-10 9-3-18Z" /><path d="m437 161 12 3 11 25 17 7 4 11-13 2-14-12-7-15Z" /><path d="m480 219 28-16 36 12 10 21-8 18-21-5-12 9-27-13Z" /><path d="m558 260 9-3 6 16-12 15-9-4Z" /><path d="m510 110 6 6-3 18-9 7-2-11Z" /><path d="m45 312 40-7 61 5 40-3 55 7 43-3 49 5 34-7 51 4 31-6 56 8 53-5 20 9-27 10H62Z" /></g><g stroke="#c7cdbf14" strokeWidth="1"><path d="M0 100h600M0 165h600M0 230h600" /><ellipse cx="300" cy="165" rx="170" ry="160" /><ellipse cx="300" cy="165" rx="270" ry="160" /></g></svg>;
}

export default function HealthcareSections() {
  const [tab, setTab] = useState(0);
  return <div className={s.root}>
    <section className={s.tours} aria-labelledby="health-tours-heading"><span className={s.eyebrow}>HEALTHCARE &amp; FITNESS TECHNOLOGY</span><h2 id="health-tours-heading" className={s.title}>Technologies <em>We Use</em></h2><div className={s.tourGrid}>{technologies.map(item => <div key={item.title} className={s.tourCard}><Icon name={item.icon} /><h3 className={s.cardTitle}>{item.title}</h3><p>{item.text}</p></div>)}</div></section>

    <section className={s.explore} aria-labelledby="health-explore-heading"><div className={s.exploreHeading}><span className={s.eyebrow}>CONNECTED ACROSS CLINICAL AND FITNESS FUNCTIONS</span><h2 id="health-explore-heading" className={s.title}>Healthcare &amp; Fitness <em>Apps We Integrate</em></h2></div><div className={s.exploreBody}><ol className={s.exploreSteps}>{integrations.map((item, index) => <li key={item.title}><span>{index + 1}</span><div><h3 className={s.cardTitle}>{item.title}</h3><p>{item.text}</p></div></li>)}</ol><div className={s.worldMap}><WorldMap />{pins.map(pin => <span className={s.mapPin} key={pin.name} style={{ left: `${pin.x}%`, top: `${pin.y}%` }}><span aria-hidden="true">●</span><b>{pin.name}</b></span>)}<span className={s.mapCaption}>Health metrics synced live across every system.</span></div></div></section>

    <section className={s.club} aria-labelledby="health-club-heading"><div className={s.clubTop}><div className={s.clubIntro}><span className={s.clubBadge}>SAFE, SECURE, AND ALWAYS ON</span><h2 id="health-club-heading" className={s.title}>IT Support for <br />Healthcare &amp; Fitness: <br /><em>Safe, Secure, and Always On</em></h2><p>{supportText}</p><Link href="/contact-us" className={s.primary}>Contact Us <span aria-hidden="true">↗</span></Link></div><div className={s.clubMainPhoto}><Image src="/images/healthcare-fitness/cycling-road.jpg" alt="IT support for healthcare and fitness" fill sizes="(max-width: 700px) 60vw, 35vw" /></div><div className={s.clubSidePhoto}><Image src="/images/healthcare-fitness/cycling-rider.jpg" alt="Managed IT services for fitness organisations" fill sizes="(max-width: 700px) 35vw, 20vw" /></div></div><div className={s.clubBottom}><div className={s.rideStory}><p>{audiences[tab].text}</p><div className={s.rideImage}><Image src={audiences[tab].image} alt={audiences[tab].name} fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div className={s.rideTabs} role="group" aria-label="Who we support">{audiences.map((item, index) => <button key={item.name} type="button" aria-pressed={tab === index} onClick={() => setTab(index)}>{item.name}</button>)}</div></div><div className={s.clubHighlights}><span className={s.eyebrow}>MANAGED IT SERVICES</span><h3 className={s.highlightTitle}>Greater efficiency, data security <br />and audit-readiness.</h3><p>We understand the pressure you face around compliance and the need to be online and available.</p><div className={s.stats}><div><strong>04</strong><span>Complete IT services</span></div><div><strong>05</strong><span>Development stages</span></div><div><strong>03</strong><span>App integrations</span></div></div></div></div></section>

    <section className={s.memberships} aria-labelledby="health-memberships-heading"><div className={s.membershipHeading}><div><span className={s.eyebrow}>WHY CAPYNGEN</span><h2 id="health-memberships-heading" className={s.title}>Why Choose <em>Capyngen?</em></h2></div><p>The reliable tech partner of choice for hospital-grade stability and HIPAA-compliant product development:</p></div><div className={s.membershipGrid}>{reasons.map((item, index) => <article key={item.name} className={`${s.membershipCard} ${index === 3 ? s.featuredCard : ""}`}><div className={s.membershipTop}><Icon name={item.icon} /><span className={s.cardNumber}>{item.subtitle}</span></div><h3 className={s.cardTitle}>{item.name}</h3><p>{item.text}</p><ul>{item.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><div className={s.membershipActions}><Link href="/contact-us" aria-label={`Contact us about ${item.name}`}>Contact Us <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>

    <section className={s.faq} aria-labelledby="health-faq-heading"><span className={s.eyebrow}>HEALTHCARE &amp; FITNESS SOFTWARE DEVELOPMENT</span><h2 id="health-faq-heading" className={s.title}>Frequently Asked <em>Questions</em></h2><div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
  </div>;
}
