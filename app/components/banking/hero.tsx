import Image from "next/image";
import Link from "next/link";
import styles from "./banking.module.css";

export default function BankingHero() {
  return (
    <section className={styles.hero} aria-labelledby="banking-title" data-navbar-hero data-industry-hero>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Industries / Banking</p>
        <div className={styles.introduction}>
          <h1 id="banking-title">A more human<br />way to experience<br /><span>banking.</span></h1>
          <div className={styles.rule} />
          <p>Thoughtful technology. Effortless experiences. We help banks bring people closer to their financial future, one digital interaction at a time.</p>
          <a className={styles.roundArrow} href="#banking-solutions" aria-label="Explore our banking solutions">↓</a>
        </div>
        <div className={styles.panelBottom}>
          <h2>Built around your customers.</h2>
          <p>From the first hello to everyday transactions, make every moment feel connected.</p>
          <div className={styles.capabilities} aria-label="Our capabilities"><span>DESIGN</span><span>BUILD</span><span>CONNECT</span><span>GROW ↗</span></div>
          <Link href="/contact-us" className={styles.button}>Let’s build what’s next <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className={styles.visual}>
        <Image src="/images/banking/living-room.png" alt="A light-filled interior with a grey sofa, peach cushions and green plants" fill preload sizes="(max-width: 760px) 100vw, 69vw" className={styles.photo} />
        <div className={styles.imageNote}><span className={styles.dot} /> A familiar feeling.<br /><span>A fresh perspective.</span></div>
        <div className={styles.imageBottom}>
          <p>Designed for people.<br />Engineered for possibility.</p>
          <Link href="/contact-us" className={styles.button}>Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.caption}><span>CAPYNGEN / BANKING</span><span>Comfort in every connection.</span><span>01 — 01</span></div>
      </div>
    </section>
  );
}
