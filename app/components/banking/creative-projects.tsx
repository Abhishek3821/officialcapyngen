"use client";

import DismissibleDialog from "../dismissible-dialog";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import styles from "./creative-projects.module.css";

const projects = [
  { title: "Quiet Form", scene: 1, type: "Architecture", text: "Light, proportion and sculptural lines bring a fresh perspective to a quiet interior." },
  { title: "Luxury Skyline", scene: 0, type: "Residential", text: "Rich textures, soft curtains and considered details make room for meaningful moments." },
  { title: "Bohemian Rhapsody", scene: 1, type: "Residential", text: "An exploration of space and light, shaped by a beautifully simple architectural gesture." },
  { title: "Vintage Glamour", scene: 2, type: "Residential", text: "Classic proportions meet contemporary comfort in a calm, layered living space." },
  { title: "Living Innovation", scene: 0, type: "Interior design", text: "Thoughtful materials and warm neutral tones turn everyday spaces into personal experiences." },
];

export default function BankingCreativeProjects() {
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const position = useRef(0);
  const pitch = useRef(0);
  const frame = useRef(0);
  const drag = useRef({ id: -1, startX: 0, startPosition: 0, moved: false });
  const [selected, setSelected] = useState(0);

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
      <div><h2 id="creative-projects-title">Creative <span>projects that<br />define</span> our style.</h2><p className={styles.description}>A collection of considered spaces and fresh perspectives.<br /> Explore the details that make every experience distinctive.</p></div>
      <div className={styles.controls} aria-label="Project gallery controls"><button type="button" onClick={() => move(-1)} aria-label="Previous projects">←</button><button type="button" onClick={() => move(1)} aria-label="Next projects">→</button></div>
    </div>
    <div className={styles.track} ref={track} role="region" aria-roledescription="carousel" aria-label="Creative project gallery" tabIndex={0}
      onPointerDown={startDrag} onPointerMove={updateDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
      onPointerLeave={() => { if (!drag.current.moved) drag.current.id = -1; }}
      onLostPointerCapture={() => { drag.current.id = -1; if (track.current) delete track.current.dataset.dragging; }}
      onClickCapture={(event) => { if (drag.current.moved && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } }}
      onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      <div className={styles.rail} ref={rail}>
      {[0, 1, 2].flatMap(copy => projects.map((project, index) => <article key={`${copy}-${project.title}`} className={styles.project} data-staggered={index % 2 === 1} aria-hidden={copy !== 1 ? true : undefined}>
        <button type="button" tabIndex={copy === 1 ? 0 : -1} className={styles.imageButton}
          onFocus={(event) => { if (copy === 1 && pitch.current && event.currentTarget.matches(":focus-visible")) { window.cancelAnimationFrame(frame.current); paint(index * pitch.current); } }}
          onClick={() => { setSelected(index); dialog.current?.showModal(); }} aria-label={`View ${project.title}`}>
          <span className={styles.image} style={{ backgroundPosition: `${project.scene * 50}% 50%` }} role="img" aria-label={`${project.title}: ${project.text}`} />
          <span className={styles.badges}><span>{project.type}</span><span>Design concept</span></span>
          <span className={styles.view}>View <span aria-hidden="true">↗</span></span>
        </button>
        <h3>{project.title}</h3><p className={styles.meta}>Interior collection / 0{index + 1}</p>
      </article>))}
      </div>
    </div>
    <DismissibleDialog ref={dialog} className={styles.dialog} aria-label={projects[selected].title}>
      <button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Close project">×</button>
      <div role="img" aria-label={projects[selected].text} className={styles.dialogImage} style={{ backgroundPosition: `${projects[selected].scene * 50}% 50%` }} />
      <div className={styles.dialogCopy}><p className={styles.eyebrow}>Design concept</p><h3>{projects[selected].title}</h3><p>{projects[selected].text}</p></div>
    </DismissibleDialog>
  </section>;
}
