import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";

type IconName = "people" | "book" | "cap" | "person" | "star" | "award" | "briefcase" | "chart" | "handshake";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    people: <><circle cx="9" cy="8" r="3" /><circle cx="18" cy="10" r="2.5" /><path d="M3 22v-4a6 6 0 0 1 12 0v4m1-8a5 5 0 0 1 7 4v4M9 14v8" /></>,
    book: <><path d="M12 6C9 3 5 3 2 4v16c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v16M5 8h4m-4 4h4m6-4h4m-4 4h4" /></>,
    cap: <><path d="m1 8 11-5 11 5-11 5L1 8Zm5 3v7c4 3 8 3 12 0v-7m5-3v10" /></>,
    person: <><circle cx="12" cy="7" r="4" /><path d="M4 23v-4a8 8 0 0 1 16 0v4H4Zm5-11 3 6 3-6" /></>,
    star: <path d="m12 2 3.1 6.4 7.1 1-5.1 5 1.2 7-6.3-3.3-6.3 3.3 1.2-7-5.1-5 7.1-1L12 2Z" />,
    award: <><circle cx="12" cy="9" r="6" /><path d="m8 14-2 9 6-3 6 3-2-9M9 9l2 2 4-4" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M8 7V3h8v4M2 12l10 5 10-5m-10 3v4" /></>,
    chart: <><path d="M2 22h21M5 22v-7h4v7m3 0V11h4v11m3 0V6h4v16M3 11l7-5 5 1 7-5m-5 0h5v5" /></>,
    handshake: <><path d="m2 6 4-2 4 3m12-1-4-2-7 3-3 5 3 2 4-4 6 6-6 6-9-6-4-8Zm4 9-2 4m5-2-2 4m5-2-2 4m7-8 3-7M1 5l3-2 4 3-5 10-3-2m24-9-3-2-4 3 5 10 2-2" /></>,
  };
  return <svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Photo({ name, alt, className = "", sizes = "(max-width: 767px) 100vw, 40vw" }: { name: string; alt: string; className?: string; sizes?: string }) {
  const src = name === "strategy" ? "/images/contact-hero-portrait.webp" : `/images/ui-ux-design/${name}.jpg`;
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill sizes={sizes} className={styles.image} /></div>;
}

const stats: { value: string; label: string; icon: IconName }[] = [
  { value: "20+", label: "Years of Excellence", icon: "award" },
  { value: "3,500+", label: "Students", icon: "people" },
  { value: "150+", label: "Expert Educators", icon: "book" },
  { value: "40+", label: "Clubs & Activities", icon: "person" },
  { value: "100%", label: "University Acceptance", icon: "award" },
];

const pathways: { title: string; text: string; detail: string; icon: IconName }[] = [
  { title: "Early Years", text: "Nurturing curiosity and creativity in a warm and stimulating environment.", detail: "Play-based learning, early language skills, and caring guidance help every child feel confident from the very beginning.", icon: "people" },
  { title: "Primary School", text: "Building strong foundations in academics, character, and confidence.", detail: "An engaging curriculum connects literacy, numeracy, science, and the arts with meaningful everyday experiences.", icon: "book" },
  { title: "Middle School", text: "Encouraging exploration, critical thinking, and independent learning.", detail: "Subject specialists, collaborative projects, and personal mentoring support a growing sense of independence.", icon: "cap" },
  { title: "High School", text: "Preparing students for university and a successful future.", detail: "Focused academic pathways, career guidance, and leadership opportunities prepare students for their next chapter.", icon: "person" },
  { title: "Co-Curricular", text: "Sports, arts, leadership, and clubs for all-round growth.", detail: "From the playing field to the stage, students discover their interests, build friendships, and develop new skills.", icon: "star" },
];

const services: { title: string; text: string; icon: IconName; theme: string; target: string }[] = [
  { title: "Next-gen human Resources", text: "We provide expert business consulting services that help companies grow.", icon: "briefcase", theme: "white", target: "implementation-1" },
  { title: "Market growth Consulting", text: "Identify new opportunities and accelerate sustainable business growth.", icon: "chart", theme: "lime", target: "implementation-2" },
  { title: "Business process Improvement", text: "Optimize workflows to increase efficiency, productivity, and performance.", icon: "handshake", theme: "dark", target: "implementation-3" },
];

const growth = [
  { title: "Data Integration", text: "Eliminating silos to create a unified view of your customer. We build smart, scalable systems that let you track behavior from anywhere in real time.", image: "research", alt: "Team collaborating on a digital project", tag: "Core Tech", color: "purple" },
  { title: "UX/UI Optimization", text: "Removing friction from the digital journey. We design intuitive interfaces that guide users to checkout with zero distractions.", image: "designer", alt: "Portrait of a creative professional", tag: "Design Hub", color: "purple" },
  { title: "Accelerated Revenue", text: "Leveraging automated tools to reach new audiences. We focus on high-LTV segments to ensure every dollar delivers maximum ROI.", image: "office", alt: "Modern light-filled office interior", tag: "Marketing", color: "green" },
];

const implementation = [
  { title: "Integrate Circular Design Principles", text: "Design products for durability, reparability, and recyclability." },
  { title: "Develop Closed-Loop Supply Chains", text: "Source materials that can be recycled or are biodegradable." },
  { title: "Enhance Manufacturing", text: "Implement lean manufacturing techniques to minimize waste." },
  { title: "Promote Product-as-a-Service Models", text: "Offer leasing, renting, or subscription services instead of one-time sales." },
  { title: "Foster Collaboration and Partnerships", text: "Engage in industry coalitions and partnerships to drive circular initiatives." },
  { title: "Educate & Engage Stakeholders", text: "Train employees on circular economy principles and practices." },
];

export default function UiUxSections() {
  return <>
    <section className={styles.school} aria-labelledby="school-heading">
      <div className={styles.container}>
        <div className={styles.schoolGrid}>
          <div className={styles.schoolIntro}>
            <p className={styles.goldEyebrow}>About us</p>
            <h2 id="school-heading">More Than a School,<br />It’s a Community.</h2>
            <p>At Elmwood, we believe every child has a unique potential. Our mission is to provide a supportive community where students thrive academically, socially, and emotionally.</p>
            <a href="#academics" className={styles.goldButton}>Discover Our Story <Arrow /></a>
          </div>
          <Photo name="campus" alt="School campus surrounded by trees and open green space" className={styles.campus} />
          <div className={styles.schoolHighlights}>
            <div className={styles.schoolHighlight}>
              <Photo name="classroom" alt="Students learning together in a bright classroom" />
              <div><h3>Innovative Classrooms</h3><p>Modern spaces for<br />smarter learning.</p></div>
            </div>
            <div className={styles.schoolHighlight}>
              <Photo name="sports" alt="Green football field for outdoor sports and activities" />
              <div><h3>Vibrant Campus Life</h3><p>Activities that inspire<br />and connect.</p></div>
            </div>
          </div>
        </div>
        <div className={styles.stats} aria-label="Elmwood at a glance">
          {stats.map(item => <div className={styles.stat} key={item.label}><Icon name={item.icon} /><div><p>{item.value}</p><span>{item.label}</span></div></div>)}
        </div>
      </div>
    </section>

    <section id="academics" className={styles.academics} aria-labelledby="academics-heading">
      <div className={styles.container}>
        <header className={styles.academicHeader}><p className={styles.goldEyebrow}>Academics</p><h2 id="academics-heading">Pathways to Success</h2><span /></header>
        <div className={styles.pathways}>
          {pathways.map(item => <article key={item.title} className={styles.pathway}><div className={styles.pathwayIcon}><Icon name={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p><details className={styles.learnMore}><summary>Learn More <Arrow /></summary><p>{item.detail}</p></details></article>)}
        </div>
      </div>
    </section>

    <section className={styles.approach} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <div className={styles.approachHeader}>
          <div><p className={styles.smallEyebrow}><span aria-hidden="true">✳</span> Our Approach</p><h2 id="approach-heading">Essential features for<br />modern business<br />success</h2></div>
          <p>Explore integrated consulting approaches that improve processes, increase productivity, and support long-term organizational growth.</p>
        </div>
        <div className={styles.services}>{services.map(item => <article key={item.title} className={`${styles.service} ${styles[item.theme]}`}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p><a href={`#${item.target}`} className={styles.explore}>Explore More <Arrow /></a></article>)}</div>
      </div>
    </section>

    <section id="strategy" className={styles.strategy} aria-labelledby="strategy-heading">
      <div className={styles.container}>
        <div className={styles.sectionMeta}><span className={styles.pill}><span>15</span> Success Story</span><p>Digital Marketing / Concept Showcase</p></div>
        <div className={styles.strategyGrid}>
          <div className={styles.strategyCopy}><h2 id="strategy-heading">Why Choose<br />Our Strategy?</h2><h3>Project Overview</h3><p>Navigating the shift from traditional retail to a fully integrated e-commerce model presents technical and strategic hurdles that many brands fail to overcome. High acquisition costs, low retention rates and technological debt are the primary factors preventing sustainable scaling in the digital age.</p><p>Our goal is to identify these gaps and build a robust foundation for long-term growth.</p><a href="#growth" className={styles.caseLink}><Arrow diagonal /> Explore the solution</a></div>
          <div className={styles.strategyVisual}>
            <Photo name="strategy" alt="Woman using her phone" className={styles.strategyPortrait} />
            <div className={styles.metric}><strong>38K</strong><p>Monthly active users acquired via optimized organic search traffic</p><span>Illustrative project metric</span></div>
            <div className={styles.portraitInset}><Photo name="strategy" alt="" /><span aria-hidden="true">↗</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="growth" className={styles.growth} aria-labelledby="growth-heading">
      <div className={styles.container}>
        <div className={styles.sectionMeta}><span className={styles.pill}><span>6</span> The Solution</span><p>Digital Marketing</p></div>
        <div className={styles.growthGrid}>
          <div className={styles.growthIntro}><h2 id="growth-heading">How We<br />Drive<br />Growth?</h2><p>Our implementation framework focuses on three core pillars designed to eliminate market gaps and maximize your digital performance across all platforms.</p><a href="#implementation" aria-label="Explore implementation strategies" className={styles.largeArrow}><Arrow diagonal /></a></div>
          <div className={styles.growthCards}>{growth.map((item, i) => <article className={styles.growthCard} key={item.title}>
            {item.image === "office" ? <div className={styles.photo}><Image src="/images/company-about-office-v2.webp" alt={item.alt} fill sizes="(max-width: 600px) 100vw, 25vw" className={styles.image} /></div> : <Photo name={item.image} alt={item.alt} sizes="(max-width: 600px) 100vw, 25vw" />}
            <span className={styles.cardNumber}>{i + 1}</span><div className={styles.growthCardCopy}><h3>{item.title}</h3><p>{item.text}</p><a href={`#implementation-${i + 1}`} className={`${styles.cardTag} ${item.color === "green" ? styles.greenTag : ""}`}>{item.tag}<span aria-hidden="true">↘</span></a></div>
          </article>)}</div>
        </div>
      </div>
    </section>

    <section id="implementation" className={styles.implementation} aria-labelledby="implementation-heading">
      <div className={styles.container}>
        <header><p className={styles.smallEyebrow}>From ideas to impact</p><h2 id="implementation-heading">Implementation Strategies</h2><p>A practical framework for building a more circular business.<br />Small, intentional changes. Meaningful, lasting impact.</p></header>
        <ol className={styles.implementationGrid}>{implementation.map((item, i) => <li id={`implementation-${i + 1}`} key={item.title}><span>{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
        <div className={styles.implementationCta}><p>Ready to put your next idea into motion?</p><Link href="/contact-us">Let’s talk <Arrow diagonal /></Link></div>
      </div>
    </section>
  </>;
}
