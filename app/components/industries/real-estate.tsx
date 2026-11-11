"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type CSSProperties } from "react";
import DismissibleDialog from "../dismissible-dialog";
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
  { name: "Aurora Dreams", label: "Colour in motion", pattern: "aurora", image: "" },
  { name: "Neon Reverie", label: "A different kind of light", pattern: "", image: photos.neon },
  { name: "Spectral Waves", label: "Find your own frequency", pattern: "waves", image: "" },
  { name: "Electric Perspective", label: "See the familiar differently", pattern: "", image: photos.lights },
  { name: "Ocean Echoes", label: "A quieter rhythm", pattern: "", image: photos.ocean },
  { name: "Last Light", label: "The edge of a new day", pattern: "", image: photos.mountain },
  { name: "Afterglow", label: "Beyond the everyday", pattern: "glow", image: "" },
];
const farm = [
  { icon: "leaf", name: "Crop Management", text: "Plan, monitor, and understand the things your crops need.", detail: "Bring field observations, crop plans, and useful information into one conversation. Explore the tools that help you understand your operation and organise the work ahead." },
  { icon: "drop", name: "Irrigation Intelligence", text: "A more considered approach to water and changing conditions.", detail: "Consider field conditions, weather information, and irrigation requirements together. Explore how useful data can support a clearer approach to water planning." },
  { icon: "soil", name: "Soil & Field Health", text: "Understand the ground beneath a stronger growing season.", detail: "Connect soil observations with field history and the questions that matter to your operation. A useful picture starts with relevant information and the right expertise." },
  { icon: "chart", name: "Market & Price Insights", text: "Bring market information closer to everyday decisions.", detail: "Explore how your team gathers, understands, and shares market information. Start with the sources you trust and the decisions you want to support." },
];
const oceanPanels = [
  { name: "Into the blue", image: photos.diver, text: "Light from above. A whole new world below. Find a little inspiration beneath the surface." },
  { name: "Wild encounters", image: photos.whale, text: "A glimpse of the extraordinary. Give wildlife room, follow local guidance, and enjoy the privilege of observing nature." },
  { name: "Ocean textures", image: photos.ocean, text: "From the surface to the horizon, discover the colours, patterns, and quiet rhythm of the sea." },
  { name: "Open water", image: photos.yacht, text: "Fresh air, wide views, and a little room to slow down. Imagine your next chapter on the water." },
  { name: "Northern light", image: photos.lake, text: "Clear water and dramatic landscapes. A different kind of wonder, waiting beyond the everyday." },
];
const routeTypes = [
  { name: "Sea routes", colour: "#6bd2f3", dash: "", text: "Explore the connection between ports, coastlines, and the wider journey." },
  { name: "Land routes", colour: "#d9af6b", dash: "6 6", text: "Connect the points between origin and destination with a considered view of the ground journey." },
  { name: "Air connections", colour: "#a0b0cb", dash: "2 7", text: "Consider the wider network of places, people, and possibilities across the world." },
];
const regions = [
  { name: "Europe", x: 267, y: 125, text: "Historic centres, evolving markets, and a world of local perspectives. Start with the places and connections that matter to your plans." },
  { name: "Middle East", x: 442, y: 242, text: "A meeting point for people, ideas, and journeys. Explore the next chapter through the connections that bring your plans together." },
  { name: "Asia", x: 755, y: 172, text: "A wide world of cultures, landscapes, and opportunities. Share your priorities and explore the possibilities ahead." },
];
const itinerary = [
  { days: "Days 01–04", name: "Seoul", text: "Begin with the energy of the city. Make room for palace courtyards, local neighbourhoods, and a fresh perspective on the everyday.", icon: "city" },
  { days: "Days 05–08", name: "Gyeongju", text: "Follow a slower chapter through heritage, architecture, and the stories that give a place its character.", icon: "temple" },
  { days: "Days 09–12", name: "Busan", text: "Finish with the coast, a different rhythm, and a little time to enjoy the view. Let the journey become your own.", icon: "waves" },
];
const inclusions = [
  { icon: "people", name: "Local Perspectives", text: "Make space for the people and stories behind each place." },
  { icon: "plane", name: "Flight Planning", text: "Consider the journey around your dates and starting point." },
  { icon: "car", name: "Thoughtful Transfers", text: "Connect each chapter with a clear plan for getting around." },
  { icon: "bed", name: "Places to Stay", text: "Explore comfortable spaces that fit your preferred pace." },
];
const tours = [
  { name: "A Little Closer to Nature", text: "Quiet paths, open views, and time to breathe.", image: photos.forest },
  { name: "Lakeside Perspectives", text: "Clear water and landscapes worth slowing down for.", image: photos.lake },
  { name: "A Different Kind of Day", text: "Find room for a little discovery along the way.", image: photos.mountain },
  { name: "Your Own Northern Chapter", text: "Follow your curiosity. Make the moments your own.", image: photos.forest },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    leaf: "M17 31V15m0 9C4 24 2 12 5 5c11 0 16 7 12 19Zm0-6C17 7 23 3 31 4c0 11-6 16-14 14Z",
    drop: "M17 2S6 16 6 23a11 11 0 0 0 22 0C28 16 17 2 17 2ZM11 24c0 3 2 6 6 6",
    soil: "m4 18 13-7 13 7-13 7-13-7Zm0 6 13 7 13-7M17 11V3m-4 4 4-4 4 4",
    chart: "M3 30h28M6 25V15h5v10m4 0V9h5v16m4 0V3h5v22",
    people: "M14 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm14 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM2 30v-8a7 7 0 0 1 14 0v8H2Zm18 0v-8a9 9 0 0 0-2-5 7 7 0 0 1 12 5v8H20Z",
    plane: "m17 2 4 11 11 5v4l-11-3v8l4 3v2l-8-2-8 2v-2l4-3v-8-0L2 22v-4l11-5 4-11Z",
    car: "M4 15h26v13H4V15Zm2 0 4-10h14l4 10M8 21h3m12 0h3M7 28v4m20-4v4",
    bed: "M3 30V8m28 22V15H3m0 10h28M8 15V7h19v8M7 25v5m20-5v5",
    city: "M3 31V12h8v19m1-1V4h11v26m1 0V15h7v16M16 9h3m-3 6h3m-3 6h3m-3 5h3M7 17v2m20 1v2",
    temple: "M3 13 17 3l14 10H3Zm3 5h22M8 18v10m9-10v10m9-10v10M3 32h28M5 28h24",
    waves: "M2 10q5-6 10 0t10 0 10 0M2 20q5-6 10 0t10 0 10 0M2 30q5-6 10 0t10 0 10 0",
  };
  return <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.leaf} /></svg>;
}

export default function RealEstateExperience() {
  const [scene, setScene] = useState(1);
  const [ocean, setOcean] = useState(1);
  const [route, setRoute] = useState(0);
  const [tour, setTour] = useState(0);
  const [detail, setDetail] = useState({ title: "", text: "", image: "" });
  const dialog = useRef<HTMLDialogElement>(null);
  function open(title: string, text: string, image = "") { setDetail({ title, text, image }); dialog.current?.showModal(); }

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="real-estate-title"><div className={s.heroTop}><span className={s.eyebrow}>Capyngen / Real Estate</span><h1 id="real-estate-title">Step Into the <em>Playscape</em></h1><p>A world of light, colour, and new perspectives.<br />Find a little inspiration beyond the everyday.</p><a href="#real-estate-lineup" className={s.glowButton}>Explore the Lineup <span aria-hidden="true">↗</span></a></div><div id="real-estate-lineup" className={s.sceneStage} role="group" aria-label="Cinematic gallery"><div className={s.sceneTrack}>{scenes.map((item, index) => { let offset = (index - scene + scenes.length) % scenes.length; if (offset > 3) offset -= scenes.length; return <button type="button" className={`${s.sceneCard} ${scene === index ? s.activeScene : ""}`} key={item.name} style={{ "--offset": offset, "--distance": Math.abs(offset), zIndex: 10 - Math.abs(offset) } as CSSProperties} aria-label={`Select ${item.name}`} aria-pressed={scene === index} onClick={() => setScene(index)}>{item.image ? <Image src={item.image} alt={item.name + " — a cinematic study in colour and light"} fill preload={index === 1} sizes="(max-width: 600px) 60vw, 25vw" /> : <span className={`${s.abstractArt} ${s[item.pattern]}`} aria-hidden="true" />}<span className={s.sceneShine} /></button>; })}</div></div><div className={s.heroBottom}><div className={s.sceneCaption} aria-live="polite"><span>0{scene + 1} /</span><div><strong>{scenes[scene].name}</strong><small>{scenes[scene].label}</small></div></div><div className={s.sceneControls}><button type="button" aria-label="Previous gallery scene" onClick={() => setScene((scene + scenes.length - 1) % scenes.length)}>←</button><div>{scenes.map((item, index) => <button type="button" key={item.name} aria-label={`Show ${item.name}`} aria-pressed={scene === index} onClick={() => setScene(index)}><span /></button>)}</div><button type="button" aria-label="Next gallery scene" onClick={() => setScene((scene + 1) % scenes.length)}>→</button></div><span className={s.liveLabel}><span /> Your next perspective</span></div></section>

    <section className={s.farm} aria-labelledby="real-estate-farm-title"><header><div><span className={s.eyebrow}>What we do</span><h2 id="real-estate-farm-title">Intelligent Solutions<br />for Every Farm</h2></div><p>From soil to sky, explore the tools that help you understand your operation and make more considered decisions.</p></header><div className={s.farmGrid}>{farm.map(item => <article key={item.name}><span className={s.farmIcon}><Icon name={item.icon} /></span><h3>{item.name}</h3><p>{item.text}</p><button type="button" aria-label={`Explore ${item.name}`} onClick={() => open(item.name, item.detail)}>↗</button></article>)}</div></section>

    <section className={s.dive} aria-labelledby="real-estate-dive-title"><div className={s.divePhoto}><Image src={photos.diver} alt="A scuba diver moving through clear blue water beneath the sunlit surface" fill sizes="(max-width: 700px) 90vw, 45vw" /><span className={s.shell} aria-hidden="true">◌</span><span className={s.star} aria-hidden="true">✧</span></div><div className={s.diveCopy}><span className={s.eyebrow}>About the experience</span><h2 id="real-estate-dive-title">Dive Into Paradise</h2><p>There’s a different kind of wonder beneath the surface. Open water, changing light, and a world that moves to its own rhythm.</p><p>Find inspiration in the extraordinary. Follow your curiosity, respect the places you explore, and make room for a perspective you’ll want to remember.</p><button type="button" className={s.scriptButton} onClick={() => open("A world beneath the surface", "Explore underwater inspiration at your own pace. Share your interests and experience, then discuss the right next steps with an appropriate local provider.", photos.diver)}>Live to Discover <span aria-hidden="true">↗</span></button></div></section>

    <section className={s.ocean} aria-labelledby="real-estate-ocean-title"><header><span className={s.eyebrow}>Beyond the surface</span><h2 id="real-estate-ocean-title">What awaits you<br />in the open ocean?</h2></header><div className={s.oceanPanels}>{oceanPanels.map((item, index) => <button key={item.name} type="button" className={ocean === index ? s.openOcean : ""} aria-expanded={ocean === index} aria-controls={`ocean-caption-${index}`} aria-label={`Explore ${item.name}`} onClick={() => setOcean(index)}><span className={s.oceanPhoto}><Image src={item.image} alt={item.name + " nature inspiration"} fill sizes="(max-width: 600px) 85vw, 50vw" /></span><span id={`ocean-caption-${index}`} className={s.oceanCaption} hidden={ocean !== index}><strong>{item.name}</strong><span>{item.text}</span></span><span className={s.verticalLabel} aria-hidden="true">{item.name}</span></button>)}</div></section>

    <section className={s.connections} aria-labelledby="real-estate-connections-title"><div className={s.connectionCopy}><span className={s.eyebrow}>Global perspectives</span><h2 id="real-estate-connections-title">Connecting<br />a world of possibilities.</h2><p>Explore the connections between Europe, the Middle East, and Asia. Bring the bigger picture closer to your next chapter.</p><div className={s.routeControls} role="group" aria-label="Explore route types">{routeTypes.map((item, index) => <button type="button" key={item.name} aria-pressed={route === index} onClick={() => setRoute(index)}><svg viewBox="0 0 60 8" aria-hidden="true"><path d="M0 4H60" stroke={item.colour} strokeWidth="2" strokeDasharray={item.dash} /></svg>{item.name}</button>)}</div><p className={s.routeDescription} aria-live="polite">{routeTypes[route].text}</p></div><div className={s.map}><svg viewBox="0 0 900 420" role="img" aria-label="Illustrated connections between Europe, the Middle East, and Asia"><g className={s.landMass}><path d="m86 98 37-47 53-13 12 30 40 7 16-31 50-24 13 40 59 6 27-21 66 4 37-24 70 25 74-7 62 32 71-2 36 31 35 13-19 38-45 18-29 45-45-10-35 31-22 63-36 6-9-41-33-25-11 43-34 5-24-30-43-7-18-47-49-2-20-35-30-1-19 23-37-8-13-32-39 4-29-24-23 14-41-33-31 2-11-39Z" /><path d="m229 192 48-13 50 13 22 37 31 9 17 52-33 66-28 31-31-32-13-44-32-24-29-59-31-14 29-22Z" /><path d="m727 332 48-21 46 19 24 42-17 32-47-11-33 10-41-32 20-39Z" /><path d="m77 40 24-24 20 15-8 39-23 10-13-40Zm80 36 10-23 13 5 4 39-15 10-12-31Zm606 149 15-35 14 7-4 37-18 17-7-26Z" /></g><g fill="none" stroke={routeTypes[route].colour} strokeWidth="2" strokeDasharray={routeTypes[route].dash} className={s.mapRoutes}><path d={route === 0 ? "M267 125Q340 275 442 242T755 172" : route === 1 ? "M267 125Q470 35 755 172M267 125Q410 165 442 242Q620 320 755 172" : "M267 125Q470-55 755 172M267 125Q650 325 755 172M442 242Q520 20 755 172"} /><path d="M267 125Q422 65 545 154T755 172M442 242Q590 90 755 172" opacity=".4" /></g></svg>{regions.map(region => <button key={region.name} className={s.mapPin} type="button" style={{ left: `${region.x / 9}%`, top: `${region.y / 4.2}%` }} onClick={() => open(region.name, region.text)}><span /><strong>{region.name}</strong></button>)}</div></section>

    <section className={s.itinerary} aria-labelledby="real-estate-itinerary-title"><header><span /><h2 id="real-estate-itinerary-title">The Journey</h2><span /></header><div className={s.itineraryBody}><div className={s.itineraryCopy}><span className={s.eyebrow}>Three cities. A fresh perspective.</span><p>Imagine a 12-day journey through the energy, heritage, and coastlines of Korea. Begin in Seoul, discover a different rhythm in Gyeongju, and make room for the sea in Busan.</p><div className={s.seoulPhoto}><Image src={photos.seoul} alt="The courtyard and traditional architecture of Gyeongbokgung Palace in Seoul" fill sizes="(max-width: 700px) 90vw, 35vw" /></div><p>Your interests, your pace, your next chapter. Bring your ideas and explore how the journey could come together.</p><Link className={s.outlineButton} href="/contact-us?interest=Korea%20journey#quote">Plan Your Chapter <span aria-hidden="true">↗</span></Link></div><div className={s.timeline}>{itinerary.map((item, index) => <button type="button" key={item.name} onClick={() => open(`${item.name} / ${item.days}`, item.text, index === 0 ? photos.seoul : "")}><span className={s.timelineDot} /><span className={s.timelineDays}>{item.days}</span><span className={s.timelineCard}><span><Icon name={item.icon} /></span><span><strong>{item.name}</strong><small>{item.text}</small></span><b aria-hidden="true">↗</b></span></button>)}</div></div></section>

    <section className={s.inclusions} aria-labelledby="real-estate-inclusions-title"><header><h2 id="real-estate-inclusions-title">The Details That Matter</h2><span /></header><div className={s.inclusionGrid}>{inclusions.map(item => <button type="button" key={item.name} onClick={() => open(item.name, item.text + " Share your priorities and explore what the right arrangements could look like for your plans.")}><h3><Icon name={item.icon} />{item.name}</h3><p>{item.text}</p><span aria-hidden="true">↗</span></button>)}</div></section>

    <section className={s.tours} aria-labelledby="real-estate-tours-title"><div className={s.tourContent}><span className={s.eyebrow}>Into the great outdoors</span><h2 id="real-estate-tours-title">Take the<br />Scenic Route</h2><div className={s.tourGrid}>{tours.map((item, index) => <article key={item.name} className={tour === index ? s.activeTour : ""}><button type="button" className={s.tourSelect} aria-pressed={tour === index} onClick={() => setTour(index)}><h3>{item.name}</h3><p>{item.text}</p></button><button type="button" className={s.tourMore} onClick={() => open(item.name, item.text + " Start with the landscapes you love and explore a chapter shaped around your own interests and pace.", item.image)}>More Details <span aria-hidden="true">↗</span></button></article>)}</div></div><div className={s.tourPhoto}><Image key={tours[tour].image} src={tours[tour].image} alt={tours[tour].name + " landscape inspiration"} fill sizes="(max-width: 700px) 90vw, 55vw" /><span aria-live="polite">{tours[tour].name}</span></div></section>
  </main><DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="real-estate-detail-title"><button type="button" className={s.close} aria-label="Close details" onClick={() => dialog.current?.close()}>×</button>{detail.image && <div className={s.dialogPhoto}><Image src={detail.image} alt="" fill sizes="(max-width: 700px) 95vw, 760px" /></div>}<div className={s.dialogCopy}><span className={s.eyebrow}>Your next perspective</span><h2 id="real-estate-detail-title">{detail.title}</h2><p>{detail.text}</p><Link className={s.button} href={`/contact-us?interest=${encodeURIComponent(detail.title)}#quote`}>Start a Conversation <span aria-hidden="true">↗</span></Link></div></DismissibleDialog></div>;
}
