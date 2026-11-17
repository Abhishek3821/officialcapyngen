"use client";


import Link from "next/link";
import { useEffect, useRef, type PointerEvent } from "react";
import styles from "./creative-projects.module.css";

const projects = [
  { title: "Core Modernisation", scene: 1, type: "Core banking" },
  { title: "Digital Wallets", scene: 0, type: "Mobile" },
  { title: "Lending Platforms", scene: 1, type: "Lending" },
  { title: "Payments Infrastructure", scene: 2, type: "Payments" },
  { title: "Open Banking APIs", scene: 0, type: "Integration" },
];

export default function BankingCreativeProjects() {
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const pitch = useRef(0);
  const frame = useRef(0);
  const drag = useRef({ id: -1, startX: 0, startPosition: 0, moved: false });

  function paint(next: number) {
    const cycle = pitch.current * projects.length;
    if (!rail.current || !cycle) return;
    position.current = ((next % cycle) + cycle) % cycle;
    rail.current.style.transform = `translate3d(${-cycle - position.current}px, 0, 0)`;
  }

  function animateTo(target: number) {
    window.cancelAnimationFrame(frame.current);
    const start = position.current;
    const distance = target - start;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { paint(target); return; }
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 380, 1);
      paint(start + distance * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame.current = window.requestAnimationFrame(tick);
    };
    frame.current = window.requestAnimationFrame(tick);
  }

  useEffect(() => {
    const viewport = track.current;
    const strip = rail.current;
    if (!viewport || !strip) return;
    const measure = () => {
      const first = strip.firstElementChild;
      if (!(first instanceof HTMLElement)) return;
      window.cancelAnimationFrame(frame.current);
      const previous = pitch.current;
      const gap = parseFloat(getComputedStyle(strip).columnGap);
      pitch.current = first.getBoundingClientRect().width + gap;
      paint(previous ? position.current / previous * pitch.current : window.innerWidth > 640 ? pitch.current * .68 : 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => { observer.disconnect(); window.cancelAnimationFrame(frame.current); };
  }, []);

  function move(direction: number) {
    animateTo(position.current + direction * pitch.current);
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    window.cancelAnimationFrame(frame.current);
    drag.current = { id: event.pointerId, startX: event.clientX, startPosition: position.current, moved: false };
  }

  function updateDrag(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current;
    if (gesture.id !== event.pointerId) return;
    const distance = event.clientX - gesture.startX;
    if (!gesture.moved && Math.abs(distance) < 6) return;
    gesture.moved = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
    paint(gesture.startPosition - distance);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current.id !== event.pointerId) return;
    drag.current.id = -1;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (drag.current.moved && pitch.current) animateTo(Math.round(position.current / pitch.current) * pitch.current);
  }

  return <section className={styles.section} aria-labelledby="creative-projects-title">
    <svg className={styles.blueprint} viewBox="0 0 700 260" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1"><path d="M20 220 240 150 650 180 450 245 20 220ZM90 190V80l215-50 310 90v82M90 80l320 70 205-30M240 150V45m170 105v88M110 100l280 61 200-24M110 120l280 60 200-24M110 140l280 59 200-25M110 160l280 57 200-25M305 30v132M350 44v128M460 76v60M510 90v40M560 104v20" /></g></svg>
    <div className={styles.heading}>
      <p className={styles.eyebrow}><span aria-hidden="true">✦</span> Our projects</p>
      <div><h2 id="creative-projects-title">Banking platforms <span>that define <br /></span> reliability.</h2><p className={styles.description}>A collection of Banking Application Development engagements <br /> where thoughtful architecture made a measurable difference.</p></div>
      <div className={styles.controls} aria-label="Project gallery controls"><button type="button" onClick={() => move(-1)} aria-label="Previous projects">←</button><button type="button" onClick={() => move(1)} aria-label="Next projects">→</button></div>
    </div>
    <div className={styles.track} ref={track} role="region" aria-roledescription="carousel" aria-label="Banking project gallery" tabIndex={0}
      onPointerDown={startDrag} onPointerMove={updateDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
      onPointerLeave={() => { if (!drag.current.moved) drag.current.id = -1; }}
      onLostPointerCapture={() => { drag.current.id = -1; if (track.current) delete track.current.dataset.dragging; }}
      onClickCapture={(event) => { if (drag.current.moved && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } }}
      onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      <div className={styles.rail} ref={rail}>
      {[0, 1, 2].flatMap(copy => projects.map((project, index) => <article key={`${copy}-${project.title}`} className={styles.project} data-staggered={index % 2 === 1} aria-hidden={copy !== 1 ? true : undefined}>
        <Link href="/contact-us" draggable={false} tabIndex={copy === 1 ? 0 : -1} className={styles.imageButton}
          onFocus={(event) => { if (copy === 1 && pitch.current && event.currentTarget.matches(":focus-visible")) { window.cancelAnimationFrame(frame.current); paint(index * pitch.current); } }}
          aria-label={`Contact us about ${project.title}`}>
          <span className={styles.image} style={{ backgroundPosition: `${project.scene * 50}% 50%` }} role="img" aria-label={project.title} />
          <span className={styles.badges}><span>{project.type}</span><span>Banking platform</span></span>
          <span className={styles.view}>View <span aria-hidden="true">↗</span></span>
        </Link>
        <h3>{project.title}</h3><p className={styles.meta}>Banking Application Development / 0{index + 1}</p>
      </article>))}
      </div>
    </div>
  </section>;
}
