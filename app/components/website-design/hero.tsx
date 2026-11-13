import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import styles from "./hero.module.css";

const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-website-display" });

function Arrow() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m6 6 20 20M9 26h17V9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Mail() {
  return <svg viewBox="0 0 32 26" fill="none" aria-hidden="true"><rect x="2" y="3" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="m3 5 13 11L29 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function WebsiteDesignHero() {
  return (
    <section id="website-design-hero" aria-labelledby="website-design-heading" className={`${styles.hero} ${anton.variable}`}>
      <div className={styles.inner}>
        <h1 id="website-design-heading" className={styles.heading}><span>Best Website Design Company</span><span>That Understand Your Business.</span></h1>
        <div className={styles.grid}>
          <article className={styles.featured}>
            <Image src="/images/website-design/editorial-desk.webp" alt="Sunlit editorial desk with a magazine, photography and a website displayed on a tablet" fill preload sizes="(max-width: 700px) 100vw, 35vw" className={styles.featuredImage} />
            <div className={styles.freshIdeas}>
              <div className={styles.freshHeader}><h2>#GURUGRAM</h2><a href="#website-services" className={styles.orangeArrow} aria-label="Our Website Design Services"><Arrow /></a></div>
              <p>Corporate Website Design<br />for Gurugram and<br />Whole India.</p>
            </div>
          </article>
          <article className={styles.banner}>
            <Image src="/images/website-design/content-studio.webp" alt="A carefully designed website on a desktop monitor beside a mood board" fill preload sizes="(max-width: 700px) 100vw, 65vw" className={styles.bannerImage} />
            <div className={styles.contactNotch}><Link href="/contact-us" className={styles.contact}>CONTACT US <Mail /></Link></div>
            <h2 className={styles.bannerLabel}>#WEBSITE DESIGN THAT WORKS</h2>
          </article>
          <details className={styles.faq}>
            <summary>
              <span className={styles.faqIntro}>Have a question?<br />Frequently Asked Questions</span>
              <span className={styles.faqBottom}><span className={styles.faqTitle}>#FAQ</span><span className={styles.popular}>Q1–Q10</span></span>
            </summary>
            <div className={styles.faqAnswers}>
              <h3>Do you offer custom website design services?</h3><p>Yes. Our Custom Website Design Services are centered on your branding, the expectations of your audience, and your growth goals.</p>
              <h3>Do you provide responsive website design?</h3><p>Absolutely. Our Responsive Website Design approach guarantees seamless performance on mobile, tablet, and desktop devices.</p>
              <a href="#website-faq">Frequently Asked Questions <span aria-hidden="true">↗</span></a>
            </div>
          </details>
          <a href="#website-best" className={styles.quality} aria-label="Why Capyngen is the Best Website Design Company">
            <Image src="/images/website-design/editorial-desk.webp" alt="Close-up of thoughtfully composed magazine pages" fill sizes="(max-width: 700px) 100vw, 22vw" className={styles.qualityImage} />
            <span className={styles.qualityLabel}>#QUALITY</span><span className={styles.plus} aria-hidden="true" />
          </a>
          <a href="#website-process" className={styles.content}>
            <div className={styles.contentInner}><div className={styles.contentHeader}><h2>PROCESS</h2><span className={styles.contentArrow}><Arrow /></span></div><p>Discover &amp; Plan. Design &amp; Develop.<br />Launch &amp; Optimize.</p></div>
          </a>
        </div>
      </div>
    </section>
  );
}
