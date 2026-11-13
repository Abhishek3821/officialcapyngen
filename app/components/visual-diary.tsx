"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const photos = [
  { location: "Custom Web Development", image: "/images/moments/travel.jpg", alt: "Colourful coastal buildings overlooking the sea" },
  { location: "E-commerce Development", image: "/images/destinations/swiss-alps.webp", alt: "An alpine peak framed by green trees" },
  { location: "Responsive Web Design", image: "/images/destinations/nagano.webp", alt: "A traditional wooden building in a mountain setting" },
  { location: "Web Application Development", image: "/images/destinations/los-lances.webp", alt: "A quiet beach between dramatic coastal rocks" },
  { location: "UI/UX Design", image: "/images/destinations/goreme.webp", alt: "Rock formations and hot air balloons over Cappadocia" },
  { location: "Web Hosting Services", image: "/images/destinations/merzouga.webp", alt: "Warm golden sand dunes in the desert" },
  { location: "WordPress Development", image: "/images/destinations/yosemite.webp", alt: "The towering granite cliffs and wooded valley of Yosemite" },
  { location: "JavaScript Development", image: "/images/moments/mountains.jpg", alt: "A sweeping mountain landscape beneath an open sky" },
];

function Arrow({ previous = false }: { previous?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4" style={{ transform: previous ? "rotate(180deg)" : undefined }}><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function VisualDiary() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const touchStart = useRef<number | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const move = (direction: number) => setActive((current) => (current + direction + photos.length) % photos.length);

  return (
    <section id="visual-diary" aria-labelledby="visual-diary-heading" className="overflow-hidden bg-white py-12 text-[#111027] sm:py-16 lg:py-20">
      <div className="px-5 text-center">
        <p className="text-[10px] font-medium tracking-[.09em] uppercase">Web Development</p>
        <h2 id="visual-diary-heading" className="mt-3 text-[clamp(28px,3vw,40px)] leading-tight font-medium tracking-[-.05em]">Our Web Development Services</h2>
        <p className="mx-auto mt-3 max-w-[280px] text-sm leading-[1.45] text-[#444158]">Get started with our comprehensive web development services today.</p>
      </div>

      <div className="mx-auto mt-9 flex max-w-[1200px] flex-wrap items-center justify-center gap-2 px-5 sm:mt-12">
        {photos.map((photo, index) => <button key={photo.location} type="button" aria-pressed={active === index} aria-controls="diary-carousel" onClick={() => setActive(index)} className={`min-h-10 rounded-full border px-5 py-2 text-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8] ${active === index ? "border-[#0c0924] bg-[#0c0924] text-white" : "border-[#615e6b] bg-white text-[#3d394c] hover:bg-[#f0eef7]"}`}>{photo.location}</button>)}
        <button type="button" aria-expanded={expanded} aria-controls="diary-all-photos" onClick={() => setExpanded((current) => !current)} className="inline-flex min-h-10 items-center gap-3 rounded-full border border-[#262232] px-6 py-2 text-xs transition-colors hover:bg-[#f0eef7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8]">{expanded ? "View Less" : "View More"}<Arrow /></button>
      </div>

      <div ref={gallery} id="diary-carousel" role="region" aria-roledescription="carousel" aria-label="Our Web Development Services" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current !== null) { const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1); } touchStart.current = null; }} className="relative mx-auto mt-8 h-[360px] w-full max-w-[1600px] touch-pan-y overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6552c8] sm:mt-10 sm:h-[430px] lg:h-[490px]">
        {photos.map((photo, index) => {
          let offset = (index - active + photos.length) % photos.length;
          if (offset > Math.floor(photos.length / 2)) offset -= photos.length;
          const distance = Math.abs(offset);
          const visible = distance <= 2;
          return (
            <button key={photo.location} type="button" tabIndex={visible ? 0 : -1} aria-hidden={!visible} aria-label={`${photo.location}${active === index ? ", current service" : ", show service"}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)} className="absolute top-5 left-1/2 h-[310px] w-[220px] overflow-hidden rounded-[19px] bg-[#eae8ee] shadow-[0_8px_28px_#1f274130] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8] motion-reduce:transition-none sm:h-[380px] sm:w-[290px] lg:h-[440px] lg:w-[355px]" style={{ zIndex: 5 - distance, visibility: visible ? "visible" : "hidden", opacity: visible ? 1 : 0, transform: `translateX(calc(-50% + ${offset} * clamp(130px, 22vw, 265px))) translateY(${distance * 10}px) scale(${1 - distance * .15})`, filter: distance > 0 ? `brightness(${1 - distance * .1})` : undefined }}>
              <Image src={photo.image} alt={photo.alt} fill sizes="(max-width: 639px) 220px, (max-width: 1023px) 290px, 355px" className="object-cover" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute right-4 bottom-4 left-4 text-left text-xs font-medium tracking-wide text-white">{photo.location}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4">
        <button type="button" aria-label="Previous service" aria-controls="diary-carousel" onClick={() => move(-1)} className="flex size-11 items-center justify-center rounded-full border border-[#4f4c5b] transition-colors hover:bg-[#0c0924] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8]"><Arrow previous /></button>
        <button type="button" aria-label="Next service" aria-controls="diary-carousel" onClick={() => move(1)} className="flex size-11 items-center justify-center rounded-full border border-[#4f4c5b] transition-colors hover:bg-[#0c0924] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8]"><Arrow /></button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">Service {active + 1} of {photos.length}: {photos[active].location}.</p>

      <div id="diary-all-photos" hidden={!expanded} className="mx-auto mt-10 max-w-[1200px] px-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {photos.map((photo, index) => <button key={photo.location} type="button" aria-label={`Show ${photo.location}`} onClick={() => { setActive(index); gallery.current?.focus({ preventScroll: true }); gallery.current?.scrollIntoView({ block: "center", behavior: "instant" }); }} className="group text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6552c8]"><span className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-[#eae8ee]"><Image src={photo.image} alt={photo.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 220px" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" /></span><span className="mt-2 block text-sm">{photo.location}</span></button>)}
        </div>
      </div>
    </section>
  );
}
