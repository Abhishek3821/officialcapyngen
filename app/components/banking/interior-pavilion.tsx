import Image from "next/image";
import styles from "./interior-pavilion.module.css";

export default function BankingInteriorPavilion() {
  return <section className={styles.section} aria-label="Banking platforms that define reliability">
    <div className={styles.canvas}>
      <p className={styles.word} aria-hidden="true">Banking</p>
      <Image src="/images/banking/interior-pavilion.png" alt="Banking platforms that define reliability" width={1536} height={512} sizes="100vw" className={styles.image} />
    </div>
  </section>;
}
