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

const techStats: { value: string; label: string; icon: IconName }[] = [
  { value: "HTML5", label: "Languages", icon: "book" },
  { value: "CSS3", label: "Languages", icon: "book" },
  { value: "JavaScript", label: "Languages", icon: "book" },
  { value: "React", label: "Frameworks", icon: "chart" },
  { value: "Figma", label: "Tools", icon: "star" },
];

const investReasons: { title: string; text: string; icon: IconName }[] = [
  { title: "Better User Engagement", text: "SILVER Collaboration drives the creation of easy-to-use and seamless interfaces and gateways between businesses and users. With seamless and intuitive interfaces, businesses can open up channels for users to engage with the platform easily and improve engagement.", icon: "people" },
  { title: "Improved Conversion Rates", text: "We optimise designs so that users can perform their desired tasks with as little effort as possible and achieve better conversions.", icon: "chart" },
  { title: "Improved Customer Retention", text: "Creating a positive user experience makes users want to return to the platform. It supports long-term customer loyalty and helps with growth.", icon: "handshake" },
  { title: "Optimised Mobile Experiences", text: "Our UI/UX design experts work hard to make sure that your UI/UX design services work perfectly on any device for a superior experience on mobile and extended reach.", icon: "person" },
  { title: "Better ROI", text: "You can accomplish fast time to market with proficient UI/UX development services and lower development costs to propagate the long-term benefits for the business.", icon: "award" },
];

const purpose: { title: string; text: string; icon: IconName; theme: string }[] = [
  { title: "Expertise & Skill", text: "Our extensive experience and deep knowledge in the field enable us to create solutions that will have a real impact on your target market. Top UI UX design company can help your enterprise reach the right audience with great effectiveness.", icon: "briefcase", theme: "white" },
  { title: "Our Mission", text: "Ease the burden of technology on your end-users.", icon: "star", theme: "lime" },
  { title: "Our Vision", text: "Design built to give your business the confidence, momentum, and growth it needs to succeed.", icon: "award", theme: "dark" },
];

const offerings = ["Custom UI/UX Design Services", "Mobile & Web App UI Design", "User-Centered Design Solutions", "Usability Testing & Research", "Wireframing & Prototyping", "UI/UX Consulting & Strategy"];

const team = [
  { title: "UI/UX Designers", text: "We have a complete team of UI & UX designers who are visually talented to produce engaging & intuitive designs. Besides, we have professional illustrators, animators & other creative minds in our studio.", image: "research", alt: "Team collaborating on a digital project", tag: "UI/UX", color: "purple" },
  { title: "Brand Designers", text: "The personaL of different & businesses can't be fawazed, but our brand specialists and inventive directors make design tales an instant. Our real-time specialists acquire a number of design structures and aids to cater to every consumer's needs.", image: "designer", alt: "Portrait of a creative professional", tag: "Brand", color: "purple" },
  { title: "Product Designers", text: "You need industry experts to create digital products that should perform well in the marketplace. And we've got such industry specialists who specialise in delivering design services to a wide range of industries.", image: "office", alt: "Modern light-filled office interior", tag: "Product", color: "green" },
];

const reasons = [
  { title: "Complete Mobile & Web UI/UX Expertise", text: "Strong expertise in mobile and web ui/ux design services with deep knowledge of multiple platforms and devices." },
  { title: "User-Centered Original Design", text: "Designs originated and built with end-users in mind, for startups and volume companies." },
  { title: "Global Delivery at Competitive Prices", text: "Global delivery at competitive prices, with options that can be increased or decreased on demand." },
  { title: "Focus on Engagement & Conversions", text: "Focus on engagement, retention, and conversions, not design only." },
  { title: "Skilled Team with Modern Tools", text: "A dedicated team, armed with the latest technology and modern design practices." },
  { title: "Reliable, User-Friendly Digital Experiences", text: "Global track record of delivering intuitive digital experiences." },
];

const faqs = [
  { question: "What are UI/UX design services, and why do they matter?", answer: "UI/UX design services. The research, design, and usability testing of digital interfaces that users find intuitive. Proper design can have a direct impact on engagement, conversions, and customer retention; this is why good design is more than just good looks." },
  { question: "What makes Capyngen a leading UI UX design company?", answer: "We integrate user research, authentic design thinking, and contemporary tooling. Our UI UX design studio concentrates on results — engagement, conversions, and retention — not merely delivering screens." },
  { question: "How is Capyngen different from other UI/UX design agencies?", answer: "Most agencies end at the visual design stage. Our UI/UX design agency goes further, adopting a user-centric process that builds in research, wireframes, prototyping, usability testing, and post-launch tuning." },
  { question: "What is included in your custom UI/UX design services?", answer: "Our expert UI/UX design services comprise user research, wireframes, prototypes, UI design for mobile and web, usability testing and UX consultancy. Each project is uniquely designed to ensure that you get the best for your product and consumers." },
  { question: "Do you provide both user interface design services and user experience design services?", answer: "Yes. All our user interface design services include interaction design, and all our user experience design services include research, flows, information architecture and usability. Our services work hand-in-hand." },
  { question: "Which tools and technologies do you use for design?", answer: "Designs are crafted in Figma, Adobe XD and Sketch, while we implement using HTML5, CSS3, JavaScript, React, Vue.js and Angular so that the design can be developed and not only visualised." },
  { question: "How do you measure the success of a UI/UX project?", answer: "We measure engagement metrics, conversion rates, task completion, retention, and usability testing outcomes. Success is predetermined with transparent benchmarks that are based on your business objectives, not on a gut feeling." },
  { question: "Can you redesign an existing website or application?", answer: "Absolutely. It's an integral aspect of our UI/UX design offering. We give the existing experience an audit, smooth out the bumps, and recreate the interface, all without changing the functionality you already have in place." },
  { question: "Do you design for both mobile and web platforms?", answer: "Q. Do you design UI for mobile apps? Yes. We do UI design for mobile applications and web applications, giving a similar experience on desktop and mobile platforms." },
  { question: "How do I get started with Capyngen's UI/UX design services?", answer: "Contact us via our contact form. We will give you a discovery call to get a better understanding of your product, your users and your goals, and then draw up a realistic design plan of action free of charge." },
];

export default function UiUxSections() {
  return <>
    <section className={styles.school} aria-labelledby="school-heading">
      <div className={styles.container}>
        <div className={styles.schoolGrid}>
          <div className={styles.schoolIntro}>
            <p className={styles.goldEyebrow}>Tech Stack</p>
            <h2 id="school-heading">Tech Stack for Exceptional UI UX Designs Services.</h2>
            <p>Our designers and developers use the most current design and development tools to deliver groundbreaking solutions to high-performance interfaces.</p>
            <a href="#academics" className={styles.goldButton}>Why Invest in UI/UX Design Services? <Arrow /></a>
          </div>
          <Photo name="campus" alt="Campus surrounded by trees and open green space" className={styles.campus} />
          <div className={styles.schoolHighlights}>
            <div className={styles.schoolHighlight}>
              <Photo name="classroom" alt="People learning together in a bright room" />
              <div><h3>Tools</h3><p>Adobe XD · Sketch<br />· Figma</p></div>
            </div>
            <div className={styles.schoolHighlight}>
              <Photo name="sports" alt="Green football field" />
              <div><h3>Frameworks</h3><p>React · Vue.js · Angular<br />· Bootstrap</p></div>
            </div>
          </div>
        </div>
        <div className={styles.stats} aria-label="Languages: HTML5, CSS3, JavaScript, Bootstrap">
          {techStats.map(item => <div className={styles.stat} key={item.value}><Icon name={item.icon} /><div><p className={item.value.length > 6 ? "!text-[clamp(18px,1.9vw,28px)] whitespace-nowrap" : undefined}>{item.value}</p><span>{item.label}</span></div></div>)}
        </div>
      </div>
    </section>

    <section id="academics" className={styles.academics} aria-labelledby="academics-heading">
      <div className={styles.container}>
        <header className={styles.academicHeader}><p className={styles.goldEyebrow}>Why Invest</p><h2 id="academics-heading">Why Invest in UI/UX Design Services?</h2><span /></header>
        <div className={styles.pathways}>
          {investReasons.map(item => <article key={item.title} className={styles.pathway}><div className={styles.pathwayIcon}><Icon name={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className={styles.approach} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <div className={styles.approachHeader}>
          <div><p className={styles.smallEyebrow}><span aria-hidden="true">✳</span> A Leading UI UX Design Company</p><h2 id="approach-heading">Create Purposeful<br />Designs with<br />Capyngen</h2></div>
          <p>A user-friendly app can take your business to the next level for user engagement. It can motivate users to perform the required action and can also help in acquiring more users for your business.</p>
        </div>
        <div className={styles.services}>{purpose.map(item => <article key={item.title} className={`${styles.service} ${styles[item.theme]}`}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.text}</p><a href="#strategy" className={styles.explore}>UI/UX Design Services <Arrow /></a></article>)}</div>
      </div>
    </section>

    <section id="strategy" className={styles.strategy} aria-labelledby="strategy-heading">
      <div className={styles.container}>
        <div className={styles.sectionMeta}><span className={styles.pill}><span>6</span> Services</span><p>UI/UX Design / Capyngen</p></div>
        <div className={styles.strategyGrid}>
          <div className={styles.strategyCopy}><h2 id="strategy-heading">UI/UX Design<br />Services We Offer</h2><h3>A well-known UI/UX design company</h3><p>As a well-known UI/UX design company, Capyngen specialises in creating visually attractive and high-performing web and mobile user interfaces that enable users to interact effectively and boost conversions.</p><ul className="mt-4 space-y-2 text-[14px] leading-[1.5] text-[#333835]">{offerings.map(item => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-[#7c61ef]">↗</span>{item}</li>)}</ul><a href="#growth" className={styles.caseLink}><Arrow diagonal /> UX Team That Thinks, Innovates, &amp; Creates</a></div>
          <div className={styles.strategyVisual}>
            <Photo name="strategy" alt="Woman using her phone" className={styles.strategyPortrait} />
            <div className={styles.metric}><strong>UI/UX</strong><p>Visually attractive and high-performing web and mobile user interfaces</p><span>Boost conversions</span></div>
            <div className={styles.portraitInset}><Photo name="strategy" alt="" /><span aria-hidden="true">↗</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="growth" className={styles.growth} aria-labelledby="growth-heading">
      <div className={styles.container}>
        <div className={styles.sectionMeta}><span className={styles.pill}><span>3</span> UX Team</span><p>Thinks, Innovates, &amp; Creates</p></div>
        <div className={styles.growthGrid}>
          <div className={styles.growthIntro}><h2 id="growth-heading">UX Team That Thinks, Innovates, &amp; Creates</h2><p>Our creative Team is composed of a lot of talented people from around the world, handpicked from unique demographics. Our every single design resources are qualified SM person who know the need for the client and offers high quality of design standards.</p><a href="#implementation" aria-label="Why Choose Capyngen for UI/UX Design" className={styles.largeArrow}><Arrow diagonal /></a></div>
          <div className={styles.growthCards}>{team.map((item, i) => <article className={styles.growthCard} key={item.title}>
            {item.image === "office" ? <div className={styles.photo}><Image src="/images/company-about-office-v2.webp" alt={item.alt} fill sizes="(max-width: 600px) 100vw, 25vw" className={styles.image} /></div> : <Photo name={item.image} alt={item.alt} sizes="(max-width: 600px) 100vw, 25vw" />}
            <span className={styles.cardNumber}>{i + 1}</span><div className={styles.growthCardCopy}><h3>{item.title}</h3><p>{item.text}</p><a href={`#implementation-${i + 1}`} className={`${styles.cardTag} ${item.color === "green" ? styles.greenTag : ""}`}>{item.tag}<span aria-hidden="true">↘</span></a></div>
          </article>)}</div>
        </div>
      </div>
    </section>

    <section id="implementation" className={styles.implementation} aria-labelledby="implementation-heading">
      <div className={styles.container}>
        <header><p className={styles.smallEyebrow}>Engagement, satisfaction, and retention</p><h2 id="implementation-heading">Why Choose Capyngen for UI/UX Design</h2><p>Our UI UX Design Services in India help businesses by improving their engagement, satisfaction, and retention.</p></header>
        <ol className={styles.implementationGrid}>{reasons.map((item, i) => <li id={`implementation-${i + 1}`} key={item.title}><span>{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
        <div className={styles.implementationCta}><p>Contact us via our contact form.</p><Link href="/contact-us">Contact us <Arrow diagonal /></Link></div>
      </div>
    </section>

    <section id="ui-ux-faq" className={styles.academics} aria-labelledby="ui-ux-faq-heading">
      <div className={styles.container}>
        <header className={styles.academicHeader}><p className={styles.goldEyebrow}>FAQ</p><h2 id="ui-ux-faq-heading">Frequently Asked Questions</h2><span /></header>
        <div className="mx-auto mt-8 max-w-[980px] space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[7px] border border-[#f6f4ee] bg-[#f9f8f5] p-5 sm:px-7">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.5] font-semibold text-[#202722] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9644] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#bd9644]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#073c2c] text-base text-[#d2af4e] transition-transform group-open:rotate-45">+</span></summary>
          <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#5b625d]">{faq.answer}</p>
        </details>)}</div>
      </div>
    </section>
  </>;
}
