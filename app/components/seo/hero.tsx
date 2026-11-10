import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const steps = [
  { title: "Be found by the right people", text: "Research that connects your business to real search intent." },
  { title: "Turn searches into opportunity", text: "Useful content and clear experiences that invite the next step." },
  { title: "Build a stronger foundation", text: "Technical care and ongoing refinement for sustainable growth." },
];

function GrowthArrow() {
  return <svg viewBox="0 0 110 80" fill="none" aria-hidden="true"><path d="M7 66V33l39 22V17l38 20V6m-15 0h15v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 75V48l39 22V34l37 19V17m-7 0h7v8" stroke="currentColor" strokeWidth="1" strokeOpacity=".3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SeoHero() {
  return <section id="seo-hero" className={styles.hero} aria-labelledby="seo-heading">
    <div className={styles.backdrop} aria-hidden="true" />
    <div className={styles.container}>
      <header className={styles.heroHeader}><p className={styles.eyebrow}><span /> Search Engine Optimization / Capyngen</p><h1 id="seo-heading">Unlock Your Business<br />Potential with <span>Smarter SEO</span></h1><div className={styles.growthArrow}><GrowthArrow /></div></header>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><div><p>Extraordinary businesses deserve to be discovered. We bring strategy, content, and technical expertise together to help your brand show up where it matters.</p><Link href="/contact-us" className={styles.cta}><span>Let’s grow together</span><span aria-hidden="true">↗</span></Link><a href="/contact-us#quote" className={styles.textLink}>Start with a conversation <span aria-hidden="true">→</span></a></div><div className={styles.strategyNote}><svg viewBox="0 0 50 50" fill="none" aria-hidden="true"><path d="M17 37c-9-1-13-8-13-16m13 11C7 28 5 22 7 13m10 14c-6-5-8-10-5-17m21 27c9-1 13-8 13-16m-13 11c10-4 12-10 10-19m-10 14c6-5 8-10 5-17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="m25 8 4 8 9 2-6 6 1 9-8-4-8 4 1-9-6-6 9-2 4-8Zm-8 32 8-4 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg><p><strong>Built on insight.</strong><br />Designed for lasting visibility.</p></div></div>
        <div className={styles.portrait}><div className={styles.greenPanel} /><div className={styles.portraitImage}><Image src="/images/seo/seo-specialist.webp" alt="SEO specialist in a white blouse holding a tablet" fill preload sizes="(max-width: 600px) 90vw, 40vw" className={styles.person} /></div><span className={styles.portraitCaption}>Clarity. Strategy. Momentum.</span></div>
        <div className={styles.rightColumn}><ol className={styles.steps}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepMarker} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h2>{step.title}</h2><p>{step.text}</p></div></li>)}</ol><div className={styles.connectionLine} aria-hidden="true" /><div className={styles.people}><div className={styles.avatars}>{[1, 2, 3].map(n => <Image key={n} src={`/images/client-${n}.jpg`} alt="" width={36} height={36} className={styles.avatar} />)}</div><p>SEO made <strong>human.</strong><br /><span>One thoughtful step at a time.</span></p></div></div>
      </div>
      <div className={styles.bottomLine}><span>Clear strategy. Meaningful visibility.</span><span>Research <span aria-hidden="true">·</span> Content <span aria-hidden="true">·</span> Technical SEO</span></div>
    </div>
  </section>;
}
