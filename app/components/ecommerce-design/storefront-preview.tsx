"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./hero.module.css";

function Bag() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function StorefrontPreview() {
  const [inBag, setInBag] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  return <div className={styles.stage} aria-label="Interactive ecommerce storefront design concept">
    <div className={styles.orbit} aria-hidden="true" />
    <div className={styles.storefront}>
      <div className={styles.browserBar} aria-hidden="true"><span /><span /><span /><p>Ecommerce Website Design</p><span className={styles.browserPlus}>+</span></div>
      <div className={styles.storeNav}><span className={styles.storeLogo}>capyngen<span>.</span></span><span className={styles.storeNavLabel}>E-COMMERCE SOLUTIONS</span><button type="button" onClick={() => setBagOpen(!bagOpen)} aria-expanded={bagOpen} aria-controls="ecommerce-preview-bag" className={styles.bagToggle} aria-label={`Preview shopping cart, ${inBag ? 1 : 0} items`}><Bag /><span>{inBag ? "01" : "00"}</span></button></div>
      <div className={styles.storeImage}><Image src="/images/blockchain-development/serum.webp" alt="Amber serum bottle surrounded by fresh green leaves and warm natural stone" fill preload sizes="(max-width: 700px) 90vw, 45vw" className={styles.productPhoto} /><span className={styles.collectionLabel}>SECURED SHOPPING</span><div className={styles.collectionCopy}><p>Quick Load.<br /><em>Easy checkout.</em></p><span>Mobile Responsive <span aria-hidden="true">↗</span></span></div><span className={styles.imageNumber} aria-hidden="true">01 / 04</span></div>
      <div className={styles.productBar}><div><span>THE 4 FACTORS</span><h2>Secured Shopping</h2><p>The easy &amp; secure way of viewing the transaction history.</p></div><button type="button" onClick={() => setInBag(!inBag)} aria-pressed={inBag}>{inBag ? "Remove from cart" : "Add to cart"}<span aria-hidden="true">{inBag ? "−" : "+"}</span></button></div>
      <div id="ecommerce-preview-bag" className={styles.bagPanel} hidden={!bagOpen}><div><h3>Safe shopping cart</h3><button type="button" onClick={() => setBagOpen(false)} aria-label="Close shopping cart">×</button></div><p>{inBag ? "Secured Shopping × 1" : "Easy checkout."}</p><small>A safe shopping cart to make your payments and ship to different places.</small><Link href="/contact-us">Ready to Get Started <span aria-hidden="true">↗</span></Link></div>
    </div>
    <div className={styles.phone} aria-hidden="true"><div className={styles.phoneSpeaker} /><div className={styles.phoneNav}>capyngen<span>↗</span></div><div className={styles.phonePhoto}><Image src="/images/web-development/product.webp" alt="" fill sizes="160px" className={styles.productPhoto} /></div><p>Mobile<br /><em>Responsive.</em></p><span className={styles.phoneButton}>Quick Load ↗</span></div>
    <p className={styles.previewStatus} role="status">{inBag ? "Added to your cart. Explore the cart icon above." : "E-COMMERCE SOLUTIONS — DESIGNED BY CAPYNGEN"}</p>
  </div>;
}
