import Image from "next/image";
import Link from "next/link";

function Picture({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#e3e4e0] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const focusTiles = [
  { title: "CI/CD Services", subtitle: "Repeatable releases", image: "/images/moments/architecture.jpg", alt: "Historic architecture", style: "sm:row-span-2", overlay: "from-[#aa5cb2]/80 via-transparent to-transparent" },
  { title: "Cloud DevOps Services", subtitle: "Infrastructure as Code", image: "/images/destinations/goreme.webp", alt: "Cappadocia valley", style: "", overlay: "from-[#9b57a8]/75 via-transparent to-transparent" },
  { title: "DevOps Managed Services", subtitle: "Support and Maintenance", image: "/images/moments/travel.jpg", alt: "Colourful coastal town", style: "sm:row-span-2", overlay: "from-[#425bb0]/80 via-transparent to-transparent" },
  { title: "DevOps Consulting Services", subtitle: "Strategy and roadmap", image: "/images/destinations/yosemite.webp", alt: "Open mountain landscape", style: "", overlay: "from-[#9260ae]/75 via-transparent to-transparent" },
  { title: "DevOps Integration Services", subtitle: "Practical build", image: "/images/moments/cafe.jpg", alt: "Colourful café", style: "", overlay: "from-[#8c58ae]/80 via-transparent to-transparent" },
  { title: "DevOps Development Services", subtitle: "Custom tooling", image: "/images/destinations/los-lances.webp", alt: "Coastline", style: "", overlay: "from-[#8c58ae]/80 via-transparent to-transparent" },
];

export function TopDestination() {
  return <section id="devops-focus" aria-labelledby="devops-focus-title" className="bg-[#fffdfd] text-[#26222c]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[720px] lg:px-12 lg:py-20"><div className="text-center"><p className="text-xs font-semibold tracking-[.2em] text-[#a75ea8] uppercase">Our Suite of DevOps Services</p><h2 id="devops-focus-title" className="mt-2 text-[clamp(42px,4.8vw,70px)] leading-none font-bold tracking-[-.055em] text-[#9d4da3] uppercase">Delivery Focus Areas</h2><p className="mt-4 text-sm text-[#9a9299]">From applications available for consumers to enterprise-level systems.</p></div>
    <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 lg:auto-rows-[220px]">{focusTiles.map((tile) => <article key={tile.title} className={`group relative min-w-0 overflow-hidden rounded-[18px] ${tile.style}`}><Picture src={tile.image} alt={tile.alt} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-t ${tile.overlay}`} /><div className="absolute right-4 bottom-4 left-4 text-white"><h3 className="text-xl leading-none font-bold uppercase sm:text-2xl">{tile.title}</h3><p className="mt-1 text-xs text-white/85">{tile.subtitle}</p></div></article>)}</div>
  </div></section>;
}

export function MoreThanProperty() {
  const benefits = ["End-to-End Pipeline Automation", "Infrastructure as Code", "Developer Productivity Focus", "Security Integrated at Every Stage", "Observability by Default", "Continuous Improvement Culture"];
  return <section id="devops-why-capyngen" aria-labelledby="devops-why-title" className="bg-[#fbfbff] text-[#18143a]"><div className="mx-auto grid min-h-[650px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-12"><div className="max-w-[540px]"><p className="text-xs font-bold tracking-[.18em] text-[#8a72df] uppercase">Why Choose Capyngen</p><h2 id="devops-why-title" className="mt-3 text-[clamp(48px,5vw,76px)] leading-[.98] font-bold tracking-[-.065em]">Development Culture Centred on Delivery Success</h2><ul className="mt-8 space-y-3">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm text-[#51516b]"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#9c6bee] text-xs text-white">✓</span>{benefit}</li>)}</ul><Link href="/contact-us" className="mt-9 inline-flex rounded-full bg-[#201655] px-7 py-3 text-sm font-semibold text-white hover:bg-[#39237a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#39237a]">Contact us ↗</Link></div><Picture src="/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" alt="Bright modern living room" className="h-[410px] rounded-[30px] shadow-[0_20px_60px_#33335a15] sm:h-[520px]" /></div></section>;
}

const outcomes = [
  { image: "/images/agenda/photo-1449158743715-0a90ebb6d2d8.jpg", alt: "House surrounded by forest", name: "Faster Software Delivery", detail: "Automated pipelines cut down time-to-market from weeks to hours, meaning you can put features into users' hands a whole lot quicker.", number: "01" },
  { image: "/images/agenda/photo-1600607687920-4e2a09cf159d.jpg", alt: "Open living space", name: "Higher Deployment Confidence", detail: "Automated testing, staged releases and automated rollback take all the fear and risk out of any production release.", number: "02" },
  { image: "/images/agenda/photo-1497366754035-f200968a6e72.jpg", alt: "Modern city interior", name: "Reduced Incident Rate", detail: "Best practices in DevOps, like automated testing, feature flags, and continuous deployments, all help to speed up the delivery process and minimise production issues.", number: "03" },
];

export function OurProperties() {
  return <section id="devops-benefits" aria-labelledby="devops-benefits-title" className="bg-[#e9ebdf] text-[#30372a]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[760px] lg:px-12 lg:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-[820px]"><p className="text-xs font-semibold tracking-[.18em] text-[#7d8b6f] uppercase">Professional DevOps Management</p><h2 id="devops-benefits-title" className="mt-3 font-serif text-[clamp(44px,4.4vw,70px)] leading-none tracking-[-.065em]">What Your Business Benefits From Professional DevOps Management</h2></div><div className="flex max-w-[510px] items-center gap-5"><p className="text-sm leading-[1.6] text-[#788074]">We think of our work in faster releases and quieter weekends.</p><Link href="/contact-us" className="shrink-0 rounded-full border border-[#aeb7a5] px-5 py-2.5 text-xs font-semibold hover:bg-white/50">Contact us ↗</Link></div></div>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{outcomes.map((item) => <article key={item.name} className="grid min-h-[390px] grid-rows-[.9fr_1.1fr] overflow-hidden rounded-[22px] bg-[#d5dcc9]"><div className="flex flex-col justify-between p-6 sm:p-7"><div><span className="text-xs font-semibold tracking-[.12em] text-[#7e8a74]">{item.number}</span><h3 className="mt-3 font-serif text-3xl leading-none">{item.name}</h3><p className="mt-3 text-sm leading-[1.6] text-[#768371]">{item.detail}</p></div></div><Picture src={item.image} alt={item.alt} className="min-h-[210px]" /></article>)}</div>
  </div></section>;
}

const faqs = [
  { question: "What makes Capyngen a reliable DevOps Solutions Services provider?", answer: "Focus on what matters: deployment frequency, failure rate, recovery time. If you use us as a DevOps Service Provider, we're measured not by how many tools we deploy for you but by whether your releases become predictable." },
  { question: "Do you offer both DevOps Consulting Services and hands-on implementation?", answer: "Yes. DevOps assessment and roadmap design are provided by our DevOps Consulting Services, with DevOps build included in our DevOps Implementation Services. You may choose to engage for either or both." },
  { question: "What does your CI/CD Services engagement include?", answer: "Pipeline architecture, Build Automation, test integration, deployment orchestration, rollback strategy. The intention is to get to a CI/CD Services where releases are repeatable and auditable." },
  { question: "How do DevOps Automation Services reduce manual work?", answer: "Automate operational activities that are performed repeatedly, such as provisioning, testing deployment, monitoring triggers, and more. DevOps Automation Services automate those repetitive tasks into code that can be executed automatically." },
  { question: "Can you manage our infrastructure after the pipeline is built?", answer: "Yes. DevOps Managed Services: continuous pipeline maintenance, monitoring, incident management, and continual improvement so that you can concentrate on creating the product." },
  { question: "What are Cloud DevOps Services and why do they matter?", answer: "Clouds are provisioned with code. Your environment is repeatable. Your staging environment is the same as your production environment, and if you have a failure, it's recovered much faster because the configuration is versioned." },
  { question: "Do you provide custom tooling and DevOps Development Services?", answer: "Yes. If there is no ready-to-use solution for your workflow, our DevOps Development Services create customised scripts, plugins, and integrations that work seamlessly with your stack." },
  { question: "How is Capyngen different from large IT firms offering DevOps?", answer: "What we do is offer a narrow DevOps Service Provider (no enterprise governance overhead), faster decision-making, senior engineers provide oversight, and we scope to outcomes, not billable time." },
  { question: "What metrics do you use to measure a DevOps engagement?", answer: "Deployment frequency, change failure rate, mean time to recovery, and lead time for changes. These are the established DevOps measures, and we are monitoring them compared to pre-approved baselines." },
  { question: "How do I start with Capyngen's DevOps Solutions Services?", answer: "Contact us via our website. We will plan a delivery audit to pinpoint your bottlenecks and define a feasible DevOps Solutions plan of action at no cost." },
];

export function DevOpsFaq() {
  return <section id="devops-faq" aria-labelledby="devops-faq-title" className="bg-[#fffcf8] text-[#24221e]"><div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-12 lg:py-20">
    <div><p className="text-xs font-semibold tracking-[.18em] text-[#d98b70] uppercase">Contact us via our website</p><h2 id="devops-faq-title" className="mt-2 text-[clamp(42px,4.4vw,68px)] leading-none font-semibold tracking-[-.06em]">Frequently Asked Questions</h2><div aria-hidden="true" className="mt-8 text-6xl leading-none text-[#eec9b7]">↝</div></div>
    <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[20px] border border-[#e6e2dc] bg-white p-5 sm:px-6">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.45] font-semibold text-[#24221e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d36b50] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#e98165]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e98165] text-base text-white transition-transform group-open:rotate-45">+</span></summary>
      <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#8c8983]">{faq.answer}</p>
    </details>)}</div>
  </div></section>;
}
