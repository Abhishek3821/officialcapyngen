import MarketingGallery from "./gallery";
import Link from "next/link";
import styles from "./hero.module.css";

const features = [
  { title: "Human Insight", text: "+ AI Innovation" },
  { title: "Tailored Growth", text: "Strategies to Meet Your Business Needs." },
  { title: "Worldwide Expertise", text: "with Knowledge of the Local Market." },
];

export default function DigitalMarketingHero() {
  return <section id="digital-marketing-hero" aria-labelledby="digital-marketing-heading" className={styles.hero}>
    <div className={styles.stage}>
      <MarketingGallery />
      <div className={styles.copy}>
        <h1 id="digital-marketing-heading">Digital Marketing Services<br /><span>That Drive Real Growth</span></h1>
        <p className={styles.description}>Search is evolving, and tracking customer journeys is getting tougher every day. Competition for attention is getting stronger all the time.</p>
        <Link href="/contact-us" className={styles.cta}>Contact us <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        <div className={styles.features}>{features.map(feature => <div key={feature.title}><h2>{feature.title}</h2><p>{feature.text}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
