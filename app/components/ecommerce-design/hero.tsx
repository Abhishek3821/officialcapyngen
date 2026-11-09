import Link from "next/link";
import StorefrontPreview from "./storefront-preview";
import styles from "./hero.module.css";

export default function EcommerceDesignHero() {
  return <section id="ecommerce-design-hero" className={styles.hero} aria-labelledby="ecommerce-design-heading">
    <div className={styles.container}>
      <div className={styles.heroGrid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> Ecommerce Design / Capyngen</p>
          <h1 id="ecommerce-design-heading">Good design.<br />Great products.<br /><span>More <em>add to cart.</em></span></h1>
          <p className={styles.description}>Turn your online store into your brand’s best experience. We design beautiful storefronts that make discovering, choosing, and checking out feel effortless.</p>
          <div className={styles.actions}><Link href="/contact-us" className={styles.primary}>Let’s build your store <span aria-hidden="true">↗</span></Link><a href="#brand-vision" className={styles.secondary}>Explore our work <span aria-hidden="true">↗</span></a></div>
          <div className={styles.designNote}><span aria-hidden="true">✳</span><p>A little more personality.<br /><strong>A lot more possibility.</strong></p></div>
        </div>
        <StorefrontPreview />
      </div>
      <div className={styles.heroFooter}><p>Made to look good.<br /><strong>Designed to work even better.</strong></p><ul><li><span aria-hidden="true">01</span> Brand-first storefronts</li><li><span aria-hidden="true">02</span> Seamless shopping journeys</li><li><span aria-hidden="true">03</span> Every screen, considered</li></ul><a href="#brand-vision" aria-label="Discover our ecommerce design work">↓</a></div>
    </div>
  </section>;
}
