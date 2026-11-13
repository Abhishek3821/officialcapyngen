"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import s from "../cleaning-cta.module.css";

function Leaf() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C-1 8 15 5 27 4c1 14-4 26-20 21ZM7 25 23 10M13 19l-1-6m7 0 5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function WebDevelopmentCta() {
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
  return <section aria-labelledby="web-development-cta-heading" className={s.section} onPointerMove={move} onPointerLeave={reset}>
    <div className={s.halo} aria-hidden="true" /><div className={s.floor} aria-hidden="true" />
    <div className={s.content}>
      <div className={s.copy}>
        <span className={s.eyebrow}><span className={s.statusDot} /> READY TO BUILD?</span>
        <h2 id="web-development-cta-heading">Let’s Talk<br />About Your<br /><span>Project</span></h2>
        <p>Get started with our comprehensive web development services today. Tell us your goal, and we’ll send you scope, timeline, and pricing for the best web development services for Gurugram</p>
        <div className={s.actions}><Link href="/contact-us" className={s.contact}><span>Let’s Talk About Your Project</span><span className={s.contactArrow} aria-hidden="true">↗</span></Link><span className={s.actionNote}>Tell us your goal,<br />and we’ll send you scope.</span></div>
        <div className={s.copyFooter}><Leaf /><span>From your first idea<br /><strong>to your next launch.</strong></span><span className={s.footerLine} /><span className={s.footerIndex}>01 <span>/ WEB DEVELOPMENT</span></span></div>
      </div>
      <div className={s.visual}>
        <div className={s.scene} ref={scene}>
          <div className={s.orbit} aria-hidden="true" /><div className={s.backPlate} aria-hidden="true" />
          <div className={s.limePlate} aria-hidden="true"><span>Design That Converts.<br />Code That Performs.</span><span>↗</span></div>
          <div className={s.photoFrame}><div className={s.photo}><Image src="/images/cleaning-cta.webp" alt="A person vacuuming a bright living room in front of a yellow sofa" fill sizes="(max-width: 700px) 85vw, (max-width: 1100px) 50vw, 48vw" /><span className={s.photoShade} /></div><div className={s.photoCaption}><span><span /> Capyngen</span><span>DELHI NCR AND PAN-INDIA</span></div></div>
          <div className={s.glassCard}><span className={s.glassIcon}><Leaf /></span><span><strong>Post-Launch Support.</strong><small>A Partnership That Lasts.</small></span><span className={s.glassArrow} aria-hidden="true">↗</span></div>
          <div className={s.seal}><Leaf /><span>Support That<br />Continues.</span><span className={s.sealStar} aria-hidden="true">✧</span></div>
          <div className={s.bottle} aria-hidden="true"><span className={s.bottlePump} /><span className={s.bottleNeck} /><span className={s.bottleBody}><span className={s.bottleLabel}><Leaf /><strong>clean<br />code.</strong><small>WEB DEVELOPMENT</small></span></span></div>
          <span className={s.sphereOne} aria-hidden="true" /><span className={s.sphereTwo} aria-hidden="true" /><span className={s.spark} aria-hidden="true">✳</span>
        </div>
        <span className={s.visualNote}><span aria-hidden="true">↳</span> Designed and developed by Capyngen.</span>
      </div>
    </div>
  </section>;
}
