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
      <div className={styles.browserBar} aria-hidden="true"><span /><span /><span /><p>Your next favorite store</p><span className={styles.browserPlus}>+</span></div>
      <div className={styles.storeNav}><span className={styles.storeLogo}>bloom<span>®</span></span><span className={styles.storeNavLabel}>THE EVERYDAY EDIT</span><button type="button" onClick={() => setBagOpen(!bagOpen)} aria-expanded={bagOpen} aria-controls="ecommerce-preview-bag" className={styles.bagToggle} aria-label={`Preview shopping bag, ${inBag ? 1 : 0} items`}><Bag /><span>{inBag ? "01" : "00"}</span></button></div>
      <div className={styles.storeImage}><Image src="/images/blockchain-development/serum.webp" alt="Amber skincare serum bottle surrounded by fresh green leaves and warm natural stone" fill preload sizes="(max-width: 700px) 90vw, 45vw" className={styles.productPhoto} /><span className={styles.collectionLabel}>A LITTLE EVERYDAY LUXURY</span><div className={styles.collectionCopy}><p>Good for your skin.<br /><em>Better for your ritual.</em></p><span>Meet your new daily essential <span aria-hidden="true">↗</span></span></div><span className={styles.imageNumber} aria-hidden="true">01 / 03</span></div>
      <div className={styles.productBar}><div><span>THE DAILY ESSENTIAL</span><h2>Botanical face serum</h2><p>Thoughtful ingredients. A beautiful routine.</p></div><button type="button" onClick={() => setInBag(!inBag)} aria-pressed={inBag}>{inBag ? "Remove from bag" : "Add to bag"}<span aria-hidden="true">{inBag ? "−" : "+"}</span></button></div>
      <div id="ecommerce-preview-bag" className={styles.bagPanel} hidden={!bagOpen}><div><h3>Your preview bag</h3><button type="button" onClick={() => setBagOpen(false)} aria-label="Close shopping bag">×</button></div><p>{inBag ? "Botanical face serum × 1" : "Your bag is waiting for something good."}</p><small>This is a design concept. No purchase will be made.</small><Link href="/contact-us">Create a store like this <span aria-hidden="true">↗</span></Link></div>
    </div>
    <div className={styles.phone} aria-hidden="true"><div className={styles.phoneSpeaker} /><div className={styles.phoneNav}>bloom<span>↗</span></div><div className={styles.phonePhoto}><Image src="/images/web-development/product.webp" alt="" fill sizes="160px" className={styles.productPhoto} /></div><p>Your daily<br /><em>dose of good.</em></p><span className={styles.phoneButton}>Discover the collection ↗</span></div>
    <p className={styles.previewStatus} role="status">{inBag ? "Added to your demo bag. Explore the bag icon above." : "STOREFRONT CONCEPT — DESIGNED BY CAPYNGEN"}</p>
  </div>;
}
