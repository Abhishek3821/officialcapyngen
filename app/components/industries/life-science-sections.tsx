"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import s from "./life-science-sections.module.css";

const destinations = [
  { title: "Bali Bliss Escape", place: "Bali, Indonesia", image: "/images/life-science/bali-temple.jpg", duration: "5 nights · 6 days", text: "Discover quiet temples, tropical landscapes, and moments that invite you to slow down. Shape an island escape around the experiences you love." },
  { title: "Maldives Serenity", place: "Maldives", image: "/images/enterprise-solutions/maldives-resort.webp", duration: "4 nights · 5 days", text: "Make room for turquoise lagoons, peaceful mornings, and time by the water. Find a little inspiration for your next island chapter." },
  { title: "Swiss Alpine Adventure", place: "Swiss Alps", image: "/images/destinations/swiss-alps.webp", duration: "6 nights · 7 days", text: "Trade the everyday for mountain views, clear lakes, and a fresh perspective. Explore a journey with space for adventure and a slower pace." },
  { title: "Thailand Island Moments", place: "Thailand", image: "/images/consulting/phi-phi.jpg", duration: "5 nights · 6 days", text: "Turquoise water, beautiful coastlines, and unhurried days. Discover the island moments that make a journey your own." },
];
const stories = [
  { title: "10 Hidden Gems in Europe", time: "5 min read", image: "/images/enterprise-solutions/alpine-lake.webp", text: "The most memorable journeys often begin with a small detour. Follow a lakeside trail, wander into a quiet village, or spend a little longer in a place that makes you curious.", paragraphs: ["Start with the landscapes you love. Alpine valleys, coastal towns, and smaller cities can all offer a fresh perspective beyond the most familiar routes.", "Build space into your itinerary. Choose a few places to explore deeply, ask local hosts about their favourite walks, and leave an afternoon open for discovery.", "Travel thoughtfully. Respect local customs, support independent businesses, and take the time to understand the places you visit."] },
  { title: "Packing Essentials for Every Trip", time: "4 min read", image: "/images/application-solutions/hiker.webp", text: "Pack for the journey you actually want to have. A few versatile pieces and a little preparation can make exploring feel easier.", paragraphs: ["Begin with your itinerary and the expected weather. Choose layers, comfortable shoes, and clothes you can combine in different ways.", "Keep everyday essentials within reach: your documents, a reusable water bottle, charging cables, and a small day bag. Check your carrier’s baggage guidance before you leave.", "Leave a little room. A lighter bag makes changing plans easier and gives you space for the memories you bring home."] },
];
const missions = [
  { title: "Sustainable Land Use", text: "Promoting responsible land management.", image: "/images/destinations/swiss-alps.webp", icon: "plant", detail: "A healthier future begins with care for the places around us. Thoughtful land use connects healthy landscapes, responsible choices, and the communities that depend on them." },
  { title: "Climate Action", text: "Reducing emissions, building resilience.", image: "/images/life-science/glacier.jpg", icon: "waves", detail: "Progress starts with understanding our impact. We believe in informed decisions, practical action, and the value of building resilience together." },
  { title: "Community Empowerment", text: "Empowering local heroes, creating impact.", image: "/images/application-solutions/growers.webp", icon: "people", detail: "People make lasting change possible. Education, shared knowledge, and local collaboration help communities shape a stronger future on their own terms." },
];
function MissionIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{name === "plant" ? <path d="M12 21V10m0 5C4 15 3 9 4 5c6-1 9 3 8 10Zm0-3c0-7 4-10 9-10 1 6-2 10-9 10ZM7 21h10" /> : name === "waves" ? <path d="M3 5c3-4 5 4 9 0s6 4 9 0M3 12c3-4 5 4 9 0s6 4 9 0M3 19c3-4 5 4 9 0s6 4 9 0" /> : <><circle cx="8" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" /><path d="M2 21v-5a6 6 0 0 1 12 0v5H2Zm12-9a5 5 0 0 1 8 4v5h-8M6 16v5m4-5v5m8-5v5" /></>}</svg>;
}

export default function LifeScienceSections() {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [saved, setSaved] = useState<string[]>([]);
  const [detail, setDetail] = useState({ title: "", text: "", paragraphs: [] as string[], image: "", action: "" });

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
  function open(title: string, text: string, image = "", paragraphs: string[] = [], action = "") {
    setDetail({ title, text, image, paragraphs, action });
    dialog.current?.showModal();
  }

  return <div className={s.root}>
    <section className={s.destinations} aria-labelledby="life-destinations-heading"><div className={s.sectionTop}><div><span className={s.eyebrow}>A FRESH PERSPECTIVE</span><h2 id="life-destinations-heading" className={s.title}>Popular <em>Destinations</em></h2></div><p>Explore extraordinary places.<br />Find a journey that feels like you.</p><div className={s.arrows}><button type="button" aria-label="Previous destinations" aria-controls="life-destination-track" disabled={edges.start} onClick={() => scroll(-1)}>←</button><button type="button" aria-label="Next destinations" aria-controls="life-destination-track" disabled={edges.end} onClick={() => scroll(1)}>→</button></div></div><div id="life-destination-track" ref={track} className={s.destinationTrack} onScroll={updateEdges} role="region" aria-roledescription="carousel" aria-label="Popular destinations" tabIndex={0} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); scroll(event.key === "ArrowRight" ? 1 : -1); } }}>
      {destinations.map(destination => <article key={destination.title} className={s.destinationCard}><button type="button" className={s.destinationPhoto} aria-label={`Explore ${destination.title}`} onClick={() => open(destination.title, destination.text, destination.image, [], destination.place)}><Image src={destination.image} alt={destination.place} fill sizes="(max-width: 700px) 80vw, (max-width: 1000px) 45vw, 33vw" /><span className={s.place}>⌖ {destination.place}</span></button><div className={s.cardCopy}><div className={s.tripMeta}><span>CURATED ESCAPE</span><button type="button" aria-label={`${saved.includes(destination.title) ? "Unsave" : "Save"} ${destination.title}`} aria-pressed={saved.includes(destination.title)} onClick={() => setSaved(previous => previous.includes(destination.title) ? previous.filter(item => item !== destination.title) : [...previous, destination.title])}>{saved.includes(destination.title) ? "♥" : "♡"}</button></div><h3 className={s.cardTitle}><button type="button" onClick={() => open(destination.title, destination.text, destination.image, [], destination.place)}>{destination.title}</button></h3><p>{destination.duration}</p></div></article>)}
    </div><span role="status" className={s.srOnly}>{saved.length} {saved.length === 1 ? "destination" : "destinations"} saved</span></section>

    <section className={s.stories} aria-labelledby="life-stories-heading"><div className={s.storyIntro}><span className={s.eyebrow}>NEED INSPIRATION?</span><h2 id="life-stories-heading" className={s.title}>Travel Stories<br /><em>& Guides</em></h2><p>Travel tips, fresh perspectives, and inspiring stories for a world worth exploring.</p><button type="button" className={s.primary} onClick={() => open(stories[0].title, stories[0].text, stories[0].image, stories[0].paragraphs)}>Read Travel Stories <span aria-hidden="true">→</span></button></div>{stories.map(story => <button key={story.title} type="button" className={s.storyCard} onClick={() => open(story.title, story.text, story.image, story.paragraphs)}><div className={s.storyPhoto}><Image src={story.image} alt={story.title === stories[0].title ? "Green alpine valley and lakeside village beneath dramatic mountains" : "Hiker enjoying a mountain landscape"} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><div><h3 className={s.cardTitle}>{story.title}</h3><p>{story.time} <span aria-hidden="true">↗</span></p></div></button>)}</section>

    <section className={s.mission} aria-labelledby="life-mission-heading"><div className={s.missionCopy}><span className={s.eyebrow}>OUR MISSION</span><h2 id="life-mission-heading" className={s.title}>We’re Building<br />a <em>Greener,</em><br />Cleaner, Stronger<br />World.</h2><p>Through education, action, and innovation, we believe in empowering people to protect nature and create lasting change.</p><div className={s.missionActions}><a href="#life-mission-projects" className={s.primary}>Explore Projects <span aria-hidden="true">→</span></a><button type="button" className={s.textButton} onClick={() => open("A stronger future, together", "We believe thoughtful choices and connected communities can make a meaningful difference. Our mission brings care for people and the natural world into one shared perspective.")}>Learn More ↗</button></div></div><div id="life-mission-projects" className={s.missionCards}>{missions.map(project => <button type="button" key={project.title} className={s.missionCard} onClick={() => open(project.title, project.detail, project.image)}><Image src={project.image} alt={project.title === "Climate Action" ? "Blue glacial ice and cold open water" : project.title === "Community Empowerment" ? "People working together to care for growing plants" : "Green mountain landscapes and a clear alpine lake"} fill sizes="(max-width: 700px) 80vw, 25vw" /><span className={s.missionShade} /><span className={s.missionContent}><span className={s.missionIcon}><MissionIcon name={project.icon} /></span><h3 className={s.cardTitle}>{project.title}</h3><span className={s.missionDescription}>{project.text}</span><span className={s.missionArrow} aria-hidden="true">↗</span></span></button>)}</div></section>

    <section className={s.discovery} aria-labelledby="life-discovery-heading"><div className={s.discoveryCopy}><span className={s.eyebrow}>CURIOUS BY NATURE</span><h2 id="life-discovery-heading" className={s.title}>Unlocking the Secrets<br />of the <em>World</em></h2><p>What sets us apart is our commitment to a personal experience. We believe every journey starts with people: your interests, your ideas, and the moments you want to make room for.</p><div className={s.commitments}>{["Thoughtful experiences", "People-first approach", "A trusted conversation", "Care in every detail"].map(item => <span key={item}>{item}</span>)}</div><button type="button" className={s.primary} onClick={() => open("Curiosity connects us", "From the first conversation to the final detail, we put people at the heart of every experience. We bring curiosity, care, and thoughtful design to the way we explore the world and build for the future.", "/images/industries/manufacturing-travellers.png", [], "Life science experiences")}>Read More <span aria-hidden="true">↗</span></button></div><div className={s.discoveryCollage}><div className={s.hikerPhoto}><Image src="/images/application-solutions/hiker.webp" alt="An adventurous traveller discovering a beautiful mountain landscape" fill sizes="(max-width: 700px) 65vw, 35vw" /><span>Go a little further.</span></div><div className={s.couplePhoto}><Image src="/images/industries/manufacturing-travellers.png" alt="Two travellers exploring their next journey together" fill sizes="(max-width: 700px) 65vw, 35vw" /><span>Discover a little more.</span></div><span className={s.collageMark} aria-hidden="true">✳</span></div></section>

    <DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="life-explore-title"><button type="button" className={s.close} aria-label="Close details" onClick={() => dialog.current?.close()}>×</button>{detail.image && <div className={s.dialogPhoto}><Image src={detail.image} alt={detail.title} fill sizes="750px" /></div>}<div className={s.dialogCopy}><span className={s.eyebrow}>LIFE SCIENCE / NEW PERSPECTIVES</span><h2 id="life-explore-title" className={s.title}>{detail.title}</h2><p>{detail.text}</p>{detail.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{detail.action && <Link href={`/contact-us?interest=${encodeURIComponent(detail.action)}#quote`} className={s.primary}>Talk to our team <span aria-hidden="true">↗</span></Link>}</div></DismissibleDialog>
  </div>;
}
