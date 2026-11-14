import Image from "next/image";
import Link from "next/link";
import FashionSections from "./fashion-sections";
import styles from "./sections.module.css";

type IconType = "calendar" | "briefcase" | "team" | "target" | "trophy" | "search" | "rocket" | "chart" | "report" | "plan" | "audience";
function Icon({ type }: { type: IconType }) {
  const paths: Record<IconType, React.ReactNode> = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4m8-4v4m-9 7h2m3 0h2m-7 3h2" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 13h18" /></>,
    team: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6m1-6c3 0 5 2 5 5" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
    trophy: <><path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v4a4 4 0 0 0 5 4m9-8h4v4a4 4 0 0 1-5 4m-4 2v6m-5 0h10" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-5-5M8 11h6m-3-3v6" /></>,
    rocket: <><path d="M12 3c4 2 6 6 5 11l-3 3h-4l-3-3C6 9 8 5 12 3Z" /><circle cx="12" cy="10" r="2" /><path d="m7 14-3 3 3 1m10-4 3 3-3 1m-7 3 2 3 2-3" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 6-7" /></>,
    report: <><path d="M6 2h9l5 5v15H6V2Z" /><path d="M14 2v6h6M9 13h8m-8 4h6" /></>,
    plan: <><path d="M4 21V4m0 0h12l-2 4 2 4H4" /></>,
    audience: <><circle cx="12" cy="7" r="3" /><path d="M6 21c0-4 3-7 6-7s6 3 6 7M3 11h2m14 0h2" /></>,
  };
  return <svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 45vw" className={styles.image} /></div>;
}

const workOptions: { title: string; description: string; icon: IconType }[] = [
  { title: "Monthly Retainer", description: "Continuous strategy, implementation, and improvement through one or more marketing channels. Ideal for businesses prioritising long-term growth.", icon: "calendar" },
  { title: "Project-Based", description: "A fixed scope with a specific outcome and fixed timeline, such as an SEO audit. A website refresh or implementation. A one-off campaign launch. When you know exactly what you want to achieve.", icon: "briefcase" },
  { title: "Dedicated Team / Staff Augmentation", description: "A committed marketer or team working as a natural extension of your internal team, providing you with extra resources and expertise without increasing your overheads.", icon: "team" },
];

const leadSteps: { title: string; text: string; icon: IconType }[] = [
  { title: "Plan Your Growth (Week 1)", text: "We know your industry, we analyse your competition, and we identify your target to create a marketing strategy that fits your budget and your objectives.", icon: "plan" },
  { title: "Reach the Right Audience (Week 2-4)", text: "Our specialists implement your plan via SEO, PPC, social media, content, and AI search tuning services to bring relevant visitors and potential buyers to your company.", icon: "audience" },
];

const services = [
  "Search Engine Optimisation (SEO)",
  "Social Media Marketing (SMM)",
  "Pay-Per-Click Advertising (PPC)",
  "Content Marketing",
  "Email Marketing",
  "Conversion Rate Optimisation (CRO)",
];

const processSteps: { title: string; text: string; icon: IconType }[] = [
  { title: "01 Research & Strategy", text: "We analyse your business model, competitors, and customer journey and develop a tailored multi-channel growth plan based on your KPIs.", icon: "search" },
  { title: "02 Execution", text: "We execute superior SEO, focused paid advertising, media, and social campaigns through the appropriate platforms.", icon: "rocket" },
  { title: "03 Tracking & Optimisation", text: "We track the KPIs of the campaign, experiment with variations, and tweak budgets to improve results.", icon: "chart" },
  { title: "04 Reporting & Improvement", text: "We provide clear and concise monthly reports with the necessary direction and follow-up strategising until we meet your goals.", icon: "report" },
];

const faqs = [
  { question: "Why is Capyngen one of the Top Digital Marketing Agencies in India?", answer: "We blend human intelligence with our AI tools. As a results-driven Digital Marketing Agency, we plan your marketing efforts around your revenue goals, not a lot of social media followers." },
  { question: "How is Capyngen different from a typical Digital Marketing Agency?", answer: "Most agencies are vendors; we are a growth partner accountable and aligned with your business goals and transparent about how you are performing along the way." },
  { question: "Which services are included in your Digital Marketing Services?", answer: "End-to-End Digital Marketing Solutions. We take care of SEO, social media marketing, PPC, content marketing, email marketing, as well as conversion rate optimisation. All these services are provided within one End-to-End Digital Marketing Solutions method." },
  { question: "What is included in your Search Engine Optimisation (SEO) Services?", answer: "Technical audits, on-page optimisation, keyword strategy, content planning, link building, local SEO. Our Search Engine Optimisation (SEO) Services are all about rankings that drive leads, rather than hits." },
  { question: "How does your Social Media Marketing (SMM) help my business?", answer: "We create content calendars, oversee all creative content, set up engagement campaigns, and monitor community growth. Our SMM services tie visibility to lead generation." },
  { question: "What does your Pay-Per-Click Advertising (PPC) process involve?", answer: "Campaign structure targeting audiences creating and testing ad copy Optimising the budget Our Facebook PPC advertising management aims to manage the cost per acquisition and return on ad spend." },
  { question: "Do you offer Content Marketing Services and Email Marketing Services together?", answer: "Yes. Blog articles, landing pages, and lead magnets are all a part of email nurture sequences. When you pair Content Marketing Services with Email Marketing Services, it's a full funnel, not separate campaigns." },
  { question: "How does Conversion Rate Optimisation (CRO) improve results?", answer: "We measure landing pages, forms, and user flows to optimise a greater share of your current traffic into leads and sales. Conversion Rate Optimisation (CRO) can be more profitable and quicker than simply increasing ad spend." },
  { question: "Can you work as our International Digital Marketing Agency?", answer: "Yes. We help companies market to various regions with customised search engines, content, and paid campaigns tailored to local behaviour as an International Digital Marketing Agency." },
  { question: "How do I get started with Capyngen's Best Digital Marketing Services India?", answer: "Contact us: Fill out the contact form to get in touch. We will assess your digital footprint and provide you with our Result-Driven Marketing Agency roadmap with no sales pressure." },
];

export default function DigitalMarketingSections() {
  return <>
    <FashionSections />
    <section id="marketing-work-options" className={styles.worldwide} aria-labelledby="worldwide-heading"><div className={styles.container}><header className={styles.worldwideHeader}><h2 id="worldwide-heading">How You Can Work with Our Digital Marketing Company</h2><p>Each business has its own unique needs, so we provide a couple of options for connecting with our digital marketing agency.</p></header><div className={styles.serviceGrid}>{workOptions.map(option => <article key={option.title}><div className={styles.serviceIcon}><Icon type={option.icon} /></div><h3>{option.title}</h3><p>{option.description}</p><Link href="/contact-us" aria-label={`Contact us about ${option.title}`}>Contact us <span aria-hidden="true">↗</span></Link></article>)}</div></div></section>

    <section id="marketing-lead-generation" className={styles.travelCompany} aria-labelledby="travel-company-heading"><div className={`${styles.container} ${styles.companyGrid}`}><div className={styles.companyArt}><span className={styles.flyingPlane} aria-hidden="true">↗</span><Photo src="/images/crm-management-software/travel-couple.webp" alt="Two people planning together" className={styles.couplePhoto} /><Photo src="/images/app-development/resort-terrace.webp" alt="A bright, open terrace" className={styles.terracePhoto} /><span className={styles.postmark} aria-hidden="true">Plan.<br /><strong>Grow.</strong></span><span className={styles.sunStamp} aria-hidden="true">☀</span></div><div className={styles.companyCopy}><p className={styles.blueEyebrow}>↗ &nbsp; Lead Generation Services</p><h2 id="travel-company-heading">How Our Digital Marketing Works for Lead Generation Services</h2><p>Follow these three easy steps of our digital marketing for lead generation services to see how it works:</p><div className={styles.companyBenefits}>{leadSteps.map(step => <article key={step.title}><div><span><Icon type={step.icon} /></span><h3>{step.title}</h3></div><p>{step.text}</p></article>)}</div><div className={styles.companyBottom}><div className={styles.award}><Icon type="chart" /><span>Track, Improve,<br />and Grow<br />(Ongoing)</span></div><div><ul><li>Using performance data, we optimise your campaign on a daily basis to ensure you get the best results.</li><li>We track campaign performance, analyse trends and determine what is successful, adjusting your campaign as a result.</li></ul><Link href="/contact-us" className={styles.orangeButton}>Plan Your Growth <span aria-hidden="true">↗</span></Link></div></div></div></div></section>

    <section id="marketing-services" className={styles.travelInspiration} aria-labelledby="travel-inspiration-heading"><div className={styles.container}><header><p className={styles.smallLabel}>Traffic, leads, and sales</p><h2 id="travel-inspiration-heading">Our Digital Marketing Services</h2><p>We provide end-to-end digital solutions that help ambitious companies generate traffic, leads, and sales in every channel.</p></header><div className={styles.inspirationGrid}><div className={styles.landscapeStack}><Photo src="/images/destinations/los-lances.webp" alt="A bright coastal landscape beside the sea" /><Photo src="/images/destinations/swiss-alps.webp" alt="Spectacular mountain scenery in the Swiss Alps" /><Photo src="/images/application-solutions/lake-cabin.webp" alt="A peaceful lakeside escape" /></div><div className={styles.inspirationCopy}><p className={styles.scriptLabel}>Every channel</p><h3>End-to-end digital solutions</h3><ul className={styles.serviceList}>{services.map(service => <li key={service}>{service}</li>)}</ul><Link href="/contact-us" className={styles.coralButton}>Contact us <span aria-hidden="true">↗</span></Link></div></div></div></section>

    <section id="marketing-process" className={styles.tourTypes} aria-labelledby="tour-types-heading"><div className={styles.container}><h2 id="tour-types-heading">Our Digital Marketing Process</h2><div>{processSteps.map(step => <article key={step.title}><Icon type={step.icon} /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section id="marketing-best-agency" className={styles.worldSecrets} aria-labelledby="world-secrets-heading"><div className={`${styles.container} ${styles.secretsGrid}`}><div className={styles.secretsCopy}><p className={styles.smallLabel}>Best Digital Marketing Agency in India</p><h2 id="world-secrets-heading">What Makes Capyngen the Best Digital Marketing Agency in India?</h2><p>As a Digital Marketing Agency in India, Matebiz believes in mental muscle, an AI-powered super brain, and performance-based strategy to pull in customers and make the business grow.</p><ul><li>Human Insight + AI Innovation</li><li>Tailored Growth Strategies to Meet Your Business Needs.</li><li>Worldwide Expertise with Knowledge of the Local Market.</li></ul><Link href="/contact-us" className={styles.tealButton}>Contact us <span aria-hidden="true">↗</span></Link></div><div className={styles.postcardArt}><div className={styles.pinkPostcard}><Photo src="/images/application-solutions/hiker.webp" alt="A person overlooking an alpine lake" /><span aria-hidden="true">AI INNOVATION</span></div><div className={styles.couplePostcard}><Photo src="/images/crm-management-software/travel-couple.webp" alt="Two people working out a plan together" /><span aria-hidden="true">worldwide expertise.</span></div><div className={styles.postcardOutline} aria-hidden="true" /></div></div></section>

    <section id="marketing-faq" className={styles.worldwide} aria-labelledby="marketing-faq-heading"><div className={styles.container}><header className={styles.worldwideHeader}><h2 id="marketing-faq-heading">Frequently Asked Questions</h2><p>Result-Driven Marketing Agency roadmap with no sales pressure.</p></header><div className="relative mx-auto mt-10 max-w-[980px] space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[11px] border border-[#f4f5f1] bg-white p-5 shadow-[0_12px_36px_#41532b08] sm:px-7">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-[Georgia,serif] text-lg leading-[1.35] text-[#303633] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f79e72] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#4b8d8d]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f4fcfa] font-sans text-base text-[#4b8d8d] transition-transform group-open:rotate-45">+</span></summary>
      <p className="mt-3 pr-10 text-[13px] leading-[1.7] text-[#91988b]">{faq.answer}</p>
    </details>)}</div></div></section>
  </>;
}
