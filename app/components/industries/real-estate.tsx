"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import s from "./real-estate.module.css";

const photos = {
  neon: "/images/real-estate/neon-portrait.jpg",
  lights: "/images/real-estate/neon-lights.jpg",
  diver: "/images/real-estate/diver.jpg",
  whale: "/images/real-estate/whale.jpg",
  seoul: "/images/real-estate/seoul.jpg",
  forest: "/images/public-service/forest.jpg",
  lake: "/images/consulting/alpine-lake.jpg",
  yacht: "/images/communication-media/yacht.jpg",
  ocean: "/images/application-solutions/ocean.webp",
  mountain: "/images/high-tech/sunset-mountains.jpg",
};
const scenes = [
  { name: "PROPERTY WEBSITES", label: "Listings that look good", pattern: "aurora", image: "" },
  { name: "MLS/IDX INTEGRATION", label: "Always up to date", pattern: "", image: photos.neon },
  { name: "3D VIRTUAL TOURS", label: "Walk in from anywhere", pattern: "waves", image: "" },
  { name: "CRM INTEGRATION", label: "Every lead in one place", pattern: "", image: photos.lights },
  { name: "LOCAL SEO", label: "Be found nearby", pattern: "", image: photos.ocean },
  { name: "LEAD GEN ADS", label: "Reach real buyers", pattern: "", image: photos.mountain },
  { name: "CLOUD & SUPPORT", label: "Always on, always safe", pattern: "glow", image: "" },
];
const services = [
  { icon: "screen", name: "Websites & Apps", text: "Easy property sites with search, filters, and contact forms." },
  { icon: "link", name: "MLS/IDX Integration", text: "Link your site to live listing data. No manual updates." },
  { icon: "people", name: "CRM Integration", text: "Track leads, follow-ups, and deals without the mess." },
  { icon: "chart", name: "Digital Marketing", text: "Get in front of buyers, tenants, and investors." },
];
const online = [
  { name: "Local SEO", image: photos.diver, text: "" },
  { name: "Social media", image: photos.whale, text: "" },
  { name: "Lead gen ads", image: photos.ocean, text: "" },
  { name: "Email follow-ups", image: photos.yacht, text: "" },
  { name: "Content & Video", image: photos.lake, text: "Blogs, reels, and walkthroughs that build trust before the first call." },
];
const reach = [
  { name: "Local buyers", colour: "#6bd2f3", dash: "" },
  { name: "Regional markets", colour: "#d9af6b", dash: "6 6" },
  { name: "Global networks", colour: "#a0b0cb", dash: "2 7" },
];
const pins = [
  { name: "Local buyers", x: 267, y: 125 },
  { name: "Regional markets", x: 442, y: 242 },
  { name: "Global networks", x: 755, y: 172 },
];
const steps = [
  { step: "STEP 01", name: "DISCOVER", text: "Property portals and search tools that help buyers find the right place fast.", icon: "city" },
  { step: "STEP 02", name: "CONNECT", text: "Never forget to follow up again. Your CRM does it for you.", icon: "people" },
  { step: "STEP 03", name: "CLOSE", text: "Let buyers tour from home, then wrap up the deal online.", icon: "home" },
];
const details = [
  { icon: "city", name: "LOCAL TARGETING", text: "Reach buyers in the exact towns you care about." },
  { icon: "screen", name: "VIRTUAL SHOWINGS", text: "Show homes online and save everyone’s time." },
  { icon: "lock", name: "SECURE DATA", text: "Buyer details and property records stay locked down." },
  { icon: "chart", name: "ANALYTICS", text: "See what’s working and what isn’t." },
];
const industries = [
  { name: "Agencies & Brokers", text: "Broker portals, lead routing, and commission tracking.", image: photos.lake },
  { name: "Developers & Builders", text: "Project showcases and unit inventory tools.", image: photos.mountain },
  { name: "Listing Portals", text: "Big listing engines with smart search filters.", image: photos.forest },
  { name: "Rental & Leasing", text: "Digital leases, payments, and maintenance requests.", image: photos.ocean },
  { name: "Luxury Real Estate Brands", text: "", image: photos.yacht },
];
const faqs = [
  { q: "What are real estate software development services?", a: "These are custom-built tools for property businesses. Think listing websites, CRM systems, property management software, and mobile apps. We build them around how your team actually works." },
  { q: "What is property management software?", a: "It’s one place to handle the day-to-day of managing properties. Rent collection, tenant details, maintenance requests, and lease records all sit together." },
  { q: "How can a tenant management system help property owners?", a: "It takes a lot of the daily back and forth off your plate. Tenants can sign leases, pay rent, and raise repair requests online. You get a clear record of everything." },
  { q: "Do you offer real estate mobile applications?", a: "We do. We can build apps for buyers, tenants, agents, or your own team. They work on both iOS and Android." },
  { q: "Can you create custom property management software?", a: "Of course. If off-the-shelf tools don’t fit how you work, we’ll build something that does. Tell us what you need and we’ll plan it with you." },
  { q: "Do you provide CRM integration with real estate websites?", a: "We connect your website forms straight to your CRM. New enquiries land in one place, and your team can follow up quickly. No copying and pasting." },
  { q: "Is your real estate software scalable?", a: "Yes. Start small with a simple site and add more as you grow. You won’t have to rebuild from scratch." },
  { q: "How secure is the property data?", a: "We take it seriously. Your records and buyer details sit on secure hosting, and only the right people get access." },
  { q: "How long does it take to develop a property portal?", a: "It depends on what you want in it. A simple portal can be ready in a few weeks. Bigger ones with MLS/IDX feeds, 3D tours, and CRM links take longer. We’ll give you a clear timeline once we know your needs." },
  { q: "Why choose Capyngen for real estate software development?", a: "Because you get IT and marketing from one team. We build the tools, and we help you bring in leads too. That means faster launches and less juggling between vendors." },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    chart: "M3 30h28M6 25V15h5v10m4 0V9h5v16m4 0V3h5v22",
    people: "M14 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm14 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM2 30v-8a7 7 0 0 1 14 0v8H2Zm18 0v-8a9 9 0 0 0-2-5 7 7 0 0 1 12 5v8H20Z",
    city: "M3 31V12h8v19m1-1V4h11v26m1 0V15h7v16M16 9h3m-3 6h3m-3 6h3m-3 5h3M7 17v2m20 1v2",
    home: "M3 17 18 4l15 13M7 14v17h22V14M14 31v-9h8v9",
    screen: "M3 4h30v21H3V4Zm15 21v7m-8 0h16M7 9h22",
    link: "M15 21a6 6 0 0 1 0-8l4-4a6 6 0 0 1 8 8l-2 2m-4-4a6 6 0 0 1 0 8l-4 4a6 6 0 0 1-8-8l2-2",
    lock: "M8 16h20v15H8V16Zm4 0v-5a6 6 0 0 1 12 0v5m-6 6v4",
  };
  return <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.home} /></svg>;
}

export default function RealEstateExperience() {
  const [scene, setScene] = useState(1);
  const [panel, setPanel] = useState(4);
  const [route, setRoute] = useState(0);
  const [industry, setIndustry] = useState(0);

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="real-estate-title"><div className={s.heroTop}><span className={s.eyebrow}>Capyngen / Real Estate</span><h1 id="real-estate-title">Step Into the <em>Future of Property</em></h1><p>Smart tools for listings, leads, and deals.<br />Everything your real estate business needs, in one place.</p><a href="#real-estate-solutions" className={s.glowButton}>Explore Our Solutions <span aria-hidden="true">↗</span></a></div><div id="real-estate-solutions" className={s.sceneStage} role="group" aria-label="Real estate solutions"><div className={s.sceneTrack}>{scenes.map((item, index) => { let offset = (index - scene + scenes.length) % scenes.length; if (offset > 3) offset -= scenes.length; return <button type="button" className={`${s.sceneCard} ${scene === index ? s.activeScene : ""}`} key={item.name} style={{ "--offset": offset, "--distance": Math.abs(offset), zIndex: 10 - Math.abs(offset) } as CSSProperties} aria-label={`Select ${item.name}`} aria-pressed={scene === index} onClick={() => setScene(index)}>{item.image ? <Image src={item.image} alt="" fill preload={index === 1} sizes="(max-width: 600px) 60vw, 25vw" /> : <span className={`${s.abstractArt} ${s[item.pattern]}`} aria-hidden="true" />}<span className={s.sceneShine} /></button>; })}</div></div><div className={s.heroBottom}><div className={s.sceneCaption} aria-live="polite"><span>0{scene + 1} /</span><div><strong>{scenes[scene].name}</strong><small>{scenes[scene].label}</small></div></div><div className={s.sceneControls}><button type="button" aria-label="Previous solution" onClick={() => setScene((scene + scenes.length - 1) % scenes.length)}>←</button><div>{scenes.map((item, index) => <button type="button" key={item.name} aria-label={`Show ${item.name}`} aria-pressed={scene === index} onClick={() => setScene(index)}><span /></button>)}</div><button type="button" aria-label="Next solution" onClick={() => setScene((scene + 1) % scenes.length)}>→</button></div><span className={s.liveLabel}><span /> Listings, leads, and deals</span></div></section>

    <section className={s.farm} aria-labelledby="real-estate-farm-title"><header><div><span className={s.eyebrow}>What We Do</span><h2 id="real-estate-farm-title">IT Solutions for Every<br />Real Estate Business</h2></div><p>“From listings to closings, we build the tools that help you work faster and sell smarter.”</p></header><div className={s.farmGrid}>{services.map(item => <article key={item.name}><span className={s.farmIcon}><Icon name={item.icon} /></span><h3>{item.name}</h3><p>{item.text}</p><Link href="/contact-us" aria-label={`Contact us about ${item.name}`}>↗</Link></article>)}</div></section>

    <section className={s.dive} aria-labelledby="real-estate-dive-title"><div className={s.divePhoto}><Image src={photos.diver} alt="A scuba diver moving through clear blue water beneath the sunlit surface" fill sizes="(max-width: 700px) 90vw, 45vw" /><span className={s.shell} aria-hidden="true">◌</span><span className={s.star} aria-hidden="true">✧</span></div><div className={s.diveCopy}><span className={s.eyebrow}>About the experience</span><h2 id="real-estate-dive-title">Walk Through Every Property</h2><p>Buyers don’t always have time to visit. With 3D tours and AR/VR, they can step inside from their sofa.</p><p>It saves your team time too. You meet serious buyers, and fewer people waste a trip.</p><Link className={s.scriptButton} href="/contact-us">Take a Virtual Tour <span aria-hidden="true">↗</span></Link></div></section>

    <section className={s.ocean} aria-labelledby="real-estate-ocean-title"><header><span className={s.eyebrow}>Beyond the listing</span><h2 id="real-estate-ocean-title">What else can your property<br />business do online?</h2></header><div className={s.oceanPanels}>{online.map((item, index) => <button key={item.name} type="button" className={panel === index ? s.openOcean : ""} aria-expanded={panel === index} aria-controls={`online-caption-${index}`} aria-label={item.name} onClick={() => setPanel(index)}><span className={s.oceanPhoto}><Image src={item.image} alt="" fill sizes="(max-width: 600px) 85vw, 50vw" /></span><span id={`online-caption-${index}`} className={s.oceanCaption} hidden={panel !== index}><strong>{item.name}</strong>{item.text && <span>{item.text}</span>}</span><span className={s.verticalLabel} aria-hidden="true">{item.name}</span></button>)}</div></section>

    <section className={s.connections} aria-labelledby="real-estate-connections-title"><div className={s.connectionCopy}><span className={s.eyebrow}>Global reach</span><h2 id="real-estate-connections-title">Reaching buyers<br />wherever they are.</h2><p>Start with your local area or go much bigger. Our solutions grow with you, from one small brokerage to a large listing network.</p><div className={s.routeControls} role="group" aria-label="Reach">{reach.map((item, index) => <button type="button" key={item.name} aria-pressed={route === index} onClick={() => setRoute(index)}><svg viewBox="0 0 60 8" aria-hidden="true"><path d="M0 4H60" stroke={item.colour} strokeWidth="2" strokeDasharray={item.dash} /></svg>{item.name}</button>)}</div><p className={s.routeDescription}>One setup that scales as you grow.</p></div><div className={s.map}><svg viewBox="0 0 900 420" role="img" aria-label="Illustrated map showing reach from local buyers to global networks"><g className={s.landMass}><path d="m86 98 37-47 53-13 12 30 40 7 16-31 50-24 13 40 59 6 27-21 66 4 37-24 70 25 74-7 62 32 71-2 36 31 35 13-19 38-45 18-29 45-45-10-35 31-22 63-36 6-9-41-33-25-11 43-34 5-24-30-43-7-18-47-49-2-20-35-30-1-19 23-37-8-13-32-39 4-29-24-23 14-41-33-31 2-11-39Z" /><path d="m229 192 48-13 50 13 22 37 31 9 17 52-33 66-28 31-31-32-13-44-32-24-29-59-31-14 29-22Z" /><path d="m727 332 48-21 46 19 24 42-17 32-47-11-33 10-41-32 20-39Z" /><path d="m77 40 24-24 20 15-8 39-23 10-13-40Zm80 36 10-23 13 5 4 39-15 10-12-31Zm606 149 15-35 14 7-4 37-18 17-7-26Z" /></g><g fill="none" stroke={reach[route].colour} strokeWidth="2" strokeDasharray={reach[route].dash} className={s.mapRoutes}><path d={route === 0 ? "M267 125Q340 275 442 242T755 172" : route === 1 ? "M267 125Q470 35 755 172M267 125Q410 165 442 242Q620 320 755 172" : "M267 125Q470-55 755 172M267 125Q650 325 755 172M442 242Q520 20 755 172"} /><path d="M267 125Q422 65 545 154T755 172M442 242Q590 90 755 172" opacity=".4" /></g></svg>{pins.map(pin => <span key={pin.name} className={s.mapPin} style={{ left: `${pin.x / 9}%`, top: `${pin.y / 4.2}%` }}><span /><strong>{pin.name}</strong></span>)}</div></section>

    <section className={s.itinerary} aria-labelledby="real-estate-itinerary-title"><header><span /><h2 id="real-estate-itinerary-title" className={s.journeyTitle}>THREE STEPS. ONE CLEAR PATH.</h2><span /></header><div className={s.itineraryBody}><div className={s.itineraryCopy}><span className={s.eyebrow}>The buyer journey</span><p>Think of a buyer’s path from first search to final signature. We help you support them at every step.</p><div className={s.seoulPhoto}><Image src={photos.seoul} alt="The courtyard and traditional architecture of Gyeongbokgung Palace in Seoul" fill sizes="(max-width: 700px) 90vw, 35vw" /></div><p>Your market, your pace, your next deal. Bring your idea and we’ll help you build it.</p><Link className={s.outlineButton} href="/contact-us">Plan Your Project <span aria-hidden="true">↗</span></Link></div><div className={s.timeline}>{steps.map(item => <div key={item.name}><span className={s.timelineDot} /><span className={s.timelineDays}>{item.step}</span><span className={s.timelineCard}><span><Icon name={item.icon} /></span><span><strong>{item.name}</strong><small>{item.text}</small></span></span></div>)}</div></div></section>

    <section className={s.inclusions} aria-labelledby="real-estate-inclusions-title"><header><h2 id="real-estate-inclusions-title">The Details That Matter</h2><span /></header><div className={s.inclusionGrid}>{details.map(item => <div key={item.name}><h3><Icon name={item.icon} />{item.name}</h3><p>{item.text}</p></div>)}</div></section>

    <section className={s.tours} aria-labelledby="real-estate-tours-title"><div className={s.tourContent}><span className={s.eyebrow}>Industries we serve</span><h2 id="real-estate-tours-title">Built for Every Corner<br />of Real Estate</h2><div className={s.tourGrid}>{industries.map((item, index) => <article key={item.name} className={industry === index ? s.activeTour : ""}><button type="button" className={s.tourSelect} aria-pressed={industry === index} onClick={() => setIndustry(index)}><h3>{item.name}</h3>{item.text && <p>{item.text}</p>}</button><Link className={s.tourMore} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></article>)}</div></div><div className={s.tourPhoto}><Image key={industries[industry].image} src={industries[industry].image} alt="" fill sizes="(max-width: 700px) 90vw, 55vw" /><span aria-live="polite">{industries[industry].name}</span></div></section>

    <section className={s.faq} aria-labelledby="real-estate-faq-title"><header><span /><h2 id="real-estate-faq-title">Frequently Asked Questions</h2><span /></header><div className={s.faqList}>{faqs.map((f, i) => <details key={f.q} open={i === 0}><summary><strong>{f.q}</strong><b aria-hidden="true">+</b></summary><p>{f.a}</p></details>)}</div></section>
  </main></div>;
}
