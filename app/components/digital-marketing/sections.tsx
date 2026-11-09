import Image from "next/image";
import Link from "next/link";
import FashionSections from "./fashion-sections";
import styles from "./sections.module.css";

type IconType = "pin" | "plane" | "camera" | "guide" | "shield" | "trophy" | "globe" | "building" | "ship" | "mountain";
function Icon({ type }: { type: IconType }) {
  const paths: Record<IconType, React.ReactNode> = {
    pin: <><path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0Z" /><circle cx="12" cy="9" r="2.5" /></>,
    plane: <path d="m3 9 7 3 8-9 3 1-6 10 5 4-1 2-7-3-5 5-2-1 3-7-6-3 1-2Z" />,
    camera: <><path d="M3 7h5l2-3h5l2 3h4v14H3V7Z" /><circle cx="12" cy="14" r="4" /></>,
    guide: <><circle cx="8" cy="5" r="2" /><path d="M4 21v-7l2-5h5l3 5m-6-2v9m10 0V3l5 2-5 3" /></>,
    shield: <><path d="m12 2 8 3v7c0 5-8 10-8 10S4 17 4 12V5l8-3Z" /><path d="m8 11 3 3 5-6" /></>,
    trophy: <><path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v4a4 4 0 0 0 5 4m9-8h4v4a4 4 0 0 1-5 4m-4 2v6m-5 0h10" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="5" ry="10" /><path d="M2 12h20M4 6h16M4 18h16" /></>,
    building: <><path d="M5 22V5h14v17M3 22h18M3 5l9-3 9 3M8 8h8m-8 4h8m-8 4h8m-5 6v-3h2v3" /></>,
    ship: <><path d="M8 11V3h8v8M4 12l8-3 8 3-3 7H7l-3-7Zm-2 9q3-3 5 0 3-3 5 0 3-3 5 0 3-3 5 0" /></>,
    mountain: <><path d="m1 21 8-17 6 10 3-6 5 13H1Zm5-11 3 3 2-4" /></>,
  };
  return <svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 45vw" className={styles.image} /></div>;
}
const travelServices: { title: string; description: string; icon: IconType }[] = [
  { title: "Accommodation", description: "Find a place that feels right for your journey, from peaceful hideaways to lively city stays.", icon: "pin" },
  { title: "Instant confirmation", description: "A simpler way to plan, with clear booking details and helpful updates along the way.", icon: "plane" },
  { title: "Customer service", description: "Friendly support for the questions that come up before, during, and after your trip.", icon: "camera" },
];
const tourTypes: { title: string; text: string; icon: IconType }[] = [
  { title: "Country Tour", text: "A new place, a different perspective, and stories waiting around every corner.", icon: "globe" },
  { title: "Sea Tour", text: "Follow the coastline, slow down, and discover the world beside the water.", icon: "building" },
  { title: "Cruises Tour", text: "Set sail for new horizons with time to explore, unwind, and reconnect.", icon: "ship" },
  { title: "Adventure Tour", text: "Take the scenic route and make room for something extraordinary.", icon: "mountain" },
];

export default function DigitalMarketingSections() {
  return <>
    <FashionSections />
    <section id="marketing-worldwide" className={styles.worldwide} aria-labelledby="worldwide-heading"><div className={styles.container}><header className={styles.worldwideHeader}><h2 id="worldwide-heading">Search Worldwide</h2><p>Find the perfect hotel and discover a world of possibilities.</p></header><div className={styles.serviceGrid}>{travelServices.map(service => <article key={service.title}><div className={styles.serviceIcon}><Icon type={service.icon} /></div><h3>{service.title}</h3><p>{service.description}</p><a href="/contact-us" aria-label={`Enquire about ${service.title}`}>Explore <span aria-hidden="true">↗</span></a></article>)}</div></div></section>

    <section id="marketing-travel-company" className={styles.travelCompany} aria-labelledby="travel-company-heading"><div className={`${styles.container} ${styles.companyGrid}`}><div className={styles.companyArt}><span className={styles.flyingPlane} aria-hidden="true">✈</span><Photo src="/images/crm-management-software/travel-couple.webp" alt="Smiling travelers planning their next adventure together" className={styles.couplePhoto} /><Photo src="/images/app-development/resort-terrace.webp" alt="Sunny holiday terrace overlooking a relaxing destination" className={styles.terracePhoto} /><span className={styles.postmark} aria-hidden="true">Go.<br /><strong>Explore.</strong></span><span className={styles.sunStamp} aria-hidden="true">☀</span></div><div className={styles.companyCopy}><p className={styles.blueEyebrow}>✈ &nbsp; Get to know us</p><h2 id="travel-company-heading">Experience the World with<br />Our Company</h2><p>Every journey starts with a little curiosity. Discover thoughtfully planned experiences that bring you closer to the places and people that make travel special.</p><div className={styles.companyBenefits}>{[{ title: "Friendly Guide", icon: "guide" as const, text: "A local perspective and a helping hand along the way." }, { title: "Thoughtful Travel", icon: "shield" as const, text: "Clear plans and useful details, so you can enjoy the moment." }].map(item => <article key={item.title}><div><span><Icon type={item.icon} /></span><h3>{item.title}</h3></div><p>{item.text}</p></article>)}</div><div className={styles.companyBottom}><div className={styles.award}><Icon type="trophy" /><span>Inspired Journeys<br />Personal Service</span></div><div><ul><li>Experiences shaped around your interests.</li><li>A fresh perspective on every destination.</li><li>More moments worth remembering.</li></ul><Link href="/contact-us" className={styles.orangeButton}>Explore More <span aria-hidden="true">↗</span></Link></div></div></div></div></section>

    <section id="marketing-travel-inspiration" className={styles.travelInspiration} aria-labelledby="travel-inspiration-heading"><div className={styles.container}><header><p className={styles.smallLabel}>A world of possibilities</p><h2 id="travel-inspiration-heading">Welcome to a world of tourism</h2><p>Enjoy a new view, discover somewhere unexpected, and make time for the journey.<br />Thoughtful experiences bring a little more wonder to every escape.</p></header><div className={styles.inspirationGrid}><div className={styles.landscapeStack}><Photo src="/images/destinations/los-lances.webp" alt="A bright coastal landscape beside the sea" /><Photo src="/images/destinations/swiss-alps.webp" alt="Spectacular mountain scenery in the Swiss Alps" /><Photo src="/images/application-solutions/lake-cabin.webp" alt="A peaceful lakeside escape" /></div><div className={styles.inspirationCopy}><p className={styles.scriptLabel}>Summer</p><h3>In your travels</h3><p>Explore new places with a sense of wonder. From quiet coastlines to mountain air, every destination offers a different way to slow down, look around, and reconnect.</p><p>Choose the kind of journey that feels right for you. We bring together inspiration, thoughtful planning, and the details that make an experience your own.</p><Link href="/contact-us" className={styles.coralButton}>Discover Destinations <span aria-hidden="true">↗</span></Link></div></div></div></section>

    <section id="marketing-tour-types" className={styles.tourTypes} aria-labelledby="tour-types-heading"><div className={styles.container}><h2 id="tour-types-heading">Our Popular Tour Types</h2><div>{tourTypes.map(tour => <a href="/contact-us" key={tour.title} aria-label={`Enquire about ${tour.title}`}><Icon type={tour.icon} /><h3>{tour.title}</h3><p>{tour.text}</p></a>)}</div></div></section>

    <section id="marketing-world-secrets" className={styles.worldSecrets} aria-labelledby="world-secrets-heading"><div className={`${styles.container} ${styles.secretsGrid}`}><div className={styles.secretsCopy}><p className={styles.smallLabel}>Go beyond the ordinary</p><h2 id="world-secrets-heading">Unlocking the Secrets of<br />the World</h2><p>What sets us apart is our commitment to personal service. We believe in the little details that turn a trip into your own story, shaped around your preferences, interests, and aspirations.</p><ul><li>Seasonal travel inspiration</li><li>Thoughtful itineraries</li><li>Local perspectives</li><li>Personal support</li></ul><Link href="/contact-us" className={styles.tealButton}>Read More <span aria-hidden="true">↗</span></Link></div><div className={styles.postcardArt}><div className={styles.pinkPostcard}><Photo src="/images/application-solutions/hiker.webp" alt="Adventurous traveler overlooking an alpine lake" /><span aria-hidden="true">GO SOMEWHERE NEW</span></div><div className={styles.couplePostcard}><Photo src="/images/crm-management-software/travel-couple.webp" alt="Happy couple exploring and making travel plans" /><span aria-hidden="true">little moments, big memories.</span></div><div className={styles.postcardOutline} aria-hidden="true" /></div></div></section>
  </>;
}
