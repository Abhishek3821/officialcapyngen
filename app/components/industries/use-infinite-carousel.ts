"use client";

import { useEffect, useRef, useState, type PointerEvent, type MouseEvent, type KeyboardEvent } from "react";

export default function useInfiniteCarousel(count: number) {
  const viewport = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const pitch = useRef(0);
  const frame = useRef(0);
  const drag = useRef({ id: -1, x: 0, position: 0, moved: false });
  const [ready, setReady] = useState(false);

  function paint(next: number) {
    const cycle = pitch.current * count;
    if (!cycle || !rail.current) return;
    position.current = ((next % cycle) + cycle) % cycle;
    rail.current.style.transform = `translate3d(${-cycle - position.current}px,0,0)`;
  }

  function animateTo(target: number) {
    cancelAnimationFrame(frame.current);
    const start = position.current;
    const distance = target - start;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { paint(target); return; }
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 400, 1);
      paint(start + distance * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const element = viewport.current;
    const strip = rail.current;
    if (!element || !strip) return;
    const measure = () => {
      const first = strip.firstElementChild;
      if (!(first instanceof HTMLElement)) return;
      cancelAnimationFrame(frame.current);
      const previousPitch = pitch.current;
      pitch.current = first.getBoundingClientRect().width + parseFloat(getComputedStyle(strip).columnGap);
      paint(previousPitch ? position.current / previousPitch * pitch.current : 0);
      setReady(true);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame.current); };
    // The geometry is held in refs; resize updates preserve the visible position.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function move(direction: number) { animateTo(position.current + direction * pitch.current); }
  function focusCard(index: number) { cancelAnimationFrame(frame.current); paint(index * pitch.current); }
  function start(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    cancelAnimationFrame(frame.current);
    drag.current = { id: event.pointerId, x: event.clientX, position: position.current, moved: false };
  }
  function update(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current;
    if (event.pointerId !== gesture.id) return;
    const distance = event.clientX - gesture.x;
    if (!gesture.moved && Math.abs(distance) < 6) return;
    gesture.moved = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
    paint(gesture.position - distance);
  }
  function end(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerId !== drag.current.id) return;
    drag.current.id = -1;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (drag.current.moved && pitch.current) animateTo(Math.round(position.current / pitch.current) * pitch.current);
  }
  return {
    viewport, rail, ready, move, focusCard,
    handlers: {
      onPointerDown: start, onPointerMove: update, onPointerUp: end, onPointerCancel: end,
      onPointerLeave: () => { if (!drag.current.moved) drag.current.id = -1; },
      onLostPointerCapture: () => { drag.current.id = -1; if (viewport.current) delete viewport.current.dataset.dragging; },
      onClickCapture: (event: MouseEvent<HTMLDivElement>) => { if (drag.current.moved && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } },
      onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } },
    },
  };
}
