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
        <h1 id="website-design-heading" className={styles.heading}><span>Words That Rank.</span><span>Stories That Sell.</span></h1>
        <div className={styles.grid}>
          <article className={styles.featured}>
            <Image src="/images/website-design/editorial-desk.webp" alt="Sunlit editorial desk with a travel magazine, Mediterranean photography and a website displayed on a tablet" fill preload sizes="(max-width: 700px) 100vw, 35vw" className={styles.featuredImage} />
            <div className={styles.freshIdeas}>
              <div className={styles.freshHeader}><h2>#FRESH IDEAS</h2><Link href="/news-and-updates" className={styles.orangeArrow} aria-label="Discover fresh ideas and updates"><Arrow /></Link></div>
              <p>See more of what’s new.<br />Fresh ideas.<br />Clear messaging.<br />Your next growth story starts here.</p>
            </div>
          </article>
          <article className={styles.banner}>
            <Image src="/images/website-design/content-studio.webp" alt="A carefully designed travel website on a desktop monitor beside an editorial mood board" fill preload sizes="(max-width: 700px) 100vw, 65vw" className={styles.bannerImage} />
            <div className={styles.contactNotch}><Link href="/contact-us" className={styles.contact}>CONTACT US <Mail /></Link></div>
            <h2 className={styles.bannerLabel}>#CONTENT THAT CONNECTS</h2>
          </article>
          <details className={styles.faq}>
            <summary>
              <span className={styles.faqIntro}>Have a question?<br />Talk to our content team</span>
              <span className={styles.faqBottom}><span className={styles.faqTitle}>#FAQ</span><span className={styles.popular}>Popular</span></span>
            </summary>
            <div className={styles.faqAnswers}>
              <h3>What can you help with?</h3><p>Website design, clear website copy, landing pages, and content that connects with your audience.</p>
              <h3>How do we get started?</h3><p>Tell us about your business, your audience, and what you want your website to achieve.</p>
              <Link href="/contact-us">Talk about your project <span aria-hidden="true">↗</span></Link>
            </div>
          </details>
          <Link href="/#work" className={styles.quality} aria-label="Explore the quality of our work">
            <Image src="/images/website-design/editorial-desk.webp" alt="Close-up of thoughtfully composed magazine pages" fill sizes="(max-width: 700px) 100vw, 22vw" className={styles.qualityImage} />
            <span className={styles.qualityLabel}>#QUALITY</span><span className={styles.plus} aria-hidden="true" />
          </Link>
          <Link href="/news-and-updates" className={styles.content}>
            <div className={styles.contentInner}><div className={styles.contentHeader}><h2>CONTENT</h2><span className={styles.contentArrow}><Arrow /></span></div><p>Blogs. Guides.<br />Case studies. Landing pages.</p></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
