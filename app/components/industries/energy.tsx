"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AtlasPhoto from "./atlas-photo";
import EnergySections from "./energy-sections";
import useInfiniteCarousel from "./use-infinite-carousel";
import s from "./energy.module.css";

const sectors = [
  {name:"Smart Grid Software",icon:"ϟ",text:"Apply predictive analytics, load balancing, and real-time monitoring to ensure efficient energy distribution."},
  {name:"Utility Billing Software",icon:"⌘",text:"Enable invoicing, payment collection and billing management functionalities with the software for electric, water, and gas utilities."},
  {name:"Renewable Energy Software",icon:"✳",text:"Generate, store, and deliver cheap wind, solar, and hydropower."},
  {name:"Oil & Gas ERP Solutions",icon:"◇",text:"Develop simple methods for exploration, production, supply chain and reporting activities."},
  {name:"Energy Analytics Software",icon:"↗",text:"Optimise utilities and power plants using advanced analytics, dashboards, and performance reporting."},
  {name:"Smart Meter Data Management",icon:"≈",text:"Get your consumption data the best way possible, make your smart meters easy, and effectively communicate usage trends."},
];
const segments = [
  {title:"Metals and Mining",text:"Integrated systems for extraction, logistics, and worker health and safety.",scene:0},
  {title:"Oil and Gas",text:"Live monitoring in exploration, production and distribution.",scene:1},
  {title:"Utilities and Renewable",text:"Smart grid control and clean energy integration.",scene:2},
  {title:"Chemicals",text:"Support of platforms for production, storage, and handling based on compliance.",scene:3},
];
const challenges = [
  "Operating complex assets and infrastructure dependably and efficiently.",
  "A green switchover to renewable and sustainable energy.",
  "Providing cybersecurity to progressively interconnected infrastructures.",
  "Improving resource allocation through automation and predictive analytics.",
];
const pillars = ["Cloud-Native Deployment","AI & Machine Learning","IoT Energy Monitoring","Visualization Dashboards","Blockchain Transactions","ERP & Legacy Integration"];
const segmentsText = "Technology: Our scale builds the power for you from extraction to distribution of energy. We create the resilient, scalable technology that sustains operations without interruption.";
const challengeText = "There's growing demand for energy and utilities companies to adapt at the pace of nature: ageing infrastructure, the transition to renewables, expanded cyber risk, and increasingly constrained budgets.";
const pillarsText = "Reliable, cloud-native utility software that delivers telemetry, analytics, and hardened security. Today's energy and utility businesses need more than single-point solutions. They need an integrated technology ecosystem in which every layer, from capturing data at the edge of the grid to processing transactions securely, is aligned.";
const foundationText = "This is the foundation on which we build utility platforms for flexible demand that are scalable, meet the requirements of regulation and leverage operational data to inform decisions that decrease costs and ease risk.";

function Arrow({previous=false}:{previous?:boolean}) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={previous?{transform:"rotate(180deg)"}:undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function EnergyExperience() {
  const [sector,setSector]=useState(0);
  const { viewport: carouselViewport, rail: carouselRail, handlers: carouselHandlers, ready: carouselReady, move: moveCarousel, focusCard } = useInfiniteCarousel(segments.length);

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} data-navbar-hero data-industry-hero aria-labelledby="energy-title">
      <div className={s.heroCopy}><p className={s.eyebrow}>Energy, resources & utilities</p><h1 id="energy-title" className={s.longTitle}>Reshape <span>Energy <br/>Operations</span> with <br/>Energy Software <br/>Development</h1><p>Digital excellence is going to turn waste reduction into a safe practice and consistent throughput through increased quality.</p><div className={s.heroIcons} aria-label="Our focus"><span title="Energy">ϟ</span><span title="Utilities">↗</span><span title="Renewables">✳</span></div></div>
      <div className={s.heroVisual}><Image src="/images/industries/energy-hiker.png" alt="Energy software development for energy, resources and utilities" fill preload sizes="(max-width:640px) 100vw, 60vw" className={s.heroPhoto}/><a href="#energy-sectors" className={s.heroButton}>Explore solutions <span aria-hidden="true">↗</span></a></div>
    </section>

    <section id="energy-sectors" className={s.sectors} aria-label="Energy software solutions">
      <div className={s.chips} role="group" aria-label="Select an energy software solution">{sectors.map((item,index)=><button key={item.name} type="button" aria-pressed={sector===index} onClick={()=>setSector(index)}>{item.name}<span aria-hidden="true">{item.icon}</span></button>)}</div>
      <div className={s.introStrip}><div className={s.introCard}><span aria-hidden="true">◎</span><h2>Energy software.<br/>Efficient distribution.</h2></div><div className={s.sectorDescription} aria-live="polite"><h2>{sectors[sector].name}</h2><p>{sectors[sector].text}</p></div><div className={s.disciplineGrid} aria-label="Our focus areas"><span>GRID <b aria-hidden="true">↗</b></span><span>BILLING <b aria-hidden="true">⌘</b></span><span>METERS <b aria-hidden="true">≈</b></span><span>ANALYTICS <b aria-hidden="true">✳</b></span></div></div>
    </section>

    <section id="energy-possibilities" className={s.offers} aria-labelledby="energy-offers-title">
      <div className={s.offersIntro}><p>{segmentsText}</p><Link href="/contact-us" className={s.outlineButton}>Contact Us <span aria-hidden="true">↗</span></Link></div>
      <div className={s.offerContent}><header className={s.offerHeading}><h2 id="energy-offers-title">Segments We Serve</h2><div className={s.arrows}><button type="button" disabled={!carouselReady} onClick={()=>moveCarousel(-1)} aria-label="Previous segments"><Arrow previous/></button><button type="button" disabled={!carouselReady} onClick={()=>moveCarousel(1)} aria-label="Next segments"><Arrow/></button></div></header>
        <div className={s.viewport} ref={carouselViewport} {...carouselHandlers} role="region" aria-roledescription="carousel" aria-label="Segments we serve" tabIndex={0}><div className={s.rail} ref={carouselRail}>{[0,1,2,3,4].flatMap(copy=>segments.map((item,index)=><article key={`${copy}-${item.title}`} className={s.offerCard} aria-hidden={copy!==1?true:undefined}><Link href="/contact-us" draggable={false} tabIndex={copy===1?0:-1} onFocus={event=>{if(copy===1&&event.currentTarget.matches(":focus-visible"))focusCard(index);}} aria-label={`Contact us about ${item.title}`}><AtlasPhoto image="/images/industries/energy-destinations.png" scene={item.scene} label={item.title} className={s.offerPhoto}/><div><h3>{item.title}</h3><p>{item.text}</p></div></Link></article>))}</div></div>
        <div className={s.offerFoot}><span>From extraction to distribution of energy.</span><span aria-hidden="true">01 — 04</span></div>
      </div>
    </section>

    <section className={s.outlook} aria-labelledby="energy-outlook-title"><div className={s.coastPhoto}><Image src="/images/industries/energy-coast.png" alt="Major challenges in the energy and utilities sector" fill sizes="(max-width:700px) 100vw, 50vw" className={s.coastImage}/></div><div className={s.outlookCopy}><h2 id="energy-outlook-title">Addressing Major <span>Challenges</span><br/>in the Energy &amp; Utilities Sector</h2><p>{challengeText}</p><p>These problems require technological solutions that are real, scalable, and designed for long-term operational sustainability.</p><p>Energy and Utilities face significant challenges:</p><Link href="/contact-us" className={s.primaryButton}>Contact Us <span aria-hidden="true">↗</span></Link></div></section>

    <section className={s.features} aria-label="Energy and Utilities face significant challenges">{challenges.map(item=><Link href="/contact-us" key={item}><span>{item}</span><span className={s.featureArrow} aria-hidden="true">↗</span></Link>)}</section>

    <section className={s.closing} aria-labelledby="energy-closing-title"><div className={s.closingHeading}><h2 id="energy-closing-title">Architectural <span>&amp; Technology<br/>Pillars</span></h2><a href="#energy-title" aria-label="Back to the top of the Energy page">↑</a></div><div className={s.closingCopy}><p>{pillarsText}</p><p>{foundationText}</p></div><div className={s.ribbons}>{pillars.map((item,index)=><span key={item} style={{transform:`rotate(${index%2?12:-12}deg)`}}>{item}</span>)}</div></section>
    <EnergySections />
  </main>
  </div>;
}
