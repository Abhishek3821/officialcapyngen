"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import s from "./hero.module.css";

const destinations = [
  { name: "Custom IT Consulting", location: "No cookie-cutter solutions", image: "/images/consulting/alpine-lake.jpg" },
  { name: "Business Consulting Solutions", location: "Strategy to execution", image: "/images/consulting/cinque-terre.jpg" },
  { name: "IT Consulting Services", location: "Your technology path", image: "/images/network-solutions/venice.webp" },
  { name: "Enterprise Consulting Company", location: "Multi-system transformation", image: "/images/consulting/greek-island.jpg" },
];

export default function ConsultingHero() {
  const [active, setActive] = useState(0);
  const scene = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const destination = destinations[active];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!scene.current || !stage.current) return;
      const range = scene.current.offsetHeight - stage.current.offsetHeight;
      const progress = range > 0 ? Math.max(0, Math.min(1, -scene.current.getBoundingClientRect().top / range)) : 0;
      const index = Math.round(progress * (destinations.length - 1));
      setActive(previous => previous === index ? previous : index);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    if (scene.current) observer.observe(scene.current);
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); observer.disconnect(); window.cancelAnimationFrame(frame); };
  }, []);

  function select(index: number) {
    if (!scene.current || !stage.current) return;
    const range = scene.current.offsetHeight - stage.current.offsetHeight;
    const top = window.scrollY + scene.current.getBoundingClientRect().top;
    window.scrollTo({ top: top + range * index / (destinations.length - 1), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return <>
    <section ref={scene} className={s.scrollScene} style={{ paddingTop: 0 }} aria-labelledby="consulting-heading">
      <div ref={stage} className={s.hero} role="region" aria-roledescription="carousel" aria-label="Consulting services" aria-describedby="consulting-scroll-help" tabIndex={0} onKeyDown={event => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          select(event.key === "Home" ? 0 : event.key === "End" ? destinations.length - 1 : Math.max(0, Math.min(destinations.length - 1, active + (["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1))));
        }
      }}>
        <div className={s.backgrounds} aria-hidden="true">{destinations.map((place, index) => <Image key={place.name} src={place.image} alt="" fill sizes="100vw" preload={index === 0} className={`${s.background} ${index === active ? s.visible : ""}`} />)}</div>
        <div className={s.shade} />
        <div className={s.copy}><div className={s.badge}><span>India</span>Technology &amp; digital consulting</div><h1 id="consulting-heading">Instant consulting services in India</h1><p>The technology and digital consulting firm offers consultancy services for many companies in the same world, in particular Indian companies.</p><a href="#consulting-destinations" className={s.cta}>Explore Our Services <span aria-hidden="true">↗</span></a></div>
        <div className={s.destinationRail} role="group" aria-label="Choose a consulting service">{destinations.map((place, index) => {
          const offset = ((index - active + 2 + destinations.length) % destinations.length) - 2;
          return <button key={place.name} type="button" className={`${s.destination} ${index === active ? s.selected : ""}`} style={{ "--offset": offset, "--curve": Math.abs(offset) * 43 } as CSSProperties} aria-label={`${place.name}, ${place.location}`} aria-pressed={index === active} onClick={() => select(index)}><span className={s.placeLabel}><strong>{place.name}</strong><span>{place.location}</span></span><span className={s.circle}><Image src={place.image} alt="" fill sizes="(max-width: 700px) 65px, 145px" draggable={false} /></span></button>;
        })}</div>
        <div className={s.dots} role="group" aria-label="Service navigation">{destinations.map((place, index) => <button key={place.name} type="button" className={index === active ? s.activeDot : ""} aria-label={`Go to ${place.name}`} aria-pressed={index === active} onClick={() => select(index)}><span /></button>)}</div>
        <div className={s.bottomBar}><span className={s.scrollHint}><span aria-hidden="true">↓</span> Scroll to discover</span><span className={s.currentPlace} aria-live="polite" aria-atomic="true">{destination.name} <span>/ {String(active + 1).padStart(2, "0")} — {String(destinations.length).padStart(2, "0")}</span></span><div className={s.arrows}><button type="button" aria-label="Previous service" disabled={active === 0} onClick={() => select(active - 1)}>↑</button><button type="button" aria-label="Next service" disabled={active === destinations.length - 1} onClick={() => select(active + 1)}>↓</button></div></div>
        <p id="consulting-scroll-help" className={s.srOnly}>Scroll or swipe to change services. You can also select a circular image or navigation dot. Use the arrow keys, Home, or End when the hero is focused.</p>
      </div>
    </section>
  </>;
}
