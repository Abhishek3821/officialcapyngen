"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const rides = [
  { id: "open-road", label: "The open road", subtitle: "Follow your own rhythm", alt: "A cyclist riding a winding road through open mountain scenery at sunset", position: "68% center" },
  { id: "off-grid", label: "Off the grid", subtitle: "Take the path less travelled", alt: "A fully packed adventure bicycle overlooking a golden sunset", position: "center center" },
];

function Arrow({ className = "size-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function AdventureCarousel() {
  const [slide, setSlide] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cycle, setCycle] = useState(0);
  const frame = useRef<HTMLDivElement>(null);
  const moving = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const update = () => {
      setReducedMotion(media.matches);
      setCanPlay(visible && !document.hidden && !media.matches);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .15 });
    if (frame.current) observer.observe(frame.current);
    update();
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); media.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, []);

  const next = useCallback(() => {
    if (moving.current) return;
    moving.current = true;
    setAnimated(true);
    setSlide((value) => value + 1);
  }, []);

  useEffect(() => {
    if (!canPlay) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [canPlay, cycle, next]);

  useEffect(() => {
    if (slide === 0) return;
    const timer = setTimeout(() => {
      if (slide === rides.length) {
        // The duplicate first image makes the loop continuous in one direction.
        setAnimated(false);
        setSlide(0);
      } else moving.current = false;
    }, reducedMotion ? 0 : 720);
    return () => clearTimeout(timer);
  }, [slide, reducedMotion]);

  useEffect(() => {
    if (animated) return;
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => { setAnimated(true); moving.current = false; });
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, [animated]);

  return (
    <div ref={frame} id="adventure-ride-image" role="region" aria-label="Cycling image slideshow" aria-roledescription="carousel" className="adventure-carousel relative aspect-[1.12] overflow-hidden rounded-[24px] bg-[#576050] shadow-[0_16px_40px_rgb(40_47_29_/_0.12)] md:aspect-[.98] lg:rounded-[30px]">
      <div className={`absolute inset-0 flex h-full w-full ease-[cubic-bezier(.22,.61,.36,1)] motion-reduce:transition-none ${animated ? "transition-transform duration-700" : "transition-none"}`} style={{ transform: `translate3d(-${slide * 100}%, 0, 0)` }}>
        {[...rides, rides[0]].map((item, index) => <div key={`${item.id}-${index}`} aria-hidden={slide !== index} className="h-full w-full shrink-0">
          <Image src={`/images/adventure/${item.id}.webp`} alt={index === rides.length ? "" : item.alt} width={1400} height={933} loading="eager" unoptimized sizes="(max-width: 767px) 100vw, 50vw" className="h-full w-full object-cover" style={{ objectPosition: item.position }} />
        </div>)}
      </div>
      <button type="button" aria-label="Next cycling image" aria-controls="adventure-ride-image" onClick={() => { next(); setCycle((value) => value + 1); }} className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#122318]/30 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-[#122318]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ecd299] sm:right-6 sm:size-12"><Arrow className="size-5" /></button>
    </div>
  );
}
export default function Adventure() {
  return (
    <section aria-labelledby="adventure-heading" className="overflow-hidden bg-[#f5f3eb] px-5 py-10 sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#d9ddcf] pb-4 text-[9px] font-medium tracking-[.16em] text-[#7f8676] uppercase sm:mb-9 sm:text-[10px]">
          <span className="flex items-center gap-2.5"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#b89044]" />Made for the moments outside</span>
          <span className="hidden sm:block">The adventure edit / 01</span>
        </div>
        <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] md:gap-9 lg:gap-16">
          <AdventureCarousel />
          <div className="order-first min-w-0 md:order-none">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[.16em] text-[#9c7c3d] uppercase sm:mb-6"><span className="h-px w-7 bg-[#b99b61]" aria-hidden="true" />A different kind of escape</p>
            <h2 id="adventure-heading" className="text-[clamp(43px,5.1vw,72px)] leading-[1.02] font-semibold tracking-[-.06em] text-[#283a29]">Less routine.<br />More <span className="font-serif font-normal italic tracking-[-.05em] text-[#a18144]">adventure.</span></h2>
            <p className="mt-6 max-w-[400px] text-sm leading-[1.85] text-[#838b79] lg:mt-7 lg:text-[15px]">For the roads you know and the paths you haven’t met. Find your freedom on two wheels, trade the rush for the ride, and make the journey the best part of your day.</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-8">
              <a href="/#home" className="group inline-flex items-center gap-5 rounded-full bg-[#293d2b] py-2 pr-2 pl-5 text-xs font-medium text-[#faf8ee] transition-colors hover:bg-[#3a5137] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9d854f] sm:pl-6"><span>Find your next adventure</span><span className="flex size-9 items-center justify-center rounded-full bg-[#ddc28a] text-[#34412b] transition-transform group-hover:-rotate-45 motion-reduce:transition-none"><Arrow /></span></a>
              <a href="/#moments" className="flex items-center gap-2 border-b border-[#b4bda7] pb-1 text-xs font-medium text-[#657457] transition-colors hover:border-[#293d2b] hover:text-[#293d2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9d854f]">View the gallery<svg viewBox="0 0 20 20" fill="none" className="size-3.5" aria-hidden="true"><path d="m5 15 10-10M5 5h10v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg></a>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#d9ddcf] pt-6 lg:mt-11 lg:gap-5 lg:pt-7">
              <div><svg viewBox="0 0 24 24" fill="none" className="mb-3 size-5 text-[#9e854f]" aria-hidden="true"><path d="m9 3-4 18m10-18 4 18M12 4v3m0 4v3m0 4v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg><h3 className="text-xs font-medium text-[#42523b]">Open roads</h3><p className="mt-1.5 text-[10px] leading-relaxed text-[#959e89]">Room to breathe.</p></div>
              <div><svg viewBox="0 0 24 24" fill="none" className="mb-3 size-5 text-[#9e854f]" aria-hidden="true"><path d="m2 20 7-13 5 9 3-6 5 10H2Zm5-9 2 2 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg><h3 className="text-xs font-medium text-[#42523b]">New perspectives</h3><p className="mt-1.5 text-[10px] leading-relaxed text-[#959e89]">A little further out.</p></div>
              <div><svg viewBox="0 0 24 24" fill="none" className="mb-3 size-5 text-[#9e854f]" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg><h3 className="text-xs font-medium text-[#42523b]">Your own pace</h3><p className="mt-1.5 text-[10px] leading-relaxed text-[#959e89]">Enjoy every moment.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}