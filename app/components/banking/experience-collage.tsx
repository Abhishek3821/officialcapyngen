import Link from "next/link";
import styles from "./experience-collage.module.css";

function Photo({ tile, label, className = "" }: { tile: number; label: string; className?: string }) {
  return <div role="img" aria-label={label} className={`${styles.photo} ${className}`} style={{ backgroundPosition: `${(tile % 3) * 50}% ${Math.floor(tile / 3) * 50}%` }} />;
}

const techStack = "Banking systems cannot afford downtime, delays, or weak security. Every layer of the stack — from the database to the mobile app — has to work reliably at scale. We build resilient, cloud-ready, and high-security technologies that are proven in mission-critical banking operations. Our teams work across legacy integration and modern microservices, so your platform stays stable today while remaining ready for whatever comes next.";

const products = [
  { tile: 7, label: "Programming languages" },
  { tile: 0, label: "Databases and storage" },
  { tile: 6, label: "Frameworks and libraries" },
  { tile: 2, label: "Cloud platforms" },
  { tile: 6, label: "Security technologies" },
  { tile: 3, label: "AI and analytics" },
  { tile: 8, label: "Legacy integration" },
  { tile: 1, label: "Modern microservices" },
  { tile: 5, label: "Mission-critical banking operations" },
];

export default function BankingExperienceCollage() {
  return <section className={styles.section} aria-labelledby="banking-experience-title">
    <div className={styles.editorial}>
      <div className={styles.gallery}>
        <Photo tile={0} label="Account opening" />
        <Photo tile={1} label="Payments" />
        <Photo tile={2} label="Lending" />
      </div>
      <div className={styles.middle}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Banking Software Solutions</p>
          <h2 id="banking-experience-title">Banking Software Solutions <br /><em>That People Actually Want to Use</em></h2>
          <p>Great banking technology is invisible. It works quietly in the background, removing friction instead of adding it. We build Banking Software Solutions that feel intuitive to customers and dependable to operations teams.</p>
          <Link href="#banking-solutions" className={styles.textLink}>Our solutions <span aria-hidden="true">↗</span></Link>
          <div className={styles.pills}><span>Intuitive to customers</span><span>Dependable to operations</span></div>
        </div>
        <Photo tile={3} label="Banking software solutions" className={styles.sofa} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.darkFeature}>
          <div className={styles.featureImages}><Photo tile={4} label="Removing friction" /><Photo tile={5} label="Dependable operations" /></div>
          <Link href="/contact-us" className={styles.smallButton}>Contact Us <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.detailFeature}>
          <div><p className={styles.eyebrow}>Removing friction</p><h3>Great banking technology <br />is invisible.</h3><Link href="/contact-us" className={styles.textLink}>Contact Us ↗</Link></div>
          <Photo tile={8} label="Great banking technology" />
        </div>
      </div>
    </div>
    <aside className={styles.sidebar} aria-label="Modern tech stack for banking excellence">
      <div className={styles.sidebarCopy}><p className={styles.eyebrow}>Every layer of the stack</p><h3>Modern Tech Stack <br /><em>for Banking Excellence</em></h3><p>{techStack}</p><div className={styles.pills}>{["Programming Languages", "Databases & Storage", "Frameworks & Libraries", "Cloud Platforms", "Security Technologies", "AI & Analytics"].map(item => <span key={item}>{item}</span>)}</div></div>
      <div className={styles.board}>
        <p className={styles.boardLabel}>Cloud-ready / High-security</p>
        <div className={styles.productGrid}>{products.map((product, index) => <div key={index} className={styles.product}><Photo tile={product.tile} label={product.label} />{index === 3 && <span className={styles.peachDisc} aria-hidden="true">Ready</span>}</div>)}</div>
        <div className={styles.boardFooter}><span>Stable today. Ready for what comes next.</span><span>01 / 09</span></div>
      </div>
      <Link href="/contact-us" className={styles.button}>Contact Us <span aria-hidden="true">↗</span></Link>
    </aside>
  </section>;
}
