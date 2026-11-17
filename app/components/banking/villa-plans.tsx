import Link from "next/link";
import styles from "./villa-plans.module.css";

const advantages = [
  { name: "Operational Efficiency", scene: 0, text: "Automate processes, reduce errors, and free staff for high-value strategic tasks." },
  { name: "Enhanced Security", scene: 1, text: "Enterprise-grade protection for all sensitive financial data and real-time transactions." },
  { name: "Customer Experience", scene: 2, text: "Deliver omnichannel banking through responsive and personalised user interfaces." },
  { name: "Cost Efficiency", scene: 0, text: "Lower operational overhead leveraging cloud elasticity and modern resource optimisation." },
  { name: "Advanced Reporting", scene: 1, text: "Gain deep visibility and detect suspicious anomalies with real-time analytics engines." },
  { name: "Scalability", scene: 2, text: "Microservices architectures built to scale gracefully to millions of concurrent users." },
];

export default function BankingVillaPlans() {
  return <section className={styles.section} aria-labelledby="villa-plans-title">
    <header className={styles.heading}><div><p className={styles.eyebrow}>Core strategic advantages</p><h2 id="villa-plans-title">Making Banks Digitally Fit</h2><p className={styles.intro}>Core strategic advantages are realised when financial institutions modernise their platforms with Capyngen.</p></div><Link href="/contact-us" className={styles.viewAll}>Contact Us <span aria-hidden="true">→</span></Link></header>
    <div className={styles.cards}>{advantages.map((item, index) => <article className={styles.card} key={item.name}>
      <div className={styles.imageButton}><span role="img" aria-label={item.name} className={styles.image} style={{ backgroundPosition: `50% ${item.scene * 50}%` }} /></div>
      <div className={styles.cardBody}><h3>{item.name}</h3><p className={styles.text}>{item.text}</p><div className={styles.priceRow}><p><span>Advantage</span> 0{index + 1}</p><Link href="/contact-us" className={styles.arrow} aria-label={`Contact us about ${item.name}`}>→</Link></div></div>
    </article>)}</div>
  </section>;
}
