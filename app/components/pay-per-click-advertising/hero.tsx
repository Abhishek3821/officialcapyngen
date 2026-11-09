import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

function PeopleIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="3" /><path d="M6 20v-3a6 6 0 0 1 12 0v3M4 9a2.5 2.5 0 0 0 0 5m16-5a2.5 2.5 0 0 1 0 5M2 19v-2m20 2v-2" /></svg>;
}

export default function PpcHero() {
  return <section id="ppc-hero" className={styles.hero} aria-labelledby="ppc-heading">
    <div className={styles.scene}>
      <svg width="0" height="0" className={styles.definitions} aria-hidden="true"><defs><clipPath id="ppc-photo-curve" clipPathUnits="objectBoundingBox"><path d="M0 0H1V.82C.96 .99 .85 1 .7 .88L.16 .60Q.04 .52 0 .66Z" /></clipPath></defs></svg>
      <div className={styles.photo}><Image src="/images/ppc/connection-hero.webp" alt="Two friends laughing together as they discover something on a smartphone under a bright blue sky" fill preload sizes="100vw" className={styles.image} /></div>
      <div className={styles.connectionCard}><span className={styles.peopleIcon}><PeopleIcon /></span><div><strong>New connection</strong><p>Your brand. Their next click.</p></div><span className={styles.plus} aria-hidden="true">+</span></div>
      <div className={styles.audienceCard}><div className={styles.avatars}>{[1, 2, 3, 4].map(n => <Image key={n} src={`/images/client-${n}.jpg`} alt="" width={33} height={33} />)}</div><div><strong>People first.</strong><p>Reach the right audience.</p></div></div>
      <div className={styles.copy}><p className={styles.eyebrow}>Capyngen / Pay-Per-Click Advertising</p><h1 id="ppc-heading">Connect beyond<br />the <span>surface.</span></h1><p>Make every click the start of something meaningful. Reach the right people with thoughtful PPC campaigns that turn attention into real connections.</p><div className={styles.actions}><Link href="/contact-us" className={styles.primary}>Start your campaign <span aria-hidden="true">&#8599;</span></Link><Link href="/digital-marketing" className={styles.secondary}>Explore our approach <span aria-hidden="true">&#8599;</span></Link></div></div>
      <ul className={styles.highlights} aria-label="Our PPC approach"><li><strong>01</strong><span>Smart<br />targeting</span></li><li><strong>02</strong><span>Creative that<br />connects</span></li><li><strong>03</strong><span>Meaningful<br />results</span></li></ul>
    </div>
  </section>;
}
