import Image from "next/image";
import Link from "next/link";
import styles from "./considered-experiences.module.css";

export default function BankingConsideredExperiences() {
  return <section className={styles.section} aria-labelledby="considered-title">
    <div className={styles.intro}>
      <p className={styles.wordmark}>Simplicity.</p>
      <h2 id="considered-title">Good Design Makes <br />for Better Banking</h2>
      <p className={styles.lead}>Complexity is easy. Simplicity is hard.</p>
      <div className={styles.marks} aria-hidden="true"><span>↗</span><span>◎</span><span>✳</span></div>
      <div className={styles.rule} />
      <p className={styles.description}>We bring clarity to digital banking journeys — account opening, payments, lending, support — so every step feels natural, not forced.</p>
      <Link href="/contact-us" className={styles.peachButton}>Contact Us <span aria-hidden="true">↗</span></Link>
    </div>
    <div className={styles.portrait}>
      <Image src="/images/banking/lounge-chair.png" alt="Good design makes for better banking" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 28vw" className={styles.photo} />
    </div>
    <article className={styles.card} aria-labelledby="everyday-title">
      <div className={styles.cardTop}>
        <div><p className={styles.cardWordmark}>Feel Rights</p><p>Sharp by design. Calm by default.</p><div className={styles.cardMarks} aria-hidden="true"><span>◉</span><span>◐</span><span>●</span></div></div>
        <span className={styles.seal} aria-hidden="true">↟</span>
      </div>
      <div className={styles.cardBottom}>
        <Image src="/images/banking/lounge-chair.png" alt="" fill sizes="(max-width: 640px) 100vw, 28vw" className={styles.cardPhoto} />
        <div className={styles.cardContent}><p className={styles.eyebrow}>Feel Rights</p><h3 id="everyday-title">Make every interaction <br />feel obvious.</h3><p>Remove the guesswork from digital banking — from login to loan approval. <br />Clearer screens. Smarter defaults. Better outcomes.</p><Link href="#banking-solutions" className={styles.darkButton}>Contact Us <span aria-hidden="true">↗</span></Link></div>
      </div>
    </article>
  </section>;
}
