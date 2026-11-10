import Image from "next/image";
import Link from "next/link";
import styles from "./considered-experiences.module.css";

export default function BankingConsideredExperiences() {
  return <section className={styles.section} aria-labelledby="considered-title">
    <div className={styles.intro}>
      <p className={styles.wordmark}>Considered.</p>
      <h2 id="considered-title">Good design makes room<br />for better experiences.</h2>
      <p className={styles.lead}>Bring simplicity to the everyday. Create banking journeys that feel natural, personal and reassuring at every step.</p>
      <div className={styles.marks} aria-hidden="true"><span>↗</span><span>◎</span><span>✳</span></div>
      <div className={styles.rule} />
      <p className={styles.description}>From the first interaction to the moments that matter most, we bring thoughtful design and connected technology together. A little less complexity. A little more confidence.</p>
      <Link href="/contact-us" className={styles.peachButton}>Create something better <span aria-hidden="true">↗</span></Link>
    </div>
    <div className={styles.portrait}>
      <Image src="/images/banking/lounge-chair.png" alt="A grey lounge chair and ottoman with a draped blanket, beside sheer curtains and a green plant" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 28vw" className={styles.photo} />
    </div>
    <article className={styles.card} aria-labelledby="everyday-title">
      <div className={styles.cardTop}>
        <div><p className={styles.cardWordmark}>Feels right.</p><p>Thoughtful by design. Effortless by nature.</p><div className={styles.cardMarks} aria-hidden="true"><span>◉</span><span>◐</span><span>●</span></div></div>
        <span className={styles.seal} aria-hidden="true">↟</span>
      </div>
      <div className={styles.cardBottom}>
        <Image src="/images/banking/lounge-chair.png" alt="" fill sizes="(max-width: 640px) 100vw, 28vw" className={styles.cardPhoto} />
        <div className={styles.cardContent}><p className={styles.eyebrow}>Everyday, elevated</p><h3 id="everyday-title">Make every connection<br />feel a little more human.</h3><p>Build experiences around the people who use them.<br />Clearer journeys. Closer relationships.</p><Link href="#banking-solutions" className={styles.darkButton}>Explore the possibilities <span aria-hidden="true">↗</span></Link></div>
      </div>
    </article>
  </section>;
}
