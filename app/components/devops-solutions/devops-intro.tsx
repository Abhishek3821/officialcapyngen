import Image from "next/image";
import Link from "next/link";

function Photo({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`relative overflow-hidden bg-[#eee9e3] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

export function DevOpsHero() {
  return <section id="devops-home" aria-labelledby="devops-hero-title" className="relative overflow-hidden bg-[#fffcf8] text-[#24221e]">
    <div aria-hidden="true" className="pointer-events-none absolute -top-48 right-[14%] size-[480px] rounded-full border-[48px] border-[#edf2f5]" />
    <div className="relative mx-auto grid min-h-[660px] max-w-[1500px] items-start gap-10 px-5 pt-4 pb-10 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[.92fr_1.08fr] lg:px-12">
      <div className="max-w-[660px]"><p className="mb-7 text-xs font-semibold tracking-[.18em] text-[#9e8b7d] uppercase">Capyngen / DevOps Solutions</p><h1 id="devops-hero-title" className="text-[clamp(50px,5.7vw,86px)] leading-[.98] font-bold tracking-[-.07em]">DevOps Solutions Where <span className="text-[#e98165]">Delivery</span> Stops Being the Hard Part</h1><p className="mt-6 max-w-[530px] text-base leading-[1.75] text-[#8c8983]">Your engineers build solid code. Deploying it is where it all breaks down. We re-deploy that last mile with automation, so go-to-market no longer needs it to be an event. At our DevOps Service Provider, we think of our work in faster releases and quieter weekends.</p><Link href="#devops-capabilities" className="mt-8 inline-flex rounded-full bg-[#e98165] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_#e9816530] hover:bg-[#d36b50] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d36b50]">Core Capabilities ↗</Link><div aria-hidden="true" className="mt-8 text-6xl leading-none text-[#eec9b7]">↝</div></div>
      <div className="grid h-[430px] grid-cols-3 gap-3 sm:h-[550px] lg:h-[580px]"><Photo src="/images/destinations/nagano.webp" alt="Mountain village in Japan" className="mt-14 h-[76%] rounded-[28px]" /><Photo src="/images/destinations/goreme.webp" alt="Cappadocia valley at dusk" className="h-[88%] rounded-[28px]" /><div className="grid h-full grid-rows-2 gap-3"><Photo src="/images/destinations/swiss-alps.webp" alt="Snowy Alpine peak" className="rounded-[28px]" /><Photo src="/images/destinations/yosemite.webp" alt="Yosemite mountain landscape" className="rounded-[28px]" /></div></div>
    </div>
  </section>;
}

const capabilities = [
  { name: "CI/CD Pipeline Engineering", detail: "Repeatable releases", image: "/images/destinations/yosemite.webp", alt: "Yosemite National Park", id: "devops-cicd" },
  { name: "Cloud Infrastructure as Code", detail: "Cloud DevOps Services", image: "/images/destinations/goreme.webp", alt: "Cappadocia valley", id: "devops-iac" },
  { name: "Monitoring & Observability", detail: "Observability by Default", image: "/images/destinations/swiss-alps.webp", alt: "Swiss Alps", id: "devops-observability" },
  { name: "DevOps Automation Services", detail: "End-to-End Pipeline Automation", image: "/images/destinations/los-lances.webp", alt: "Los Lances Beach", id: "devops-automation" },
];

export function DevOpsCapabilities() {
  return <section id="devops-capabilities" aria-labelledby="devops-capabilities-title" className="bg-[#fffdfb] text-[#252521]">
    <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-20"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-[.18em] text-[#da8d74] uppercase">Faster releases. Quieter weekends.</p><h2 id="devops-capabilities-title" className="mt-2 text-[clamp(42px,4.4vw,68px)] leading-none font-semibold tracking-[-.06em]">Core Capabilities</h2></div><Link href="#devops-process" className="rounded-full border border-[#dedbd5] px-5 py-2.5 text-xs font-semibold hover:bg-[#f4eee9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d98265]">Our Process ↗</Link></div>
      <nav aria-label="Core capabilities" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#85847f]">{capabilities.map((item, index) => <a key={item.id} href={`#${item.id}`} className={index === 0 ? "text-[#e17e60] hover:underline" : "hover:text-[#e17e60] hover:underline"}>{item.name}</a>)}</nav>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => <article id={item.id} key={item.name} className="min-w-0 scroll-mt-28"><Photo src={item.image} alt={item.alt} className="h-[290px] rounded-[20px] sm:h-[330px]" /><h3 className="mt-4 text-lg font-semibold tracking-[-.025em]">{item.name}</h3><p className="mt-1 text-sm text-[#9d9a94]">{item.detail}</p></article>)}</div>
    </div>
  </section>;
}

const steps = [
  { number: "02", title: "Design the Pipeline Architecture", description: "We select the right CI/CD flow, environment strategy and tooling stack for your team and cadence.", image: "/images/moments/travel.jpg", alt: "Colourful coastal town" },
  { number: "03", title: "Build and Automate", description: "We pipeline, link repositories, containerise workloads, and write everything as code so that every release is repeatable.", image: "/images/agenda/photo-1600210492486-724fe5c67fb0.jpg", alt: "Warm contemporary interior" },
  { number: "04", title: "Monitor and Improve", description: "Monitor deployment frequency, failure rate and time to recover and iterate as your system matures.", image: "/images/moments/friends.jpg", alt: "Friends spending time together" },
];

export function DevOpsProcess() {
  return <section id="devops-process" aria-labelledby="devops-process-title" className="bg-[#faf9f7] text-[#242420]"><div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:min-h-[710px] lg:px-12 lg:py-20"><div className="flex items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-[.18em] text-[#d98b70] uppercase">Our Process</p><h2 id="devops-process-title" className="mt-2 text-[clamp(42px,4.4vw,68px)] leading-none font-semibold tracking-[-.06em]">4 Steps From Bottleneck to Reliable Delivery</h2></div><a href="#devops-suite" className="shrink-0 rounded-full border border-[#ddd9d3] px-5 py-2.5 text-xs font-semibold hover:bg-white">Our Suite of DevOps Services ↗</a></div>
    <div className="mt-9 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-12"><article><Photo src="/images/moments/coffee.jpg" alt="Friends sharing a moment over coffee" className="h-[340px] rounded-[20px] sm:h-[440px]" /><p className="mt-6 text-xs font-semibold tracking-[.14em] text-[#dc8e72] uppercase">01</p><h3 className="mt-2 max-w-[700px] text-2xl leading-tight font-semibold sm:text-3xl">Audit the Delivery Friction</h3><p className="mt-3 max-w-[690px] text-sm leading-[1.65] text-[#83817c]">We analyse your pipeline, deployment frequency, and failure trends to identify the specific location of your velocity drains.</p></article>
      <div className="space-y-5">{steps.map((step) => <article key={step.title} className="grid grid-cols-[110px_1fr] gap-4 border-b border-[#e6e2dc] pb-5 sm:grid-cols-[155px_1fr]"><Photo src={step.image} alt={step.alt} className="h-[105px] rounded-[14px] sm:h-[125px]" /><div><p className="text-[11px] font-semibold tracking-[.12em] text-[#dd8d70] uppercase">{step.number}</p><h3 className="mt-2 text-base leading-[1.25] font-semibold sm:text-lg">{step.title}</h3><p className="mt-2 text-xs leading-[1.55] text-[#aaa7a0]">{step.description}</p></div></article>)}</div></div>
  </div></section>;
}

export function DevOpsSuite() {
  const suite = ["DevOps consulting services", "DevOps Professional Services", "DevSecOps services"];
  return <section id="devops-suite" aria-labelledby="devops-suite-title" className="bg-[#fffdfb] text-[#24241f]"><div className="mx-auto grid min-h-[630px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-12">
    <div><p className="text-xs font-semibold tracking-[.18em] text-[#d98b70] uppercase">DevOps Service Provider</p><h2 id="devops-suite-title" className="mt-2 text-[clamp(40px,4.3vw,66px)] leading-none font-semibold tracking-[-.06em]">Our Suite of DevOps Services</h2><div className="mt-8 flex items-center gap-3"><Image src="/images/client-1.jpg" alt="" width={42} height={42} className="size-11 rounded-full object-cover" /><div><p className="text-sm font-semibold">DevOps Service Provider</p><p className="text-xs text-[#a09d96]">Faster releases and quieter weekends</p></div></div><p className="mt-8 max-w-[530px] text-base leading-[1.75] text-[#85817b]">With a wide spectrum of use cases, from applications available for consumers to enterprise-level systems, we have a whole range of DevOps services.</p><ul className="mt-5 space-y-2">{suite.map((item) => <li key={item} className="text-2xl font-semibold tracking-[-.02em]"><span aria-hidden="true" className="mr-3 text-[#e98165]">↝</span>{item}</li>)}</ul><a href="#devops-focus" className="mt-7 inline-flex rounded-full border border-[#ded9d0] px-6 py-3 text-sm font-semibold hover:bg-[#f6f1eb]">Delivery Focus Areas ↗</a></div>
    <div className="grid h-[430px] grid-cols-[1.15fr_.85fr] gap-4 sm:h-[510px]"><Photo src="/images/destinations/goreme.webp" alt="Hot air balloons over Cappadocia" className="rounded-[26px]" /><div className="flex flex-col gap-4"><Photo src="/images/destinations/nagano.webp" alt="Mountain village in Japan" className="min-h-0 flex-1 rounded-[26px]" /><Photo src="/images/destinations/merzouga.webp" alt="Desert landscape at sunset" className="min-h-0 flex-1 rounded-[26px]" /></div></div>
  </div></section>;
}
