"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import s from "../cleaning-cta.module.css";

function Leaf() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C-1 8 15 5 27 4c1 14-4 26-20 21ZM7 25 23 10M13 19l-1-6m7 0 5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function AppDevelopmentCta() {
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
  return <section aria-labelledby="app-development-cta-heading" className={s.section} onPointerMove={move} onPointerLeave={reset}>
    <div className={s.halo} aria-hidden="true" /><div className={s.floor} aria-hidden="true" />
    <div className={s.content}>
      <div className={s.copy}>
        <span className={s.eyebrow}><span className={s.statusDot} /> SHARE YOUR IDEA</span>
        <h2 id="app-development-cta-heading">Ready to Build<br />Your <span>App</span>?</h2>
        <p>Share your idea our team will evaluate your project, advise you on the most suitable technology, and will clearly communicate you the time and costs needed.</p>
        <div className={s.actions}><Link href="/contact-us" className={s.contact}><span>Contact Capyngen</span><span className={s.contactArrow} aria-hidden="true">↗</span></Link><span className={s.actionNote}>The time and costs,<br />clearly communicated.</span></div>
        <div className={s.copyFooter}><Leaf /><span>From app concept<br /><strong>to a real app.</strong></span><span className={s.footerLine} /><span className={s.footerIndex}>01 <span>/ APP DEVELOPMENT</span></span></div>
      </div>
      <div className={s.visual}>
        <div className={s.scene} ref={scene}>
          <div className={s.orbit} aria-hidden="true" /><div className={s.backPlate} aria-hidden="true" />
          <div className={s.limePlate} aria-hidden="true"><span>Native iOS &amp; Android.<br />Cross-platform builds.</span><span>↗</span></div>
          <div className={s.photoFrame}><div className={s.photo}><Image src="/images/cleaning-cta.webp" alt="A person vacuuming a bright living room in front of a yellow sofa" fill sizes="(max-width: 700px) 85vw, (max-width: 1100px) 50vw, 48vw" /><span className={s.photoShade} /></div><div className={s.photoCaption}><span><span /> Capyngen</span><span>GURUGRAM, HARYANA</span></div></div>
          <div className={s.glassCard}><span className={s.glassIcon}><Leaf /></span><span><strong>Post-launch support.</strong><small>Long-term support after launch.</small></span><span className={s.glassArrow} aria-hidden="true">↗</span></div>
          <div className={s.seal}><Leaf /><span>Proven<br />Delivery.</span><span className={s.sealStar} aria-hidden="true">✧</span></div>
          <div className={s.bottle} aria-hidden="true"><span className={s.bottlePump} /><span className={s.bottleNeck} /><span className={s.bottleBody}><span className={s.bottleLabel}><Leaf /><strong>real<br />app.</strong><small>APP DEVELOPMENT</small></span></span></div>
          <span className={s.sphereOne} aria-hidden="true" /><span className={s.sphereTwo} aria-hidden="true" /><span className={s.spark} aria-hidden="true">✳</span>
        </div>
        <span className={s.visualNote}><span aria-hidden="true">↳</span> We design and develop mobile products that make sense.</span>
      </div>
    </div>
  </section>;
}
