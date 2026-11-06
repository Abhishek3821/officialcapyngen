import Image from "next/image";
import Link from "next/link";

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

export function MedicalHero() {
  return <section id="medical-home" aria-labelledby="medical-hero-title" className="relative overflow-hidden bg-[#fbfdff] text-[#0d396c]">
    <div aria-hidden="true" className="absolute -top-40 left-[38%] size-[480px] rounded-full border-[80px] border-[#eaf5fd]" />
    <div className="relative mx-auto grid min-h-[630px] max-w-[1500px] items-start gap-8 px-5 pt-10 pb-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[1fr_1.05fr] lg:px-12">
      <div className="relative z-10"><p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[.12em] text-[#54718d] uppercase"><span className="size-2 bg-[#f1b438]" /><span className="size-2 bg-[#4aa4e5]" /> Capyngen Healthcare</p><h1 id="medical-hero-title" className="text-[clamp(56px,6vw,102px)] leading-[.94] font-extrabold tracking-[-.07em]">Medical<br /><span className="text-[#145bad]">Presentation</span></h1><p className="mt-6 text-lg font-medium text-[#496983]">Clear information. Real impact.</p><p className="mt-4 max-w-[510px] text-base leading-[1.7] text-[#6e8498]">Digital experiences that help healthcare teams communicate, connect, and care.</p><Link href="/contact-us" className="mt-10 inline-flex rounded-full bg-[#d7efff] px-6 py-3 text-sm font-semibold text-[#145bad] hover:bg-[#bfe4ff] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#145bad]">Start a conversation ↗</Link></div>
      <div className="relative min-h-[390px] sm:min-h-[500px] lg:min-h-[620px]"><Photo name="hero" alt="Doctor and nurse speaking with a patient" className="absolute inset-0 rounded-[40%_4%_28%_12%]" position="object-[58%_center]" /><Doodle type="pulse" className="absolute -bottom-3 -left-5 w-28 -rotate-12 drop-shadow-lg sm:w-40" /><Doodle type="cross" className="absolute top-[8%] -left-4 w-14 rotate-12" /></div>
    </div>
  </section>;
}

export function MedicalAbout() {
  return <section id="medical-about" aria-labelledby="medical-about-title" className="overflow-hidden bg-[#f3f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
      <div className="relative order-2 min-h-[360px] lg:order-1 lg:min-h-[500px]"><Photo name="team" alt="A diverse medical team in a clinic" className="absolute inset-0 rounded-[40%_25%_34%_12%] shadow-[0_20px_50px_#155f9d18]" position="object-[center_35%]" /><Doodle type="pulse" className="absolute -right-5 -bottom-6 w-28 rotate-12 sm:w-36" /></div>
      <div className="order-1 max-w-[570px] lg:order-2"><SectionTitle eyebrow="Who we are" title="About Us" id="medical-about-title" /><p className="mt-7 text-lg leading-[1.75] text-[#5e7890]">Capyngen creates digital experiences that make healthcare information easier to understand and act on. We bring strategy, design, and technology together to support the people behind every interaction.</p><div className="mt-9 flex items-start gap-4 rounded-[24px] border border-[#d7eaf8] bg-white/75 p-5"><Doodle className="w-14 shrink-0" /><p className="text-base leading-[1.65] text-[#416a8f]">Thoughtful communication for patients, professionals, and the communities they serve.</p></div></div>
    </div>
  </section>;
}

export function MedicalMission() {
  return <section id="medical-mission" aria-labelledby="medical-mission-title" className="overflow-hidden bg-white">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-12">
      <div className="relative min-h-[330px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="consultation" alt="Healthcare professionals discussing care together" className="absolute inset-0 rounded-[28%_45%_24%_8%]" /><Doodle className="absolute -right-6 bottom-3 w-24 sm:w-32" /></div>
      <div className="max-w-[540px]"><SectionTitle eyebrow="What drives us" title="Our Mission" id="medical-mission-title" /><p className="mt-7 text-lg leading-[1.75] text-[#5f7890]">We turn complex health information into clear, helpful content so people everywhere can make confident choices about their well-being.</p><div className="mt-9 h-1 w-24 rounded-full bg-[#1c77c7]" /></div>
    </div>
  </section>;
}

export function MedicalVision() {
  return <section id="medical-vision" aria-labelledby="medical-vision-title" className="overflow-hidden bg-[#f3f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-12">
      <div className="max-w-[520px]"><SectionTitle eyebrow="Where we are headed" title="Our Vision" id="medical-vision-title" /><p className="mt-7 text-lg leading-[1.75] text-[#5f7890]">To become a trusted digital partner for healthcare organizations, connecting people with knowledge, care, and support when they need it most.</p><div className="mt-9 flex gap-3"><Doodle type="cross" className="w-12" /><Doodle type="pulse" className="w-16" /></div></div>
      <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="hands" alt="Healthcare professionals and patient showing support together" className="absolute inset-0 rounded-[43%_10%_34%_27%]" position="object-[center_70%]" /><Doodle type="cross" className="absolute -bottom-5 -left-5 w-16" /></div>
    </div>
  </section>;
}

export function MedicalWhatWeDo() {
  const items = ["Create clear videos, articles, and graphics about health topics.", "Run online campaigns that promote better habits.", "Build interactive tools and training for health workers."];
  return <section id="medical-work" aria-labelledby="medical-work-title" className="overflow-hidden bg-white">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-12">
      <div className="max-w-[560px]"><SectionTitle eyebrow="How we help" title="What We Do" id="medical-work-title" /><ul className="mt-9 space-y-5">{items.map((item) => <li key={item} className="flex items-start gap-4 text-base leading-[1.55] text-[#5f7890]"><span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-[#1c77c7] text-sm font-bold text-[#1c77c7]">+</span>{item}</li>)}</ul></div>
      <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-[500px]"><Photo name="care" alt="Healthcare worker supporting an older adult" className="absolute inset-0 rounded-[36%_28%_15%_34%]" position="object-[center_35%]" /><Doodle className="absolute -bottom-7 -left-5 w-24 -rotate-12" /></div>
    </div>
  </section>;
}

export function MedicalConnections() {
  return <section id="medical-connections" aria-labelledby="medical-connections-title" className="overflow-hidden bg-[#f2f9fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-16 lg:px-12">
      <div className="max-w-[540px]"><SectionTitle eyebrow="Turning ideas into everyday help" title="Health Content That Connects" id="medical-connections-title" /><p className="mt-7 text-lg leading-[1.75] text-[#5f7890]">We create digital stories, practical guides, and easy-to-use tools that make health information clear, interesting, and relevant for everyday people.</p><Doodle type="pulse" className="mt-9 w-20" /></div>
      <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[510px] lg:translate-x-8 xl:translate-x-14"><Photo name="senior-care" alt="Older adult speaking with a healthcare worker outdoors" className="absolute inset-0 rounded-[38%_30%_28%_12%]" position="object-[center_40%]" /><Doodle className="absolute -bottom-5 -left-6 w-20" /></div>
    </div>
  </section>;
}

export function MedicalCampaigns() {
  return <section id="medical-campaigns" aria-labelledby="medical-campaigns-title" className="overflow-hidden bg-white">
    <div className="mx-auto flex min-h-[610px] max-w-[1500px] flex-col justify-center gap-9 px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative h-[290px] sm:h-[370px] lg:h-[430px]"><Photo name="team" alt="Healthcare team ready to connect with their community" className="absolute inset-0 rounded-[28%_26%_17%_14%]" position="object-[center_44%]" /><Doodle className="absolute -right-5 bottom-0 w-20 sm:w-28" /></div>
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><SectionTitle eyebrow="Messages that make a difference" title="Digital Campaigns for Everyone" id="medical-campaigns-title" /></div><p className="max-w-[690px] text-lg leading-[1.75] text-[#5f7890]">From social well-being to healthy habits, our campaigns meet real needs and reach people where they are, with messages that inspire action.</p></div>
    </div>
  </section>;
}

export function MedicalImpact() {
  const points = ["Ideas that help people understand their health.", "Clearer communication across care teams.", "Campaigns designed for communities, not just screens."];
  return <section id="medical-impact" aria-labelledby="medical-impact-title" className="overflow-hidden bg-[#f1f8fe]">
    <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:px-12">
      <div className="max-w-[560px]"><SectionTitle eyebrow="Stories that stick. Results that matter." title="Our Impact" id="medical-impact-title" /><ul className="mt-9 space-y-5">{points.map((item) => <li key={item} className="flex items-start gap-4 text-base leading-[1.6] text-[#5f7890]"><span className="mt-2 size-2 shrink-0 rounded-full bg-[#1c77c7]" />{item}</li>)}</ul><Link href="/contact-us" className="mt-10 inline-flex rounded-full bg-[#155eac] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c4f98] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#155eac]">Let&apos;s work together ↗</Link></div>
      <div className="relative min-h-[350px] sm:min-h-[430px] lg:min-h-[510px]"><Photo name="care" alt="Healthcare worker supporting an older adult" className="absolute inset-0 rounded-[40%_15%_28%_23%]" position="object-[center_65%]" /><Doodle type="cross" className="absolute -bottom-4 -left-4 w-16 -rotate-12" /></div>
    </div>
  </section>;
}
