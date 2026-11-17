import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const portraits = [7, 1, 2, 3, 4, 5, 6, 8, 7];
const features = [
  { title: "AI Strategy", text: "Set goals, use cases and a roadmap aligned to outcomes." },
  { title: "AI Integration", text: "We embed AI models into your environment and processes." },
  { title: "Automation", text: "We automate routine tasks and workflows are intelligent and automatic." },
];

export default function ArtificialIntelligenceHero() {
  return <section id="artificial-intelligence-hero" className={styles.hero} aria-labelledby="artificial-intelligence-heading">
    <div className={styles.content}>
      <header className={styles.heading}><p className={styles.eyebrow}>Capyngen / Artificial Intelligence</p><h1 id="artificial-intelligence-heading"><span>Artificial Intelligence</span><strong>Services and Solutions</strong></h1><p className={styles.description}>AI allows businesses to automate processing flows, evaluate data, <br />and create intelligent components in current applications.</p><Link href="/contact-us" className={styles.cta}>Contact Us <span aria-hidden="true">&#8594;</span></Link></header>
      <div className={styles.gallery} role="img" aria-label="A curved gallery of team portraits for Artificial Intelligence Services">{portraits.map((portrait, index) => <div className={styles.portrait} key={index}><Image src={`/images/artificial-intelligence/team-${portrait}.webp`} alt="" fill sizes="(max-width: 600px) 28vw, 15vw" preload={index >= 2 && index <= 6} className={styles.image} /></div>)}</div>
      <div className={styles.features}>{features.map(feature => <article key={feature.title}><h2>{feature.title}</h2><p>{feature.text}</p></article>)}</div>
    </div>
  </section>;
}
