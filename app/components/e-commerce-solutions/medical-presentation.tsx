import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const base = "/images/e-commerce-solutions";

function Photo({ name, alt, className = "", position = "object-center" }: { name: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#e9f4fc] ${className}`}><Image src={`${base}/${name}.webp`} alt={alt} fill sizes="(max-width: 1023px) 100vw, 55vw" className={`object-cover ${position}`} /></div>;
}

function Doodle({ type = "heart", className = "" }: { type?: "heart" | "pulse" | "cross"; className?: string }) {
  if (type === "cross") return <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M29 7h22v22h22v22H51v22H29V51H7V29h22V7Z" fill="#d8efff" stroke="#1768b7" strokeWidth="4" /><path d="M40 17v46M17 40h46" stroke="#70b5e5" strokeWidth="3" /></svg>;
  if (type === "pulse") return <svg className={className} viewBox="0 0 112 90" fill="none" aria-hidden="true"><rect x="5" y="6" width="102" height="76" rx="13" fill="#fff" stroke="#1768b7" strokeWidth="4" /><path d="M15 47h20l9-21 15 42 10-22h27" stroke="#1677ca" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg className={className} viewBox="0 0 104 100" fill="none" aria-hidden="true"><path d="M52 87 15 54C-9 31 19-3 45 20l7 7 7-7c26-23 54 11 30 34L52 87Z" fill="#d2ecff" stroke="#1768b7" strokeWidth="4" /><path d="M17 53h19l9-16 12 30 9-15h21" stroke="#1768b7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return <><p className="text-xs font-bold tracking-[.18em] text-[#3b8cc9] uppercase">{eyebrow}</p><h2 id={id} className="mt-3 text-[clamp(43px,5vw,78px)] leading-[1.02] font-bold tracking-[-.065em] text-[#103c70]">{title}</h2></>;
}

type Point = { lead: string; text: string };

function PlusList({ items }: { items: Point[] }) {
  return <ul className="mt-9 space-y-5">{items.map((item) => <li key={item.lead} className="flex items-start gap-4 text-base leading-[1.55] text-[#5f7890]"><span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-[#1c77c7] text-sm font-bold text-[#1c77c7]">+</span><span><strong className="font-semibold text-[#103c70]">{item.lead}</strong> {item.text}</span></li>)}</ul>;
}

function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-7 text-lg leading-[1.75] text-[#5f7890]">{children}</p>;
}

export function MedicalHero() {
  return <section id="ecommerce-home" aria-labelledby="ecommerce-hero-title" className="relative overflow-hidden bg-[#fbfdff] text-[#0d396c]">
    <div aria-hidden="true" className="absolute -top-40 left-[38%] size-[480px] rounded-full border-[80px] border-[#eaf5fd]" />
    <div className="relative mx-auto grid min-h-[630px] max-w-[1500px] items-start gap-8 px-5 pt-10 pb-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[1fr_1.05fr] lg:px-12">
      <div className="relative z-10"><p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[.12em] text-[#54718d] uppercase"><span className="size-2 bg-[#f1b438]" /><span className="size-2 bg-[#4aa4e5]" /> With Best Ecommerce Solutions Company in India</p><h1 id="ecommerce-hero-title" className="text-[clamp(56px,6vw,102px)] leading-[.94] font-extrabold tracking-[-.07em]">Stores That Convert,<br /><span className="text-[#145bad]">Not Just Load</span></h1><p className="mt-6 text-lg font-medium text-[#496983]">Sharp strategy. Tangible revenue.</p><p className="mt-4 max-w-[510px] text-base leading-[1.7] text-[#6e8498]">International Ecommerce Software Development for shopkeepers quick-lane strategies that combine actual and internet store.</p><Link href="/contact-us" className="mt-10 inline-flex rounded-full bg-[#d7efff] px-6 py-3 text-sm font-semibold text-[#145bad] hover:bg-[#bfe4ff] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#145bad]">Apply For Services ↗</Link></div>
      <div className="relative min-h-[390px] sm:min-h-[500px] lg:min-h-[620px]"><Photo name="hero" alt="Doctor and nurse speaking with a patient" className="absolute inset-0 rounded-[40%_4%_28%_12%]" position="object-[58%_center]" /><Doodle type="pulse" className="absolute -bottom-3 -left-5 w-28 -rotate-12 drop-shadow-lg sm:w-40" /><Doodle type="cross" className="absolute top-[8%] -left-4 w-14 rotate-12" /></div>
    </div>
  </section>;
}

export function MedicalAbout() {
  return <section id="ecommerce-about" aria-labelledby="ecommerce-about-title" className="overflow-hidden bg-[#f3f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
      <div className="relative order-2 min-h-[360px] lg:order-1 lg:min-h-[500px]"><Photo name="team" alt="A diverse medical team in a clinic" className="absolute inset-0 rounded-[40%_25%_34%_12%] shadow-[0_20px_50px_#155f9d18]" position="object-[center_35%]" /><Doodle type="pulse" className="absolute -right-5 -bottom-6 w-28 rotate-12 sm:w-36" /></div>
      <div className="order-1 max-w-[570px] lg:order-2"><SectionTitle eyebrow="Live 99.99% of the time" title="Building Commerce That Outlasts Traffic Spikes" id="ecommerce-about-title" /><p className="mt-7 text-lg leading-[1.75] text-[#5e7890]">Capyngen creates the core of your retail business. As a Best Ecommerce Solutions company in India, all of our solutions stay live 99.99% of the time, even during peak sales. Our cloud-native, headless architecture delivers you the freedom you need, while our data modelling personalises every customer journey.</p><div className="mt-9 flex items-start gap-4 rounded-[24px] border border-[#d7eaf8] bg-white/75 p-5"><Doodle className="w-14 shrink-0" /><div className="space-y-3"><p className="text-base leading-[1.65] text-[#416a8f]">We cater to both B2B Ecommerce Solutions and B2C Ecommerce Solutions, starting from Online Store Development to Custom Ecommerce Development.</p><p className="text-base leading-[1.65] text-[#416a8f]">Best Ecommerce Solutions Company in India. Top Ecommerce Solutions Company in India: Technical execution combined with our &apos;real retail&apos; thinking.</p></div></div></div>
    </div>
  </section>;
}

export function MedicalMission() {
  const items = [
    { lead: "Marketplace Development:", text: "Multi-shop platforms enable faster product growth and revenue diversification." },
    { lead: "Payment Integration:", text: "Global secure gateways support all currency types, crypto, and local payment options." },
    { lead: "B2B Ecommerce Solutions:", text: "For any B2B setup, ecommerce platform development with volume pricing, contracts, and approval workflows." },
    { lead: "Multi-channel architecture:", text: "Inventory, customer, and marketing through all phases." },
  ];
  return <section id="ecommerce-custom" aria-labelledby="ecommerce-custom-title" className="overflow-hidden bg-white">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-12">
      <div className="relative min-h-[330px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="consultation" alt="Healthcare professionals discussing care together" className="absolute inset-0 rounded-[28%_45%_24%_8%]" /><Doodle className="absolute -right-6 bottom-3 w-24 sm:w-32" /></div>
      <div className="max-w-[540px]"><SectionTitle eyebrow="Custom Ecommerce Development" title="Where Custom Ecommerce Development Actually Pays Off" id="ecommerce-custom-title" /><PlusList items={items} /><div className="mt-9 h-1 w-24 rounded-full bg-[#1c77c7]" /></div>
    </div>
  </section>;
}

export function MedicalVision() {
  const items = [
    { lead: "Process Enhancement:", text: "Automate it! Less work, more opportunity." },
    { lead: "Data-Driven Decisions:", text: "Live dashboards displaying inventory, pricing, and seller performance." },
    { lead: "Scalable Infrastructure:", text: "Scalable infrastructure grows with you, so scaling up never means starting from scratch." },
    { lead: "Risk & Compliance Management:", text: "Maintain a safe and compliant business around the globe." },
  ];
  return <section id="ecommerce-strategy" aria-labelledby="ecommerce-strategy-title" className="overflow-hidden bg-[#f3f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-12">
      <div className="max-w-[520px]"><SectionTitle eyebrow="Sharp strategy" title="Strategy That Keeps Commerce Moving" id="ecommerce-strategy-title" /><PlusList items={items} /><div className="mt-9 flex gap-3"><Doodle type="cross" className="w-12" /><Doodle type="pulse" className="w-16" /></div></div>
      <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="hands" alt="Healthcare professionals and patient showing support together" className="absolute inset-0 rounded-[43%_10%_34%_27%]" position="object-[center_70%]" /><Doodle type="cross" className="absolute -bottom-5 -left-5 w-16" /></div>
    </div>
  </section>;
}

export function MedicalWhatWeDo() {
  const items = [
    { lead: "Multiple Vendor Platform Layout:", text: "Ecommerce Development Services to support multiple vendors." },
    { lead: "Order & Inventory Management:", text: "Precise inventory and order tracking at all sources." },
    { lead: "Explorer and Discovery:", text: "Boost the experience by helping your customers efficiently discover and explore. Smart search, filters, and recommendations so that buyers find what they are looking for." },
    { lead: "Digital Platform Analytics:", text: "Visibility into sales, performance, and consumer behaviour." },
  ];
  return <section id="ecommerce-marketplace" aria-labelledby="ecommerce-marketplace-title" className="overflow-hidden bg-white">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-12">
      <div className="max-w-[560px]"><SectionTitle eyebrow="Marketplace Development" title="Marketplace Development Built to Scale" id="ecommerce-marketplace-title" /><PlusList items={items} /></div>
      <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="care" alt="Healthcare worker supporting an older adult" className="absolute inset-0 rounded-[36%_28%_15%_34%]" position="object-[center_35%]" /><Doodle className="absolute -bottom-7 -left-5 w-24 -rotate-12" /></div>
    </div>
  </section>;
}

export function MedicalConnections() {
  const items = [
    { lead: "Custom Ecommerce Solution:", text: "Online stores designed for your business, with Ecommerce Web Design that sells." },
    { lead: "New Systems Accessibility:", text: "Manage huge order volume and traffic while ensuring you are never unable to access your new system." },
    { lead: "Payment & System Integrations:", text: "Integrate with gateways and backend systems." },
    { lead: "Worldwide E-commerce Solutions:", text: "Reassuring Ecommerce Website Improvement throughout markets." },
  ];
  return <section id="ecommerce-why-capyngen" aria-labelledby="ecommerce-why-title" className="overflow-hidden bg-[#f2f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-16 lg:px-12">
      <div className="max-w-[540px]"><SectionTitle eyebrow="Ecommerce Development Company" title="Why Capyngen Wins on Ecommerce Website Development in India" id="ecommerce-why-title" /><Lead>A trusted Ecommerce Development Company delivering Custom Ecommerce Development globally.</Lead><PlusList items={items} /><Doodle type="pulse" className="mt-9 w-20" /></div>
      <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[510px] lg:translate-x-8 xl:translate-x-14"><Photo name="senior-care" alt="Older adult speaking with a healthcare worker outdoors" className="absolute inset-0 rounded-[38%_30%_28%_12%]" position="object-[center_40%]" /><Doodle className="absolute -bottom-5 -left-6 w-20" /></div>
    </div>
  </section>;
}

export function MedicalCampaigns() {
  return <section id="ecommerce-b2b-b2c" aria-labelledby="ecommerce-b2b-title" className="overflow-hidden bg-white">
    <div className="mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-center gap-9 px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative h-[290px] sm:h-[370px] lg:h-[430px]"><Photo name="team" alt="Healthcare team ready to connect with their community" className="absolute inset-0 rounded-[28%_26%_17%_14%]" position="object-[center_44%]" /><Doodle className="absolute -right-5 bottom-0 w-20 sm:w-28" /></div>
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><SectionTitle eyebrow="Designed for growth. Evaluated for proof." title="B2B, B2C, and Everything Between" id="ecommerce-b2b-title" /></div><p className="max-w-[690px] text-lg leading-[1.75] text-[#5f7890]">A wholesale portal with tiered pricing and quote approvals isn&apos;t the same as a D2C brand selling impulse buys on Instagram. We build both, and we build them differently, because the buyer is different. Our commerce engines scale to your model, instead of requiring you to scale to them.</p></div>
    </div>
  </section>;
}

export function MedicalImpact() {
  const points = ["Curious to learn how we can help you grow with Capyngen? Reach out to us to help you set up the right system for your ideas and e-commerce solution services, with post-delivery assistance.", "Have a question? Schedule a call with one of our experts for 15 minutes."];
  return <section id="ecommerce-apply" aria-labelledby="ecommerce-apply-title" className="overflow-hidden bg-[#f1f8fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:px-12">
      <div className="max-w-[560px]"><SectionTitle eyebrow="Post-delivery assistance" title="Apply For Services" id="ecommerce-apply-title" /><ul className="mt-9 space-y-5">{points.map((item) => <li key={item} className="flex items-start gap-4 text-base leading-[1.6] text-[#5f7890]"><span className="mt-2 size-2 shrink-0 rounded-full bg-[#1c77c7]" />{item}</li>)}</ul><Link href="/contact-us" className="mt-10 inline-flex rounded-full bg-[#155eac] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c4f98] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#155eac]">Schedule a call ↗</Link></div>
      <div className="relative min-h-[350px] sm:min-h-[430px] lg:min-h-[510px]"><Photo name="care" alt="Healthcare worker supporting an older adult" className="absolute inset-0 rounded-[40%_15%_28%_23%]" position="object-[center_65%]" /><Doodle type="cross" className="absolute -bottom-4 -left-4 w-16 -rotate-12" /></div>
    </div>
  </section>;
}

const faqs = [
  { question: "What makes Capyngen the Best Ecommerce Solutions company in India?", answer: "We design our commerce systems based on revenue results, not product launches. As a Best Ecommerce Solutions in India company, our reference points for success come down to conversion rate, average order size and repeat purchase rate. They all impact your results." },
  { question: "How is Capyngen different from a Top Ecommerce Solutions company in India?", answer: "What makes a top ecommerce solution company in India? The Ecommerce solution company in India should be able to offer a lot more than just a working shop. We blend Ecommerce Development Services with revenue-oriented architecture, building every technical aspect around a business goal." },
  { question: "Which commerce models do you support?", answer: "Solution example: B2B Ecommerce with tiered pricing, account hierarchy; B2C Ecommerce with personalised user experience; loyalty Ecommerce Solutions. Commercial Ecommerce Companies that want to power a website, storefront, or online application. With Ecommerce Development Company, you choose the architecture and not the other way around." },
  { question: "What is included in your Ecommerce Website Development process?", answer: "Diagnostic audit, platform selection, storefront build, payment and ERP integration, QA and post-launch improvement. Each step has quantifiable milestones. That's Ecommerce Website Development with transparency and responsibility." },
  { question: "Do you offer Ecommerce Website Design separately?", answer: "Yes. Our Ecommerce Website Design engagement is only UX and conversion improvement-driven, and does not include creating or rebuilding any backend if your store is working but not converting." },
  { question: "How long does Ecommerce Platform Development take?", answer: "A targeted storefront may ship in 6-10 weeks. Custom Ecommerce Development projects that are complex marketplace solutions, B2B portals with deep ERP integration generally take anywhere from 3-6 months." },
  { question: "What does Ecommerce Software Development cover?", answer: "Custom modules, admin dashboards, inventory logic, pricing engines, workflow automation — everything you need for your unique commerce operation. Ecommerce Software Development that is built for your business, not for a template." },
  { question: "Can you handle both B2B Ecommerce Solutions and B2C Ecommerce Solutions?", answer: "Yes. We create wholesale portals with quoting and tiered pricing, plus consumer storefronts with customisation and loyalty features. One team, two commerce worlds." },
  { question: "What does Online Store Development include at Capyngen?", answer: "End-to-end Online Store Development: from architecture and front-end build to checkout speed tuning, payment, and go-live support built for speed and conversion." },
  { question: "How can I get started with the Best Ecommerce Solutions Company in India for my business?", answer: "Let us know on our website. We will set up a free discovery call to identify your commerce gaps and tailor a Custom Ecommerce Development plan for you; no commitment required." },
];

export function EcommerceFaq() {
  return <section id="ecommerce-faq" aria-labelledby="ecommerce-faq-title" className="overflow-hidden bg-white">
    <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:px-12">
      <div className="max-w-[540px]"><SectionTitle eyebrow="Have a question?" title="Frequently Asked Questions" id="ecommerce-faq-title" /><Doodle type="pulse" className="mt-9 w-20" /></div>
      <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[24px] border border-[#d7eaf8] bg-[#f3f9fe] p-5 sm:px-6">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.5] font-semibold text-[#103c70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#145bad] [&::-webkit-details-marker]:hidden"><span>Q{index + 1}. {faq.question}</span><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#1c77c7] text-sm font-bold text-[#1c77c7] transition-transform group-open:rotate-45">+</span></summary>
        <p className="mt-3 pr-10 text-base leading-[1.65] text-[#5f7890]">{faq.answer}</p>
      </details>)}</div>
    </div>
  </section>;
}
