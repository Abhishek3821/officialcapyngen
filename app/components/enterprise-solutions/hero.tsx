"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const places = [
  { title: "Alpine Adventures", subtitle: "Find your next great view", image: "/images/destinations/swiss-alps.webp", background: "/images/enterprise-solutions/alpine-lake.webp" },
  { title: "Cozy Mountain Stays", subtitle: "Slow down somewhere special", image: "/images/application-solutions/lake-cabin.webp", background: "/images/application-solutions/lake-cabin.webp" },
  { title: "Coastal Escapes", subtitle: "A little sun. A different pace.", image: "/images/destinations/los-lances.webp", background: "/images/destinations/los-lances.webp" },
  { title: "Desert Discoveries", subtitle: "Follow the road less traveled", image: "/images/destinations/merzouga.webp", background: "/images/destinations/merzouga.webp" },
  { title: "Wild Horizons", subtitle: "Make room for the extraordinary", image: "/images/destinations/yosemite.webp", background: "/images/destinations/yosemite.webp" },
  { title: "Island Moments", subtitle: "Reconnect with your sense of wonder", image: "/images/network-solutions/islands.webp", background: "/images/network-solutions/islands.webp" },
];

export default function EnterpriseHero() {
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const viewport = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const drag = useRef<{ pointer: number; x: number; left: number } | null>(null);
  const dragged = useRef(false);

  function updateEdges() {
    const element = viewport.current;
    if (!element) return;
    const next = { start: element.scrollLeft <= 2, end: element.scrollLeft >= element.scrollWidth - element.clientWidth - 2 };
    setEdges(previous => previous.start === next.start && previous.end === next.end ? previous : next);
  }
  function behavior(): ScrollBehavior {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
  }
  function select(index: number, focus = false) {
    setActive(index);
    const element = viewport.current;
    const card = cards.current[index];
    if (!element || !card) return;
    if (focus) card.focus({ preventScroll: true });
    const start = card.offsetLeft - (cards.current[0]?.offsetLeft ?? 0);
    element.scrollTo({ left: Math.min(start, element.scrollWidth - element.clientWidth), behavior: behavior() });
  }
  function scroll(direction: number) {
    const element = viewport.current;
    if (element) element.scrollBy({ left: direction * (element.clientWidth * .8), behavior: behavior() });
  }
  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    function wheel(event: WheelEvent) {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const element = viewport.current;
      if (!element) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1);
      const max = element.scrollWidth - element.clientWidth;
      if ((delta < 0 && element.scrollLeft <= 1) || (delta > 0 && element.scrollLeft >= max - 1)) return;
      event.preventDefault();
      element.scrollLeft += delta;
    }
    element.addEventListener("wheel", wheel, { passive: false });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    return () => { element.removeEventListener("wheel", wheel); observer.disconnect(); };
  }, []);

  return <section id="enterprise-hero" className={styles.hero} aria-labelledby="enterprise-heading">
    <Image key={places[active].background} src={places[active].background} alt="" fill preload sizes="100vw" className={styles.background} />
    <div className={styles.shade} />
    <svg className={styles.orbits} viewBox="0 0 650 650" fill="none" aria-hidden="true"><circle cx="325" cy="325" r="290" stroke="currentColor" strokeWidth="1.5" strokeDasharray="17 27" /><circle cx="325" cy="325" r="220" stroke="currentColor" strokeOpacity=".22" /></svg>
    <div className={styles.stage}>
      <div className={styles.copy}><p className={styles.eyebrow}>Capyngen / Enterprise Solutions</p><h1 id="enterprise-heading">Explore the world.<br />Discover <em>yourself.</em></h1><p className={styles.description}>New places. Fresh perspectives. Endless possibilities.<br />Your next chapter starts with a little curiosity.</p><Link href="/contact-us" className={styles.cta}><span>Choose Your Journey</span><span aria-hidden="true">&#8599;</span></Link></div>
      <div className={styles.bottomRow}><div className={styles.caption}><span className={styles.captionLine} aria-hidden="true" /><p>Go a little further.<br /><strong>Feel a little more.</strong></p></div><div className={styles.gallery}>
        <div className={styles.galleryTop}><span>Find your kind of escape</span><div className={styles.controls}><button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Scroll images left" aria-controls="enterprise-gallery">&#8592;</button><button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label="Scroll images right" aria-controls="enterprise-gallery">&#8594;</button></div></div>
        <p id="enterprise-gallery-help" className={styles.srOnly}>Swipe, drag, or scroll to explore the images. Use the arrow buttons to move through the gallery. Select a card to change the background; use left and right arrow keys when a card is focused.</p>
        <div id="enterprise-gallery" ref={viewport} className={styles.viewport} onScroll={updateEdges} role="region" aria-roledescription="carousel" aria-label="Explore travel inspiration" aria-describedby="enterprise-gallery-help"
          onKeyDown={event => { const focused = cards.current.findIndex(card => card === event.target); const current = focused >= 0 ? focused : active; if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); select(Math.max(0, Math.min(places.length - 1, current + (event.key === "ArrowRight" ? 1 : -1))), true); } else if (event.key === "Home" || event.key === "End") { event.preventDefault(); select(event.key === "Home" ? 0 : places.length - 1, true); } }}
          onPointerDown={event => { if (event.pointerType !== "mouse" || event.button !== 0) return; dragged.current = false; drag.current = { pointer: event.pointerId, x: event.clientX, left: event.currentTarget.scrollLeft }; }}
          onPointerMove={event => { const current = drag.current; if (!current || event.pointerId !== current.pointer) return; const delta = event.clientX - current.x; if (Math.abs(delta) > 5) { dragged.current = true; event.currentTarget.dataset.dragging = "true"; event.currentTarget.setPointerCapture(event.pointerId); } if (dragged.current) { event.preventDefault(); event.currentTarget.scrollLeft = current.left - delta; } }}
          onPointerUp={event => { drag.current = null; event.currentTarget.dataset.dragging = "false"; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
          onPointerCancel={event => { drag.current = null; dragged.current = false; event.currentTarget.dataset.dragging = "false"; }}
          onLostPointerCapture={event => { drag.current = null; event.currentTarget.dataset.dragging = "false"; }}
          onClickCapture={event => { if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; } }}>
          {places.map((place, index) => <button type="button" key={place.title} ref={element => { cards.current[index] = element; }} className={styles.card} aria-pressed={active === index} aria-label={`Show ${place.title}`} onClick={() => select(index)}><span className={styles.cardTitle}>{place.title}</span><span className={styles.cardArrow} aria-hidden="true">&#8599;</span><span className={styles.cardPhoto}><Image src={place.image} alt="" fill sizes="(max-width: 600px) 65vw, 22vw" className={styles.cardImage} draggable={false} /></span><span className={styles.cardSubtitle}>{place.subtitle}</span></button>)}
        </div>
        <div className={styles.galleryBottom}><span>Drag to discover <span aria-hidden="true">&#8596;</span></span><span aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} <span className={styles.countDivider}>/</span> {String(places.length).padStart(2, "0")}</span></div>
      </div></div>
    </div>
  </section>;
}
