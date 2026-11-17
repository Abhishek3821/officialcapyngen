import Image from "next/image";
import styles from "./client-voices.module.css";

const sectors = [
  { name: "Retail Banking", kind: "Large retail networks", icon: 0 },
  { name: "Corporate Banking", kind: "Business lines", icon: 1 },
  { name: "Investment Banking", kind: "Financial services", icon: 2 },
  { name: "Microfinance Institutions", kind: "Full financial spectrum", icon: 3 },
  { name: "FinTech Startups", kind: "Nimble disruptors", icon: 4 },
  { name: "Payment Providers", kind: "Real-time transactions", icon: 0 },
];
const reasons = [
  { title: "Built for Compliance", text: "Security-first architecture designed around RBI, PCI, and GDPR requirements." },
  { title: "Legacy Integration", text: "Seamless compatibility with existing core systems and third-party platforms." },
  { title: "Scalable by Design", text: "Microservices architecture built to handle millions of concurrent users." },
  { title: "AI-Ready", text: "Machine learning and predictive analytics embedded where they create real value." },
];

function PartnerMark({ variant }: { variant: number }) {
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    {variant === 0 && <><path d="M7 43V5h34v38H7Zm9 0V18l16-6v31M12 25h7m-7 7h7m9-9h8m-8 8h8M23 43V31" /><path d="M7 5h34" /></>}
    {variant === 1 && <><path d="M3 42V19L19 6l12 9v27H3Zm14 0V25h8v17M31 42V9l14 9v24H31ZM9 22l10-8 6 5M36 23h4m-4 7h4" /></>}
    {variant === 2 && <><path d="M3 42h42M8 42V23L24 9l16 14v19M14 42V25l10-9 10 9v17M20 42V29h8v13M3 25 24 6l21 19" /></>}
    {variant === 3 && <><circle cx="24" cy="24" r="20" /><path d="M13 40V11l11 7v25M24 39V18l12-6v27M13 21l11 7 12-7M13 30l11 7 12-7" /></>}
    {variant === 4 && <><path d="M5 41V16l10-6 10 6v25M15 45V4l10 6v35M25 41V15l10-6 9 6v26M35 45V4M5 16l10 6 10-6 10 6 9-7" /></>}
  </svg>;
}

export default function BankingClientVoices() {
  return <section className={styles.section} aria-labelledby="client-voices-title">
    <div className={styles.heading}><p className={styles.eyebrow}><span aria-hidden="true">✦</span> Why Capyngen</p><h2 id="client-voices-title">Why Banks <span>Choose <br />Capyngen</span></h2></div>
    <div className={styles.testimonial}>
      <div className={styles.photo}><Image src="/images/banking/site-team.png" alt="Why banks choose Capyngen" fill sizes="(max-width: 760px) 100vw, 40vw" className={styles.image} /></div>
      <div className={styles.story}>
        <div className={styles.ratingRow}><div className={styles.rating}><span className={styles.score}>04</span><div><span className={styles.stars}>Outcomes</span><p>That matter</p></div></div><p className={styles.summary}>As a Banking Software Development Company, we focus on the outcomes that matter: reliability, compliance, and customer trust.</p></div>
        <ul className={styles.reasons}>{reasons.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul>
      </div>
    </div>
    <div className={styles.partnerIntro}><span /><p>Serving Every Banking &amp; <strong>Financial Sector</strong></p><span /></div>
    <div className={styles.partners} aria-label="Banking and financial sectors we serve">{sectors.map(sector => <div className={styles.partner} key={sector.name}><PartnerMark variant={sector.icon} /><div><span className={styles.partnerName}>{sector.name}</span><span className={styles.partnerKind}>{sector.kind}</span></div></div>)}</div>
    <p className={styles.note}>From large retail networks to nimble fintech disruptors, we cater to the full financial spectrum.</p>
  </section>;
}
