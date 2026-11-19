"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent, type ReactNode } from "react";
import s from "./cleaning-cta.module.css";

function Leaf() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C-1 8 15 5 27 4c1 14-4 26-20 21ZM7 25 23 10M13 19l-1-6m7 0 5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export type CtaContent = {
  eyebrow: ReactNode; heading: ReactNode; text: ReactNode; button: ReactNode; actionNote: ReactNode;
  footerTop: ReactNode; footerBottom: ReactNode; footerIndex: ReactNode; plate: ReactNode;
  captionLeft: ReactNode; captionRight: ReactNode; cardTitle: ReactNode; cardText: ReactNode;
  seal: ReactNode; bottleTitle: ReactNode; bottleText: ReactNode; visualNote: ReactNode;
};

const defaultContent: CtaContent = {
  eyebrow: "Fresh ideas. Thoughtful execution.",
  heading: <>Ready to start<br />your <span>digital</span><br />transformation?</>,
  text: "Fresh ideas. Thoughtful execution. Discover simple ways to modernise your business and grow with confidence.",
  button: "Let’s Make the Switch",
  actionNote: <>A fresh start<br />begins with a conversation.</>,
  footerTop: "Fresh ideas.", footerBottom: "Thoughtful execution.", footerIndex: "/ GROW WITH CONFIDENCE",
  plate: <>Start small.<br />Grow further.</>,
  captionLeft: "A fresh start", captionRight: "MODERNISE YOUR BUSINESS",
  cardTitle: "Thoughtful execution.", cardText: "Grow with confidence.",
  seal: <>Fresh ideas<br />start here.</>,
  bottleTitle: <>grow<br />further.</>, bottleText: "START SMALL",
  visualNote: "Discover simple ways to modernise your business.",
};

export default function CleaningCta({ content = defaultContent }: { content?: CtaContent }) {
  const c = content;
  const scene = useRef<HTMLDivElement>(null);
  function move(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    scene.current?.style.setProperty("--tilt-x", `${-y * 5}deg`);
    scene.current?.style.setProperty("--tilt-y", `${x * 6}deg`);
  }
  function reset() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }
  return <section aria-labelledby="cleaning-cta-heading" className={s.section} onPointerMove={move} onPointerLeave={reset}>
    <div className={s.halo} aria-hidden="true" /><div className={s.floor} aria-hidden="true" />
    <div className={s.content}>
      <div className={s.copy}>
        <span className={s.eyebrow}><span className={s.statusDot} /> {c.eyebrow}</span>
        <h2 id="cleaning-cta-heading">{c.heading}</h2>
        <p>{c.text}</p>
        <div className={s.actions}><Link href="/contact-us" className={s.contact}><span>{c.button}</span><span className={s.contactArrow} aria-hidden="true">↗</span></Link><span className={s.actionNote}>{c.actionNote}</span></div>
        <div className={s.copyFooter}><Leaf /><span>{c.footerTop}<br /><strong>{c.footerBottom}</strong></span><span className={s.footerLine} /><span className={s.footerIndex}>01 <span>{c.footerIndex}</span></span></div>
      </div>
      <div className={s.visual}>
        <div className={s.scene} ref={scene}>
          <div className={s.orbit} aria-hidden="true" /><div className={s.backPlate} aria-hidden="true" />
          <div className={s.limePlate} aria-hidden="true"><span>{c.plate}</span><span>↗</span></div>
          <div className={s.photoFrame}><div className={s.photo}><Image src="/images/cleaning-cta.webp" alt="A person vacuuming a bright living room in front of a yellow sofa" fill sizes="(max-width: 700px) 85vw, (max-width: 1100px) 50vw, 48vw" /><span className={s.photoShade} /></div><div className={s.photoCaption}><span><span /> {c.captionLeft}</span><span>{c.captionRight}</span></div></div>
          <div className={s.glassCard}><span className={s.glassIcon}><Leaf /></span><span><strong>{c.cardTitle}</strong><small>{c.cardText}</small></span><span className={s.glassArrow} aria-hidden="true">↗</span></div>
          <div className={s.seal}><Leaf /><span>{c.seal}</span><span className={s.sealStar} aria-hidden="true">✧</span></div>
          <div className={s.bottle} aria-hidden="true"><span className={s.bottlePump} /><span className={s.bottleNeck} /><span className={s.bottleBody}><span className={s.bottleLabel}><Leaf /><strong>{c.bottleTitle}</strong><small>{c.bottleText}</small></span></span></div>
          <span className={s.sphereOne} aria-hidden="true" /><span className={s.sphereTwo} aria-hidden="true" /><span className={s.spark} aria-hidden="true">✳</span>
        </div>
        <span className={s.visualNote}><span aria-hidden="true">↳</span> {c.visualNote}</span>
      </div>
    </div>
  </section>;
}
