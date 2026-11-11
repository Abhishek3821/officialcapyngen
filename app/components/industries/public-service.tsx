"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import s from "./public-service.module.css";

const photos = {
  pillars: "/images/public-service/stone-pillars.jpg",
  forest: "/images/public-service/forest.jpg",
  waterfall: "/images/public-service/waterfall.jpg",
  lake: "/images/consulting/alpine-lake.jpg",
  mountains: "/images/destinations/swiss-alps.webp",
  village: "/images/enterprise-solutions/toraja-houses.webp",
};
const contents = [
  { title: "Our natural world", href: "#public-natural-world", text: "A fresh perspective on the places we share." },
  { title: "Places to reconnect", href: "#public-places", text: "Find a little inspiration in the great outdoors." },
  { title: "People & communities", href: "#public-connections", text: "Discover the stories behind every landscape." },
  { title: "A shared way forward", href: "#public-beyond", text: "Small steps. Thoughtful choices. New possibilities." },
];
const principles = [
  { title: "Start with curiosity", text: "Look a little closer. Ask a new question. Discover what makes a place feel special.", bullets: ["Listen to local perspectives", "Learn the story behind a place", "Make room for discovery"] },
  { title: "Care for shared spaces", text: "Thoughtful everyday choices can begin with a little more attention to the places around us.", bullets: ["Follow local guidance", "Respect the spaces we share", "Leave room for nature"] },
  { title: "Connect with people", text: "Great experiences are built around people, their ideas, and the moments that matter.", bullets: ["Welcome different perspectives", "Share what you learn", "Support local connections"] },
  { title: "Think beyond today", text: "Bring a longer view to the way we explore, connect, and build for the future.", bullets: ["Choose with care", "Stay open to new ideas", "Keep learning together"] },
];
const connections = [
  { title: "Local stories", image: photos.village, text: "Discover the architecture, traditions, and everyday details that give every place its own character." },
  { title: "Living landscapes", image: photos.forest, text: "Slow down beneath the trees. Make a little room for curiosity, connection, and the world around you." },
  { title: "Fresh perspectives", image: photos.mountains, text: "A new viewpoint can open the door to a different conversation. Follow the path that makes you curious." },
  { title: "Shared experiences", image: photos.waterfall, text: "From a quiet walk to an extraordinary view, the best moments are often the ones we share." },
];
const beyond = [
  { title: "Community", text: "Begin with people and the stories that connect them.", detail: "Put people at the heart. Listen to different perspectives and make room for meaningful local connections." },
  { title: "Awareness", text: "See a familiar place with a fresh perspective.", detail: "Look a little closer at the places around you. Curiosity helps us ask better questions and discover more." },
  { title: "Access", text: "Consider the needs behind every experience.", detail: "A thoughtful experience starts with understanding different needs and making information easier to find and use." },
  { title: "Care", text: "Bring purpose to the everyday details.", detail: "Care is a way of approaching the everyday: listen first, respect shared places, and consider the details that matter." },
  { title: "Connection", text: "Bring people, places, and possibilities closer.", detail: "Build bridges between people and the places they share. A useful conversation can be the start of a stronger connection." },
  { title: "Tomorrow", text: "Keep a little room for what comes next.", detail: "Think beyond the first step. Keep learning, make thoughtful choices, and stay open to a better way forward." },
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
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [detail, setDetail] = useState({ title: "", text: "", image: "" });
  function open(title: string, text: string, image = "") {
    setDetail({ title, text, image }); dialog.current?.showModal();
  }
  return <div className={s.page}>
    <svg className={s.clipDefinitions} aria-hidden="true"><defs><clipPath id="public-hero-curve" clipPathUnits="objectBoundingBox"><path d="M.08 0H1V.66C1 .88 .7 .86 .68 1C.48 .95 .8 .45 .46 .39C.15 .35 .17 .13 .08 0Z" /></clipPath><clipPath id="public-contents-curve" clipPathUnits="objectBoundingBox"><path d="M.35 0H1V1H.1C-.15 .78 .43 .72 .24 .49C.07 .29 .15 .31 .35 0Z" /></clipPath><clipPath id="public-panorama-curve" clipPathUnits="objectBoundingBox"><path d="M0 0H1V.81C.89 .98 .78 .76 .65 .86C.43 1 .29 .59 .13 .73C.06 .79 .02 .72 0 .67Z" /></clipPath></defs></svg>
    <main id="main-content" tabIndex={-1}>
      <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="public-title"><Photo src={photos.pillars} alt="Forested sandstone pillars rising through soft mountain mist" className={s.heroPhoto} priority /><div className={s.heroCopy}><Leaf className={s.heroLeaf} /><p className={s.heroLabel}>Nature Tourism</p><h1 id="public-title"><em>A Fresh</em><br />Perspective.</h1><p className={s.heroSubtitle}>Discover the places that bring us together.</p><Link href="#public-contents" className={s.primary}>Explore our world <span aria-hidden="true">↗</span></Link><span className={s.heroSignature}>CAPYNGEN / PUBLIC SERVICE</span></div></section>

      <section id="public-contents" className={`${s.section} ${s.contents}`} aria-labelledby="public-contents-title"><div className={s.contentsCopy}><span className={s.eyebrow}>A WORLD OF SHARED POSSIBILITIES</span><h2 id="public-contents-title" className={s.title}>Contents</h2><nav aria-label="Explore this page">{contents.map((item, index) => <a href={item.href} key={item.title}><span>{String(index + 1).padStart(2, "0")}.</span><div><strong>{item.title}</strong><p>{item.text}</p></div><b aria-hidden="true">↗</b></a>)}</nav></div><Photo src={photos.waterfall} alt="A forest waterfall flowing into a peaceful natural pool" className={s.contentsPhoto} /></section>

      <section id="public-natural-world" className={s.chapter} aria-labelledby="public-chapter-title"><Photo src={photos.lake} alt="A clear alpine lake surrounded by forest and mountain peaks" className={s.panorama} /><div className={s.chapterCopy}><span className={s.chapterLabel}>PART 01</span><h2 id="public-chapter-title" className={s.title}>A world worth exploring.<br /><em>A future worth sharing.</em></h2><p>Step outside the everyday and discover a different perspective on nature, people, and the places we call home.</p></div></section>

      <section className={`${s.section} ${s.perspective}`} aria-labelledby="public-perspective-title"><Heading id="public-perspective-title" title="Nature, closer to everyday life" subtitle="A thoughtful approach begins with seeing the world a little differently." /><div className={s.perspectiveBody}><div><span className={s.smallLeaf} aria-hidden="true">✦</span><h3>A fresh point of view.<br /><em>A shared sense of purpose.</em></h3><p>There’s a story behind every landscape. We believe a great experience starts with curiosity about the places around us and the people who give them meaning.</p><p>Bring a little more care to how you explore, a little more attention to local perspectives, and a little more time for the moments that matter.</p><a href="#public-principles" className={s.textLink}>Discover our approach <span aria-hidden="true">↗</span></a></div><div className={s.natureMosaic}><span>Look a little closer.</span><Photo src={photos.mountains} alt="A mountain landscape reflected in clear water" /><Photo src={photos.forest} alt="Sunlight filtering through a dense green forest" /><span>Make room for nature.</span><span>Connect with the world.</span><Photo src={photos.pillars} alt="Trees growing on dramatic mountain pillars" /></div></div></section>

      <section id="public-principles" className={`${s.section} ${s.principles}`} aria-labelledby="public-principles-title"><Heading id="public-principles-title" title="Small choices. Shared possibilities." subtitle="Four thoughtful ways to approach the world around us." /><Photo src={photos.forest} alt="An atmospheric woodland filled with tall green trees" className={s.forestBanner} /><div className={s.principleGrid}>{principles.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.text}</p><ul>{principle.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>

      <section id="public-places" className={`${s.section} ${s.places}`} aria-labelledby="public-places-title"><Heading id="public-places-title" title="Places to pause. Places to reconnect." subtitle="A little inspiration for your next fresh perspective." /><div className={s.placeGrid}>{[{ title: "The quiet of the mountains", image: photos.lake, text: "Clear water, open skies, and a landscape that invites you to slow down. Find a little space to breathe and a different way to see the everyday." }, { title: "The rhythm of the forest", image: photos.waterfall, text: "Follow the sound of water, the shade of the trees, and your own sense of curiosity. Discover beauty in the details along the way." }].map(place => <button type="button" className={s.placeCard} key={place.title} onClick={() => open(place.title, place.text, place.image)}><div className={s.placePhoto}><Image src={place.image} alt={place.title} fill sizes="(max-width: 700px) 90vw, 50vw" /><h3>{place.title}</h3></div><p>{place.text}</p><span>Explore this perspective <b aria-hidden="true">↗</b></span></button>)}</div></section>

      <section className={`${s.section} ${s.reflection}`} aria-labelledby="public-reflection-title"><div><span className={s.eyebrow}>ROOM FOR A DIFFERENT PACE</span><h2 id="public-reflection-title" className={s.title}>A little stillness.<br /><em>A lasting connection.</em></h2><span className={s.reflectionMark} aria-hidden="true">✦</span><p>Sometimes a new perspective begins with a pause. A quiet lakeside moment. A path through the trees. A place that invites you to look a little closer.</p><p>Make room for what you notice along the way. The smallest details often become the memories that stay with us.</p><a href="#public-connections" className={s.textLink}>Find your connection <span aria-hidden="true">↗</span></a></div><Photo src={photos.lake} alt="A wooden boathouse beside a calm mountain lake" className={s.reflectionPhoto} /></section>

      <section id="public-connections" className={`${s.section} ${s.connections}`} aria-labelledby="public-connections-title"><Heading id="public-connections-title" title="Every place has a story" subtitle="Discover the people, landscapes, and everyday moments that bring it to life." /><div className={s.connectionGrid}>{connections.map(connection => <button type="button" key={connection.title} onClick={() => open(connection.title, connection.text, connection.image)}><Photo src={connection.image} alt={connection.title} /><div><h3>{connection.title}</h3><p>{connection.text}</p><span aria-hidden="true">↗</span></div></button>)}</div></section>

      <section id="public-beyond" className={`${s.section} ${s.beyond}`} aria-labelledby="public-beyond-title"><Heading id="public-beyond-title" title="Thinking beyond the first step" subtitle="Six connected perspectives on a shared way forward." /><div className={s.diagram}><svg viewBox="0 0 1000 510" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M250 75H405V255h190V75h155M250 255h500M250 435h155V255h190v180h155" stroke="#a4b594" strokeWidth="2" /></svg><div className={s.diagramGrid}>{beyond.map((item, index) => <button type="button" key={item.title} className={s["node" + index]} aria-pressed={selected === index} onClick={() => setSelected(index)}><strong>{item.title}</strong><span>{item.text}</span></button>)}<div className={s.hub}><Leaf /><strong>Beyond</strong><span>Shared places.<br />Shared possibilities.</span></div></div></div><div className={s.beyondDetail} aria-live="polite" aria-atomic="true"><strong>{beyond[selected].title}</strong><p>{beyond[selected].detail}</p></div></section>

      <section className={`${s.section} ${s.future}`} aria-labelledby="public-future-title"><Heading id="public-future-title" title="A more connected tomorrow" subtitle="Consider the everyday. Make room for what comes next." /><div className={s.futureBody}><div><h3>Start with a fresh perspective.</h3><span className={s.eyebrow}>PEOPLE. PLACES. POSSIBILITIES.</span><p>A thoughtful approach begins with listening. Understand the people behind an experience, the places they share, and the everyday details that make a difference.</p><p>Bring your questions, your ideas, and a little curiosity. Let’s explore a clearer, more connected way forward together.</p><Link href="/contact-us" className={s.primary}>Start a conversation <span aria-hidden="true">↗</span></Link></div><div className={s.futureGrid}><article><span /><h3>Make room for nature.</h3><p>Discover the value of slowing down and seeing a familiar place differently.</p></article><Photo src={photos.mountains} alt="Mountain peaks reflected in a green alpine lake" /><Photo src={photos.waterfall} alt="A waterfall flowing through lush woodland" /><article><span /><h3>Build around people.</h3><p>Connect a shared purpose with the needs and stories of real communities.</p></article></div></div></section>
    </main>
    <DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="public-detail-title"><button type="button" className={s.close} aria-label="Close nature perspective" onClick={() => dialog.current?.close()}>×</button>{detail.image && <Photo src={detail.image} alt={detail.title} className={s.dialogPhoto} />}<div className={s.dialogCopy}><span className={s.eyebrow}>PUBLIC SERVICE / A SHARED PERSPECTIVE</span><h2 id="public-detail-title" className={s.title}>{detail.title}</h2><p>{detail.text}</p><Link href="/contact-us" className={s.primary}>Let’s connect <span aria-hidden="true">↗</span></Link></div></DismissibleDialog>
  </div>;
}
