"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const looks = [
  { src: "/images/brands-shine/floral.webp", alt: "Fashion model in a colorful floral outfit" },
  { src: "/images/brands-shine/green.webp", alt: "Fashion model in a contemporary green look" },
  { src: "/images/brands-shine/coral.webp", alt: "Fashion model in a bright coral look" },
  { src: "/images/brands-shine/blue.webp", alt: "Fashion model in a blue editorial look" },
];

export default function CompanyFashionHero() {
  const [activeLook, setActiveLook] = useState(0);
  const visibleLooks = looks.map((_, index) => looks[(index + activeLook) % looks.length]);

  return (
    <section aria-labelledby="company-fashion-title" className="overflow-hidden bg-[#fffefa] text-[#161a1c]">
      <div className="relative mx-auto flex min-h-[680px] max-w-[1550px] flex-col px-5 pt-8 pb-7 sm:px-9 lg:h-[calc(100svh_-_var(--site-header-height))] lg:min-h-[620px] lg:px-14 lg:pt-7">
        <div aria-hidden="true" className="absolute top-9 left-[13%] text-4xl leading-none text-[#299ecc] lg:top-6 lg:left-[18%]">✧</div>
        <div aria-hidden="true" className="absolute top-24 right-[14%] text-3xl leading-none text-[#299ecc] lg:top-20 lg:right-[19%]">✧</div>

        <div className="relative z-10 mx-auto max-w-[770px] text-center">
          <p className="mb-2 text-[10px] font-semibold tracking-[.28em] text-[#299ecc] uppercase sm:text-xs">Capyngen / Company Overview</p>
          <h1 id="company-fashion-title" className="text-[clamp(38px,4.4vw,72px)] leading-[.97] font-bold tracking-[-.065em]">
            Spread Your Charming With<br />Your Fashion
          </h1>
        </div>

        <div className="relative mx-auto mt-7 grid h-[360px] w-full max-w-[1180px] grid-cols-[1fr_1.45fr_1fr] items-center gap-2 sm:h-[430px] sm:gap-4 md:grid-cols-[1fr_1fr_1.45fr_1fr_1fr] lg:mt-2 lg:min-h-0 lg:flex-1 lg:gap-5">
          <Link href="#about-company" aria-label="Look collection and explore the company" className="absolute top-3 left-0 z-10 hidden size-[76px] items-center justify-center rounded-full border border-[#a6cddc] bg-white/90 text-[9px] font-bold tracking-[.13em] text-[#2c6d85] uppercase transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#299ecc] md:flex lg:top-[6%] lg:left-[4%]">
            <span className="text-center leading-3">Look<br />Collection <span className="block pt-1 text-sm">▶</span></span>
          </Link>

          <div className="relative col-start-1 hidden h-[42%] self-center overflow-hidden rounded-[12px] bg-[#dcebf1] shadow-[0_12px_36px_#101f2918] sm:h-[48%] md:block lg:translate-y-[16%]">
            <Image src={visibleLooks[0].src} alt={visibleLooks[0].alt} fill sizes="(max-width: 640px) 18vw, 16vw" className="object-cover" />
          </div>

          <div className="relative col-start-1 h-[62%] self-center overflow-hidden rounded-[12px] bg-[#dcebf1] shadow-[0_12px_36px_#101f2918] md:col-start-2 lg:-translate-y-[7%]">
            <Image src={visibleLooks[1].src} alt={visibleLooks[1].alt} fill sizes="(max-width: 640px) 18vw, 16vw" className="object-cover" />
            <span className="absolute top-2 left-2 rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[.08em] text-[#176d94] uppercase sm:text-[10px]">New!</span>
          </div>

          <div className="relative z-[1] col-start-2 h-[84%] self-center overflow-hidden rounded-[14px] bg-[#17538c] shadow-[0_19px_48px_#11314b35] sm:h-[92%] md:col-start-3">
            <Image src="/images/company-fashion-hero.webp" alt="Model in a pink blouse holding a cobalt blue handbag" fill priority sizes="(max-width: 640px) 30vw, 24vw" className="object-cover object-center" />
          </div>

          <div className="relative col-start-3 h-[66%] self-center overflow-hidden rounded-[12px] bg-[#dcebf1] shadow-[0_12px_36px_#101f2918] md:col-start-4 lg:-translate-y-[2%]">
            <Image src={visibleLooks[2].src} alt={visibleLooks[2].alt} fill sizes="(max-width: 640px) 18vw, 16vw" className="object-cover" />
          </div>

          <div className="relative col-start-5 hidden h-[45%] self-center overflow-hidden rounded-[12px] bg-[#dcebf1] shadow-[0_12px_36px_#101f2918] md:block lg:translate-y-[12%]">
            <Image src={visibleLooks[3].src} alt={visibleLooks[3].alt} fill sizes="(max-width: 640px) 18vw, 16vw" className="object-cover" />
          </div>

          <p className="absolute top-3 right-0 hidden max-w-[120px] text-[10px] leading-[1.2] font-bold tracking-[-.025em] uppercase md:block lg:top-[7%] lg:right-[1%]">The trend that you never see again</p>
        </div>

        <div className="relative z-10 mt-5 grid items-end gap-5 sm:grid-cols-[1fr_auto_1fr] lg:mt-2">
          <div className="flex items-start gap-3 sm:justify-self-start">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#299ecc] text-[11px] font-bold text-white">{activeLook + 1}</span>
            <div>
              <p className="max-w-[160px] text-xs leading-[1.25] font-semibold sm:text-sm">Always be updated in Fashion</p>
              <div className="mt-3 flex gap-1.5" aria-label={`Look ${activeLook + 1} of ${looks.length}`}>
                {looks.map((_, index) => <span key={index} className={`h-[2px] w-7 ${index === activeLook ? "bg-[#24313a]" : "bg-[#cbd7da]"}`} />)}
              </div>
            </div>
          </div>

          <Link href="#about-company" className="hidden items-center gap-2 rounded-full border border-[#d9e0e2] bg-white px-4 py-2 text-[11px] font-medium transition-colors hover:border-[#299ecc] hover:text-[#177da7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#299ecc] sm:inline-flex">
            <span aria-hidden="true" className="flex h-4 w-2.5 items-center justify-center rounded-full border border-current text-[9px]">↓</span>Scroll for More
          </Link>

          <div className="flex items-center justify-between gap-4 sm:justify-self-end">
            <div className="max-w-[190px] text-[10px] leading-[1.4] text-[#65717a] sm:text-[11px]">
              <p>Ideas made to move the world forward.</p>
              <p className="mt-1 font-semibold text-[#1d2b32]">Capyngen Private Limited</p>
            </div>
            <button type="button" onClick={() => setActiveLook((current) => (current + 1) % looks.length)} aria-label="Show next fashion look" className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d9e0e2] bg-white text-lg transition-colors hover:border-[#299ecc] hover:bg-[#e8f6fb] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#299ecc]">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
