"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

const industries = [
  {
    label: "Banking & capital markets",
    heading: "Banking and capital markets, reimagined for the AI era",
    description: "From compliance and risk to lending and trading operations, financial institutions face mounting pressure to do more with less. Capyngen brings together data, design, and technology to help banks and capital markets firms simplify operations, sharpen decisions, and accelerate growth. We build secure, scalable platforms that meet regulatory standards — work that positions us among the Top IT Companies for financial services delivery.",
    format: "White paper", resource: "Bank growth accelerated by data intelligence",
    image: "/images/agenda/photo-1486406146926-c627a92ad1ab.jpg", alt: "Glass towers rising above a financial district",
  },
  {
    label: "Retail & e-commerce",
    heading: "Turn everyday shopping into lasting loyalty",
    description: "Retail brands need platforms that handle high traffic, secure payments, and inventory in real time. We build e-commerce systems with mobile-first design, seamless checkout, and integrations that keep operations running smoothly. Our retail work reflects the standards of a leading IT company in India — fast, reliable, and built to scale with seasonal demand.",
    format: "Industry perspective", resource: "Commerce designed around your customers",
    image: "/images/web-development/product.webp", alt: "A thoughtfully styled consumer product",
  },
  {
    label: "Fintech",
    heading: "Secure, high-performance financial technology",
    description: "Fintech companies operate under tight security and compliance requirements while racing to launch new products. Capyngen builds biometric-enabled mobile apps, payment systems, and account management platforms that meet these demands. Our fintech delivery is backed by the engineering depth of a Top IT Company Software team.",
    format: "Report", resource: "Next-gen security and speed in fintech",
    image: "", alt: "",
  },
  {
    label: "Healthcare",
    heading: "Put people at the heart of digital healthcare",
    description: "Hospitals, clinics, and health-tech providers need systems that protect patient data while improving care delivery. We build patient portals, appointment booking systems, records management platforms, and secure communication tools. Healthcare clients trust us as a Best IT Services Provider because we design with privacy and compliance from day one.",
    format: "Industry perspective", resource: "Better digital journeys. More meaningful care.",
    image: "/images/inside-stories/water.webp", alt: "A healthcare professional working securely",
  },
  {
    label: "Logistics & supply chain",
    heading: "Smarter systems for real-time visibility",
    description: "Logistics businesses run on real-time visibility — shipments, routes, inventory, and delivery windows. Capyngen builds analytics dashboards, tracking systems, and route optimisation tools that cut reporting time and improve accuracy. Our logistics solutions are part of the complete Top IT Services and solutions we deliver across India.",
    format: "White paper", resource: "Optimizing global supply chains with data",
    image: "/images/project-showcase/renewasphere.webp", alt: "Modern infrastructure and smart routing",
  },
  {
    label: "Manufacturing",
    heading: "Enterprise-grade automation and control",
    description: "Manufacturers need systems that connect production, inventory, finance, and quality control in one place. We build enterprise-grade ERP platforms, automation tools, and reporting systems that reduce manual work and improve visibility. Manufacturing clients choose Capyngen as one of the Best IT Services companies for enterprise delivery.",
    format: "Report", resource: "Digital transformation for modern factories",
    image: "/images/agenda/photo-1497366754035-f200968a6e72.jpg", alt: "Advanced manufacturing facility layout",
  },
  {
    label: "Education",
    heading: "Scalable learning platforms for the digital age",
    description: "Schools, colleges, and edtech platforms need scalable learning systems that handle video delivery, assessments, and progress tracking. We build learning management systems, student portals, and content platforms designed for reliability at scale. Education clients work with us as a Top IT company in India partner for long-term platform growth.",
    format: "Industry perspective", resource: "Empowering education through robust tech",
    image: "/images/moments/photographer.jpg", alt: "Interactive learning environment",
  },
  {
    label: "Enterprise & cybersecurity",
    heading: "Engineering rigor against modern security threats",
    description: "Large organisations face growing security threats and compliance demands. Capyngen builds security assessment platforms with automated reporting, risk scoring, and compliance tracking. Enterprise clients rely on us for the kind of engineering rigor found at Top software companies.",
    format: "White paper", resource: "Resilient security frameworks for enterprises",
    image: "", alt: "",
  },
];

function TechnologyArtwork() {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="industry-orange" x2="1" y2="1"><stop stopColor="#ff7300" /><stop offset="1" stopColor="#e74200" /></linearGradient>
        <linearGradient id="industry-prism" x2="1" y2=".7"><stop stopColor="#ffb759" stopOpacity=".2" /><stop offset=".43" stopColor="#ffdcac" stopOpacity=".8" /><stop offset=".52" stopColor="white" /><stop offset=".63" stopColor="#a5dce6" stopOpacity=".7" /><stop offset="1" stopColor="#ff7700" stopOpacity=".1" /></linearGradient>
      </defs>
      <path fill="url(#industry-orange)" d="M0 0h320v600H0z" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${-100 + i * 55} -70 L${90 + i * 37} 220 L${5 + i * 52} 650 L${-40 + i * 52} 330 Z`} fill="url(#industry-prism)" stroke="#ffe9ce" strokeOpacity=".3" />)}
      <path d="M60 50 285 480 112 298 175 555Z" fill="url(#industry-prism)" opacity=".85" />
    </svg>
  );
}

function OrangeArrow({ large = false }: { large?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 16 48" className={large ? "h-12 w-4" : "h-5 w-2"}><path d="M0 0 16 24 0 48Z" fill="currentColor" /></svg>;
}

export default function IndustriesWeServe() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const industry = industries[active];

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % industries.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + industries.length) % industries.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = industries.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-[linear-gradient(105deg,#faf4f0_0%,#d9d0c9_85%)] px-5 py-10 text-[#193352] sm:px-8 sm:py-12 lg:px-[4.5%]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)_minmax(0,2fr)] lg:gap-[2%]">
        <div>
          <h2 id="industries-heading" className="text-[clamp(36px,3.5vw,56px)] leading-[.97] font-bold tracking-[-.045em]"><span className="block text-[#ff5000]">INDUSTRIES</span><span className="block text-[#00516b]">WE SERVE</span></h2>
          <div role="tablist" aria-label="Industries we serve" aria-orientation="vertical" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {industries.map((item, index) => (
              <button key={item.label} ref={(node) => { buttons.current[index] = node; }} id={`industry-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls="industry-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => handleKeyDown(event, index)} className={`min-h-11 rounded-full border px-5 py-3 text-left text-[10px] leading-[1.4] tracking-[.045em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00516b] ${active === index ? "border-[#08263a] bg-[linear-gradient(100deg,#ff4d00,#ff7914)] font-bold text-white ring-1 ring-[#08263a]" : "border-[#435973] bg-white/10 text-[#102d49] hover:bg-white/50"}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${active}`} tabIndex={0} className="flex min-w-0 flex-col gap-8 outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#00516b] lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,1.65fr)_minmax(0,2fr)] lg:gap-[3%]">
          <div className="flex flex-col items-start lg:pt-16">
            <h3 className="max-w-[520px] text-[clamp(25px,2vw,32px)] leading-[1.06] font-bold tracking-[-.035em]">{industry.heading}</h3>
            <p className="mt-4 max-w-[540px] text-[16px] leading-[1.42]">{industry.description}</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-1 text-[13px] font-bold tracking-[.045em] text-[#ff5000] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00516b] lg:mt-auto lg:pt-8">LEARN MORE <OrangeArrow /></a>
          </div>
          <a href="#contact" aria-label={`${industry.resource} — contact Capyngen to learn more`} className="group grid min-h-[360px] grid-cols-2 overflow-hidden rounded-[18px] bg-[#374e6b] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00516b] sm:min-h-[440px] lg:min-h-[550px]">
            <div className="flex min-w-0 flex-col items-start px-5 py-6 sm:px-7">
              <span className="text-sm font-bold">{industry.format}</span>
              <div className="mt-auto pt-20">
                <p className="text-[clamp(23px,2vw,32px)] leading-[1.14] font-normal tracking-[-.035em]">{industry.resource}</p>
                <span className="mt-5 block text-[#ff5700] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"><OrangeArrow large /></span>
              </div>
            </div>
            <div className="relative min-h-full overflow-hidden bg-[#07618a]">
              {industry.image ? <Image key={industry.image} src={industry.image} alt={industry.alt} fill sizes="(max-width: 1023px) 50vw, 21vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" /> : <TechnologyArtwork />}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}