import Link from "next/link";
import StorefrontPreview from "./storefront-preview";
import styles from "./hero.module.css";

export default function EcommerceDesignHero() {
  return <section id="ecommerce-design-hero" className={styles.hero} aria-labelledby="ecommerce-design-heading">
    <div className={styles.container}>
      <div className={styles.heroGrid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> Ecommerce Design / Capyngen</p>
          <h1 id="ecommerce-design-heading">Ecommerce Website<br />Design Company<br /><span>in <em>India.</em></span></h1>
          <p className={styles.description}>We are one of the leading ecommerce website development companies in India as we adapt to technology changes.</p>
          <div className={styles.actions}><Link href="/contact-us" className={styles.primary}>Ready to Get Started <span aria-hidden="true">↗</span></Link><a href="#ecommerce-process" className={styles.secondary}>Our Process <span aria-hidden="true">↗</span></a></div>
          <div className={styles.designNote}><span aria-hidden="true">✳</span><p>We design &amp; develop E-Commerce solutions<br /><strong>that Drive Growth &amp; Conversions.</strong></p></div>
        </div>
        <StorefrontPreview />
      </div>
      <div className={styles.heroFooter}><p>Design That Converts<br /><strong>Visitors Into Customers.</strong></p><ul><li><span aria-hidden="true">01</span> Quick Load</li><li><span aria-hidden="true">02</span> Mobile Responsive</li><li><span aria-hidden="true">03</span> Easy checkout</li></ul><a href="#brand-vision" aria-label="E-commerce Website Design Company">↓</a></div>
    </div>
  </section>;
}
