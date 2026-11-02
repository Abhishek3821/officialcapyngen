"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    id: "futureco", title: ["Futureco", "Business Center"],
    description: "It's an innovative business center created with a focus on sustainable development.",
    alt: "A sculptural white staircase inside a light-filled contemporary building",
  },
  {
    id: "infinity-green", title: ["Infinity Green", "Restaurant"],
    description: "A unique space powered by nature, with a combination of green spaces.",
    alt: "A warm restaurant interior with tall windows, greenery and natural materials",
  },
  {
    id: "renewasphere", title: ["Renewasphere", "District"],
    description: "A sustainable area with a full recycling cycle and a focus on renewable energy.",
    alt: "A contemporary home surrounded by greenery and broad glass windows",
  },
];

function CornerArrow() {
  return <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true"><path d="M7 7h10v10M7 17 17 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Metadata({ type, place }: { type: string; place: string }) {
  return (
    <dl className="flex max-w-[440px] flex-wrap gap-x-1.5 gap-y-2 text-[9px] font-medium text-[#3c443e] lg:text-[10px]">
      <div className="flex gap-1">
        <dt className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm"><svg viewBox="0 0 16 16" fill="none" className="size-3" aria-hidden="true"><rect x="3" y="4" width="10" height="10" rx="2" stroke="currentColor" /><path d="M5 2v4m6-4v4M3 8h10" stroke="currentColor" strokeLinecap="round" /></svg>Date</dt>
        <dd className="rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">15 June</dd>
      </div>
      <div className="flex gap-1">
        <dt className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm"><svg viewBox="0 0 16 16" fill="none" className="size-3" aria-hidden="true"><path d="m2 8 6-6h5v5l-6 6-5-5Z" stroke="currentColor" strokeLinejoin="round" /><circle cx="10.5" cy="4.5" r="1" fill="currentColor" /></svg>Type</dt>
        <dd className="rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">{type}</dd>
      </div>
      <div className="flex gap-1">
        <dt className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm"><svg viewBox="0 0 16 16" fill="none" className="size-3" aria-hidden="true"><path d="M12 6c0 3-4 7-4 7S4 9 4 6a4 4 0 1 1 8 0Z" stroke="currentColor" /><circle cx="8" cy="6" r="1.5" stroke="currentColor" /></svg>Place</dt>
        <dd className="rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">{place}</dd>
      </div>
    </dl>
  );
}

export default function ProjectShowcase() {
  const [order, setOrder] = useState([0, 1, 2]);
  const section = useRef<HTMLElement>(null);
  const cards = useRef(new Map<number, HTMLElement>());
  const previousRects = useRef(new Map<number, DOMRect>());
  const animations = useRef<Animation[]>([]);
  const focusFeatured = useRef(false);
  const scrollFrame = useRef(0);

  const promote = (slot: number, keyboard: boolean) => {
    if (slot === 0) return;
    previousRects.current = new Map(Array.from(cards.current, ([id, element]) => [id, element.getBoundingClientRect()]));
    animations.current.forEach((animation) => animation.cancel());
    focusFeatured.current = keyboard;
    setOrder((current) => {
      const next = [...current];
      [next[0], next[slot]] = [next[slot], next[0]];
      return next;
    });
  };

  useLayoutEffect(() => {
    if (!previousRects.current.size) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    animations.current = [];
    cards.current.forEach((element, id) => {
      const before = previousRects.current.get(id);
      if (!before || reducedMotion) return;
      const after = element.getBoundingClientRect();
      if (!after.width || !after.height) return;
      element.style.zIndex = id === order[0] ? "3" : "2";
      const animation = element.animate([
        { transformOrigin: "0 0", transform: `translate(${before.left - after.left}px, ${before.top - after.top}px) scale(${before.width / after.width}, ${before.height / after.height})` },
        { transformOrigin: "0 0", transform: "translate(0, 0) scale(1, 1)" },
      ], { duration: 650, easing: "cubic-bezier(.22,.61,.36,1)" });
      animations.current.push(animation);
      void animation.finished.then(() => { element.style.zIndex = ""; }).catch(() => { element.style.zIndex = ""; });
    });
    previousRects.current.clear();
    if (focusFeatured.current) {
      cards.current.get(order[0])?.querySelector<HTMLElement>("h3")?.focus({ preventScroll: true });
      focusFeatured.current = false;
    }
    if (window.matchMedia("(max-width: 1023px)").matches) {
      cancelAnimationFrame(scrollFrame.current);
      scrollFrame.current = requestAnimationFrame(() => section.current?.scrollIntoView({ block: "start", behavior: reducedMotion ? "instant" : "smooth" }));
    }
  }, [order]);

  useEffect(() => {
    const stopAnimations = () => animations.current.forEach((animation) => animation.cancel());
    window.addEventListener("resize", stopAnimations);
    return () => {
      window.removeEventListener("resize", stopAnimations);
      stopAnimations();
      cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  return (
    <section ref={section} aria-labelledby="project-showcase-heading" className="bg-white px-5 py-8 sm:px-7 sm:py-12 lg:px-10 lg:py-14">
      <h2 id="project-showcase-heading" className="sr-only">Spaces for what comes next</h2>
      <p role="status" className="sr-only">Featured project: {projects[order[0]].title.join(" ")}</p>
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[clamp(440px,43vw,600px)] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        {order.map((projectIndex, slot) => {
          const project = projects[projectIndex];
          const featured = slot === 0;
          return (
            <article key={project.id} id={`showcase-${project.id}`} ref={(element) => { if (element) cards.current.set(projectIndex, element); else cards.current.delete(projectIndex); }} aria-label={`${project.title.join(" ")}${featured ? ", featured project" : ""}`} className={`group relative isolate flex min-h-[400px] min-w-0 flex-col justify-between overflow-hidden rounded-[28px] bg-[#6a7469] p-4 lg:min-h-0 lg:rounded-[32px] lg:p-5 ${featured ? "sm:col-span-2 sm:min-h-[460px] lg:col-span-1" : ""}`}>
              <Image src={`/images/project-showcase/${project.id}.webp`} alt={project.alt} width={1400} height={1800} sizes={featured ? "(max-width: 1023px) 100vw, 50vw" : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"} className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none ${project.id === "futureco" ? "grayscale" : ""}`} />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-[#0d1c13]/90 via-[#0d1c13]/10 to-transparent" />

              {featured ? <div className="relative z-10"><Metadata type={project.title[1]} place={project.id === "futureco" ? "Downtown Business District" : project.title[0]} /></div> : <>
                <button type="button" aria-label={`Feature ${project.title.join(" ")}`} onClick={(event) => promote(slot, event.currentTarget.matches(":focus-visible"))} className="absolute inset-0 z-0 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-white">
                  <span className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/95 text-[#354238] shadow-sm transition-colors group-hover:bg-[#dce8d2] lg:top-5 lg:right-5 lg:size-11"><CornerArrow /></span>
                </button>
                <div aria-hidden="true" className="pointer-events-none h-10 lg:h-11" />
              </>}

              <div className={`relative z-10 mt-28 ${featured ? "" : "pointer-events-none"}`}>
                <div className="px-1">
                  <h3 tabIndex={-1} className={`font-medium tracking-[-.045em] text-white uppercase outline-none ${featured ? "text-[clamp(28px,3.1vw,43px)] leading-[1.04]" : "text-[clamp(23px,2vw,29px)] leading-[1.08]"}`}>{project.title.map((line) => <span key={line} className="block">{line}</span>)}</h3>
                  <p className={`mt-3 text-[11px] leading-[1.45] text-white/80 lg:text-xs ${featured ? "max-w-[310px]" : "max-w-[260px]"}`}>{project.description}</p>
                </div>
                <a href="/#contact" aria-label={`Start a project like ${project.title.join(" ")}`} className="pointer-events-auto mt-5 flex w-full items-center justify-between gap-2 rounded-full bg-white px-4 py-3 text-[9px] font-semibold tracking-[.025em] text-[#29392e] uppercase transition-colors hover:bg-[#e6efdc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:px-5 lg:py-3.5 lg:text-[10px]">
                  Start a project
                  <svg viewBox="0 0 20 20" fill="none" className="size-4 shrink-0" aria-hidden="true"><path d="m8 4 6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}