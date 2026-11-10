import Image from "next/image";
import styles from "./interior-pavilion.module.css";

export default function BankingInteriorPavilion() {
  return <section className={styles.section} aria-label="Interior architecture: a fresh perspective">
    <div className={styles.canvas}>
      <p className={styles.word} aria-hidden="true">Interior</p>
      <Image src="/images/banking/interior-pavilion.png" alt="A long, low glass pavilion with a slender roof, black window frames and softly lit interiors, floating above stepped platforms" width={1536} height={512} sizes="100vw" className={styles.image} />
    </div>
  </section>;
}
