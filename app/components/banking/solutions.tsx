import Link from "next/link";
import styles from "./banking.module.css";

const solutions = [
  { title: "Digital banking experiences", text: "Clear, intuitive web and mobile journeys that make managing money feel simple.", tags: "UX strategy / Interface design", icon: "↗" },
  { title: "Connected banking platforms", text: "Bring customer touchpoints and everyday workflows together with purpose-built applications.", tags: "Web platforms / Integration", icon: "⌘" },
  { title: "Smarter customer relationships", text: "Help teams understand customer needs and deliver more useful, personal service.", tags: "CRM / Data & analytics", icon: "✳" },
];

export default function BankingSolutions() {
  return <section id="banking-solutions" className={styles.solutions} aria-labelledby="solutions-title">
    <div className={styles.sectionHeading}><p className={styles.eyebrow}>Thoughtfully connected</p><h2 id="solutions-title">Complex banking.<br /><em>Beautifully simplified.</em></h2><p>We bring design and engineering together to create digital banking experiences that work better for everyone.</p></div>
    <div className={styles.cards}>{solutions.map((item, i) => <article key={item.title} className={styles.card}><div className={styles.cardTop}><span>0{i + 1}</span><span aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className={styles.tags}>{item.tags}</span></article>)}</div>
    <div className={styles.cta}><p>Let’s make your next<br /><em>connection count.</em></p><Link className={styles.button} href="/contact-us">Talk to our team <span aria-hidden="true">↗</span></Link></div>
  </section>;
}
