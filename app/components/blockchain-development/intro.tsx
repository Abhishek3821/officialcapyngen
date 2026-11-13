import Image from "next/image";
import Link from "next/link";

const base = "/images/blockchain-development";

function Photo({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-[#d9decf] ${className}`}><Image src={src.startsWith("/") ? src : `${base}/${src}.webp`} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

const mosaic = [
  { src: "therapy", alt: "Supportive conversation", className: "col-span-2 row-span-2" },
  { src: "portrait", alt: "Thoughtful portrait", className: "col-span-2 row-span-2 translate-y-12" },
  { src: "/images/e-commerce-solutions/care.webp", alt: "Compassionate support", className: "col-span-2 row-span-2" },
  { src: "/images/e-commerce-solutions/consultation.webp", alt: "People talking together", className: "col-span-2 row-span-2 translate-y-9" },
  { src: "portrait", alt: "Calm reflection", className: "col-span-2 row-span-2 -translate-y-5" },
  { src: "therapy", alt: "Listening with care", className: "col-span-2 row-span-2 translate-y-8" },
  { src: "/images/e-commerce-solutions/team.webp", alt: "A supportive team", className: "col-span-2 row-span-2 -translate-y-6" },
  { src: "/images/e-commerce-solutions/senior-care.webp", alt: "Connection in everyday life", className: "col-span-2 row-span-2 translate-y-5" },
];

export function BlockchainHero() {
  return <section id="blockchain-home" aria-labelledby="blockchain-hero-title" className="relative overflow-hidden bg-[#142c20] text-[#f0efe5]">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#34554265,transparent_55%)]" />
    <div className="relative mx-auto flex min-h-[720px] max-w-[1500px] flex-col items-center px-5 pt-0 pb-24 text-center sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-12">
      <p className="text-[11px] font-semibold tracking-[.26em] text-[#b3cda4] uppercase">Capyngen · Blockchain Development</p>
      <h1 id="blockchain-hero-title" className="mt-5 max-w-[860px] text-[clamp(48px,6.4vw,92px)] leading-[.98] font-semibold tracking-[-.065em]">Developing Custom Blockchain Solutions That Perform at Scale</h1>
      <p className="mt-5 max-w-[650px] text-sm leading-[1.7] text-[#becabf] sm:text-base">Your Trusted Partner for building and Scaling Web3 with security and Customization.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact-us" className="rounded-full bg-[#c4ca6b] px-6 py-3 text-sm font-semibold text-[#1c301f] transition-colors hover:bg-[#e0e58b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#e0e58b]">Get in touch ↗</Link><a href="#blockchain-process" className="rounded-full border border-[#a7bdab]/40 px-6 py-3 text-sm font-medium text-[#eef3e7] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">Blockchain Development Process ↗</a></div>
      <div className="relative mt-14 grid w-full max-w-[1120px] grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3 lg:h-[360px]">{mosaic.map((item, index) => <Photo key={index} src={item.src} alt={item.alt} className={`h-32 rounded-[12px] sm:h-[190px] lg:h-[200px] ${item.className}`} position={index % 3 === 0 ? "object-[55%_center]" : "object-center"} />)}</div>
    </div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#142c20] to-transparent" />
  </section>;
}

const useCases = ["Interoperability solutions", "Micropayment infrastructure and protocols", "Solver network design and implementation", "Exchange settlement systems", "Banking settlement infrastructure", "Retail payment and settlement systems"];

export function BlockchainVision() {
  return <section id="blockchain-use-cases" aria-labelledby="blockchain-vision-title" className="overflow-hidden bg-[#f4f0e9] text-[#454d3b]">
    <div className="mx-auto grid min-h-[620px] max-w-[1500px] lg:grid-cols-[1.02fr_.98fr]">
      <div className="relative min-h-[350px] lg:min-h-[620px]"><Photo src="botanical" alt="Botanical flat lay with coffee and leaves" className="absolute inset-0 rounded-br-[42%] lg:rounded-br-[38%]" position="object-[50%_center]" /><div aria-hidden="true" className="absolute right-0 bottom-0 size-28 rounded-tl-full border-t-[18px] border-l-[18px] border-[#53664b] sm:size-44" /></div>
      <div className="flex flex-col justify-between"><div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24"><p className="text-xs tracking-[.22em] text-[#8b8b78] uppercase">02 / Built for adoption</p><h2 id="blockchain-vision-title" className="mt-7 font-serif text-[clamp(56px,6vw,96px)] leading-none tracking-[-.07em]">Prominent Blockchain Use Cases</h2><p className="mt-7 max-w-[530px] font-serif text-xl leading-[1.55] text-[#777e6c] sm:text-2xl">Capyngen&apos;s use-case-led build ensures the blockchain is built for adoption.</p><ul className="mt-7 max-w-[530px] space-y-2 border-t border-[#d9d3c6] pt-6">{useCases.map((item) => <li key={item} className="flex gap-3 text-base leading-[1.5] text-[#5d6553]"><span aria-hidden="true" className="text-[#53664b]">✳</span>{item}</li>)}</ul></div><div className="flex justify-between bg-[#b49b83] px-6 py-5 text-xs tracking-[.12em] text-white/90 sm:px-12"><span>CAPYNGEN / BLOCKCHAIN DEVELOPMENT</span><span>02</span></div></div>
    </div>
  </section>;
}

const steps = ["Discovery, Research and ideas", "Architecture & Prototype Design", "Smart Contracts & Core Development", "Integration & Testing", "Deployment & Post-Implementation Support"];

export function BlockchainPricing() {
  return <section id="blockchain-process" aria-labelledby="blockchain-pricing-title" className="overflow-hidden bg-[#f8f6f0] text-[#4b5142]">
    <div className="mx-auto grid min-h-[630px] max-w-[1500px] gap-9 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14 lg:px-12">
      <div className="grid h-[420px] grid-cols-[1.15fr_.85fr] grid-rows-2 gap-3 sm:h-[530px]"><Photo src="botanical" alt="Leaves, coffee, and paper textures" className="row-span-2 rounded-[4px]" position="object-[40%_center]" /><Photo src="serum" alt="Amber glass bottle among green leaves" className="rounded-[4px]" /><div className="relative overflow-hidden rounded-[4px] bg-[#d5dacd]"><Photo src="botanical" alt="Sage botanical detail" className="absolute inset-0" position="object-[12%_center]" /></div></div>
      <div className="max-w-[560px] text-center lg:mx-auto"><p className="text-xs tracking-[.22em] text-[#989884] uppercase">03 / From idea to long-term production</p><h2 id="blockchain-pricing-title" className="mt-5 font-serif text-[clamp(48px,4.6vw,72px)] leading-none tracking-[-.07em]">Capyngen Blockchain Development Process</h2><p className="mt-7 font-serif text-xl leading-[1.55] text-[#818675] sm:text-2xl">Capyngen blockchain development way is an integrated journey from idea to long-term production.</p><ol className="mt-7 space-y-2 text-left font-serif text-lg text-[#5f6553]">{steps.map((step, index) => <li key={step} className="flex gap-4 border-b border-[#e0ddd2] pb-2"><span className="text-[#596b4b]">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol><Link href="/contact-us" className="mt-9 inline-flex bg-[#596b4b] px-8 py-3 text-xs font-semibold tracking-[.16em] text-white uppercase hover:bg-[#3f523b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#596b4b]">Get in touch ↗</Link></div>
    </div>
  </section>;
}

export function BlockchainMoodboard() {
  return <section id="blockchain-moodboard" aria-labelledby="blockchain-moodboard-title" className="overflow-hidden bg-[#eeeae3] text-[#4e5d47]">
    <div className="mx-auto grid min-h-[640px] max-w-[1600px] grid-cols-2 gap-2 p-3 sm:grid-cols-4 lg:grid-cols-[1fr_.7fr_1.8fr_.8fr] lg:gap-3 lg:p-6">
      <div className="grid gap-2 lg:grid-rows-[1.3fr_.7fr]"><Photo src="botanical" alt="Botanical leaves on warm paper" className="min-h-[200px]" position="object-[15%_center]" /><Photo src="serum" alt="Amber glass and green leaves" className="min-h-[140px]" position="object-[30%_center]" /></div>
      <div className="flex min-h-[350px] flex-col items-center justify-center bg-[#596e53] px-4 text-center text-white"><span className="text-4xl">✳</span><h2 id="blockchain-moodboard-title" className="mt-9 max-w-[230px] text-2xl leading-tight font-semibold uppercase">Top Blockchain Development Company in India</h2><p className="mt-5 text-xs leading-[1.6] text-white/70">Your Trusted Partner for building and Scaling Web3 with security and Customization.</p></div>
      <div className="grid gap-2 lg:grid-rows-[1.35fr_.65fr]"><Photo src="serum" alt="Premium amber bottle in natural light" className="min-h-[220px]" /><Photo src="fashion" alt="Contemporary fashion portrait" className="min-h-[150px]" position="object-[center_28%]" /></div>
      <div className="grid gap-2 lg:grid-rows-[.8fr_1.2fr]"><div className="flex min-h-[145px] items-center justify-center bg-[#ece8df] px-4 text-center font-serif text-3xl italic">Built for adoption</div><Photo src="botanical" alt="Coffee and botanical styling" className="min-h-[200px]" position="object-[80%_center]" /></div>
    </div>
  </section>;
}

export function BlockchainServices() {
  const services = [
    { number: "01", title: "Blockchain Strategy & Use-Case Validation", description: "We distinguish real opportunities from the latest craze." },
    { number: "02", title: "Smart Contract Engineering", description: "Designing, developing, and testing electronically executed agreements." },
    { number: "03", title: "Platform Integration & Migration", description: "Link distributed ledger features to your CRM, ERP, and operational applications." },
  ];
  return <section id="blockchain-services" aria-labelledby="blockchain-services-title" className="overflow-hidden bg-[#f7f5ef] text-[#4b5644]">
    <div className="mx-auto grid min-h-[650px] max-w-[1500px] lg:grid-cols-[.65fr_1.35fr_.8fr]">
      <Photo src="botanical" alt="Green foliage and soft natural styling" className="min-h-[280px]" position="object-[14%_center]" />
      <div className="px-6 py-14 sm:px-12 lg:px-16 lg:py-20"><p className="text-xs tracking-[.22em] text-[#a48f68] uppercase">05 / Production, not demos</p><h2 id="blockchain-services-title" className="mt-4 font-serif text-[clamp(48px,4.6vw,72px)] leading-none tracking-[-.07em]">Services Built for Production, Not Demos</h2><div className="mt-10 space-y-7">{services.map((service) => <article key={service.number} className="grid grid-cols-[68px_1fr] gap-5 border-b border-[#d9dbd0] pb-6"><span className="flex size-14 items-center justify-center rounded-full bg-[#a98b52] font-serif text-2xl text-white">{service.number}</span><div><h3 className="text-xl font-semibold">{service.title}</h3><p className="mt-2 max-w-[430px] text-sm leading-[1.65] text-[#828b7b]">{service.description}</p></div></article>)}</div></div>
      <Photo src="serum" alt="Amber bottle and fresh leaves" className="min-h-[320px]" position="object-[50%_center]" />
    </div>
    <div className="mx-auto flex max-w-[1500px] justify-between px-6 py-4 text-[11px] tracking-[.12em] text-[#8c9787] sm:px-12"><span>CAPYNGEN / BLOCKCHAIN DEVELOPMENT</span><span>05</span></div>
  </section>;
}
