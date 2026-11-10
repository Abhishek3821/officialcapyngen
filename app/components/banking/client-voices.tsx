import Image from "next/image";
import styles from "./client-voices.module.css";

const partners = [
  { name: "Architect", kind: "Real estate", icon: 0 },
  { name: "Trend", kind: "Interiors", icon: 1 },
  { name: "Interior", kind: "Living", icon: 2 },
  { name: "Building", kind: "Construction", icon: 3 },
  { name: "Real Estate", kind: "Architecture", icon: 4 },
  { name: "Building", kind: "Design studio", icon: 0 },
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
    <div className={styles.heading}><p className={styles.eyebrow}><span aria-hidden="true">✦</span> Our clients say</p><h2 id="client-voices-title">Here’s what <span>warm words<br />from our clients</span> sound like.</h2></div>
    <div className={styles.testimonial}>
      <div className={styles.photo}><Image src="/images/banking/site-team.png" alt="Two architects in yellow safety helmets discussing plans beside surveying equipment in a concrete building" fill sizes="(max-width: 760px) 100vw, 40vw" className={styles.image} /></div>
      <div className={styles.story}>
        <div className={styles.ratingRow}><div className={styles.rating}><span className={styles.score}>4.80</span><div><span className={styles.stars} aria-label="Illustrative rating: 4.8 out of 5">★★★★★</span><p>Illustrative rating</p></div></div><p className={styles.summary}>From the first idea to the final detail,<br /> thoughtful collaboration makes the difference.</p></div>
        <figure className={styles.quote}><blockquote>“I absolutely love my new modern living room! The clean lines, neutral tones and thoughtful details create such a calming atmosphere. Every part of the space feels beautifully considered.”</blockquote><figcaption><span className={styles.avatar} aria-hidden="true">MD</span><span><strong>Morgan Dufresne</strong><span className={styles.sample}>Sample client story</span></span></figcaption></figure>
      </div>
    </div>
    <div className={styles.partnerIntro}><span /><p>Thoughtful spaces. <strong>Shared possibilities.</strong></p><span /></div>
    <div className={styles.partners} aria-label="Concept partner identities">{partners.map((partner,index)=><div className={styles.partner} key={index}><PartnerMark variant={partner.icon} /><div><span className={styles.partnerName}>{partner.name}</span><span className={styles.partnerKind}>{partner.kind}</span></div></div>)}</div>
    <p className={styles.note}>Illustrative testimonial and partner identities for this design concept.</p>
  </section>;
}
