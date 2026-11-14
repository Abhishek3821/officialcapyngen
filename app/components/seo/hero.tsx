import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const steps = [
  { title: "Better Online Presence", text: "Be found on all digital platforms." },
  { title: "More Business", text: "Turn more visitors into customers." },
  { title: "Better Local Presence", text: "Get discovered in local search and maps." },
];

function GrowthArrow() {
  return <svg viewBox="0 0 110 80" fill="none" aria-hidden="true"><path d="M7 66V33l39 22V17l38 20V6m-15 0h15v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 75V48l39 22V34l37 19V17m-7 0h7v8" stroke="currentColor" strokeWidth="1" strokeOpacity=".3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SeoHero() {
  return <section id="seo-hero" className={styles.hero} aria-labelledby="seo-heading">
    <div className={styles.backdrop} aria-hidden="true" />
    <div className={styles.container}>
      <header className={styles.heroHeader}><p className={styles.eyebrow}><span /> Search Engine Optimization / Capyngen</p><h1 id="seo-heading">Boost Your Brand Visibility <br />with <span>AI-Powered SEO Services</span></h1><div className={styles.growthArrow}><GrowthArrow /></div></header>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><div><p>Big concepts. Busier markets. Quantifiable outcomes. Capyngen offers cost-effective, results-focused Search Engine Optimization services that put your business first and keep it there.</p><Link href="/contact-us" className={styles.cta}><span>Contact our SEO consultants</span><span aria-hidden="true">↗</span></Link><a href="#seo-cta" className={styles.textLink}>Increase your ranking now <span aria-hidden="true">→</span></a></div><div className={styles.strategyNote}><svg viewBox="0 0 50 50" fill="none" aria-hidden="true"><path d="M17 37c-9-1-13-8-13-16m13 11C7 28 5 22 7 13m10 14c-6-5-8-10-5-17m21 27c9-1 13-8 13-16m-13 11c10-4 12-10 10-19m-10 14c6-5 8-10 5-17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="m25 8 4 8 9 2-6 6 1 9-8-4-8 4 1-9-6-6 9-2 4-8Zm-8 32 8-4 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg><p><strong>Big concepts. Busier markets.</strong><br />Quantifiable outcomes.</p></div></div>
        <div className={styles.portrait}><div className={styles.greenPanel} /><div className={styles.portraitImage}><Image src="/images/seo/seo-specialist.webp" alt="SEO consultant holding a tablet" fill preload sizes="(max-width: 600px) 90vw, 40vw" className={styles.person} /></div><span className={styles.portraitCaption}>Cost-effective. Results-focused.</span></div>
        <div className={styles.rightColumn}><ol className={styles.steps}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepMarker} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h2>{step.title}</h2><p>{step.text}</p></div></li>)}</ol><div className={styles.connectionLine} aria-hidden="true" /><div className={styles.people}><div className={styles.avatars}>{[1, 2, 3].map(n => <Image key={n} src={`/images/client-${n}.jpg`} alt="" width={36} height={36} className={styles.avatar} />)}</div><p>SEO that puts your <strong>business first.</strong><br /><span>And keeps it there.</span></p></div></div>
      </div>
      <div className={styles.bottomLine}><span>Search Engine Optimization services</span><span>Grow Traffic <span aria-hidden="true">·</span> Boost Conversions <span aria-hidden="true">·</span> Improve Experience</span></div>
    </div>
  </section>;
}
