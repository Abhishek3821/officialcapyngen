"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "./insurance.module.css";

const photos = {
  hero: "/images/insurance/photographer.jpg",
  coast: "/images/manufacturing-travel/santorini.jpg",
  hiker: "/images/application-solutions/hiker.webp",
  mountain: "/images/destinations/swiss-alps.webp",
  skyline: "/images/insurance/skyline.jpg",
  city: "/images/insurance/city-night.jpg",
  meeting: "/images/company-overview-meeting.webp",
};
const sectorsText = "As an custom insurance software development services company, we build InsurTech solutions that deliver a seamless, next-gen insurance shopping experience across various domains.";
const sectors = [
  { icon: "spark", name: "InsurTech Startups", text: "Quick go-to-market" },
  { icon: "building", name: "Insurance Companies", text: "Next-gen insurance shopping" },
  { icon: "people", name: "Corporate Clients", text: "Seamless experience" },
];
const uiuxText = "We focus on creating user-centric designs for seamless and engaging insurance software interfaces. Our UI/UX experts craft intuitive navigation and visually appealing elements, ensuring an optimal user experience across all devices and insurance platforms.";
const customText = "Leveraging the latest technologies, our experienced developers create high-performance, secure, and scalable insurance solutions. From policy management to claims processing, we integrate advanced features that streamline operations, enhance customer engagement, and improve service delivery.";
const focusAreas = [
  { name: "Commercial", text: "Automate front, middle, and back-office processes to lower costs, increase efficiency, improve outcomes, and deliver personalized experiences." },
  { name: "Personal Lines", text: "Enable seamless omnichannel experiences with our insurance technology services and solutions. Digitalize and streamline the entire policy lifecycle." },
  { name: "Life Insurance", text: "Increase responsiveness, reduce complexity, mitigate risks, and drive growth by digitally transforming your life insurance technology ecosystem." },
];
const trustedText = "Transform your insurance operations with Capyngen's cutting-edge digital platforms. We engineer customized policy administration portals, automated claims settlement systems, and scalable InsurTech mobile applications.";
const trusted = [
  { name: "Compliance Assured", text: "Strict compliance with GDPR, HIPAA, KYC, AML, and insurance regulatory standards." },
  { name: "AI Fraud Detection", text: "Automated claims verification and real-time fraud pattern detection with AI." },
];
const technologies = [
  { icon: "gear", name: "Robotic Process Automation (RPA)" },
  { icon: "chat", name: "AI Chatbot Integration" },
  { icon: "chain", name: "Blockchain in Insurance" },
  { icon: "cloud", name: "Cloud Integration" },
  { icon: "diamond", name: "Web3 & InsurTech Solutions" },
  { icon: "chart", name: "Predictive Analytics for Risk Assessment" },
];
const capabilities = ["Insurance App Consultation", "Custom Insurance Software Solutions", "Digital Transformation for Insurance Companies", "Mobile Insurance Development", "Blockchain Integration", "Regulatory Compliance Solutions", "Business Intelligence Integration", "Cybersecurity Solutions", "Insurance CRM System"];
const solutions = [
  { icon: "phone", name: "Cellular Insurance Apps", text: "Mobile apps for policies, claims, and fraud detection." },
  { icon: "review", name: "Policy Management System", text: "Automates the full policy lifecycle, from creation to renewal." },
  { icon: "shield", name: "Claims Management System", text: "Fast claim submission, fraud checks, and payments." },
  { icon: "people", name: "Insurance CRM Solutions", text: "Personalized service with integrated customer tracking tools." },
  { icon: "heart", name: "Health & Life Insurance Software", text: "AI-powered reporting and analytics for insurers." },
  { icon: "building", name: "Insurance ERP Development", text: "Unifies agents, customers, policies, and compliance in one place." },
];
const reasons = [
  { icon: "target", name: "Customer-Specific Solutions" },
  { icon: "spark", name: "Cutting-Edge Technology" },
  { icon: "shield", name: "Robust Security" },
  { icon: "review", name: "Trusted Experience" },
];
const faqs = [
  { q: "What makes Capyngen a reliable insurance software development company?", a: "We marry financial expertise with engineering to ensure a compliance-first approach. We design and build insurance software platforms that mirror the day-to-day reality of the insurance industry and our clients' operations from policy administration to claims management." },
  { q: "What is included in your insurance IT services?", a: "Our insurance IT solutions include cloud-based policy administration, claims management CRM mobile applications, ERP, and compliance. At every step, we focus on simplifying operations and making the life of policyholders easier." },
  { q: "Do you build custom insurance software solutions?", a: "Yes. Our insurance software solutions are built around your product lines, underwriting rules, and distribution channels. We handle policy management, claims processing, and customer engagement in one connected system." },
  { q: "What are insurance technology solutions for InsurTech startups?", a: "InsurTech Startups Insurtechs require technology solutions that enable quick go-to-market, digital-first customer journeys, and scalable infrastructure. We build scalable full-platform solutions or MVPs that scale with your funding stages and expansion plans." },
  { q: "Do you provide InsurTech software development for established insurers?", a: "Yes. Our InsurTech development team update existing legacy systems, bring together digital channels, and deploy AI-powered claims and fraud management tools without interrupting the live business." },
  { q: "How do you handle regulatory compliance like GDPR, HIPAA, KYC, and AML?", a: "Audit reporting Compliant from day one. Our entire insurance software development process includes audit trails, role-based access, encryption, and reporting to ensure regulatory compliance (GDPR HIPAA KYC, AML)." },
  { q: "Can you build insurance application development for mobile?", a: "YES. We develop applications for your insurance plan holder, and agents, and submission applications for claims submissions. The applications are biometric login enabled, have real-time tracking, and allow users to upload documents." },
  { q: "How does AI help in claims processing and fraud detection?", a: "AI for fraud detection our algorithms are used to automatically verify claims, check for patterns in fraudulent behaviour and evaluate the risks involved in a claim. This speeds up manual review and enables insurers to pay out genuine claims more quickly." },
  { q: "How long does an insurance software project take?", a: "Timelines are scoped. Claims-only module / app: 10-14 weeks Enterprise policy admin platforms integrated to ERP: 4-8 months." },
  { q: "How do I start with Capyngen's insurance technology solutions?", a: "Contact us via our form we will set up a discovery call to review your product lines, compliance requirements, systems, and project status to determine a workable way forward with no obligation." },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    diamond: "M3 11 9 4h14l6 7-13 18L3 11Zm0 0h26M9 4l7 25 7-25M9 11l7-7 7 7",
    heart: "M16 28S2 19 2 10a7 7 0 0 1 14-1 7 7 0 0 1 14 1c0 9-14 18-14 18Z",
    spark: "m19 2-14 16h10l-3 12 15-18H17l2-10Z",
    gear: "m13 3 6 0 1 5 4 2 4-2 3 5-4 3v5l4 3-3 5-5-2-4 2-1 4h-6l-1-4-4-2-4 2-3-5 4-3v-5l-4-3 3-5 4 2 4-2 1-5Zm8 14a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z",
    chart: "M3 27h26M5 23v-7h5v7m4 0V11h5v12m4 0V5h5v18M4 10l8-7 6 3 10-5",
    plan: "M4 4h24v18H4V4Zm12 18v8m-7 0 7-8 7 8M8 16l6-6 5 3 6-6",
    people: "M14 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm13 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 28v-6a7 7 0 0 1 14 0v6H2Zm18 0v-6a8 8 0 0 0-2-5 7 7 0 0 1 12 5v6H20Z",
    review: "M18 28H4V3h16l5 5v7M20 3v6h5M8 10h8m-8 5h7m-7 5h5m15 1a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-1 5 4 5",
    building: "M3 29V9h9V2h9v10h8v17H3ZM7 14h1m-1 5h1m-1 5h1m9-16h1m-1 5h1m-1 5h1m-1 5h1m6-6h1m-1 6h1",
    target: "M29 16A13 13 0 1 1 16 3m8 13a8 8 0 1 1-8-8m0 8L29 3m-7 0h7v7",
    shield: "M17 3 5 8v8c0 7 5 12 12 15 7-3 12-8 12-15V8L17 3Zm-6 14 4 4 8-8",
    phone: "M10 3h14v28H10V3Zm0 4h14M10 26h14m-9 2.5h4",
    chat: "M4 5h26v17H14l-7 6v-6H4V5Zm6 8h1m6 0h1m6 0h1",
    chain: "M14 20a6 6 0 0 1 0-8l4-4a6 6 0 0 1 8 8l-2 2m-4-4a6 6 0 0 1 0 8l-4 4a6 6 0 0 1-8-8l2-2",
    cloud: "M9 26a6 6 0 0 1-1-12 9 9 0 0 1 17-2 7 7 0 0 1 1 14H9Z",
  };
  return <svg viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.spark} /></svg>;
}

export default function InsuranceExperience() {
  const [tab, setTab] = useState(0);

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="insurance-title"><div className={s.heroInner}><div className={s.heroCopy}><span className={s.eyebrow}>Capyngen / Insurance</span><h1 id="insurance-title" className={s.longTitle}>Insurance Software Development <em>Services</em></h1><p>Modernizing your InsurTech business with our insurance software development services.</p><div className={s.actions}><Link className={s.button} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link><a className={s.outlineButton} href="#insurance-services"><span className={s.playIcon} aria-hidden="true">▶</span>Our Solutions</a></div><div className={s.heroNotes}><span>Modernizing InsurTech</span><span>Startups · Insurers · Corporate Clients</span></div></div><div className={s.heroArt}><span className={s.scriptNote}>Next-gen<br />insurance<br />shopping <svg viewBox="0 0 80 90" fill="none" aria-hidden="true"><path d="M12 5c-8 45 12 65 55 61m-14-11 15 11-14 11" stroke="currentColor" strokeWidth="1.5" /></svg></span><span className={s.archBack} aria-hidden="true" /><div className={s.heroPhoto}><Image src={photos.hero} alt="A photographer carrying a camera and backpack in a natural outdoor setting" fill preload sizes="(max-width: 700px) 90vw, 45vw" /></div><div className={s.cameraCard}><Icon name="shield" /><strong>Next-gen<br />InsurTech</strong><small>Secure and<br />scalable.</small></div><span className={s.heroLines} aria-hidden="true" /></div></div></section>

    <section className={s.about} id="insurance-about" aria-labelledby="insurance-about-title"><div className={s.aboutPhoto}><Image src={photos.coast} alt="Sunlit white buildings overlooking the sea in Santorini" fill sizes="(max-width: 700px) 90vw, 25vw" /></div><div className={s.aboutCopy}><span className={s.eyebrow}>InsurTech solutions</span><h2 id="insurance-about-title">Sectors That Can <em>Leverage</em></h2><p>{sectorsText}</p><Link className={s.darkButton} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div><div className={s.valueList}>{sectors.map(item => <div key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><span><h3>{item.name}</h3><p>{item.text}</p></span></div>)}</div></section>

    <section className={s.agency} aria-labelledby="insurance-uiux-title"><div className={s.cityCollage}><div className={s.colourTile}><Icon name="plan" /><span>UI/UX<br />Design</span></div><div className={s.cityPortrait}><Image src={photos.city} alt="City architecture and busy streets in the evening light" fill sizes="(max-width: 700px) 45vw, 25vw" /></div><div className={s.cityWide}><Image src={photos.skyline} alt="Dubai’s skyline and sweeping roads in the warm evening light" fill sizes="(max-width: 700px) 90vw, 45vw" /></div></div><div className={s.agencyCopy}><span className={s.eyebrow}>User-centric designs</span><h2 id="insurance-uiux-title">UI/UX Design &amp;<br />Prototyping</h2><span className={s.shortLine} /><p>{uiuxText}</p><Link className={s.arrowButton} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div></section>

    <section className={s.growth} aria-labelledby="insurance-custom-title"><div className={s.growthCopy}><span className={s.eyebrow}>High-performance, secure, and scalable</span><h2 id="insurance-custom-title">Custom Insurance<br />Software Development</h2><span className={s.shortLine} /><p>{customText}</p><a className={s.button} href="#insurance-services">Explore Our Solutions <span aria-hidden="true">→</span></a></div><div className={s.cityCollage}><div className={s.colourTile}><Icon name="chart" /><strong>Policy to claims.</strong><span>Streamline<br />operations.</span></div><div className={s.cityPortrait}><Image src={photos.skyline} alt="A city skyline with contemporary buildings" fill sizes="(max-width: 700px) 45vw, 25vw" /></div><div className={s.cityWide}><Image src={photos.city} alt="Evening traffic moving through a vibrant city street" fill sizes="(max-width: 700px) 90vw, 45vw" /></div></div></section>

    <section className={s.story} aria-labelledby="insurance-story-title"><aside className={s.storyAside}><div className={s.quickLinks}><a href="#insurance-services">Insurance Software Solutions <span aria-hidden="true">↗</span></a><a href="#insurance-capabilities">Enterprise Capabilities <span aria-hidden="true">↗</span></a></div><div className={s.heritage}><span className={s.eyebrow}>Insurance focus areas <span>03</span></span><h3>Lower costs.<br />Seamless omnichannel experiences.<br />Drive growth.</h3><span className={s.heritageAuthor}><Icon name="target" /><strong>Capyngen Insurance</strong><Link href="/contact-us" aria-label="Contact Capyngen">→</Link></span></div></aside><div className={s.storyPhoto}><Image src={photos.hiker} alt="An adventurer taking in a wide mountain and lake panorama" fill sizes="(max-width: 700px) 90vw, 30vw" /></div><div className={s.storyCopy}><span className={s.eyebrow}>Commercial · Personal · Life</span><h2 id="insurance-story-title">Insurance<br />Focus Areas</h2><div className={s.tabs} role="tablist" aria-label="Insurance focus areas">{focusAreas.map((item, index) => <button type="button" id={`insurance-tab-${index}`} key={item.name} role="tab" aria-selected={tab === index} aria-controls="insurance-story-panel" tabIndex={tab === index ? 0 : -1} onClick={() => setTab(index)} onKeyDown={event => { let next = index; if(event.key === "ArrowRight") next = (index + 1) % focusAreas.length; else if(event.key === "ArrowLeft") next = (index + focusAreas.length - 1) % focusAreas.length; else if(event.key === "Home") next = 0; else if(event.key === "End") next = focusAreas.length - 1; else return; event.preventDefault(); setTab(next); document.getElementById(`insurance-tab-${next}`)?.focus(); }}>{item.name}</button>)}</div><div id="insurance-story-panel" role="tabpanel" aria-labelledby={`insurance-tab-${tab}`} tabIndex={0} className={s.tabPanel}><h3>{focusAreas[tab].name}</h3><p>{focusAreas[tab].text}</p></div><Link className={s.arrowButton} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div></section>

    <section className={s.standard} aria-labelledby="insurance-standard-title"><header className={s.standardHeading}><div><span className={s.eyebrow}>Cutting-edge digital platforms</span><h2 id="insurance-standard-title">Trusted Insurance Software<br />Development Services</h2></div><p>Policy administration portals.<br />Claims settlement systems.</p></header><div className={s.standardBody}><div className={s.landscapePhoto}><Image src={photos.mountain} alt="An inviting landscape of alpine mountains and clear water" fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div className={s.standardContent}><div className={s.coordination}><div><h3>Transform Your Insurance Operations</h3><p>{trustedText}</p><Link className={s.arrowButton} href="/contact-us">Let&apos;s Talk <span aria-hidden="true">→</span></Link></div><div className={s.coordinationPhoto}><Image src={photos.hiker} alt="An open mountain panorama beneath a clear sky" fill sizes="(max-width: 700px) 45vw, 25vw" /></div></div><div className={s.accordion}>{trusted.map(item => <div className={s.trustRow} key={item.name}><strong>{item.name}</strong><span>{item.text}</span><b aria-hidden="true">✓</b></div>)}</div></div></div></section>

    <section className={`${s.services} ${s.tech}`} aria-labelledby="insurance-tech-title"><header><span className={s.eyebrow}>RPA · AI · Blockchain</span><h2 id="insurance-tech-title">Latest Technology We Implement</h2><span className={s.shortLine} /><p>Blending robotic process automation, predictive analytics, AI assistants, and blockchain smart contracts.</p></header><div className={s.serviceGrid}>{technologies.map(item => <article key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><div><h3>{item.name}</h3></div></article>)}</div></section>

    <section className={s.capabilities} id="insurance-capabilities" aria-labelledby="insurance-capabilities-title"><div className={s.capabilityCopy}><span className={s.eyebrow}>Full lifecycle software engineering</span><h2 id="insurance-capabilities-title">Enterprise Insurance Software Capabilities</h2><span className={s.shortLine} /><p>Full lifecycle software engineering tailored to achieve precision, fraud reduction, and elevated policyholder satisfaction:</p></div><ol className={s.capabilityList}>{capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol></section>

    <section className={s.services} id="insurance-services" aria-labelledby="insurance-services-title"><header><span className={s.eyebrow}>Our solutions</span><h2 id="insurance-services-title">Insurance Software Development Solutions</h2><span className={s.shortLine} /></header><div className={s.serviceGrid}>{solutions.map(item => <article key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><div><h3>{item.name}</h3><p>{item.text}</p><Link href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div></article>)}</div></section>

    <section className={s.advisory} aria-labelledby="insurance-advisory-title"><div className={s.advisoryCopy}><span className={s.eyebrow}>Why Capyngen</span><h2 id="insurance-advisory-title">Why Choose Capyngen for Insurance Software</h2><p>Customer-specific architectures, financial domain expertise, robust multi-layer encryption, and strict regulatory compliance.</p><div className={s.advisoryBenefits}>{reasons.map(item => <div key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><strong>{item.name}</strong></div>)}</div><Link className={s.button} href="/contact-us">Let&apos;s Talk <span aria-hidden="true">→</span></Link></div><div className={s.advisoryArt}><div className={s.advisoryPhoto}><Image src={photos.meeting} alt="A business team sharing ideas around a table in a bright office" fill sizes="(max-width: 700px) 90vw, 50vw" /></div><span className={s.advisoryNote}>Policy.<br />Claims.<br />Compliance.</span><div className={s.advisoryBadge}><Icon name="shield" /><strong>Robust<br />security.</strong><span>Multi-layer<br />encryption.</span><span aria-hidden="true">—</span></div><span className={s.advisoryCaption}>Precision.<br />Fraud reduction.<br />Policyholder satisfaction.</span></div></section>

    <section className={s.cta} aria-labelledby="insurance-cta-title"><div className={s.ctaBox}><div><span className={s.eyebrow}>AI-powered claims processing</span><h2 id="insurance-cta-title">Transform Your Insurance Enterprise with Capyngen</h2></div><div><p>Deploy AI-powered claims processing, cloud policy administration, and friction-free mobile InsurTech applications.</p><Link className={s.darkButton} href="/contact-us">Contact Us <span aria-hidden="true">→</span></Link></div></div></section>

    <section className={s.faq} aria-labelledby="insurance-faq-title"><header><span className={s.eyebrow}>Insurance software development</span><h2 id="insurance-faq-title">Frequently Asked Questions</h2><span className={s.shortLine} /></header><div className={s.faqList}>{faqs.map((f, i) => <details key={f.q} open={i === 0}><summary><strong>{f.q}</strong><b aria-hidden="true">+</b></summary><p>{f.a}</p></details>)}</div></section>
  </main></div>;
}
