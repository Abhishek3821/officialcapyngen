"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  { name: "E-Commerce Platform", location: "Retail solutions", area: "B2C", photo: "photo-1460925895917-afdab827c52f" },
  { name: "CRM System", location: "Enterprise client", area: "B2B", photo: "photo-1551288049-bebda4e38f71" },
  { name: "Mobile App", location: "Fintech startup", area: "iOS/Android", photo: "photo-1512941937669-90a1b58e7e9c" },
  { name: "Web Platform", location: "Healthcare provider", area: "SaaS", photo: "photo-1576091160399-112ba8d25d1d" },
  { name: "AI Solution", location: "Logistics company", area: "ML/AI", photo: "photo-1518770660439-4636190af475" },
  { name: "Custom Software", location: "Manufacturing firm", area: "Cloud", photo: "photo-1581091226825-a6a2a5aee158" },
];

export default function Projects() {
  const track = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = track.current;
    if (!element || showAll) return;

    const updateEdges = () => setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1);
      const canScroll = delta > 0
        ? element.scrollLeft + element.clientWidth < element.scrollWidth - 2
        : element.scrollLeft > 2;
      if (canScroll) {
        event.preventDefault();
        element.scrollLeft += delta;
      }
    };

    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    element.addEventListener("scroll", updateEdges, { passive: true });
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", updateEdges);
      element.removeEventListener("wheel", onWheel);
    };
  }, [showAll]);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    element.scrollBy({
      left: direction * ((card?.offsetWidth ?? element.clientWidth) + 20),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id="work" aria-labelledby="projects-heading" className="bg-white px-5 pt-5 pb-12 sm:px-7 lg:px-12 lg:pb-16">
      <div className="mx-auto w-full min-w-0 max-w-[1344px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 lg:mb-8">
          <h2 id="projects-heading" className="text-[clamp(25px,2.8vw,40px)] leading-tight font-normal tracking-[-0.045em] text-[#282b28]">Our Projects</h2>
          <button type="button" onClick={() => setShowAll((value) => !value)} aria-expanded={showAll} aria-controls="project-gallery" className="flex shrink-0 items-center gap-2 rounded-sm text-[10px] text-[#777b75] transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#777b75] sm:gap-3 sm:text-xs">
            {showAll ? "Collapse Carousel" : "View All Projects"}
            <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.2" /></svg>
          </button>
        </div>

        <div
          id="project-gallery"
          ref={track}
          role="region"
          aria-label="Gallery of six projects"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          tabIndex={showAll ? undefined : 0}
          onKeyDown={(event) => {
            if (showAll || event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              move(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
          className={showAll
            ? "grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
            : "project-track flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b9587]"}
        >
          {projects.map((project, index) => (
            <article key={project.name} aria-label={`${index + 1} of 6: ${project.name}`} className={showAll ? "min-w-0" : "w-[85%] shrink-0 snap-start sm:w-[calc((100%_-_20px)/2)] lg:w-[calc((100%_-_40px)/3)]"}>
              <div className="relative aspect-[1.14] overflow-hidden rounded-[22px] bg-[#e2e5df] lg:rounded-[26px]">
                <Image src={`https://images.unsplash.com/${project.photo}?auto=format&fit=crop&w=900&q=85`} alt={project.name} fill unoptimized sizes="(max-width: 639px) 85vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-[1.035] motion-reduce:transition-none" />
                <span className="absolute top-4 right-4 rounded-full bg-[#49514a]/60 px-3 py-1.5 text-[11px] leading-none font-medium text-white backdrop-blur-sm lg:text-xs">{project.area}</span>
              </div>
              <div className="px-2 pt-3 lg:px-4 lg:pt-4">
                <h3 className="text-base leading-tight font-normal tracking-[-0.025em] text-[#4b5049] lg:text-xl">{project.name}</h3>
                <p className="mt-1 text-xs text-[#a3a79e] lg:text-sm">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

        {!showAll && <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-[11px] text-[#969b92]">6 Projects <span aria-hidden="true">·</span> Scroll to see more</p>
          <div className="flex shrink-0 gap-2">
            {[-1, 1].map((direction) => <button key={direction} type="button" onClick={() => move(direction)} disabled={direction === -1 ? edges.start : edges.end} aria-label={direction === -1 ? "Previous project" : "Next project"} aria-controls="project-gallery" className="flex size-9 items-center justify-center rounded-full border border-[#dde0d9] text-[#4b5049] transition-colors hover:bg-[#f0f2ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#777b75] disabled:cursor-default disabled:opacity-30">
              <svg viewBox="0 0 24 24" fill="none" className={`size-4 ${direction === -1 ? "rotate-180" : ""}`} aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>)}
          </div>
        </div>}
      </div>
    </section>
  );
}