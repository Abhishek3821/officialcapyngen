"use client";

import DismissibleDialog from "./dismissible-dialog";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { destinations } from "./destination-data";

const INTERVAL = 4500;
const DURATION = 950;
const count = destinations.length;
const wrap = (index: number) => (index + count) % count;
const imagePath = (index: number) => `/images/destinations/${destinations[index].id}.webp`;

function Chevron({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" className={`size-5 ${previous ? "rotate-180" : ""}`} aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [copyIndex, setCopyIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [copyVisible, setCopyVisible] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [saved, setSaved] = useState<number[]>([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const incoming = useRef<HTMLDivElement>(null);
  const cardRefs = useRef(new Map<number, HTMLButtonElement>());
  const activeRef = useRef(0);
  const busy = useRef(false);
  const mounted = useRef(false);
  const animation = useRef<Animation | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    mounted.current = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(media.matches);
      if (media.matches) animation.current?.finish();
    };
    const finishOnResize = () => animation.current?.finish();
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion(); updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    window.addEventListener("resize", finishOnResize);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    const preload = destinations.map((_, index) => {
      const image = new window.Image();
      image.src = imagePath(index);
      return image.decode();
    });
    void Promise.allSettled(preload).then(() => { if (mounted.current) setAssetsReady(true); });
    return () => {
      mounted.current = false;
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      window.removeEventListener("resize", finishOnResize);
      animation.current?.cancel();
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  // Reveal the committed background before removing the expanding overlay.
  useLayoutEffect(() => {
    if (incoming.current) incoming.current.style.visibility = "hidden";
    animation.current?.cancel();
    animation.current = null;
    busy.current = false;
  }, [active]);

  const goTo = useCallback(async (requested: number) => {
    const target = wrap(requested);
    if (target === activeRef.current || busy.current || !root.current || !incoming.current) return;
    busy.current = true;
    setTransitioning(true);
    try {
      const asset = new window.Image();
      asset.src = imagePath(target);
      await asset.decode();
      if (!mounted.current || !root.current || !incoming.current) return;
      if (reducedMotion) {
        activeRef.current = target;
        setActive(target); setCopyIndex(target); setCardIndex(target);
        setTransitioning(false);
        return;
      }
      const bounds = root.current.getBoundingClientRect();
      const card = cardRefs.current.get(target)?.getBoundingClientRect();
      const visibleCard = card && card.left < bounds.right && card.right > bounds.left;
      const left = visibleCard ? Math.max(0, card.left - bounds.left) : bounds.width * .65;
      const top = visibleCard ? Math.max(0, card.top - bounds.top) : bounds.height * .4;
      const right = visibleCard ? Math.max(0, bounds.right - card.right) : bounds.width * .1;
      const bottom = visibleCard ? Math.max(0, bounds.bottom - card.bottom) : bounds.height * .18;
      const layer = incoming.current;
      layer.style.backgroundImage = `url("${imagePath(target)}")`;
      layer.style.visibility = "visible";
      setCopyVisible(false);
      setCardIndex(target);
      const expansion = layer.animate([
        { clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round 12px)` },
        { clipPath: "inset(0px 0px 0px 0px round 0px)" },
      ], { duration: DURATION, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" });
      animation.current = expansion;
      copyTimer.current = setTimeout(() => {
        if (mounted.current) { setCopyIndex(target); setCopyVisible(true); }
      }, 220);
      await expansion.finished;
      if (!mounted.current) return;
      activeRef.current = target;
      setActive(target);
      setTransitioning(false);
    } catch {
      if (mounted.current) {
        if (incoming.current) incoming.current.style.visibility = "hidden";
        setCardIndex(activeRef.current); setCopyIndex(activeRef.current);
        setCopyVisible(true); setTransitioning(false);
        busy.current = false;
      }
    }
  }, [reducedMotion]);

  const paused = manualPause || reducedMotion || !inView || !pageVisible || keyboardFocus || detailsOpen;
  useEffect(() => {
    if (paused || transitioning || !assetsReady) return;
    setCycle((value) => value + 1);
    const timer = setTimeout(() => void goTo(activeRef.current + 1), INTERVAL);
    return () => clearTimeout(timer);
  }, [active, paused, transitioning, assetsReady, goTo]);

  useEffect(() => {
    const element = dialog.current;
    if (!detailsOpen || !element) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [detailsOpen]);

  const destination = destinations[copyIndex];
  const upcoming = Array.from({ length: count - 1 }, (_, slot) => wrap(cardIndex + slot + 1));
  const savedCurrent = saved.includes(copyIndex);

  return (
    <section id="home" ref={root} aria-labelledby="hero-heading" aria-roledescription="carousel" tabIndex={0} className="destination-hero focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#e9b544]"
      onFocusCapture={(event) => { if (event.target.matches(":focus-visible")) setKeyboardFocus(true); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocus(false); }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); void goTo(activeRef.current + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
      onTouchStart={(event) => { const touch = event.touches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; }}
      onTouchEnd={(event) => {
        const start = touchStart.current; touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x; const dy = touch.clientY - start.y;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) void goTo(activeRef.current + (dx < 0 ? 1 : -1));
      }}>
      <Image src={imagePath(active)} alt="" width={1920} height={1080} unoptimized preload className="travel-background" style={{ objectPosition: destinations[active].position }} />
      <div ref={incoming} aria-hidden="true" className="travel-expansion" />
      <div aria-hidden="true" className="travel-shade" />
      <div className="travel-clock" aria-hidden="true"><div key={cycle} className="travel-clock-fill" style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused || transitioning || !assetsReady ? "paused" : "running" }} /></div>

      <div className={`travel-copy ${copyVisible ? "" : "travel-copy-leaving"}`} aria-live={paused ? "polite" : "off"}>
        <div key={copyIndex}>
          <span className="travel-eyebrow-rule" aria-hidden="true" />
          <p className="travel-place">{destination.region}</p>
          <h1 id="hero-heading" className="travel-heading">{destination.title.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="travel-description">{destination.description}</p>
          <div className="travel-actions">
            <button type="button" aria-label={`${savedCurrent ? "Unsave" : "Save"} ${destination.title.join(" ")}`} aria-pressed={savedCurrent} onClick={() => setSaved((value) => value.includes(copyIndex) ? value.filter((item) => item !== copyIndex) : [...value, copyIndex])} className="travel-save">
              <svg viewBox="0 0 24 24" className="size-[18px]" fill={savedCurrent ? "currentColor" : "none"} aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" disabled={transitioning} onClick={() => setDetailsOpen(true)} className="travel-discover">Discover location<svg viewBox="0 0 20 20" fill="none" className="size-3.5" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        </div>
      </div>

      <div className="travel-card-window">
        <div className="travel-card-track">
          {upcoming.map((index, slot) => <button key={destinations[index].id} ref={(element) => { if (element) cardRefs.current.set(index, element); else cardRefs.current.delete(index); }} type="button" aria-label={`Show ${destinations[index].title.join(" ")}`} disabled={transitioning} onClick={() => void goTo(index)} className="travel-card" style={{ transform: `translate3d(calc(${slot} * (var(--travel-card-width) + var(--travel-card-gap))), 0, 0)` }}>
            <Image src={imagePath(index)} alt="" width={600} height={900} unoptimized className="h-full w-full object-cover" />
            <span className="travel-card-shade" aria-hidden="true" />
            <span className="travel-card-copy"><span className="mb-2 block h-[2px] w-5 bg-white/85" aria-hidden="true" /><span className="travel-card-place">{destinations[index].region}</span><span className="travel-card-title">{destinations[index].title.map((line) => <span key={line} className="block">{line}</span>)}</span></span>
          </button>)}
        </div>
      </div>

      <div className="travel-controls">
        <div className="flex shrink-0 gap-2.5">
          <button type="button" aria-label="Previous destination" disabled={transitioning} onClick={() => void goTo(activeRef.current - 1)} className="travel-arrow"><Chevron previous /></button>
          <button type="button" aria-label="Next destination" disabled={transitioning} onClick={() => void goTo(activeRef.current + 1)} className="travel-arrow"><Chevron /></button>
        </div>
        <div className="travel-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(active + 1) / count})` }} /></div>
        <button type="button" aria-label={manualPause || reducedMotion ? "Play destination slideshow" : "Pause destination slideshow"} aria-pressed={manualPause} disabled={reducedMotion} title={reducedMotion ? "Autoplay disabled by your reduced-motion preference" : undefined} onClick={() => { setManualPause((value) => !value); setKeyboardFocus(false); }} className="travel-pause">
          {paused ? <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5" aria-hidden="true"><path d="m7 4 9 6-9 6V4Z" /></svg> : <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5" aria-hidden="true"><path d="M6 4h3v12H6zm5 0h3v12h-3z" /></svg>}
        </button>
        <div className="travel-counter" aria-label={`Destination ${active + 1} of ${count}`}><span>{String(active + 1).padStart(2, "0")}</span><span className="travel-total">/ {String(count).padStart(2, "0")}</span></div>
      </div>

      <DismissibleDialog ref={dialog} aria-labelledby="destination-detail-title" onClose={() => setDetailsOpen(false)} className="travel-dialog">
        <div className="relative overflow-hidden rounded-[22px] bg-[#18231f] text-white">
          <Image src={imagePath(copyIndex)} alt={destination.title.join(" ")} width={900} height={500} unoptimized className="aspect-[16/8] w-full object-cover" />
          <button type="button" aria-label="Close destination details" onClick={() => setDetailsOpen(false)} className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/50 text-white focus-visible:outline-2 focus-visible:outline-[#e9b544]">✕</button>
          <div className="p-6 sm:p-8"><p className="text-xs text-[#e9b544]">{destination.region}</p><h2 id="destination-detail-title" className="mt-3 font-[family-name:var(--font-oswald)] text-3xl uppercase">{destination.title.join(" ")}</h2><p className="mt-4 text-sm leading-relaxed text-white/70">{destination.description}</p><button type="button" onClick={() => setDetailsOpen(false)} className="mt-6 rounded-full border border-white/30 px-5 py-2.5 text-xs text-white hover:bg-white/10">Back to exploring</button></div>
        </div>
      </DismissibleDialog>
    </section>
  );
}
