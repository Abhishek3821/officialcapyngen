import Image from "next/image";

const imageRoot = "/images/application-solutions";

function Photo({ name, alt, className = "", position = "object-center" }: { name: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#183044] ${className}`}><Image src={name.startsWith("/") ? name : `${imageRoot}/${name}.webp`} alt={alt} fill sizes="(max-width: 1023px) 100vw, 55vw" className={`object-cover ${position}`} /></div>;
}

const heroTags = ["Web", "Mobile", "Scalable", "Custom"];
const processSteps = [
  { icon: "♧", label: "Requirement Analysis" },
  { icon: "◧", label: "UI/UX Design" },
  { icon: "✧", label: "Development & Integration" },
  { icon: "♢", label: "Testing & QA" },
  { icon: "◷", label: "Deployment & Support" },
  { icon: "▤", label: "Optimisation in Permanence" },
];

export function AppLuxuryHero() {
  return <section id="app-solutions-home" aria-labelledby="app-luxury-title" className="relative min-h-[690px] overflow-hidden bg-[#071b2c] text-white lg:min-h-[calc(100svh_-_var(--site-header-height))]">
    <Image src={`${imageRoot}/lake-cabin.webp`} alt="Luxury lakeside chalet at twilight" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061827]/95 via-[#061827]/72 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/45 via-transparent to-transparent" />
    <div className="relative mx-auto flex min-h-[690px] max-w-[1550px] flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-14">
      <div className="max-w-[670px]"><p className="flex items-center gap-2 text-xs font-semibold tracking-[.12em] text-[#f2d18c] uppercase"><span aria-hidden="true">⌖</span> Best Application Solution Company in India</p><h1 id="app-luxury-title" className="mt-7 font-serif text-[clamp(50px,5.6vw,88px)] leading-[1.02] tracking-[-.05em]">Instant Custom Application Solutions <span className="text-[#e9bc69]">– Get India&apos;s #1</span></h1><p className="mt-6 max-w-[530px] text-base leading-[1.7] text-[#d7dfdf]">As the best application development company, we develop scalable custom application solutions that meet your business&apos;s unique requirements, whether on web or mobile.</p><div className="mt-8 flex flex-wrap gap-2">{heroTags.map((item) => <span key={item} className="rounded-md border border-[#d5b479]/40 bg-[#061e2b]/60 px-3 py-2 text-xs text-[#e7d3aa]">{item}</span>)}</div><div className="mt-9 flex flex-wrap items-center gap-6"><a href="#app-contact" className="inline-flex rounded-md bg-[#e8bb67] px-7 py-3.5 text-sm font-semibold text-[#12222a] hover:bg-[#f2cc85] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f2cc85]">Let&apos;s Talk About Your Project →</a><p className="text-sm text-[#d7dfdf]">Whether on web or mobile</p></div><p className="mt-8 text-sm tracking-[.18em] text-[#e8bb67]">★★★★★ <span className="ml-2 tracking-normal text-white/75">Top-Rated Application Solutions Company</span></p></div>
    </div>
  </section>;
}

export function AppWhyUs() {
  return <section id="app-process" aria-labelledby="app-why-title" className="overflow-hidden bg-[#071d31] text-[#f4f2ea]"><div className="mx-auto grid min-h-[700px] max-w-[1550px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-14">
    <div className="max-w-[620px]"><p className="flex items-center gap-4 text-xs font-semibold tracking-[.16em] text-[#e5be75] uppercase"><span className="h-px w-10 bg-[#e5be75]" /> Transparent and well-structured</p><h2 id="app-why-title" className="mt-5 font-serif text-[clamp(42px,4.6vw,72px)] leading-[1.06] tracking-[-.05em]">Our Application Development Process</h2><p className="mt-6 max-w-[510px] text-base leading-[1.7] text-[#a7b6c0]">Our process is transparent and well-structured from start to end to ensure that all application solutions are of the best standards:</p><div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-5">{processSteps.map((item) => <div key={item.label} className="flex items-center gap-3 text-sm text-[#d7e1e3]"><span className="text-xl text-[#e4bb70]">{item.icon}</span>{item.label}</div>)}</div><a href="#app-benefits" className="mt-10 inline-flex rounded-md border border-[#c49a54] px-6 py-3 text-sm font-semibold text-[#f1ca81] hover:bg-[#e1b469]/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f1ca81]">Benefits of Our Application Solutions →</a></div>
    <div className="relative grid min-h-[470px] grid-cols-2 gap-3 sm:min-h-[580px]"><Photo name="lake-cabin" alt="Lakeside chalet and mountains" className="h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1600210492486-724fe5c67fb0.jpg" alt="Contemporary luxury interior" className="mt-20 h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1449844908441-8829872d2607.jpg" alt="Warm modern cabin" className="-mt-20 h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><Photo name="/images/agenda/photo-1600607687920-4e2a09cf159d.jpg" alt="Light filled property" className="h-[260px] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] sm:h-[330px]" /><div aria-hidden="true" className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border-4 border-[#e8bf73] bg-[#071d31]"><span className="-rotate-45 text-3xl text-[#e8bf73]">⌂</span></div></div>
  </div></section>;
}

const offerings = ["Web Application Development", "Mobile Application Development", "Enterprise Application Solutions", "Custom Software Solutions", "AI-Powered Applications"];

export function AppFeaturedGetaway() {
  return <section id="app-offer" aria-labelledby="app-getaway-title" className="relative min-h-[610px] overflow-hidden bg-[#071b2c] text-white"><Image src={`${imageRoot}/lake-cabin.webp`} alt="Evening at a chalet beside an alpine lake" fill sizes="100vw" className="object-cover object-[55%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-[#061a2b]/95 via-[#061a2b]/60 to-[#061a2b]/35" /><div className="relative mx-auto grid min-h-[610px] max-w-[1550px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.7fr] lg:px-14"><div className="max-w-[610px]"><p className="flex items-center gap-4 text-xs font-semibold tracking-[.16em] text-[#e8bd73] uppercase"><span className="h-px w-10 bg-[#e8bd73]" /> We Offer</p><h2 id="app-getaway-title" className="mt-5 font-serif text-[clamp(40px,4.2vw,64px)] leading-[1.04] tracking-[-.05em]">As a Best Application Solution Company in India, We Offer</h2><ul className="mt-7 space-y-3 text-sm text-[#e2e6e4]">{offerings.map((item) => <li key={item}>◇ {item}</li>)}</ul></div><div className="w-full max-w-[390px] justify-self-start rounded-[18px] border border-[#d3bc8b]/30 bg-[#082439]/90 p-7 shadow-[0_25px_60px_#0005] backdrop-blur-md lg:justify-self-end"><p className="text-xs tracking-[.15em] text-[#c7d0cd] uppercase">Top-Rated</p><p className="mt-2 font-serif text-3xl text-[#e9be72]">Application Solutions Company</p><div className="mt-7 grid grid-cols-3 gap-4 border-y border-white/15 py-5 text-center text-xs text-[#d4dfdf]"><span>♧<br />Start-ups</span><span>▣<br />Enterprises</span><span>◈<br />Global brands</span></div><a href="#app-contact" className="mt-6 block rounded-md bg-[#e9bd6c] px-5 py-3 text-center text-sm font-semibold text-[#1c2d31] hover:bg-[#f5d18b]">Let&apos;s Talk About Your Project →</a></div></div>
  </section>;
}

const faqs = [
  { question: "What makes Capyngen the best application solutions company in India?", answer: "We stand out through scalable engineering, transparent processes, and long-term support. As the best application solutions company in India, we create custom applications on web and mobile to address real business challenges, not just make things." },
  { question: "How is Capyngen different from other application development firms?", answer: "Join our happy client base of the most effective application solutions organisations in the USA and become the reason to show some value. Most companies deliver an app and go away. As a top application solutions agency in India, we stay connected throughout the deployment process, optimisations, and ongoing support that keeps your app growing as your business does." },
  { question: "Which industries do you serve?", answer: "We develop solutions for banking, education, healthcare, life sciences, high-tech, and e-commerce. Our leading application delivery team in Gurgaon adjusts to the compliance, security, and user requirements of every industry." },
  { question: "What types of applications do you develop?", answer: "What we help you with as a leading application solutions services provider, we help you with- web applications, mobile apps, enterprise application solutions, custom software solutions, AI-enabled apps." },
  { question: "Do you follow a structured development process?", answer: "Yes. All our projects are structured in 4 phases: requirement analysis, UI/UX design and development, testing, and deployment, tuning and ongoing support. This allows us to deliver a clear project scope from the beginning till the end." },
  { question: "How long does an application development project take?", answer: "What is the estimated timeline? Timelines are dictated by scope. Small web and mobile applications require 8-16 weeks, while enterprise integrations with multiple systems require 3-6 months. We provide you with the detailed timeline before we begin." },
  { question: "Can you integrate our application with existing systems?", answer: "Yes. You can easily boost our applications with third-party software, databases, CRM and ERP. We build integrations before the software leaves the developer's hands, not as an afterthought." },
  { question: "Do you provide support after the application is deployed?", answer: "Yes. We provide evolution with long-term technical care, performance measurement, and regular updates. Ongoing support is a dedicated part of the leading applications solutions and services pledge." },
  { question: "What makes your applications secure and scalable?", answer: "We architect for security-first, test for all functionality and compatibility and design at scale from day one to make sure your app stays up when your user base increases." },
  { question: "How do I get started with Capyngen?", answer: "Let's talk via our contact form. We'll set up a discovery call to gather your needs and determine an achievable development plan. As one of the leading application solutions companies, we begin with your business objectives, not our templates." },
];

export function AppSolutionsFaq() {
  return <section id="app-faq" aria-labelledby="app-faq-title" className="overflow-hidden bg-[#071d31] text-[#f4f2ea]"><div className="mx-auto grid max-w-[1550px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:px-14 lg:py-20">
    <div><p className="flex items-center gap-4 text-xs font-semibold tracking-[.16em] text-[#e5be75] uppercase"><span className="h-px w-10 bg-[#e5be75]" /> Get In Touch</p><h2 id="app-faq-title" className="mt-5 font-serif text-[clamp(42px,4.6vw,72px)] leading-[1.06] tracking-[-.05em]">Frequently Asked Questions</h2></div>
    <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[14px] border border-[#d3bc8b]/25 bg-[#082439]/80 p-5 sm:px-6">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.5] font-semibold text-[#f4f2ea] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1ca81] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#e8bb67]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#c49a54] text-base text-[#f1ca81] transition-transform group-open:rotate-45">+</span></summary>
      <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#a7b6c0]">{faq.answer}</p>
    </details>)}</div>
  </div></section>;
}
