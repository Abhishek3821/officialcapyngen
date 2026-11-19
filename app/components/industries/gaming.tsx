"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import s from "./gaming.module.css";

const photos = {
  vr: "/images/gaming/vr-portrait.jpg", visor: "/images/gaming/future-visor.jpg",
  neon: "/images/real-estate/neon-portrait.jpg", lights: "/images/real-estate/neon-lights.jpg",
  food: "/images/social-media-marketing/plant-burger.webp", cafe: "/images/moments/cafe.jpg",
  market: "/images/consulting/local-market.jpg", city: "/images/manufacturing-travel/kyoto.jpg",
  hiker: "/images/manufacturing-travel/alpine-traveller.jpg", trek: "/images/application-solutions/hiker.webp",
  traveller: "/images/travel-logistics/forest-traveller.jpg", friends: "/images/moments/group.jpg",
  coast: "/images/consulting/phi-phi.jpg", boats: "/images/communication-media/yacht.jpg",
  beach: "/images/enterprise-solutions/maldives-resort.webp", sunset: "/images/high-tech/sunset-mountains.jpg",
};
const portraits = [
  { name: "Multiplayer", image: photos.lights },
  { name: "Cloud gaming", image: photos.vr },
  { name: "Esports", image: photos.visor },
  { name: "Player analytics", image: photos.neon },
  { name: "Community", image: photos.visor },
];
const stories = [
  { type: "MULTIPLAYER", title: "Smooth play. Happy players.", text: "Nobody likes lag. Good servers and smart matchmaking keep every match fair and fast.", image: photos.lights },
  { type: "Cloud gaming", title: "Play anywhere, on any screen.", text: "", image: photos.food },
  { type: "Esports", title: "Give your tournaments a proper home.", text: "", image: photos.city },
  { type: "Player analytics", title: "Know why players stay, and why they leave.", text: "", image: photos.cafe },
  { type: "Community", title: "Turn your players into real fans.", text: "", image: photos.market },
];
const memories = [
  { title: "Ready for Launch Day", scene: "night" },
  { title: "From Mobile to VR", scene: "explorer" },
  { title: "Players Around the World", scene: "coast" },
  { title: "Games People Love to Play", scene: "sunset" },
];
const stages = [
  { name: "Plan & Design", number: "01", text: "Tell us about your idea, your players, and your goals." },
  { name: "Build & Connect", number: "02", text: "We build the game, the servers, and the payment tools." },
  { name: "Launch & Grow", number: "03", text: "Test it, launch it, and keep it running as you grow." },
];
const faqs = [
  { q: "What is a game app development software company?", a: "It’s a team that builds games and the tech behind them. That includes the app, the servers, payments, and anything else a game needs to run well. We handle both the building and the growing." },
  { q: "What is mobile game app development?", a: "It means making games for phones and tablets. We build for both iOS and Android. The goal is a game that loads fast and feels good to play." },
  { q: "What is AR game development?", a: "AR puts game elements into the real world through a phone or glasses. Think of a character standing in your living room. We build these experiences so they feel simple and fun." },
  { q: "How does Capyngen help gaming businesses grow?", a: "We cover both sides. Our team builds the tech, and then we help you find players through ads, content, and community. You get one partner instead of several." },
  { q: "Do you offer custom mobile game app development services?", a: "Yes, we do. Tell us your idea and we’ll build around it. Nothing off the shelf unless you want it." },
  { q: "How do you handle game analytics?", a: "We track what players actually do. How long they stay, where they quit, and what they spend. Then we turn it into simple reports so you know what to fix." },
  { q: "Do you provide cloud gaming?", a: "We do. Players can stream games to their phone or laptop without a big download. We set up the hosting so it stays quick, even with lots of people online." },
  { q: "What is your experience with VR and AR games?", a: "We’ve worked on both and we like them. We can help with early prototypes, headset features, and gesture controls. If you have a wild idea, bring it over." },
  { q: "How long does game development take?", a: "It depends on the game. A simple mobile game can come together in a few months. Bigger ones with multiplayer or VR take longer. Once we know your plan, we’ll share a clear timeline." },
  { q: "Why choose Capyngen for game development?", a: "You get tech and marketing from the same team. That means faster launches and less back and forth. We’re also around after launch to help you grow." },
];

function AdventureArt({ scene }: { scene: string }) {
  const gradient = useId();
  const night = scene === "night";
  const sunset = scene === "sunset";
  return <svg viewBox="0 0 420 510" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id={gradient} x2="0" y2="1"><stop stopColor={night ? "#0c1839" : sunset ? "#ef9b67" : "#7acbdf"} /><stop offset="1" stopColor={night ? "#37829a" : "#daf0c1"} /></linearGradient></defs><rect width="420" height="510" fill={`url(#${gradient})`} />{night ? <><path d="M320 45a27 27 0 1 0 29 37 24 24 0 0 1-29-37Z" fill="#fff1b7" />{[30, 80, 140, 190, 250, 360].map((x, i) => <circle key={x} cx={x} cy={35 + (i % 3) * 24} r="1.5" fill="#e4f0e2" />)}</> : <circle cx="332" cy="94" r="36" fill="#fff1bb" />}<path d="M0 270 75 157 130 232 226 127 320 232 420 140v250H0Z" fill={night ? "#183c5b" : "#6d9d9a"} /><path d="m170 192 56-65 44 51-36-12-17 17-11-13-36 22Z" fill={night ? "#64899c" : "#e0eee4"} /><path d="M0 300 72 237 152 279 284 215 420 271v239H0Z" fill={night ? "#135064" : "#498e82"} /><path d="M0 340q120-60 260-13t160-10v193H0Z" fill={night ? "#1a8293" : "#46b6c4"} /><g stroke={night ? "#75bacb" : "#d1eee3"} strokeWidth="2" opacity=".45"><path d="M100 360h140m-100 14h180m-230 30h100m80 20h110m-280 28h170m-40 25h150" /></g><path d="M0 374q65-42 150 20l38 116H0Z" fill={night ? "#2c423e" : "#536f41"} /><path d="M0 395q80-30 165 42l10 30-175-29Z" fill="#9b8054" /><path d="M0 0q40 150 25 365" fill="none" stroke="#503c32" strokeWidth="19" /><path d="M0 55q62-33 131 0M4 65q62-6 93 56M2 50q-3-32 49-43" stroke={night ? "#426149" : "#4b8b52"} strokeWidth="23" fill="none" />{scene === "explorer" ? <g transform="translate(90 150)"><ellipse cx="113" cy="315" rx="88" ry="13" fill="#2b4e5c55" /><path d="m62 171-22 100 33 13 33-100m34-7 19 102 36-4-17-110" fill="#8b704b" /><path d="m70 91-17 97 115 4-15-97Z" fill="#e7b156" /><path d="M60 104q-40 14-51 79l18 11 45-64m83-25q32 27 43 74l-22 13-36-60" fill="#efc69b" /><rect x="48" y="91" width="28" height="91" rx="12" fill="#697948" /><path d="m57 111 3 68m92-68-4 70" stroke="#4e583b" strokeWidth="9" /><ellipse cx="111" cy="67" rx="57" ry="62" fill="#efc69b" /><path d="M50 65q-6-78 66-75l48 10-18 18 31 16-20 15-8 27-20-42-38 26-4-25-37 30Z" fill="#4d392b" /><ellipse cx="92" cy="72" rx="5" ry="8" fill="#49372d" /><ellipse cx="132" cy="72" rx="5" ry="8" fill="#49372d" /><path d="M91 94q22 26 44-3" fill="#733b2f" /><path d="m98 98 30-2" stroke="#fff5d8" strokeWidth="5" /><path d="m39 274 40 2 5 21-56 4Zm119 0 38-3 15 26-56 1Z" fill="#4c4236" /></g> : <g transform="translate(78 290)"><circle cx="29" cy="42" r="15" fill="#e0b792" /><path d="m17 57-9 52 37 9 8-56" fill={night ? "#d69359" : "#d8a15b"} /><path d="m11 109 40 9 17 45-18 2-22-29-16 21-17-4Z" fill="#394e54" /><path d="m30 62 25 24 26 5" fill="none" stroke="#dfb28d" strokeWidth="9" /><path d="m20 28 24 3 7 14H12Z" fill="#86724e" /></g>}</svg>;
}

export default function GamingExperience() {
  const [story, setStory] = useState(0);
  const [memory, setMemory] = useState(0);
  const [plan, setPlan] = useState(1);
  const featured = stories[story];

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} style={{ paddingTop: 0 }} data-navbar-hero data-industry-hero aria-labelledby="gaming-title"><header><span className={s.eyebrow}>Capyngen / Gaming</span><h1 id="gaming-title">TAKE YOUR GAME<br />TO THE NEXT LEVEL</h1><p>Smart tech and marketing for studios, esports brands, and developers.<br />Built to keep players coming back.</p></header><div className={s.heroSide}><span className={s.orbitBadge}>Build.<br />Launch.<br />Grow.</span><span className={s.community}>Built to keep<br /><strong>players coming back.</strong></span></div><div className={s.portraitGrid}>{portraits.map((item, index) => <div className={`${s.portraitColumn} ${index === 2 ? s.centerPortrait : ""}`} key={item.name}><div className={s.portrait}><Image src={item.image} alt="" fill preload={index === 2} sizes="(max-width: 600px) 45vw, 22vw" /><span className={s.portraitTint} /><span className={s.portraitLabel}>0{index + 1} / {item.name}</span></div>{index === 2 && <a className={s.heroCta} href="#gaming-stories">Discover More <span aria-hidden="true">↗</span></a>}{index === 4 && <div className={s.smallPortrait}><Image src={photos.vr} alt="" fill sizes="(max-width: 600px) 30vw, 20vw" /></div>}</div>)}</div></section>

    <section className={s.stories} id="gaming-stories" aria-labelledby="gaming-stories-title"><header className={s.sectionHeader}><div><span className={s.eyebrow}>Fresh perspectives</span><h2 id="gaming-stories-title">Latest Stories</h2></div><a className={s.outlineButton} href="#gaming-process">More to Explore <span aria-hidden="true">↗</span></a></header><div className={s.storyGrid}><article className={s.featureStory}><div className={s.featurePhoto}><Image src={featured.image} alt="" fill sizes="(max-width: 700px) 90vw, 55vw" /></div><div aria-live="polite"><span className={s.storyType}>{featured.type}</span><h3>{featured.title}</h3>{featured.text && <p>{featured.text}</p>}</div></article><div className={s.storyList}>{stories.slice(1).map((item, i) => { const index = i + 1; return <button type="button" key={item.title} aria-pressed={story === index} onClick={() => setStory(story === index ? 0 : index)}><span className={s.storyThumb}><Image src={item.image} alt="" fill sizes="(max-width: 600px) 30vw, 18vw" /></span><span><small>{item.type}</small><strong>{item.title}</strong><span>Read the story <b aria-hidden="true">↗</b></span></span></button>; })}</div></div></section>

    <section className={s.highlights} aria-labelledby="gaming-highlights-title"><h2 id="gaming-highlights-title">Studio Highlights</h2><div className={s.highlightGrid}><article><span className={s.avatarLabel}><span><Image src={photos.traveller} alt="" fill sizes="44px" /></span><span><strong>Our perspective</strong><small>Built around players.</small></span></span><span className={s.quoteMark} aria-hidden="true">“</span><h3>A great game starts<br />with a smooth launch.</h3><p>Players don’t wait around. If your game loads fast and runs well, they stick.</p><p>We handle the tech and the buzz, so you can focus on making the game fun.</p></article><div className={s.highlightPhoto}><Image src={photos.hiker} alt="A traveller beside a turquoise lake in an alpine landscape" fill sizes="(max-width: 700px) 90vw, 35vw" /></div><div className={s.highlightSide}><div className={s.highlightSmall}><Image src={photos.city} alt="A traditional street with historic architecture in Kyoto" fill sizes="(max-width: 700px) 45vw, 25vw" /></div><h3>New games.<br />Fresh energy.</h3><Link className={s.outlineButton} href="/contact-us">Explore Highlights <span aria-hidden="true">↗</span></Link></div></div></section>

    <section className={s.dream} aria-labelledby="gaming-dream-title"><div className={s.dreamCopy}><span className={s.eyebrow}>Your Next Chapter</span><h2 id="gaming-dream-title">Your Dream<br />Game</h2><p>Got a game idea? Bring it over. We’ll help you build it, launch it, and grow it.</p><div className={s.avatarStack}>{[photos.traveller, photos.hiker, photos.vr].map((image, index) => <span key={image}><Image src={image} alt="" fill sizes="40px" style={{ objectPosition: index === 2 ? "50% 40%" : "50% 25%" }} /></span>)}<Link aria-label="Contact us about your game" href="/contact-us">+</Link></div><p>Bring your team, your plans, and the big ideas. We’ll take it from there.</p></div><article className={s.dreamMiddle}><div className={s.dreamPhoto}><Image src={photos.trek} alt="An adventurer looking across a mountain panorama" fill sizes="(max-width: 700px) 90vw, 35vw" /></div><h3>Game Tech Experiences</h3><p>Mobile, cloud, VR, and more.<br />Whatever you’re building.</p></article><Link className={s.guideCard} href="/contact-us"><Image src={photos.traveller} alt="A traveller enjoying a peaceful moment in a green forest" fill sizes="(max-width: 700px) 90vw, 35vw" /><span>Built around your game <b aria-hidden="true">↗</b></span></Link></section>

    <section className={s.embark} aria-labelledby="gaming-embark-title"><h2 id="gaming-embark-title">Build Your Game.<br />Reach Your Players.</h2><div className={s.embarkBody}><div className={s.embarkPhoto}><Image src={photos.hiker} alt="A quiet moment beside an alpine lake and dramatic mountain peaks" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><div className={s.embarkCopy}><p>Great games start with a simple idea. Add the right tech and a smart launch plan, and players will find you.</p><div className={s.embarkPhotos}><div><Image src={photos.friends} alt="Friends sharing a moment together" fill sizes="(max-width: 700px) 45vw, 25vw" /></div><div><Image src={photos.traveller} alt="A traveller taking in a forest landscape" fill sizes="(max-width: 700px) 45vw, 25vw" /></div></div><div className={s.embarkActions}><Link className={s.button} href="/contact-us">Learn More <span aria-hidden="true">↗</span></Link><a className={s.textLink} href="#gaming-process">Explore Capabilities <span aria-hidden="true">↗</span></a></div></div></div></section>

    <section className={s.memories} aria-labelledby="gaming-memories-title"><header><div><span className={s.eyebrow}>About the Journey</span><span className={s.memoryCounter}>0{memory + 1}<span> — 0{memories.length}</span></span></div><div><h2 id="gaming-memories-title">Building Games for Players<br />Around the World.</h2><p>From mobile to VR, we help studios build games people love to play, wherever they are.</p></div></header><div className={s.memoryGrid} aria-live="polite">{[0, 1, 2].map(offset => { const item = memories[(memory + offset) % memories.length]; return <article key={item.title}><div className={s.memoryArt}><AdventureArt scene={item.scene} /></div>{offset === 0 && <h3>{item.title}</h3>}</article>; })}<div className={s.memoryControls}><button type="button" aria-label="Previous" onClick={() => setMemory((memory + memories.length - 1) % memories.length)}>←</button><button type="button" aria-label="Next" onClick={() => setMemory((memory + 1) % memories.length)}>→</button></div></div></section>

    <section className={s.packages} id="gaming-process" aria-labelledby="gaming-packages-title"><header><span className={s.eyebrow}>Our Process</span><h2 id="gaming-packages-title">Choose the Right Stage<br />for Your Game.</h2></header><div className={s.packageGrid}>{stages.map((item, index) => <article key={item.name} className={plan === index ? s.selectedPlan : ""}><button type="button" className={s.planSelect} aria-pressed={plan === index} onClick={() => setPlan(index)}><span><strong>{item.number}</strong><small>Stage</small></span><p>{item.text}</p><h3>{item.name}</h3></button><Link className={s.planEnquire} href="/contact-us" aria-label={`Explore ${item.name}`}><span aria-hidden="true">↗</span>Explore</Link></article>)}</div></section>

    <section className={s.journeys} aria-labelledby="gaming-journeys-title"><div className={s.journeyCollage}><div className={s.beachPhoto}><Image src={photos.beach} alt="Overwater villas beside beautiful turquoise water" fill sizes="(max-width: 700px) 75vw, 40vw" /></div><Link className={s.journeyOverlay} href="/contact-us"><span className={s.journeyOverlayPhoto}><Image src={photos.coast} alt="Boats and turquoise water along a tropical coastline" fill sizes="(max-width: 700px) 45vw, 25vw" /></span><span><strong>Made for your game</strong><small>Tech and marketing<br />under one roof.</small><b aria-hidden="true">↗</b></span></Link></div><div className={s.journeyCopy}><span className={s.eyebrow}>A more personal perspective</span><h2 id="gaming-journeys-title">Building Games,<br />Together.</h2><p>Every game is different. So we start by listening to what you want to make.</p><p>Your idea. Your pace. Our tech and marketing team right beside you.</p><div className={s.journeyBottom}><div className={s.journeyStat}><strong>Your idea.</strong><span>Our starting point.<br />Every time.</span></div>{[{ name: "A Personal Approach", image: photos.boats }, { name: "Smooth Launches", image: photos.coast }].map(item => <div className={s.journeyItem} key={item.name}><span><Image src={item.image} alt="" fill sizes="(max-width: 700px) 30vw, 15vw" /></span><strong>{item.name}</strong></div>)}</div></div></section>

    <section className={s.faq} aria-labelledby="gaming-faq-title"><header><span className={s.eyebrow}>Game development</span><h2 id="gaming-faq-title">Frequently Asked Questions</h2></header><div className={s.faqList}>{faqs.map((f, i) => <details key={f.q} open={i === 0}><summary><strong>{f.q}</strong><b aria-hidden="true">+</b></summary><p>{f.a}</p></details>)}</div></section>
  </main></div>;
}
