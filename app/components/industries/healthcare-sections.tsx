"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import s from "./healthcare-sections.module.css";

const tours = [
  { title: "Country Tour", icon: "globe", text: "A fresh perspective on the world, one extraordinary place at a time.", detail: "Find a journey shaped around the places, landscapes, and experiences you love. Explore at your own pace and make room for a little discovery." },
  { title: "Sea Tour", icon: "sea", text: "Follow the coastline and make a little time for the sea.", detail: "Discover coastal escapes, quiet beaches, and a different rhythm of life. Tell us what your ideal seaside journey looks like." },
  { title: "Cruises Tour", icon: "ship", text: "New horizons, shared moments, and the joy of the journey.", detail: "Explore the idea of a journey by water. Bring your preferences and your sense of curiosity, and start a conversation about the possibilities." },
  { title: "Adventure Tour", icon: "mountain", text: "Go a little further with experiences made for curious minds.", detail: "From mountain views to scenic trails, adventure means something different to everyone. Find inspiration for a journey that feels right for you." },
];
const regions = [
  { name: "The Americas", x: 24, y: 32, text: "Open roads, incredible landscapes, and room for a fresh perspective." },
  { name: "Europe", x: 51, y: 28, text: "Explore quiet villages, beautiful coastlines, and paths through the mountains." },
  { name: "Asia", x: 74, y: 35, text: "Discover a world of vibrant culture, island moments, and new experiences." },
  { name: "South America", x: 34, y: 66, text: "Follow your curiosity through dramatic landscapes and memorable places." },
  { name: "Oceania", x: 86, y: 76, text: "Coastal adventures, wide-open spaces, and a little more time outdoors." },
];
const rideStyles = [
  { name: "Cycling", image: "/images/healthcare-fitness/cycling-road.jpg", text: "A new route. A fresh perspective. A little more time outside." },
  { name: "Adventure", image: "/images/healthcare-fitness/cycling-adventure.jpg", text: "Follow the scenic route. Leave room for the unexpected." },
  { name: "Journey", image: "/images/healthcare-fitness/cycling-rider.jpg", text: "From the first kilometre to the final smile — enjoy the journey." },
];
const memberships = [
  { name: "First Ride", subtitle: "A little curiosity goes a long way", icon: "mountain", text: "Start with a friendly conversation about your interests, your pace, and what you’d love to explore.", features: ["Explore your interests", "Find your starting point", "Plan at your pace"] },
  { name: "Find Your Rhythm", subtitle: "Make room for the things you love", icon: "sea", text: "Bring a little more movement, connection, and outdoor inspiration into your everyday life.", features: ["Fresh route inspiration", "Thoughtful planning", "Everyday possibilities"] },
  { name: "Explore Further", subtitle: "A fresh perspective awaits", icon: "route", text: "Discover new landscapes, find your kind of adventure, and take the scenic route whenever you can.", features: ["New places to discover", "A personal approach", "Room for adventure"] },
  { name: "Ride Together", subtitle: "Better moments, shared", icon: "shirt", text: "Bring friends, colleagues, or your community together around a shared sense of adventure.", features: ["Shared experiences", "A journey for your group", "People at the heart"] },
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
  const dialog = useRef<HTMLDialogElement>(null);
  const [ride, setRide] = useState(0);
  const [chosen, setChosen] = useState("");
  const [detail, setDetail] = useState({ title: "", text: "", features: [] as string[] });
  function open(title: string, text: string, features: string[] = []) {
    setDetail({ title, text, features });
    dialog.current?.showModal();
  }
  return <div className={s.root}>
    <section className={s.tours} aria-labelledby="health-tours-heading"><span className={s.eyebrow}>A LITTLE FURTHER. A LITTLE CLOSER.</span><h2 id="health-tours-heading" className={s.title}>Our Popular <em>Tour Types</em></h2><div className={s.tourGrid}>{tours.map(tour => <button type="button" key={tour.title} onClick={() => open(tour.title, tour.detail)}><Icon name={tour.icon} /><h3 className={s.cardTitle}>{tour.title}</h3><p>{tour.text}</p><span className={s.tourArrow} aria-hidden="true">↗</span></button>)}</div></section>

    <section className={s.explore} aria-labelledby="health-explore-heading"><div className={s.exploreHeading}><span className={s.eyebrow}>YOUR WORLD. YOUR WAY.</span><h2 id="health-explore-heading" className={s.title}>Explore the World <em>for Yourself</em></h2></div><div className={s.exploreBody}><ol className={s.exploreSteps}>{[{ title: "Find a trip that fits your lifestyle", text: "Start with the places you love, the people you want to share them with, and your own sense of adventure." }, { title: "Travel with more confidence", text: "Explore the possibilities, ask the right questions, and plan a journey that feels right for you." }, { title: "See what you really get from us", text: "A thoughtful conversation, a fresh perspective, and care for the details that make an experience personal." }].map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3 className={s.cardTitle}>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><div className={s.worldMap}><WorldMap />{regions.map(region => <button type="button" className={s.mapPin} key={region.name} style={{ left: `${region.x}%`, top: `${region.y}%` }} aria-label={`Explore ${region.name}`} onClick={() => open(region.name, region.text)}><span aria-hidden="true">●</span><b>{region.name}</b></button>)}<span className={s.mapCaption}>A world of possibilities. Choose a place to begin.</span></div></div></section>

    <section className={s.club} aria-labelledby="health-club-heading"><div className={s.clubTop}><div className={s.clubIntro}><span className={s.clubBadge}>WE’RE A CLUB BUILT ON UNITY</span><h2 id="health-club-heading" className={s.title}>This Is Who We Are:<br />Cyclists, Adventurers,<br /><em>Teammates — Riding Together.</em></h2><p>Different paths. A shared sense of adventure. We believe the best part of any journey is the connection you find along the way.</p><button type="button" className={s.primary} onClick={() => open("A club built on connection", "We’re inspired by the simple joy of getting outside, discovering a new route, and sharing the experience. Bring your curiosity, find your own pace, and make room for moments that matter.")}>Discover more <span aria-hidden="true">↗</span></button></div><div className={s.clubMainPhoto}><Image src="/images/healthcare-fitness/cycling-road.jpg" alt="Helmeted road cyclist enjoying a tree-lined route" fill sizes="(max-width: 700px) 60vw, 35vw" /></div><div className={s.clubSidePhoto}><Image src="/images/healthcare-fitness/cycling-rider.jpg" alt="A cyclist leaning into a ride on a road bike" fill sizes="(max-width: 700px) 35vw, 20vw" /></div></div><div className={s.clubBottom}><div className={s.rideStory}><p>{rideStyles[ride].text}</p><div className={s.rideImage}><Image src={rideStyles[ride].image} alt={`${rideStyles[ride].name} inspiration`} fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div className={s.rideTabs} role="group" aria-label="Choose riding inspiration">{rideStyles.map((style, index) => <button key={style.name} type="button" aria-pressed={ride === index} onClick={() => setRide(index)}>{style.name}</button>)}</div></div><div className={s.clubHighlights}><span className={s.eyebrow}>MOMENTS THAT MATTER</span><h3 className={s.highlightTitle}>Discover the Highlights<br />of Our Club in Action.</h3><p>From a scenic route to a shared smile, make space for the experiences that bring people together.</p><div className={s.stats}><div><strong>72 <small>KM</small></strong><span>Featured route inspiration</span></div><div><strong>03</strong><span>Ways to explore</span></div><div><strong>01</strong><span>Shared sense of adventure</span></div></div></div></div></section>

    <section className={s.memberships} aria-labelledby="health-memberships-heading"><div className={s.membershipHeading}><div><span className={s.eyebrow}>FIND YOUR KIND OF CONNECTION</span><h2 id="health-memberships-heading" className={s.title}>Your Pace. <em>Your Possibilities.</em></h2></div><p>Start small, explore further, or bring your people.<br />There’s more than one way to begin.</p></div><div className={s.membershipGrid}>{memberships.map((membership, index) => <article key={membership.name} className={`${s.membershipCard} ${index === 3 ? s.featuredCard : ""} ${chosen === membership.name ? s.selectedCard : ""}`}><div className={s.membershipTop}><Icon name={membership.icon} /><button type="button" aria-label={`Details about ${membership.name}`} onClick={() => open(membership.name, membership.text, membership.features)}>↗</button></div><span className={s.planLabel}>{membership.subtitle}</span><h3 className={s.cardTitle}>{membership.name}</h3><p>{membership.text}</p><ul>{membership.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><div className={s.membershipActions}><button type="button" aria-pressed={chosen === membership.name} onClick={() => { setChosen(membership.name); open(membership.name, membership.text, membership.features); }}>{chosen === membership.name ? "Selected" : "Explore"}</button><Link href={`/contact-us?interest=${encodeURIComponent(membership.name)}#quote`} aria-label={`Contact us about ${membership.name}`}>Let’s talk <span aria-hidden="true">↗</span></Link></div></article>)}</div><span role="status" className={s.srOnly}>{chosen ? `${chosen} selected` : "Choose an experience to discover more."}</span></section>

    <DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="health-experience-title"><button type="button" className={s.close} aria-label="Close experience details" onClick={() => dialog.current?.close()}>×</button><span className={s.eyebrow}>HEALTHCARE & FITNESS / CONNECTED EXPERIENCES</span><h2 id="health-experience-title" className={s.title}>{detail.title}</h2><p>{detail.text}</p>{detail.features.length > 0 && <ul>{detail.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}<Link className={s.primary} href={`/contact-us?interest=${encodeURIComponent(detail.title)}#quote`}>Start a conversation <span aria-hidden="true">↗</span></Link></DismissibleDialog>
  </div>;
}
