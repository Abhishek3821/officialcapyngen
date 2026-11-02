"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

const industries = [
  {
    label: "Banking & capital markets",
    heading: "Banking and capital markets, reimagined for the AI era",
    description: "From compliance and risk to lending and trading operations, financial institutions face mounting pressure to do more with less. Capyngen brings together data, design and technology to help banks and capital markets firms simplify operations, sharpen decisions and accelerate growth.",
    format: "White paper", resource: "Bank growth accelerated by data intelligence",
    image: "/images/agenda/photo-1486406146926-c627a92ad1ab.jpg", alt: "Glass towers rising above a financial district",
  },
  {
    label: "Business & tech services",
    heading: "Turn technology investments into business results",
    description: "Growth depends on more than new tools. Capyngen combines industry understanding, thoughtful design and intelligent engineering to help business and technology services organizations improve performance, unlock efficiency and create lasting competitive advantage.",
    format: "Report", resource: "From AI adoption to enterprise advantage",
    image: "", alt: "",
  },
  {
    label: "Communications, media & entertainment",
    heading: "Create connections that keep audiences coming back",
    description: "Bring content, customers and technology closer together. We build responsive digital experiences and connected platforms that help media and communications businesses reach new audiences, personalize engagement and turn attention into lasting relationships.",
    format: "Industry perspective", resource: "Connected experiences. Lasting audience relationships.",
    image: "/images/moments/photographer.jpg", alt: "A photographer creating visual content outdoors",
  },
  {
    label: "Energy & infrastructure",
    heading: "Build a smarter foundation for a sustainable future",
    description: "Connect complex operations with clear, accessible technology. From digital service platforms to data-driven workflows, we help energy and infrastructure teams improve visibility, streamline everyday processes and deliver better experiences for the communities they serve.",
    format: "Industry perspective", resource: "Smarter systems for a changing world",
    image: "/images/project-showcase/renewasphere.webp", alt: "Green architecture integrating nature and modern infrastructure",
  },
  {
    label: "Health & life sciences",
    heading: "Put people at the heart of digital healthcare",
    description: "Make essential services easier to access and navigate. We create intuitive websites, connected applications and secure digital workflows that help healthcare and life sciences organizations support their teams and deliver more human experiences.",
    format: "Industry perspective", resource: "Better digital journeys. More meaningful care.",
    image: "/images/inside-stories/water.webp", alt: "A scientist working with a microscope in a laboratory",
  },
  {
    label: "Insurance",
    heading: "Make every insurance interaction simpler",
    description: "Give customers clarity at every step, from exploring coverage to managing a claim. Our digital platforms and intelligent workflows help insurance businesses simplify complex journeys, improve service and build confidence through better customer experiences.",
    format: "Industry perspective", resource: "A clearer path from coverage to confidence",
    image: "/images/agenda/photo-1497366754035-f200968a6e72.jpg", alt: "A bright contemporary workplace",
  },
  {
    label: "Retail & consumer products",
    heading: "Turn everyday shopping into lasting loyalty",
    description: "Meet customers wherever they choose to shop. From engaging storefronts to seamless e-commerce platforms, we help retail and consumer brands connect discovery, purchase and support in one consistent digital experience.",
    format: "Industry perspective", resource: "Commerce designed around your customers",
    image: "/images/web-development/product.webp", alt: "A thoughtfully styled consumer product",
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
