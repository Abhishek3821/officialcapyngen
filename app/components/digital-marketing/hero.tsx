import MarketingGallery from "./gallery";
import Link from "next/link";
import styles from "./hero.module.css";

const features = [
  { title: "Realistic Results", text: "Rich, considered visuals with a professional finish." },
  { title: "Fast Creation", text: "From your first idea to your next campaign." },
  { title: "Diverse Styles", text: "Explore a world of creative directions and possibilities." },
];

export default function DigitalMarketingHero() {
  return <section id="digital-marketing-hero" aria-labelledby="digital-marketing-heading" className={styles.hero}>
    <div className={styles.stage}>
      <MarketingGallery />
      <div className={styles.copy}>
        <h1 id="digital-marketing-heading">Create Stunning AI Generated<br /><span>Photos Instantly</span></h1>
        <p className={styles.description}>Transform your ideas into breathtaking visuals with cutting-edge AI technology.</p>
        <Link href="/contact-us" className={styles.cta}>Start Creating Now <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        <div className={styles.features}>{features.map(feature => <div key={feature.title}><h2>{feature.title}</h2><p>{feature.text}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
