"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const pictures = {
  dog: { name: "dog", alt: "A friendly dog in a natural-light portrait", aspect: "aspect-[1.1]" },
  chair: { name: "chair", alt: "A sculptural cobalt-blue armchair in a blue studio", aspect: "aspect-[.9]" },
  product: { name: "product", alt: "A beauty product with soft architectural shadows", aspect: "aspect-[1.05]" },
  portrait: { name: "portrait", alt: "A creative editorial portrait", aspect: "aspect-[.8]" },
  lamp: { name: "lamp", alt: "A minimal desk lamp against a pale backdrop", aspect: "aspect-[.92]" },
};

function GalleryCard({ item, duplicate }: { item: (typeof pictures)[keyof typeof pictures]; duplicate: boolean }) {
  return <div className={`min-w-0 overflow-hidden rounded-[18px] bg-[#eff0ee] lg:rounded-[22px] ${item.aspect}`}><Image src={`/images/web-development/${item.name}.webp`} alt={duplicate ? "" : item.alt} width={850} height={1100} sizes="(max-width: 767px) 50vw, 25vw" className="h-full w-full object-cover" /></div>;
}

export default function WebDevelopmentGallery() {
  const viewport = useRef<HTMLDivElement>(null);
  const firstGroup = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [manualPause, setManualPause] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(media.matches);
    const onVisibility = () => setPageVisible(!document.hidden);
    onMotion(); onVisibility();
    media.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .1 });
    if (viewport.current) observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const paused = manualPause || hovered || focused || touching || !visible || !pageVisible || reducedMotion;
  useEffect(() => {
    const element = viewport.current;
    if (!element || paused) return;
    let position = element.scrollLeft;
    let previous: number | null = null;
    let frame = 0;
    const tick = (time: number) => {
      const distance = (firstGroup.current?.offsetWidth ?? element.clientWidth) + 12;
      if (previous !== null && distance > 0) {
        position = (position + Math.min(time - previous, 64) * .022) % distance;
        element.scrollLeft = position;
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div className="relative h-[420px] min-w-0 px-5 md:h-full md:pr-7 md:pl-0 lg:pr-10" onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}>
      <div
        ref={viewport}
        tabIndex={0}
        role="region"
        aria-label="Creative image gallery. Scroll horizontally or use the left and right arrow keys."
        className="h-full w-full overflow-x-auto overflow-y-hidden overscroll-x-contain focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#2789aa] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", maskImage: "linear-gradient(to bottom, transparent 0%, black 9%, black 89%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 9%, black 89%, transparent 100%)" }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onTouchStart={() => { if (resumeTimer.current) clearTimeout(resumeTimer.current); setTouching(true); }}
        onTouchEnd={() => { resumeTimer.current = setTimeout(() => setTouching(false), 1200); }}
        onTouchCancel={() => setTouching(false)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          viewport.current?.scrollBy({ left: (event.key === "ArrowRight" ? 1 : -1) * (viewport.current.clientWidth / 2 + 6), behavior: reducedMotion ? "instant" : "smooth" });
        }}
      >
        <div className="flex h-full w-full -translate-y-8 gap-3 md:-translate-y-12">
          {[false, true].map((duplicate) => <div key={String(duplicate)} ref={duplicate ? undefined : firstGroup} aria-hidden={duplicate || undefined} className="grid w-full shrink-0 grid-cols-2 items-start gap-3">
            <div className="grid min-w-0 gap-3"><GalleryCard item={pictures.dog} duplicate={duplicate} /><GalleryCard item={pictures.chair} duplicate={duplicate} /><GalleryCard item={pictures.product} duplicate={duplicate} /></div>
            <div className="grid min-w-0 gap-3 pt-1"><div aria-hidden="true" className="h-[74px] rounded-[18px] bg-linear-to-b from-[#f6f7f9] to-[#e7e9ed] lg:h-[100px] lg:rounded-[22px]" /><GalleryCard item={pictures.portrait} duplicate={duplicate} /><GalleryCard item={pictures.lamp} duplicate={duplicate} /></div>
          </div>)}
        </div>
      </div>
      <button type="button" aria-label={manualPause ? "Play gallery movement" : "Pause gallery movement"} aria-pressed={manualPause} onClick={() => setManualPause((value) => !value)} className="absolute right-8 bottom-5 flex size-8 items-center justify-center rounded-full border border-[#e0e5dc] bg-white/90 text-[#596957] shadow-sm backdrop-blur-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2789aa] md:right-10 lg:right-14">
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-3" aria-hidden="true">{manualPause ? <path d="m7 4 9 6-9 6V4Z" /> : <path d="M6 4h3v12H6zm5 0h3v12h-3Z" />}</svg>
      </button>
    </div>
  );
}
