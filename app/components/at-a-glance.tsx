"use client";

import { useEffect, useRef } from "react";

const statistics = [
  { value: 800, suffix: "+", label: "Clients", position: "lg:col-start-3 lg:row-start-1" },
  { value: 80, suffix: "+", label: "NPS past five years", position: "lg:col-start-4 lg:row-start-1" },
  { value: 90, suffix: "%", label: "Success rate on AI implementations", position: "lg:col-start-2 lg:row-start-2" },
  { value: 10000, suffix: "+", label: "Data, AI and analytics professionals", position: "lg:col-start-3 lg:row-start-2" },
  { value: 27, suffix: "", label: "Years of excellence", position: "sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2" },
];

const formatter = new Intl.NumberFormat("en-US");
const DURATION = 2200;

export default function AtAGlance() {
  const intro = useRef<HTMLDivElement>(null);
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let started = false;
    let completed = false;
    let animationFrame = 0;
    let startTime: number | null = null;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const display = (progress: number) => {
      const eased = 1 - Math.pow(1 - progress, 3);
      statistics.forEach((stat, index) => {
        const element = counters.current[index];
        if (element) element.textContent = formatter.format(Math.round(stat.value * eased));
      });
    };
    const finish = () => {
      window.cancelAnimationFrame(animationFrame);
      display(1);
      completed = true;
    };
    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / DURATION, 1);
      display(progress);
      if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
      else completed = true;
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      if (motion.matches) finish();
      else animationFrame = window.requestAnimationFrame(tick);
    }, { threshold: .25, rootMargin: "0px 0px -40px 0px" });

    if (intro.current) observer.observe(intro.current);
    const onMotionChange = () => { if (started && !completed && motion.matches) finish(); };
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section id="at-a-glance" aria-labelledby="at-a-glance-heading" className="bg-[#00162e] px-5 py-10 sm:px-7 sm:py-12 lg:px-12 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
        <div ref={intro} className="mb-3 min-w-0 sm:col-span-2 lg:col-start-1 lg:row-start-1 lg:mb-0 lg:pr-8">
          <h2 id="at-a-glance-heading" className="text-[clamp(29px,3vw,48px)] leading-tight font-bold tracking-[-.025em] text-[#f5f4f5] uppercase">EXL at a glance</h2>
          <div aria-hidden="true" className="mt-6 h-1 w-28 bg-linear-to-r from-[#ff5208] to-[#ff9626] lg:mt-7" />
          <p className="mt-7 max-w-[410px] text-base leading-[1.4] font-medium text-[#afbecb] sm:text-lg lg:mt-10 lg:text-[20px]">
            Serving clients in North America,<br className="hidden sm:block" /> South America, Europe, Middle East,<br className="hidden sm:block" /> Africa, and Asia-Pacific
          </p>
        </div>

        {statistics.map((stat, index) => (
          <article key={stat.label} className={`flex min-h-[185px] min-w-0 flex-col justify-center rounded-[20px] border border-[#677588] bg-[#0d233d] px-6 py-7 [container-type:inline-size] sm:min-h-[205px] lg:min-h-[clamp(205px,14vw,245px)] lg:px-7 lg:py-8 ${stat.position}`}>
            <p aria-hidden="true" className={`whitespace-nowrap leading-[1.06] font-light tracking-[-.045em] text-[#ff5708] tabular-nums ${stat.value === 10000 ? "text-[clamp(34px,22cqw,88px)]" : "text-[clamp(46px,28cqw,98px)]"}`}>
              <span ref={(element) => { counters.current[index] = element; }}>0</span>{stat.suffix}
            </p>
            <h3 className="mt-3 text-[clamp(13px,5.7cqw,21px)] leading-[1.3] font-semibold tracking-[-.025em] text-[#d6d6db] uppercase">
              <span className="sr-only">{formatter.format(stat.value)}{stat.suffix} </span>{stat.label}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
