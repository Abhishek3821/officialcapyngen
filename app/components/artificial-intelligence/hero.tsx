import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const portraits = [7, 1, 2, 3, 4, 5, 6, 8, 7];
const features = [
  { title: "Real-Time Collaboration", text: "Bring people and ideas together. Share context, keep conversations flowing, and move forward as one team." },
  { title: "Task & Project Tracking", text: "Turn big ideas into clear next steps. Organise priorities and keep your team focused on what matters." },
  { title: "Performance Insights", text: "See the bigger picture with useful insights that help you spot opportunities and make thoughtful decisions." },
];

export default function ArtificialIntelligenceHero() {
  return <section id="artificial-intelligence-hero" className={styles.hero} aria-labelledby="artificial-intelligence-heading">
    <div className={styles.content}>
      <header className={styles.heading}><p className={styles.eyebrow}>Capyngen / Artificial Intelligence</p><h1 id="artificial-intelligence-heading"><span>Streamline Your Team,</span><strong>Supercharge Your Workflow</strong></h1><p className={styles.description}>An AI-powered approach to plan, collaborate,<br />and deliver — faster and smarter.</p><Link href="/contact-us" className={styles.cta}>Let’s get started <span aria-hidden="true">&#8594;</span></Link></header>
      <div className={styles.gallery} role="img" aria-label="A curved gallery of friendly, diverse team portraits">{portraits.map((portrait, index) => <div className={styles.portrait} key={index}><Image src={`/images/artificial-intelligence/team-${portrait}.webp`} alt="" fill sizes="(max-width: 600px) 28vw, 15vw" preload={index >= 2 && index <= 6} className={styles.image} /></div>)}</div>
      <div className={styles.features}>{features.map(feature => <article key={feature.title}><h2>{feature.title}</h2><p>{feature.text}</p></article>)}</div>
    </div>
  </section>;
}
