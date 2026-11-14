import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";

const reasons = [
  { title: "Save Time", tag: "Save Time", src: "/images/digital-marketing/casual-style.webp", alt: "Smiling woman with curly hair wearing sunglasses and a denim jacket", text: "Save internal time and concentrate on key management." },
  { title: "Enterprise Tools", tag: "Enterprise Tools", src: "/images/blockchain-development/fashion.webp", alt: "Contemporary portrait in soft pink tones", text: "Use enterprise-class analytics, automation, and testing tools." },
  { title: "Scale Budgets", tag: "Scale Budgets", src: "/images/brands-shine/floral.webp", alt: "Colorful floral editorial portrait", text: "Easily increase or decrease campaign budgets for confirmed performance." },
  { title: "Build Authority", tag: "Build Authority", src: "/images/brands-shine/green.webp", alt: "Playful portrait in a bright red sweatshirt", text: "Build durable multi-channel brand authority and measurable market supremacy." },
];

const mosaic = [
  { src: "/images/brands-shine/blue.webp", alt: "Minimal tailored street style" },
  { src: "/images/brands-shine/coral.webp", alt: "Pastel blue city outfit" },
];

const serviceTags = ["SEO", "SMM", "PPC", "Content Marketing", "Email Marketing", "CRO"];

export default function FashionSections() {
  const [featured, ...cards] = reasons;
  return <>
    <section id="marketing-why-agency" className={styles.collections} aria-labelledby="collections-heading"><div className={`${styles.container} ${styles.collectionGrid}`}>
      <a href="#marketing-growth-partner" className={styles.featuredFashion} aria-label={`${featured.title}: ${featured.text}`}><Image src={featured.src} alt={featured.alt} fill sizes="(max-width: 700px) 100vw, 36vw" className={styles.image} /><div className={styles.fashionShade} /><div className={styles.featuredFashionCopy}><p>Capyngen</p><h2>{featured.title}</h2><span>{featured.text}</span><span className={styles.roundArrow} aria-hidden="true">↗</span></div></a>
      <div className={styles.collectionContent}><div className={styles.miniNav}><span aria-hidden="true">☰</span><span>Capyngen <span>more than just a vendor</span></span><span className={styles.miniNavIcons} aria-hidden="true">✳ &nbsp; ◉</span></div><div className={styles.collectionHeading}><h2 id="collections-heading">Why Work With a Digital Marketing Agency?</h2><div><p>Capyngen is more than just a vendor; you will obtain:</p><a href="#marketing-growth-partner" className={styles.coralButton}>Your Digital Growth Partner <span aria-hidden="true">↗</span></a></div></div><div className={styles.collectionCards}>{cards.map(item => <a href="#marketing-growth-partner" key={item.title} aria-label={`${item.title}: ${item.text}`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 33vw, 21vw" className={styles.image} /><div className={styles.fashionShade} /><span><strong>{item.title}</strong><span>{item.text}</span><span aria-hidden="true">→</span></span></a>)}</div></div>
    </div></section>

    <section id="marketing-growth-partner" className={styles.fashionSearch} aria-labelledby="fashion-search-heading"><div className={`${styles.container} ${styles.searchGrid}`}><div className={styles.searchCopy}><p className={styles.smallLabel}>Your Digital Growth Partner</p><h2 id="fashion-search-heading">The Digital Marketing Agency That Works Like Your Business Partner.</h2><p>Capyngen is a full-funnel digital marketing agency that is an extension of your business. We don&apos;t operate as a typical vendor; we think like your business, take ownership and work toward your revenue goals.</p><div className={styles.styleEdit}><span>Our Mission</span><h3>Assisting Business Growth with ROI Marketing</h3><Link href="/contact-us">Contact us <span aria-hidden="true">↗</span></Link></div><div className={styles.trendTags}><p>↗ &nbsp; Our Digital Marketing Services</p><div>{serviceTags.map(tag => <a key={tag} href="#marketing-services">{tag}</a>)}</div></div></div><div className={styles.fashionMosaic} aria-hidden="true"><div className={styles.mosaicColumn}><div className={styles.mosaicPhoto}><Image src={reasons[1].src} alt="" fill sizes="18vw" className={styles.image} /></div><div className={styles.collectionPromo}><strong>ROI<br />Marketing</strong><span>❋</span></div></div><div className={styles.mosaicColumn}><div className={styles.mosaicPhoto}><Image src={reasons[2].src} alt="" fill sizes="18vw" className={styles.image} /></div><div className={styles.mosaicPhoto}><Image src={mosaic[0].src} alt="" fill sizes="18vw" className={styles.image} /></div></div><div className={styles.mosaicColumn}><div className={styles.salePromo}><span>Full-funnel</span><strong>Your Business<br />Partner.</strong><span>✳</span></div><div className={styles.mosaicPhoto}><Image src={reasons[0].src} alt="" fill sizes="18vw" className={styles.image} /></div><div className={styles.mosaicPhoto}><Image src={mosaic[1].src} alt="" fill sizes="18vw" className={styles.image} /></div></div></div></div></section>
  </>;
}
