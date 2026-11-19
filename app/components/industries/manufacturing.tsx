import Image from "next/image";
import Link from "next/link";
import s from "./manufacturing.module.css";

const image = (name: string) => "/images/manufacturing-travel/" + name + ".jpg";
const solutions = [
  { name: "ERP Software for Manufacturing", label: "ERP", image: "/images/life-science/bali-temple.jpg" },
  { name: "Supply Chain Management Software", label: "Supply chain", image: "/images/destinations/swiss-alps.webp" },
  { name: "IoT-Enabled Smart Factory Platforms", label: "Smart factory", image: "/images/enterprise-solutions/maldives-resort.webp" },
  { name: "Custom Fleet Management Solutions", label: "Fleet management", image: image("kyoto") },
];
const gallery = [
  { image: "/images/consulting/cinque-terre.jpg", name: "Next-generation manufacturing technology" },
  { image: "/images/destinations/goreme.webp", name: "Innovation and automation" },
  { image: "/images/consulting/alpine-lake.jpg", name: "Tailored manufacturing software technology" },
];
const highlights = [
  { icon: "building", text: "Automation at the smart factory and shop floor intelligent telemetry." },
  { icon: "route", text: "CPFR: Collective planning of order forecasting and replenishment across the supply chain." },
  { icon: "shield", text: "You can also track your fleet, grade your assets' health, and forecast maintenance requirements." },
];
const features = [
  { name: "Real-Time Monitoring", icon: "calendar", text: "Real-time production monitoring for every process line and shift." },
  { name: "Predictive Analytics", icon: "route", text: "Nullify forecast errors so they don't halt production." },
  { name: "Remote Diagnostics", icon: "people", text: "Fix and update machines without site visits." },
];
const integrations = [
  { name: "IoT in Manufacturing", icon: "globe", text: "Sharing data at the right time and predicting maintenance." },
  { name: "Artificial Intelligence (AI/ML)", icon: "building", text: "Smarter creation planning & QA." },
  { name: "Cloud Computing", icon: "luggage", text: "Expandable storage, off-site control, uninterrupted connection." },
];
const aboutText = "As a result, industrial giants are embracing digital transformation with IoT sensors, ERP systems, and the next generation of AI industrial maintenance.";
const productionText = "Custom Manufacturing Software for Production Capyngen energises assembly plants, Tier-1 automotive OEMs, and logistics supply chains with the future-proof digital foundations that power custom manufacturing software.";
const futuristicText = "Capyngen is the forefront for next-generation manufacturing tech where innovation and automation get competitive edge. We empower manufacturers for competition by way of tailored software technology that delivers efficiency to transform the organisation.";
const transformText = "We at Capyngen bring you innovative custom manufacturing software development that acts as a one-stop solution for your business success in the manufacturing industry. Leave the manufacturing IT software solutions to us and focus on what you do best.";
const faqs = [
  { q: "Q1. What makes Capyngen a reliable manufacturing software development company?", a: "We make complex manufacturing simple by integrating deep industrial expertise with innovative engineering. We're a manufacturing software development company. We create our platforms based on how shop floors, supply chains and production teams actually function, not cookie-cutter templates." },
  { q: "Q2. What is included in your manufacturing software development services?", a: "The range of manufacturing software development offerings includes Enterprise Resource Planning (ERP) tools, supply chain management, IoT-powered smart factory solutions, fleet management, and predictive maintenance software. These products are aimed at minimising production halts and enabling insights into shop floor production." },
  { q: "Q3. Do you build custom ERP software for manufacturers?", a: "Yes. We develop custom ERP platforms, incorporating manufacturing technology solutions to manage procurement, bill of materials, inventory, and operations. Instead of an off-the-shelf system, we build systems based on your processes." },
  { q: "Q4. Do you provide automotive software development?", a: "Yes. Our team in charge of automotive software development collaborates with Tier-1 OEMs, assembly plants and logistics supply chains. We develop software solutions for production tracking, fleet management, equipment health scoring and predictive maintenance." },
  { q: "Q5. What are automotive software solutions for modern factories?", a: "Vehicle software includes real-time telemetry, intelligent factory automation, remote diagnostics and AI-enabled quality management. All of these tools enable manufacturers to optimise production and minimise unplanned downtime." },
  { q: "Q6. How can AI in manufacturing improve production?", a: "AI in manufacturing unlocks predictive maintenance, smart production planning and automated quality checks. Don't wait until something breaks; foresee failure before it brings production to a halt." },
  { q: "Q7. Can your platforms integrate with existing ERP and IoT systems?", a: "Yes. Our manufacturing software development service is designed for integration. We integrate new systems with your existing ERP, IoT sensors, and shop-floor equipment to ensure data streams seamlessly." },
  { q: "Q8. How long does a manufacturing software project take?", a: "Timelines are scope-dependent. Basic IoT monitoring module implementation can be done within 8-12 weeks. Complete ERP or smart factory implementation with multiple system integrations takes between 4-8 months. We provide you with a detailed timeline before engagement." },
  { q: "Q9. Do you provide support after deployment?", a: "Yes. We offer manufacturing technology services like monitoring, security patching, performance tuning and new feature deployment. We will remain engaged as the production requirements and technology change." },
  { q: "Q10. How do I start with Capyngen's manufacturing software development team?", a: "Contact us using our contact form. We will organise a discovery call to get an insight of your production, supply chain, or automation problem and a practical path to the solution free of charge." },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    route: "M6 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm18-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3 15V7c0-6 10 4 10-2m8 4v8c0 6-10-4-10 2",
    luggage: "M6 7h13v15H6V7Zm4 0V3h5v4M9 10v8m7-8v8M4 22h17",
    people: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 24v-3a8 8 0 0 1 16 0v3M3 13a3 3 0 1 1 0-6m18 6a3 3 0 1 0 0-6",
    calendar: "M3 6h20v18H3V6Zm0 6h20M8 2v8m10-8v8M8 16h3m4 0h3m-10 4h3m4 0h3",
    globe: "M24 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM2 13h22M13 2c-6 6-6 16 0 22 6-6 6-16 0-22ZM4 7h18M4 19h18",
    pin: "M13 25s9-10 9-16a9 9 0 1 0-18 0c0 6 9 16 9 16Zm0-12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    shield: "m13 2 10 4v8c0 6-10 11-10 11S3 20 3 14V6l10-4Zm-5 11 4 4 7-9",
    building: "M5 24V5h16v19H5Zm5 0v-6h6v6M9 9h2m4 0h2M9 13h2m4 0h2",
  };
  return <svg viewBox="-2 0 30 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.globe} /></svg>;
}

function Reason({ icon, name, lines }: { icon: string; name: string; lines: string }) {
  return <Link href="/contact-us" className={s.advantageCard}><Icon name={icon} /><h3>{name}</h3><p>{lines}</p><span>Contact Us ↗</span></Link>;
}

export default function ManufacturingExperience() {
  return <div className={s.page}>
    <svg className={s.clipDefinitions} aria-hidden="true"><defs><clipPath id="voyage-hero-curve" clipPathUnits="objectBoundingBox"><path d="M0 0H.91C1 .22 .73 .34 .88 .57C1 .78 .98 .97 .65 1H0Z" /></clipPath><clipPath id="voyage-side-curve" clipPathUnits="objectBoundingBox"><path d="M.24 0C-.06 .28 -.1 .7 .25 1H1V0Z" /></clipPath></defs></svg>
    <main id="main-content" tabIndex={-1}>
      <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="manufacturing-title"><div className={s.heroInner}><div className={s.heroVisual}><Image src={image("coastal-hero")} alt="Manufacturing software development company" fill preload sizes="(max-width: 700px) 100vw, 55vw" /></div><div className={s.heroCopy}><span className={s.eyebrow}>CAPYNGEN / MANUFACTURING &amp; AUTOMOTIVE</span><h1 id="manufacturing-title" className={s.longTitle}>Manufacturing <br /><em>Software</em> <br />Development <br />Company</h1><h2>Next-Generation Technology.</h2><p>Capyngen is a manufacturing software development expert that leverages next-generation technology to help you avoid running your manufacturing business manually.</p><a href="#manufacturing-destinations" className={s.button}>Explore solutions <span aria-hidden="true">↗</span></a></div><svg className={s.flightPath} viewBox="0 0 230 150" fill="none" aria-hidden="true"><path d="M8 112c-25-80 88-57 43-3-21 25-14 35 22 26 64-16 101-70 128-105" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" /><path d="m191 29-8-16 5-2 16 11 11-10c7-6 11 0 6 6l-9 12 12 17-2 5-18-11-12 6-4-5 11-10Z" fill="currentColor" /></svg></div></section>

      <section id="manufacturing-about" className={s.about} aria-labelledby="manufacturing-about-heading"><div className={s.aboutCopy}><span className={s.eyebrow}>DIGITAL TRANSFORMATION</span><h2 id="manufacturing-about-heading" className={`${s.title} ${s.aboutTitle}`}>Top Manufacturing <br />Software Development <br />Company</h2><p>{aboutText}</p><p className={s.aboutMore}>{productionText}</p><div className={s.aboutBenefits}>{highlights.map(item => <div key={item.text}><span><Icon name={item.icon} /></span>{item.text}</div>)}</div></div><div className={s.aboutVisual}><Image src={image("alpine-traveller")} alt="Custom manufacturing software for production" fill sizes="(max-width: 700px) 100vw, 60vw" /></div><span className={s.dotPattern} aria-hidden="true" /></section>

      <section id="manufacturing-services" className={s.services} aria-labelledby="manufacturing-services-heading"><div className={s.servicesCopy}><span className={s.eyebrow}>FEATURES</span><h2 id="manufacturing-services-heading" className={s.title}>Features for <br />Manufacturing Software <br />Development</h2><div className={s.serviceGrid}>{features.map(item => <div key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><h3>{item.name}</h3><p>{item.text}</p></div>)}</div></div><div className={s.servicesVisual}><Image src={image("santorini")} alt="Real-time production monitoring" fill sizes="(max-width: 700px) 100vw, 45vw" /></div></section>

      <section id="manufacturing-destinations" className={s.destinations} aria-labelledby="manufacturing-destinations-heading"><div className={s.centerHeading}><span className={s.eyebrow}>MANUFACTURING SOFTWARE SOLUTIONS</span><h2 id="manufacturing-destinations-heading" className={s.title}>Manufacturing Software <br />Solutions Made Simple</h2></div><div className={s.destinationGrid}>{solutions.map(item => <Link href="/contact-us" key={item.name} className={s.destinationCard} aria-label={`Contact us about ${item.name}`}><div className={s.destinationPhoto}><Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 45vw, 25vw" /><span aria-hidden="true">↗</span></div><div><h3>{item.name}</h3><p>{item.label}</p><Icon name="pin" /></div></Link>)}</div></section>

      <section className={s.gallery} aria-labelledby="manufacturing-gallery-heading"><div className={s.galleryHeading}><span className={s.eyebrow}>FUTURISTIC PRODUCTIONS</span><h2 id="manufacturing-gallery-heading" className={s.title}>Manufacturing Software <br />Solution for <br />Futuristic Productions</h2><p>{futuristicText}</p></div>{gallery.map((photo, index) => <div key={photo.name} className={s["galleryPhoto" + index]}><Image src={photo.image} alt={photo.name} fill sizes="(max-width: 700px) 90vw, 50vw" /></div>)}</section>

      <section className={s.tips} aria-labelledby="manufacturing-tips-heading"><div className={s.tipsCopy}><span className={s.eyebrow}>TECHNOLOGY INTEGRATIONS</span><h2 id="manufacturing-tips-heading" className={s.title}>Advanced Technology <br />Integrations in <br />Manufacturing</h2><div className={s.serviceGrid}>{integrations.map(item => <div key={item.name}><span className={s.iconCircle}><Icon name={item.icon} /></span><h3>{item.name}</h3><p>{item.text}</p></div>)}</div></div><div className={s.tipsVisual}><Image src={image("travel-essentials")} alt="Advanced technology integrations in manufacturing" fill sizes="(max-width: 700px) 100vw, 50vw" /></div></section>

      <section className={s.advantages} aria-labelledby="manufacturing-advantages-heading"><div className={s.centerHeading}><span className={s.scriptLabel}>Experience, expertise and approach</span><h2 id="manufacturing-advantages-heading" className={s.title}>Why Choose Capyngen for <br />Manufacturing Software Development</h2></div><div className={s.advantageGrid}><Reason icon="calendar" name="Experience" lines="We have been working on innovative software solutions for years." /><div className={s.advantagePhoto}><Image src="/images/app-development/resort-pool.webp" alt="Why choose Capyngen for manufacturing software development" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><div className={s.advantageStack}><Reason icon="shield" name="Expertise" lines="We are proven able to work with all modern-day technology." /><Reason icon="people" name="Approach" lines="Innovation and creativity are at the core of our customer-first policy." /></div></div></section>

      <section className={s.recommended} aria-labelledby="manufacturing-recommended-heading"><div className={s.recommendedCopy}><span className={s.scriptLabel}>Smarter, better production lines</span><h2 id="manufacturing-recommended-heading" className={s.title}>High-End Manufacturing <br />Software Development</h2><div><Icon name="globe" /><p>One of the many factories already integrated where AI, IoT, and automation have been implemented for smarter, better production lines.</p></div><div><Icon name="building" /><p>Extensive ERP software for manufacturing includes covering planning of resources, supply of materials, operations and inventory.</p></div></div><div className={s.recommendedCards}>{[{ name: "Smart Production Lines", label: "AI, IoT and automation", image: "/images/destinations/los-lances.webp" }, { name: "Extensive ERP Software", label: "Resources, materials, operations and inventory", image: "/images/network-solutions/paris.webp" }].map(item => <Link href="/contact-us" key={item.name} aria-label={`Contact us about ${item.name}`}><div><Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 45vw, 25vw" /></div><span><Icon name="pin" /><span><strong>{item.name}</strong><small>{item.label}</small></span><b aria-hidden="true">↗</b></span></Link>)}</div></section>

      <section className={s.cta} aria-labelledby="manufacturing-cta-heading"><span className={s.scriptLabel}>Digital innovation</span><h2 id="manufacturing-cta-heading" className={s.title}>Transforming Production <br />Through Digital Innovation</h2><p>{transformText}</p><Link href="/contact-us" className={s.button}>Contact Us <span aria-hidden="true">↗</span></Link></section>

      <section className={s.faq} aria-labelledby="manufacturing-faq-heading"><div className={s.centerHeading}><span className={s.eyebrow}>MANUFACTURING SOFTWARE DEVELOPMENT</span><h2 id="manufacturing-faq-heading" className={s.title}>Frequently Asked Questions</h2></div><div className={s.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></section>
    </main>
  </div>;
}
