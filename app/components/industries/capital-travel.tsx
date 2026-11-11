"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import s from "./capital-travel.module.css";

const offers = [
  { title: "Mountain escapes", subtitle: "A fresh perspective, a little closer to nature.", image: "/images/destinations/swiss-alps.webp", place: "The Swiss Alps" },
  { title: "City discoveries", subtitle: "Iconic sights and beautiful everyday moments.", image: "/images/network-solutions/rome.webp", place: "Rome, Italy" },
  { title: "Island getaways", subtitle: "Turquoise water. Unhurried days. Your kind of escape.", image: "/images/consulting/phi-phi.jpg", place: "Thailand" },
  { title: "Coastal adventures", subtitle: "Colourful villages and a different pace of life.", image: "/images/consulting/cinque-terre.jpg", place: "Cinque Terre, Italy" },
];
const benefits = [
  { title: "A clearer view of your trip", text: "Bring your itinerary, travel preferences, and the details that matter into one conversation." },
  { title: "Plan from wherever you are", text: "Explore your options online, then connect with our team to shape a journey around you." },
  { title: "Support at every step", text: "Get help with the questions that come up before you travel, so you can plan with confidence." },
  { title: "Thoughtfully tailored journeys", text: "Tell us what you love, what you need, and what you have in mind. We’ll help you explore the possibilities." },
];
const categories = ["Flights", "Hotels", "Activities", "Packages"];

export default function CapitalTravelSections() {
  const track = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("Flights");
  const [detail, setDetail] = useState({ title: "", text: "", destination: "" });

  function show(title: string, text: string, destination = "") {
    setDetail({ title, text, destination });
    modal.current?.showModal();
  }
  function move(index: number) {
    const element = track.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    element.scrollTo({ left: max * index / (offers.length - 1), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return <div className={s.root}>
    <section className={s.loyalty} aria-labelledby="capital-loyalty-heading"><div className={s.loyaltyTop}><div className={s.loyaltyPhoto}><Image src="/images/consulting/phi-phi.jpg" alt="Longtail boats on turquoise water beneath Thailand’s dramatic island cliffs" fill sizes="(max-width: 700px) 90vw, 55vw" /></div><div className={s.loyaltyCopy}><span className={s.eyebrow}>MORE TO LOOK FORWARD TO</span><h2 id="capital-loyalty-heading" className={s.title}>A little more <em>rewarding.</em><br />A lot more memorable.</h2><p>Great journeys begin with thoughtful details. Discover travel inspiration, find your kind of escape, and make every adventure feel more personal.</p><button type="button" className={s.primaryButton} onClick={() => show("Your next journey, thoughtfully planned", "Tell us where you’d love to go and what makes a trip special for you. Our team can help you explore destinations and shape your next journey.")}>Explore the possibilities <span aria-hidden="true">↗</span></button></div></div><div className={s.benefitGrid}>{benefits.map(benefit => <button type="button" key={benefit.title} className={s.benefit} onClick={() => show(benefit.title, benefit.text)}><span>{benefit.title}</span><b aria-hidden="true">↗</b></button>)}</div></section>

    <section id="capital-travel-offers" className={s.offers} aria-labelledby="capital-offers-heading"><div className={s.offersInner}><aside><span className={s.eyebrow}>YOUR NEXT GREAT ESCAPE</span><p>Find a little inspiration among extraordinary destinations. Your next chapter could start anywhere.</p><Link href="/consulting" className={s.outlineButton}>Explore all destinations <span aria-hidden="true">↗</span></Link></aside><div className={s.offerContent}><h2 id="capital-offers-heading" className={s.title}>The best kind of <em>getaway</em></h2><div ref={track} className={s.offerTrack} tabIndex={0} role="region" aria-label="Travel offers" onScroll={() => { const element = track.current; if (!element) return; const max = element.scrollWidth - element.clientWidth; setPage(max <= 0 ? 0 : Math.round(element.scrollLeft / max * (offers.length - 1))); }} onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(Math.max(0, Math.min(offers.length - 1, page + (event.key === "ArrowRight" ? 1 : -1)))); } }}>{offers.map(offer => <button type="button" key={offer.title} className={s.offerCard} onClick={() => show(offer.title, `${offer.subtitle} Explore ${offer.place} and plan a journey around the moments that matter to you.`, offer.place)}><div className={s.offerImage}><Image src={offer.image} alt={offer.place} fill sizes="(max-width: 700px) 75vw, 320px" /></div><h3 className={s.cardTitle}>{offer.title}<span aria-hidden="true">↗</span></h3><p>{offer.subtitle}</p></button>)}</div><div className={s.sliderBottom}><div><button type="button" aria-label="Previous travel offers" onClick={() => move(Math.max(0, page - 1))} disabled={page === 0}>←</button><button type="button" aria-label="Next travel offers" onClick={() => move(Math.min(offers.length - 1, page + 1))} disabled={page === offers.length - 1}>→</button></div><div className={s.progress} role="group" aria-label="Choose travel offer">{offers.map((offer, index) => <button type="button" key={offer.title} aria-label={`Show ${offer.title}`} aria-pressed={page === index} onClick={() => move(index)}><span className={page === index ? s.activeProgress : ""} /></button>)}</div></div></div></div></section>

    <section className={s.partners} aria-labelledby="capital-partners-heading"><div className={s.partnerIntro}><svg viewBox="0 0 60 64" fill="none" aria-hidden="true"><path d="m21 39-4 22 13-7 13 7-4-22" fill="#9082de" /><circle cx="30" cy="25" r="22" fill="#160e72" /><circle cx="30" cy="25" r="16" stroke="white" strokeDasharray="2 3" /><path d="m27 19 5-3v19m-6 0h12" stroke="white" strokeWidth="3" /></svg><h2 id="capital-partners-heading" className={s.title}>One place.<br />A world of possibilities.</h2></div><div className={s.partnerCopy}><h3 className={s.cardTitle}>Big journeys start with the right inspiration</h3><p>From island escapes to iconic cities, discover more ways to see the world.</p></div><div className={s.partnerLogos} aria-label="Travel inspiration"><span>PEGAS<small>TOURISTIK</small></span><span>TUI<span aria-hidden="true"> ⌣</span></span><span>ANEX<small>TOUR</small></span><span>intourist</span></div></section>

    <section className={s.appSection} aria-labelledby="capital-app-heading"><div className={s.appBanner}><Image src="/images/industries/manufacturing-travellers.png" alt="A smiling couple exploring travel plans together on their phone" fill sizes="100vw" className={s.appBackground} /><div className={s.appShade} /><div className={s.appCopy}><span className={s.eyebrow}>A WORLD OF POSSIBILITIES. IN YOUR POCKET.</span><h2 id="capital-app-heading" className={s.title}>Your Journey,<br />Simplified</h2><p>Discover flights, hotels, and activities in one place. A little inspiration for every kind of adventure.</p><ul>{["Thoughtful planning", "Personalized inspiration", "Support when you need it", "A journey shaped around you"].map(text => <li key={text}><span aria-hidden="true">✓</span>{text}</li>)}</ul><button type="button" className={s.appButton} onClick={() => { document.getElementById("capital-phone-explore")?.focus(); document.getElementById("capital-phone-explore")?.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}>Explore App <span aria-hidden="true">↗</span></button></div><div className={s.phone} id="capital-phone-explore" tabIndex={-1} aria-label="Interactive travel explorer"><div className={s.phoneStatus}><span>9:41</span><span aria-hidden="true">▮▮▮ ▰</span></div><span className={s.phoneNotch} /><h3 className={s.phoneTitle}>Explore <span aria-hidden="true">⌕</span></h3><p>Where do you want to go?</p><div className={s.phoneTabs} role="group" aria-label="Travel categories">{categories.map((item, index) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}><span aria-hidden="true">{["✈", "⌂", "☼", "▣"][index]}</span>{item}</button>)}</div><h4 aria-live="polite">{category === "Flights" ? "Popular routes" : category === "Hotels" ? "Beautiful places to stay" : category === "Activities" ? "Make a little memory" : "Your next getaway"}</h4><div className={s.phoneCards}>{offers.slice(category === "Hotels" ? 1 : 0, category === "Hotels" ? 3 : 2).map(offer => <button type="button" key={offer.place} onClick={() => show(`${category} · ${offer.place}`, offer.subtitle, offer.place)}><div><Image src={offer.image} alt="" fill sizes="120px" /></div><strong>{offer.place}</strong><span>Explore more ↗</span></button>)}</div><h4>Top destinations</h4><button className={s.phoneDestination} type="button" onClick={() => show("Thailand", offers[2].subtitle, "Thailand")}><Image src={offers[2].image} alt="Thailand’s turquoise island coastline" width={68} height={48} /><span>Thailand<small>Find your island moment</small></span><b aria-hidden="true">↗</b></button><div className={s.phoneNav}><span aria-current="page">⌂<small>Explore</small></span><a href="/consulting">♡<small>Discover</small></a><Link href="/contact-us">♙<small>Connect</small></Link></div></div></div></section>

    <DismissibleDialog ref={modal} className={s.dialog} aria-labelledby="capital-travel-detail"><button type="button" className={s.close} aria-label="Close travel details" onClick={() => modal.current?.close()}>×</button><span className={s.eyebrow}>MAKE ROOM FOR YOUR NEXT CHAPTER</span><h2 id="capital-travel-detail" className={s.dialogTitle}>{detail.title}</h2><p>{detail.text}</p><Link href={`/contact-us?interest=${encodeURIComponent(detail.destination || detail.title)}#quote`} className={s.primaryButton}>Plan with our team <span aria-hidden="true">↗</span></Link></DismissibleDialog>
  </div>;
}
