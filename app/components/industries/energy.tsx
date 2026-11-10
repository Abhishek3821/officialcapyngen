"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import AtlasPhoto from "./atlas-photo";
import useInfiniteCarousel from "./use-infinite-carousel";
import s from "./energy.module.css";

const sectors = [
  {name:"Energy & power",icon:"ϟ",text:"Make complex services easier to access with clear customer journeys, connected platforms and purposeful digital tools."},
  {name:"Renewables",icon:"✳",text:"Bring a fresh perspective to renewable energy. Connect your story, services and stakeholders through thoughtful digital experiences."},
  {name:"Water & utilities",icon:"≈",text:"Help essential services feel simpler. Build intuitive portals and connected workflows around the people who rely on them."},
  {name:"Natural resources",icon:"◇",text:"Create a clearer view of complex operations with practical applications and connected information."},
  {name:"Infrastructure",icon:"⌘",text:"Build a stronger digital foundation for the everyday, from customer touchpoints to the tools your teams use."},
  {name:"Clean technology",icon:"↗",text:"Turn a forward-looking idea into a useful experience, with considered design and intelligent engineering."},
];
const offers = [
  {title:"A fresh perspective",text:"Connect resources, people and a world of possibilities.",scene:0,body:"Clear digital experiences bring complex information into focus, helping teams and customers find a simpler way forward."},
  {title:"Connected communities",text:"Make essential services feel closer to everyday life.",scene:1,body:"Thoughtful portals and service journeys make it easier for people to access information, get support and stay connected."},
  {title:"Nature in the picture",text:"Thoughtful technology for the places we share.",scene:2,body:"Bring your purpose to life through useful applications and a clear, accessible digital presence."},
  {title:"Powering tomorrow",text:"A stronger foundation for your next chapter.",scene:3,body:"Explore new possibilities with purpose-built platforms, practical integrations and considered interface design."},
];
const features = [
  {title:"Purpose at the core",body:"Begin with a clear understanding of your audience and the everyday tasks your technology should support."},
  {title:"Connected from the start",body:"Bring teams, touchpoints and workflows together through thoughtful integration and a consistent experience."},
  {title:"Clarity in the everyday",body:"Make important information easier to find, understand and use with clear interfaces and considered content."},
  {title:"Built for what’s next",body:"Create room to evolve with practical engineering and platforms shaped around your long-term direction."},
];

function Arrow({previous=false}:{previous?:boolean}) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={previous?{transform:"rotate(180deg)"}:undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function EnergyExperience() {
  const [sector,setSector]=useState(0);
  const [detail,setDetail]=useState({title:offers[0].title,body:offers[0].body,scene:0});
  const [showAll,setShowAll]=useState(false);
  const dialog=useRef<HTMLDialogElement>(null);
  const carousel=useInfiniteCarousel(offers.length);

  function openOffer(index:number) {setDetail(offers[index]);setShowAll(false);dialog.current?.showModal();}

  return <div className={s.page}><main id="main-content" tabIndex={-1}>
    <section className={s.hero} data-navbar-hero data-industry-hero aria-labelledby="energy-title">
      <div className={s.heroCopy}><p className={s.eyebrow}>Energy, resources & utilities</p><h1 id="energy-title">The art of<br/><span>powering</span><br/>possibilities.</h1><p>Bring people and platforms closer.<br/>Discover a thoughtful digital approach<br/>to a world of new possibilities.</p><div className={s.heroIcons} aria-label="Our focus"><span title="Energy">ϟ</span><span title="Connected resources">↗</span><span title="A fresh perspective">✳</span></div></div>
      <div className={s.heroVisual}><Image src="/images/industries/energy-hiker.png" alt="A hiker with a canvas backpack looking out across a green alpine valley and dramatic mountain peaks" fill preload sizes="(max-width:640px) 100vw, 60vw" className={s.heroPhoto}/><a href="#energy-possibilities" className={s.heroButton}>Explore possibilities <span aria-hidden="true">↗</span></a></div>
    </section>

    <section id="energy-sectors" className={s.sectors} aria-label="Explore energy sectors">
      <div className={s.chips} role="group" aria-label="Select an industry sector">{sectors.map((item,index)=><button key={item.name} type="button" aria-pressed={sector===index} onClick={()=>setSector(index)}>{item.name}<span aria-hidden="true">{item.icon}</span></button>)}</div>
      <div className={s.introStrip}><div className={s.introCard}><span aria-hidden="true">◎</span><h2>Thoughtful technology.<br/>A world of possibility.</h2></div><div className={s.sectorDescription} aria-live="polite"><h2>{sectors[sector].name}, connected.</h2><p>{sectors[sector].text}</p></div><div className={s.disciplineGrid} aria-label="Our disciplines"><span>DESIGN <b aria-hidden="true">↗</b></span><span>BUILD <b aria-hidden="true">⌘</b></span><span>CONNECT <b aria-hidden="true">≈</b></span><span>EVOLVE <b aria-hidden="true">✳</b></span></div></div>
    </section>

    <section id="energy-possibilities" className={s.offers} aria-labelledby="energy-offers-title">
      <div className={s.offersIntro}><p>Explore a fresh perspective<br/>on the systems, services<br/>and places we share.</p><button type="button" className={s.outlineButton} onClick={()=>{setShowAll(true);dialog.current?.showModal();}}>All possibilities <span aria-hidden="true">↗</span></button></div>
      <div className={s.offerContent}><header className={s.offerHeading}><h2 id="energy-offers-title">Better possibilities.</h2><div className={s.arrows}><button type="button" disabled={!carousel.ready} onClick={()=>carousel.move(-1)} aria-label="Previous energy possibilities"><Arrow previous/></button><button type="button" disabled={!carousel.ready} onClick={()=>carousel.move(1)} aria-label="Next energy possibilities"><Arrow/></button></div></header>
        <div className={s.viewport} ref={carousel.viewport} {...carousel.handlers} role="region" aria-roledescription="carousel" aria-label="Energy possibilities gallery" tabIndex={0}><div className={s.rail} ref={carousel.rail}>{[0,1,2,3,4].flatMap(copy=>offers.map((item,index)=><article key={`${copy}-${item.title}`} className={s.offerCard} aria-hidden={copy!==1?true:undefined}><button type="button" disabled={!carousel.ready} tabIndex={copy===1?0:-1} onClick={()=>openOffer(index)} onFocus={event=>{if(copy===1&&event.currentTarget.matches(":focus-visible"))carousel.focusCard(index);}} aria-label={`Explore ${item.title}`}><AtlasPhoto image="/images/industries/energy-destinations.png" scene={item.scene} label={item.title} className={s.offerPhoto}/><div><h3>{item.title}</h3><p>{item.text}</p></div></button></article>))}</div></div>
        <div className={s.offerFoot}><span>New perspectives. Shared possibilities.</span><span aria-hidden="true">01 — 04</span></div>
      </div>
    </section>

    <section className={s.outlook} aria-labelledby="energy-outlook-title"><div className={s.coastPhoto}><Image src="/images/industries/energy-coast.png" alt="A traveller on a wooden pier beside a turquoise bay, boats and green limestone cliffs" fill sizes="(max-width:700px) 100vw, 50vw" className={s.coastImage}/></div><div className={s.outlookCopy}><h2 id="energy-outlook-title">A brighter <span>outlook</span><br/>for the places we share.</h2><p>Connect today’s needs with tomorrow’s possibilities. We bring considered design and practical technology together to create better experiences for your teams and customers.</p><Link href="/contact-us" className={s.primaryButton}>Build a better tomorrow <span aria-hidden="true">↗</span></Link></div></section>

    <section className={s.features} aria-label="Our approach">{features.map((item,index)=><button type="button" key={item.title} onClick={()=>{setDetail({title:item.title,body:item.body,scene:index});setShowAll(false);dialog.current?.showModal();}}><span>{item.title}</span><span className={s.featureArrow} aria-hidden="true">↗</span></button>)}</section>

    <section className={s.closing} aria-labelledby="energy-closing-title"><div className={s.closingHeading}><h2 id="energy-closing-title">Smarter <span>systems for<br/>a connected</span> world.</h2><a href="#energy-title" aria-label="Back to the top of the Energy page">↑</a></div><div className={s.closingCopy}><p>Complex services deserve simple experiences. Give people a clearer path to the information and tools they need, wherever their day takes them.</p><p>From a welcoming website to a connected service platform, we help energy and utilities teams turn a new perspective into something useful.</p></div><div className={s.ribbons} aria-hidden="true">{["Clean energy","Connected people","A fresh perspective","Built for tomorrow","Shared possibilities","Thoughtful technology"].map((item,index)=><span key={item} style={{transform:`rotate(${index%2?12:-12}deg)`}}>{item} ↗</span>)}</div></section>
  </main>
  <DismissibleDialog ref={dialog} className={s.dialog} aria-labelledby="energy-detail-title"><button type="button" className={s.close} onClick={()=>dialog.current?.close()} aria-label="Close energy details">×</button>{showAll?<div className={s.allDetails}><p className={s.eyebrow}>Energy, resources & utilities</p><h2 id="energy-detail-title">A world of possibilities.</h2><div className={s.allList}>{offers.map((item,index)=><button type="button" key={item.title} onClick={()=>{setDetail(item);setShowAll(false);}}><AtlasPhoto image="/images/industries/energy-destinations.png" scene={item.scene} label={item.title} className={s.listPhoto}/><span><strong>{item.title}</strong><span>{item.text}</span></span><span aria-hidden="true">↗</span></button>)}</div></div>:<><AtlasPhoto image="/images/industries/energy-destinations.png" scene={detail.scene} label={detail.title} className={s.detailPhoto}/><div className={s.detailCopy}><p className={s.eyebrow}>A fresh perspective</p><h2 id="energy-detail-title">{detail.title}</h2><p>{detail.body}</p><Link href="/contact-us" className={s.primaryButton}>Let’s talk ↗</Link></div></>}</DismissibleDialog>
  </div>;
}
