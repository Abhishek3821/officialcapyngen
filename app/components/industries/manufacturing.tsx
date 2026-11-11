"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import s from "./manufacturing.module.css";

const image = (name: string) => "/images/manufacturing-travel/" + name + ".jpg";
const destinations = [
  { name: "Bali", country: "Indonesia", image: "/images/life-science/bali-temple.jpg", text: "Quiet temples, tropical landscapes, and a little room to slow down. Discover the island moments that make a journey your own." },
  { name: "Swiss Alps", country: "Switzerland", image: "/images/destinations/swiss-alps.webp", text: "Fresh mountain air, clear lakes, and a different perspective. Find inspiration in the landscapes of the Swiss Alps." },
  { name: "Maldives", country: "Maldives", image: "/images/enterprise-solutions/maldives-resort.webp", text: "Unhurried mornings and turquoise water. Make time for your own kind of island escape." },
  { name: "Kyoto", country: "Japan", image: image("kyoto"), text: "Follow your curiosity through historic streets, beautiful gardens, and memorable everyday moments." },
];
const gallery = [
  { image: "/images/consulting/cinque-terre.jpg", name: "A little coastal colour", text: "Winding streets, a sunlit harbour, and a new way to see the everyday." },
  { image: "/images/destinations/goreme.webp", name: "Above the ordinary", text: "Open skies and a landscape that invites you to dream a little bigger." },
  { image: "/images/consulting/alpine-lake.jpg", name: "Stillness in the mountains", text: "A quiet lakeside moment, framed by mountains and a fresh perspective." },
];
const services = [
  { name: "Custom Itineraries", icon: "route", text: "Personalized inspiration for the journey you have in mind.", detail: "Start with what you love: the places, the pace, and the moments you want to make room for. Explore a thoughtful itinerary shaped around your interests." },
  { name: "Flights & Stays", icon: "luggage", text: "Bring your travel plans and beautiful places to stay together.", detail: "Consider the whole journey, from getting there to finding the right place to unwind. Share your preferences and explore the possibilities with our team." },
  { name: "Personal Support", icon: "people", text: "A helpful conversation, every step of the way.", detail: "A great experience starts with listening. Bring your questions and ideas, and start a conversation about the details that matter to you." },
];
const tips = [
  { name: "Book in Advance", icon: "calendar", text: "Give yourself time to explore the possibilities.", detail: "Start with your dates, priorities, and preferred pace. Planning early gives you more time to compare options, consider the details, and make thoughtful choices." },
  { name: "Pack Light", icon: "luggage", text: "Travel smart and keep things simple.", detail: "Choose versatile layers and comfortable shoes around your itinerary. Keep your everyday essentials close, and check your carrier?s baggage guidance before departure." },
  { name: "Respect Local Culture", icon: "globe", text: "Make every journey more meaningful.", detail: "Learn a little about the places you visit. Listen, follow local guidance, and support the people and businesses that make each destination unique." },
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

export default function ManufacturingExperience() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [detail, setDetail] = useState({ title: "", text: "", image: "" });
  const [galleryIndex, setGalleryIndex] = useState(-1);
  function open(title: string, text: string, photo = "") {
    setDetail({ title, text, image: photo }); setGalleryIndex(-1); dialog.current?.showModal();
  }
  function showGallery(index: number) {
    setGalleryIndex(index); setDetail({ title: gallery[index].name, text: gallery[index].text, image: gallery[index].image });
    if (!dialog.current?.open) dialog.current?.showModal();
  }
  return <div className={s.page}>
    <svg className={s.clipDefinitions} aria-hidden="true"><defs><clipPath id="voyage-hero-curve" clipPathUnits="objectBoundingBox"><path d="M0 0H.91C1 .22 .73 .34 .88 .57C1 .78 .98 .97 .65 1H0Z" /></clipPath><clipPath id="voyage-side-curve" clipPathUnits="objectBoundingBox"><path d="M.24 0C-.06 .28 -.1 .7 .25 1H1V0Z" /></clipPath></defs></svg>
    <main id="main-content" tabIndex={-1}>
      <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="manufacturing-title"><div className={s.heroInner}><div className={s.heroVisual}><Image src={image("coastal-hero")} alt="Traveller in a sunhat looking across blue coastal water and dramatic cliffs" fill preload sizes="(max-width: 700px) 100vw, 55vw" /></div><div className={s.heroCopy}><span className={s.eyebrow}>CAPYNGEN / TRAVEL COLLECTION</span><h1 id="manufacturing-title">Explore<br /><em>The World</em></h1><h2>Dream. Plan. Travel.</h2><p>We create unforgettable<br />journeys tailored just for you.<br />Let?s make memories together.</p><a href="#manufacturing-destinations" className={s.button}>Start your journey <span aria-hidden="true">?</span></a></div><svg className={s.flightPath} viewBox="0 0 230 150" fill="none" aria-hidden="true"><path d="M8 112c-25-80 88-57 43-3-21 25-14 35 22 26 64-16 101-70 128-105" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" /><path d="m191 29-8-16 5-2 16 11 11-10c7-6 11 0 6 6l-9 12 12 17-2 5-18-11-12 6-4-5 11-10Z" fill="currentColor" /></svg></div></section>

      <section id="manufacturing-about" className={s.about} aria-labelledby="manufacturing-about-heading"><div className={s.aboutCopy}><span className={s.eyebrow}>ABOUT US</span><h2 id="manufacturing-about-heading" className={s.title}>Travel Far<br />Live Fully</h2><p>Our mission is to inspire and guide you to the world?s most amazing places with comfort, care, and unforgettable experiences.</p><div className={s.aboutBenefits}><button type="button" onClick={() => open("Local perspectives", "Discover the stories, details, and everyday moments that make a place special. A thoughtful journey begins with a little local curiosity.")}><span><Icon name="building" /></span>Local Perspectives <b aria-hidden="true">?</b></button><button type="button" onClick={() => open("A journey shaped around you", "Tell us the places you?re curious about, the pace you enjoy, and the moments that matter. Start with a personal conversation, then explore the possibilities together.")}><span><Icon name="shield" /></span>Plans Shaped Around You <b aria-hidden="true">?</b></button></div></div><div className={s.aboutVisual}><Image src={image("alpine-traveller")} alt="Traveller in a sunhat taking in a turquoise alpine lake and dramatic mountain scenery" fill sizes="(max-width: 700px) 100vw, 60vw" /></div><span className={s.dotPattern} aria-hidden="true" /></section>

      <section id="manufacturing-services" className={s.services} aria-labelledby="manufacturing-services-heading"><div className={s.servicesCopy}><span className={s.eyebrow}>OUR SERVICES</span><h2 id="manufacturing-services-heading" className={s.title}>How We Make<br />Travel Easy</h2><div className={s.serviceGrid}>{services.map(service => <button type="button" key={service.name} onClick={() => open(service.name, service.detail)}><span className={s.iconCircle}><Icon name={service.icon} /></span><h3>{service.name}</h3><p>{service.text}</p></button>)}</div></div><div className={s.servicesVisual}><Image src={image("santorini")} alt="Whitewashed Santorini architecture and blue-domed buildings overlooking the sea" fill sizes="(max-width: 700px) 100vw, 45vw" /></div></section>

      <section id="manufacturing-destinations" className={s.destinations} aria-labelledby="manufacturing-destinations-heading"><div className={s.centerHeading}><span className={s.eyebrow}>TOP DESTINATIONS</span><h2 id="manufacturing-destinations-heading" className={s.title}>Where Will Your<br />Next Adventure Be?</h2></div><div className={s.destinationGrid}>{destinations.map(destination => <button type="button" key={destination.name} className={s.destinationCard} onClick={() => open(destination.name + ", " + destination.country, destination.text, destination.image)}><div className={s.destinationPhoto}><Image src={destination.image} alt={destination.name + ", " + destination.country} fill sizes="(max-width: 700px) 45vw, 25vw" /><span aria-hidden="true">?</span></div><div><h3>{destination.name}</h3><p>{destination.country}</p><Icon name="pin" /></div></button>)}</div></section>

      <section className={s.gallery} aria-labelledby="manufacturing-gallery-heading"><div className={s.galleryHeading}><span className={s.eyebrow}>PHOTO GALLERY</span><h2 id="manufacturing-gallery-heading" className={s.title}>Frames That<br />Tell Stories</h2><p>A little inspiration.<br />A world of possibilities.</p></div>{gallery.map((photo, index) => <button type="button" key={photo.name} className={s["galleryPhoto" + index]} aria-label={"View " + photo.name} onClick={() => showGallery(index)}><Image src={photo.image} alt={photo.name} fill sizes="(max-width: 700px) 90vw, 50vw" /><span aria-hidden="true">?</span></button>)}</section>

      <section className={s.tips} aria-labelledby="manufacturing-tips-heading"><div className={s.tipsCopy}><span className={s.eyebrow}>TRAVEL TIPS</span><h2 id="manufacturing-tips-heading" className={s.title}>Smart Tips For<br />Smart Travelers</h2><div className={s.serviceGrid}>{tips.map(tip => <button type="button" key={tip.name} onClick={() => open(tip.name, tip.detail)}><span className={s.iconCircle}><Icon name={tip.icon} /></span><h3>{tip.name}</h3><p>{tip.text}</p></button>)}</div></div><div className={s.tipsVisual}><Image src={image("travel-essentials")} alt="A suitcase, straw hat, camera, and notebook ready for a new journey" fill sizes="(max-width: 700px) 100vw, 50vw" /></div></section>

      <section className={s.advantages} aria-labelledby="manufacturing-advantages-heading"><div className={s.centerHeading}><span className={s.scriptLabel}>Your journey, your way</span><h2 id="manufacturing-advantages-heading" className={s.title}>Our Travel Advantages</h2></div><div className={s.advantageGrid}><button type="button" className={s.advantageCard} onClick={() => open("Set your schedule", "Make time for the places and experiences you love. Explore a pace and a direction that fit your idea of a great journey.")}><Icon name="calendar" /><h3>Set Your Schedule</h3><p>A little freedom.<br />A little more room to explore.<br />A journey that feels like you.</p><span>Discover more ?</span></button><div className={s.advantagePhoto}><Image src="/images/app-development/resort-pool.webp" alt="A peaceful resort pool with inviting spaces to relax" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><button type="button" className={s.advantageCard} onClick={() => open("Care in every detail", "Bring your ideas and questions. We believe a great journey starts with listening and care for the details that make every experience personal.")}><Icon name="shield" /><h3>Care in Every Detail</h3><p>A personal conversation.<br />Thoughtful possibilities.<br />Room for lasting memories.</p><span>Discover more ?</span></button></div></section>

      <section className={s.recommended} aria-labelledby="manufacturing-recommended-heading"><div className={s.recommendedCopy}><span className={s.scriptLabel}>Find your next favourite place</span><h2 id="manufacturing-recommended-heading" className={s.title}>Recommended<br />Destinations</h2><div><Icon name="globe" /><p>Follow the coast, take the scenic route, and make space for a different pace of life.</p></div><div><Icon name="building" /><p>Discover iconic cities and the little everyday moments that make them memorable.</p></div></div><div className={s.recommendedCards}>{[{ name: "Beach Travel", label: "Slow down by the sea", image: "/images/destinations/los-lances.webp", text: "Let the ocean set the pace. Explore coastal escapes and make room for a little time in the sun." }, { name: "City Tour", label: "A fresh perspective", image: "/images/network-solutions/paris.webp", text: "Take a new route through familiar dreams. Discover city streets, beautiful architecture, and moments worth remembering." }].map(destination => <button type="button" key={destination.name} onClick={() => open(destination.name, destination.text, destination.image)}><div><Image src={destination.image} alt={destination.name === "City Tour" ? "The Eiffel Tower rising over Paris" : "A beautiful beach and open coastline"} fill sizes="(max-width: 700px) 45vw, 25vw" /></div><span><Icon name="pin" /><span><strong>{destination.name}</strong><small>{destination.label}</small></span><b aria-hidden="true">?</b></span></button>)}</div></section>
    </main>
    <DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="manufacturing-detail-title"><button type="button" className={s.close} aria-label="Close travel details" onClick={() => dialog.current?.close()}>?</button>{detail.image && <div className={s.dialogPhoto}><Image src={detail.image} alt={detail.title} fill sizes="800px" /></div>}<div className={s.dialogCopy}><span className={s.eyebrow}>A WORLD OF POSSIBILITIES</span><h2 id="manufacturing-detail-title" className={s.title}>{detail.title}</h2><p>{detail.text}</p>{galleryIndex >= 0 ? <div className={s.galleryControls}><button type="button" aria-label="Previous gallery photo" onClick={() => showGallery((galleryIndex + gallery.length - 1) % gallery.length)}>?</button><span aria-live="polite">{galleryIndex + 1} / {gallery.length}</span><button type="button" aria-label="Next gallery photo" onClick={() => showGallery((galleryIndex + 1) % gallery.length)}>?</button></div> : <Link className={s.button} href={"/contact-us?interest=" + encodeURIComponent(detail.title) + "#quote"}>Plan your journey <span aria-hidden="true">?</span></Link>}</div></DismissibleDialog>
  </div>;
}
