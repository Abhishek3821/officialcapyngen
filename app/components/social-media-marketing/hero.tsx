"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const places = [
  { name: "Yosemite", category: "Wild horizons", src: "/images/destinations/yosemite.webp", position: "center" },
  { name: "Swiss Alps", category: "Mountain air", src: "/images/destinations/swiss-alps.webp", position: "center" },
  { name: "Cappadocia", category: "A different perspective", src: "/images/destinations/goreme.webp", position: "center" },
  { name: "Merzouga", category: "Follow your curiosity", src: "/images/destinations/merzouga.webp", position: "center" },
  { name: "Los Lances", category: "Coastal calm", src: "/images/destinations/los-lances.webp", position: "center" },
  { name: "Lakeside Escape", category: "A slower kind of day", src: "/images/application-solutions/lake-cabin.webp", position: "center" },
  { name: "Alpine Trails", category: "Find your own path", src: "/images/application-solutions/hiker.webp", position: "center" },
];

export default function SocialMediaHero() {
  const [active, setActive] = useState(3);
  const [ready, setReady] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const frame = useRef(0);
  const drag = useRef<{ id: number; x: number; left: number } | null>(null);
  const didDrag = useRef(false);

  function centerCard(index: number) {
    const element = viewport.current;
    const card = cards.current[index];
    if (!element || !card) return;
    element.scrollTo({ left: card.offsetLeft - (element.clientWidth - card.offsetWidth) / 2, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function updateActive() {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const element = viewport.current;
      if (!element) return;
      const center = element.scrollLeft + element.clientWidth / 2;
      let nearest = 0;
      let distance = Infinity;
      cards.current.forEach((card, index) => {
        if (!card) return;
        const gap = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (gap < distance) { nearest = index; distance = gap; }
      });
      setActive(nearest);
    });
  }
  useEffect(() => {
    const element = viewport.current;
    const initialCard = cards.current[3];
    if (!element || !initialCard) return;
    element.scrollLeft = initialCard.offsetLeft - (element.clientWidth - initialCard.offsetWidth) / 2;
    setReady(true);
    function wheel(event: WheelEvent) {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const current = viewport.current;
      if (!current) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? current.clientWidth : 1);
      const max = current.scrollWidth - current.clientWidth;
      if ((delta < 0 && current.scrollLeft <= 1) || (delta > 0 && current.scrollLeft >= max - 1)) return;
      event.preventDefault();
      current.scrollLeft += delta;
    }
    element.addEventListener("wheel", wheel, { passive: false });
    const observer = new ResizeObserver(() => {
      const selected = cards.current.find(card => card?.getAttribute("aria-pressed") === "true");
      if (selected) element.scrollLeft = selected.offsetLeft - (element.clientWidth - selected.offsetWidth) / 2;
    });
    observer.observe(element);
    return () => { element.removeEventListener("wheel", wheel); observer.disconnect(); cancelAnimationFrame(frame.current); };
  }, []);

  return <section id="social-media-hero" aria-labelledby="social-media-heading" className={styles.hero}>
    <div className={styles.backgrounds} aria-hidden="true">{places.map((place, index) => <Image key={place.name} src={place.src} alt="" fill preload={index === 3} sizes="100vw" className={`${styles.background} ${active === index ? styles.backgroundActive : ""}`} style={{ objectPosition: place.position }} />)}</div>
    <div className={styles.shade} />
    <div className={styles.stage}>
      <div className={styles.copy}><p className={styles.eyebrow}>A little curiosity. A world of possibilities.</p><h1 id="social-media-heading">Explore The Best<br />Natural Places</h1><p className={styles.description}>We organize tours, photo stops, and guided routes to scenic<br />spots with clear schedules and easy booking.</p><Link href="/contact-us" className={styles.cta}><span>Start Your Trip</span><span aria-hidden="true">↗</span></Link></div>
      <div className={styles.galleryArea}>
        <div className={styles.galleryMeta}><span>Explore the extraordinary</span><span aria-live="polite" aria-atomic="true">{places[active].name} <span aria-hidden="true">/</span> {String(active + 1).padStart(2, "0")}</span></div>
        <p id="social-gallery-help" className={styles.srOnly}>Scroll horizontally, use the mouse wheel over the images, swipe, or use the left and right arrow keys to explore destinations. The selected destination updates the hero background.</p>
        <div ref={viewport} className={styles.viewport} data-ready={ready} role="region" aria-roledescription="carousel" aria-label="Explore natural places" aria-describedby="social-gallery-help" onScroll={updateActive}
          onPointerDown={event => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            event.preventDefault(); didDrag.current = false; event.currentTarget.dataset.dragging = "true";
            drag.current = { id: event.pointerId, x: event.clientX, left: event.currentTarget.scrollLeft };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={event => {
            if (!drag.current || event.pointerId !== drag.current.id) return;
            const distance = event.clientX - drag.current.x;
            if (Math.abs(distance) > 6) didDrag.current = true;
            event.currentTarget.scrollLeft = drag.current.left - distance;
          }}
          onPointerUp={event => {
            event.currentTarget.dataset.dragging = "false";
            const wasMouseDown = drag.current !== null;
            drag.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            if (wasMouseDown && !didDrag.current) {
              const target = document.elementFromPoint(event.clientX, event.clientY)?.closest<HTMLButtonElement>("button[data-place]");
              if (target) centerCard(Number(target.dataset.place));
            }
          }}
          onPointerCancel={event => { drag.current = null; event.currentTarget.dataset.dragging = "false"; }}
          onLostPointerCapture={event => { drag.current = null; event.currentTarget.dataset.dragging = "false"; }}
          onClickCapture={event => { if (didDrag.current) { event.preventDefault(); event.stopPropagation(); didDrag.current = false; } }}>
          {places.map((place, index) => {
            const offset = Math.max(-3, Math.min(3, index - active));
            return <button ref={element => { cards.current[index] = element; }} key={place.name} data-place={index} type="button" aria-label={`Explore ${place.name}`} aria-pressed={active === index} className={styles.card} style={{ transform: `perspective(850px) translateY(${Math.abs(offset) * 9}px) rotateY(${offset * -16}deg) scale(${1 - Math.abs(offset) * .055})` }} onClick={() => centerCard(index)} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); const next = Math.max(0, Math.min(places.length - 1, index + (event.key === "ArrowRight" ? 1 : -1))); centerCard(next); cards.current[next]?.focus({ preventScroll: true }); } else if (event.key === "Home" || event.key === "End") { event.preventDefault(); const next = event.key === "Home" ? 0 : places.length - 1; centerCard(next); cards.current[next]?.focus({ preventScroll: true }); } }}><Image src={place.src} alt={place.name} fill draggable={false} sizes="(max-width: 600px) 170px, 240px" className={styles.cardImage} /><span className={styles.cardShade} /><span className={styles.cardCopy}><span>{place.category}</span><strong>{place.name}</strong></span></button>;
          })}
        </div>
        <div className={styles.galleryFooter}><span>Scroll to discover <span aria-hidden="true">↔</span></span><div><button type="button" aria-label="Previous destination" disabled={active === 0} onClick={() => centerCard(active - 1)}>←</button><button type="button" aria-label="Next destination" disabled={active === places.length - 1} onClick={() => centerCard(active + 1)}>→</button></div></div>
      </div>
    </div>
  </section>;
}
