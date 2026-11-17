import Link from "next/link";
import styles from "./banking.module.css";

const solutions = [
  { title: "Digital banking experiences", text: "Clear, intuitive web and mobile journeys that make managing money feel simple — built with Digital Banking Solutions at the core.", tags: "Digital Banking Solutions", icon: "↗" },
  { title: "Connected banking platforms", text: "Bring customer touchpoints and everyday workflows together with purpose-built Banking Technology Solutions that integrate with your existing stack.", tags: "Banking Technology Solutions", icon: "⌘" },
  { title: "Smarter customer relationships", text: "Help teams understand customer needs and deliver more useful, personal service through Enterprise Banking Solutions designed for scale.", tags: "Enterprise Banking Solutions", icon: "✳" },
];
const faqs = [
  { q: "Q1. What are Banking Software Development Services?", a: "Banking Software Development Services cover the design, build, and maintenance of software for financial institutions — core banking systems, mobile apps, payment gateways, and lending platforms." },
  { q: "Q2. Why is Capyngen a reliable Banking Software Development Company?", a: "We combine domain expertise with security-first architecture. As a Banking Software Development Company, we build systems that meet regulatory requirements without sacrificing speed or user experience." },
  { q: "Q3. What are Banking Software Solutions?", a: "Banking Software Solutions are the platforms and applications banks use to manage accounts, process payments, serve customers, and meet compliance obligations." },
  { q: "Q4. Do you provide Banking Application Development for mobile and web?", a: "Yes. Our Banking Application Development covers cross-platform mobile apps, internet banking portals, and internal operational tools." },
  { q: "Q5. What are Digital Banking Solutions?", a: "Digital Banking Solutions are customer-facing and operational systems that enable online account management, payments, and self-service—built for convenience and security." },
  { q: "Q6. How do you handle Banking IT Services and legacy integration?", a: "Our Banking IT Services include legacy assessment, API integration, and migration planning. We ensure new systems work with your existing infrastructure from day one." },
  { q: "Q7. What are Banking Technology Solutions and how do they differ from standard software?", a: "Banking Technology Solutions are purpose-built for financial services — designed around regulatory frameworks, high transaction volumes, and strict security requirements." },
  { q: "Q8. Can you support Banking Digital Transformation across multiple markets?", a: "Yes. Our Banking Digital Transformation engagements cover core modernisation, channel migration, and compliance alignment across regions." },
  { q: "Q9. Do you offer Custom Banking Software Development?", a: "Yes. Our Custom Banking Software Development builds platforms around your specific workflows, products, and customer segments — not generic templates." },
  { q: "Q10. What are Enterprise Banking Solutions and who are they for?", a: "Enterprise Banking Solutions are built for large institutions with complex operations, multiple business lines, and strict governance requirements." },
];

export default function BankingSolutions() {
  return <>
    <section id="banking-solutions" className={styles.solutions} aria-labelledby="solutions-title">
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>Thoughtfully connected</p><h2 id="solutions-title">Complex banking.<br /><em>Beautifully simplified.</em></h2><p>We bring Banking Software Development Services and engineering together to create digital banking experiences that work better for everyone.</p></div>
      <div className={styles.cards}>{solutions.map((item, i) => <article key={item.title} className={styles.card}><div className={styles.cardTop}><span>0{i + 1}</span><span aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className={styles.tags}>{item.tags}</span></article>)}</div>
      <div className={styles.cta}><p>Start Your Digital <br /><em>Transformation</em></p><Link className={styles.button} href="/contact-us">Contact Us <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section id="banking-faq" className={styles.faq} aria-labelledby="banking-faq-title">
      <div className={styles.faqHeading}><p className={styles.eyebrow}>Banking Software Development</p><h2 id="banking-faq-title">Frequently Asked <em>Questions</em></h2></div>
      <div className={styles.faqList}>{faqs.map((item, i) => <details key={item.q} open={i === 0}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
    </section>
  </>;
}
