"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import styles from "./hero.module.css";

const images = [
  { src: "/images/web-development/chair.webp", alt: "Contemporary furniture design", treatment: "" },
  { src: "/images/project-showcase/infinity-green.webp", alt: "Modern architectural interior", treatment: "" },
  { src: "/images/adventure/open-road.webp", alt: "An open-road travel scene", treatment: "" },
  { src: "/images/crm-infinity.webp", alt: "An iridescent sculptural ribbon on pink", treatment: "ribbon" },
  { src: "/images/destinations/merzouga.webp", alt: "Warm desert dunes", treatment: "desert" },
  { src: "/images/agenda/photo-1486406146926-c627a92ad1ab.jpg", alt: "City skyscrapers", treatment: "city" },
  { src: "/images/app-development/resort-pool.webp", alt: "A tranquil tropical pool", treatment: "" },
  { src: "/images/crm-infinity.webp", alt: "A chrome ribbon against bright pink", treatment: "pinkRibbon" },
  { src: "/images/blockchain-development/botanical.webp", alt: "Botanical creative direction", treatment: "" },
  { src: "/images/brands-shine/floral.webp", alt: "A colorful fashion editorial", treatment: "" },
];

export default function MarketingGallery() {
  const [offset, setOffset] = useState(0);
  const region = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number } | null>(null);
  const lastWheel = useRef(0);
  const wheelDistance = useRef(0);

  function move(direction: number) {
    setOffset(current => (current + direction + images.length) % images.length);
  }

  useEffect(() => {
    const element = region.current;
    if (!element) return;
    function wheel(event: WheelEvent) {
      // Leave browser zoom gestures available.
      if (event.ctrlKey || event.metaKey) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!delta) return;
      event.preventDefault();
      if (Date.now() - lastWheel.current < 300) return;
      wheelDistance.current += delta * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 500 : 1);
      if (Math.abs(wheelDistance.current) < 25) return;
      const direction = Math.sign(wheelDistance.current);
      setOffset(current => (current + direction + images.length) % images.length);
      wheelDistance.current = 0;
      lastWheel.current = Date.now();
    }
    element.addEventListener("wheel", wheel, { passive: false });
    return () => element.removeEventListener("wheel", wheel);
  }, []);

  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!gesture.current) return;
    const dx = event.clientX - gesture.current.x;
    const dy = event.clientY - gesture.current.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      move(dx < 0 ? 1 : -1);
      gesture.current = { x: event.clientX, y: event.clientY };
    }
  }

  return <div ref={region} className={styles.gallery} role="region" aria-roledescription="carousel" aria-label="Creative inspiration gallery" aria-describedby="marketing-gallery-help" tabIndex={0}
    onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
      if (event.key === "Home" || event.key === "End") { event.preventDefault(); setOffset(event.key === "Home" ? 0 : images.length - 1); }
    }}
    onPointerDown={event => {
      if (event.button !== 0 || (event.target as HTMLElement).closest("button")) return;
      gesture.current = { x: event.clientX, y: event.clientY };
      event.currentTarget.setPointerCapture(event.pointerId);
    }}
    onPointerMove={pointerMove}
    onPointerUp={() => { gesture.current = null; }}
    onPointerCancel={() => { gesture.current = null; }}
    onLostPointerCapture={() => { gesture.current = null; }}>
    <p id="marketing-gallery-help" className={styles.srOnly}>Scroll over the cards, drag horizontally, swipe, or use the left and right arrow keys to browse.</p>
    {images.map((item, index) => {
      const slot = (index - offset + images.length) % images.length;
      return <div key={item.alt} className={`${styles.card} ${styles[`card${slot + 1}`]} ${item.treatment ? styles[item.treatment] : ""}`}><Image src={item.src} alt={item.alt} fill draggable={false} loading="eager" sizes="(max-width: 600px) 23vw, (max-width: 1000px) 16vw, 200px" className={styles.cardImage} /></div>;
    })}
    <div className={styles.galleryControls}><button type="button" onClick={() => move(-1)} aria-label="Previous gallery image">←</button><span aria-live="polite" aria-atomic="true">{String(offset + 1).padStart(2, "0")} <span aria-hidden="true">/</span> <span className={styles.srOnly}>of</span> {images.length}</span><button type="button" onClick={() => move(1)} aria-label="Next gallery image">→</button></div>
  </div>;
}
