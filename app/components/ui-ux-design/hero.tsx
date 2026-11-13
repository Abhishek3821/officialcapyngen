import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

function Leaf() {
  return <svg viewBox="0 0 36 32" fill="none" aria-hidden="true"><path d="M29 5C12 2 4 11 10 20c8 10 21 0 19-15Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 28 23 11m-8 10-1-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>;
}

export default function UiUxHero() {
  return <section id="ui-ux-hero" aria-labelledby="ui-ux-heading" className={styles.hero}>
    <svg className={styles.clipDefinitions} width="0" height="0" aria-hidden="true"><defs>
      <clipPath id="ui-ux-landscape-clip" clipPathUnits="objectBoundingBox"><path d="M.63 0H.965Q1 0 1 .055V.945Q1 1 .965 1H.39Q.35 1 .36 .94L.414 .47Q.419 .43 .46 .42L.555 .39Q.578 .383 .582 .34L.605 .055Q.61 0 .65 0Z" /></clipPath>
      <clipPath id="ui-ux-lime-clip" clipPathUnits="objectBoundingBox"><path d="M.035 0H.55Q.585 0 .578 .055L.556 .303Q.55 .35 .518 .36L.429 .387Q.405 .393 .398 .437L.372 .59Q.365 .625 .331 .615L.035 .56Q0 .555 0 .51V.055Q0 0 .035 0Z" /></clipPath>
    </defs></svg>
    <div className={styles.container}><div className={styles.scene}>
      <div className={styles.landscape}><Image src="/images/application-solutions/fields.webp" alt="Green agricultural land and open countryside in warm morning sunlight" fill preload sizes="(max-width: 700px) 100vw, 80vw" className={styles.landscapeImage} /><div className={styles.sunlight} /></div>
      <div className={styles.limePanel} aria-hidden="true" />
      <div className={styles.copy}><h1 id="ui-ux-heading">Best <span>UI/UX Design</span><br />Services in India</h1><p>Capyngen develops interfaces that feel natural, solve your users&apos; needs, and are welcoming, user-friendly, and personalised.</p><p>Our solutions will not only excite your target audience but also generate deeper interactions, higher conversions and increase your business.</p><Link href="/contact-us" className={styles.cta}>Contact us <span aria-hidden="true">&#8599;</span></Link></div>
      <div className={styles.realtors}><div className={styles.realtorsInner}><strong>UI/UX</strong><p>Design Services</p><div className={styles.avatars}>{[1, 2, 3, 4, 1, 3].map((n, index) => <Image key={index} src={`/images/client-${n}.jpg`} alt="" width={43} height={43} />)}</div><div className={styles.review}><span>Natural</span><span className={styles.stars} aria-label="Five decorative stars">{[1, 2, 3, 4, 5].map(n => <span key={n}>&#9733;</span>)}</span><span className={styles.reviewLabel}>User-friendly</span></div><small>Welcoming, user-friendly, and personalised</small></div></div>
      <div className={styles.agro}><Leaf /><span>For web</span></div>
      <div className={styles.location}>Mobile &amp;<br /><strong>Web App UI</strong></div>
      <div className={styles.unimproved}>Higher<br />Conversions</div>
      <div className={styles.acreage}>Engagement</div>
      <div className={styles.greenTag}>UX</div>
    </div></div>
  </section>;
}
