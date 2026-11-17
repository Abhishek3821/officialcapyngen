import Image from "next/image";
import Link from "next/link";
import styles from "./banking.module.css";

export default function BankingHero() {
  return (
    <section className={styles.hero} aria-labelledby="banking-title" data-navbar-hero data-industry-hero>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Industries / Banking</p>
        <div className={styles.introduction}>
          <h1 id="banking-title">Banking Software <br />Development <br /><span>Services</span></h1>
          <div className={styles.rule} />
          <p>Banking technology that feels less like infrastructure and more like an advantage. We help banks connect people to their financial goals through digital experiences that actually work.</p>
          <a className={styles.roundArrow} href="#banking-solutions" aria-label="Explore our banking solutions">↓</a>
        </div>
        <div className={styles.panelBottom}>
          <h2>Built around your customers.</h2>
          <p>From the first account opening to the millionth transaction, every touchpoint should feel connected and effortless.</p>
          <div className={styles.capabilities} aria-label="Our capabilities"><span>ACCOUNTS</span><span>PAYMENTS</span><span>LENDING</span><span>SUPPORT ↗</span></div>
          <Link href="/contact-us" className={styles.button}>Contact Us <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className={styles.visual}>
        <Image src="/images/banking/living-room.png" alt="Banking software development services" fill preload sizes="(max-width: 760px) 100vw, 69vw" className={styles.photo} />
        <div className={styles.imageNote}><span className={styles.dot} /> Less like infrastructure.<br /><span>More like an advantage.</span></div>
        <div className={styles.imageBottom}>
          <p>Intuitive to customers.<br />Dependable to operations.</p>
          <Link href="/contact-us" className={styles.button}>Contact Us <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.caption}><span>CAPYNGEN / BANKING</span><span>Clearer screens. Smarter defaults.</span><span>01 — 01</span></div>
      </div>
    </section>
  );
}
