import Link from "next/link";
import styles from "./experience-collage.module.css";

function Photo({ tile, label, className = "" }: { tile: number; label: string; className?: string }) {
  return <div role="img" aria-label={label} className={`${styles.photo} ${className}`} style={{ backgroundPosition: `${(tile % 3) * 50}% ${Math.floor(tile / 3) * 50}%` }} />;
}

const products = [
  { tile: 7, label: "Black perfume bottle" },
  { tile: 0, label: "Charcoal presentation box" },
  { tile: 6, label: "Black and white sneaker" },
  { tile: 2, label: "Cream and black leather bags" },
  { tile: 6, label: "Sculptural sneaker profile" },
  { tile: 3, label: "Grey sofa" },
  { tile: 8, label: "Geometric home accessories" },
  { tile: 1, label: "Black leather handbag" },
  { tile: 5, label: "Objects on floating shelves" },
];

export default function BankingExperienceCollage() {
  return <section className={styles.section} aria-labelledby="banking-experience-title">
    <div className={styles.editorial}>
      <div className={styles.gallery}>
        <Photo tile={0} label="A charcoal presentation box on a pale grey shelf" />
        <Photo tile={1} label="A black leather handbag and reed diffuser on a floating shelf" />
        <Photo tile={2} label="Cream and black leather handbags on a grey plinth" />
      </div>
      <div className={styles.middle}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Every detail matters</p>
          <h2 id="banking-experience-title">Great experiences.<br /><em>Everyday confidence.</em></h2>
          <p>Bring the same care to every customer moment. Banking that feels considered, connected and comfortably familiar.</p>
          <Link href="#banking-solutions" className={styles.textLink}>Explore our approach <span aria-hidden="true">↗</span></Link>
          <div className={styles.pills}><span>Human first</span><span>Thoughtfully digital</span></div>
        </div>
        <Photo tile={3} label="A soft grey sofa styled with grey and warm taupe cushions" className={styles.sofa} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.darkFeature}>
          <div className={styles.featureImages}><Photo tile={4} label="A grey armchair surrounded by green indoor plants" /><Photo tile={5} label="Sculptural objects and a plant on dark floating shelves" /></div>
          <Link href="/contact-us" className={styles.smallButton}>Make room for better <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.detailFeature}>
          <div><p className={styles.eyebrow}>Designed to connect</p><h3>Small details.<br />Meaningful differences.</h3><Link href="/contact-us" className={styles.textLink}>Let’s create yours ↗</Link></div>
          <Photo tile={8} label="A geometric copper sculpture and ceramic objects on a charcoal cabinet" />
        </div>
      </div>
    </div>
    <aside className={styles.sidebar} aria-label="Connected experiences">
      <div className={styles.sidebarCopy}><p className={styles.eyebrow}>People & possibilities</p><h3>One connected world.<br /><em>A more personal experience.</em></h3><p>From discovering something new to making it yours, build digital journeys that bring everything together.</p><Link href="#banking-solutions" className={styles.textLink}>Discover more ↗</Link></div>
      <div className={styles.board}>
        <p className={styles.boardLabel}>Considered / Collected</p>
        <div className={styles.productGrid}>{products.map((product, index) => <div key={index} className={styles.product}><Photo tile={product.tile} label={product.label} />{index === 3 && <span className={styles.peachDisc} aria-hidden="true">For you</span>}</div>)}</div>
        <div className={styles.boardFooter}><span>A world of possibilities.</span><span>01 / 09</span></div>
      </div>
      <Link href="/contact-us" className={styles.button}>Find your next chapter <span aria-hidden="true">↗</span></Link>
    </aside>
  </section>;
}
