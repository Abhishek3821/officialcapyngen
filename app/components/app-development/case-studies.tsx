import type { ReactNode } from "react";
import Image from "next/image";

function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="text-[10px] font-bold tracking-[.2em] text-[#2d80a8] uppercase">{children}</span>;
}

export function AppAirlineCaseStudy() {
  return (
    <section id="app-features" aria-labelledby="app-airline-heading" className="overflow-hidden bg-white text-[#17232a]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-7 px-5 py-16 sm:px-8 lg:min-h-[650px] lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.05fr)_minmax(0,.48fr)_minmax(0,.78fr)] lg:gap-4 lg:px-12 lg:py-14">
        <div className="max-w-[390px] lg:pr-4">
          <SectionLabel>Your technology partner</SectionLabel>
          <h2 id="app-airline-heading" className="mt-3 text-[clamp(38px,3.4vw,58px)] leading-[.92] font-bold tracking-[-.06em] text-[#205c83] uppercase">Features<br /><span className="font-serif font-normal text-[#202930] normal-case">of a Top App Development Company in India</span></h2>
          <p className="mt-6 text-sm leading-[1.65] text-[#60737c]">Capyngen is your technology partner for building engaging mobile and web applications. As Android and iOS app developers and experts in modern web, we create the technology for your idea to go digital.</p>
        </div>
        <div className="relative aspect-[3/2] min-w-0 sm:aspect-auto sm:h-[490px] lg:col-span-3 lg:h-[520px]">
          <Image src="/app development/6.png" alt="App design, coding, testing, and mobile product development" fill sizes="(max-width: 1023px) 90vw, 68vw" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export function AppResortCaseStudy() {
  return (
    <section id="app-why-choose" aria-labelledby="app-resort-heading" className="overflow-hidden bg-[#dfe9dc] text-[#26382d]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[700px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-14 lg:px-12">
        <div className="relative aspect-[1457/1079] sm:aspect-auto sm:h-[550px]">
          <Image src="/app development/16.png" alt="The Capyngen office, developers, and project collaboration" fill sizes="(max-width: 1023px) 90vw, 55vw" className="object-contain" />
        </div>
        <div className="max-w-[490px]">
          <p className="text-[11px] font-bold tracking-[.2em] text-[#657767] uppercase">Capyngen</p>
          <h2 id="app-resort-heading" className="mt-3 text-[clamp(42px,4.4vw,72px)] leading-[.9] font-bold tracking-[-.065em] uppercase">Why Choose<br /><span className="font-serif font-normal normal-case">Capyngen as a Leading App Development Company in India?</span></h2>
          <p className="mt-7 text-sm leading-[1.75] text-[#53675a] sm:text-base">Capyngen has successfully shipped working apps in industries and on platforms. We build with your users in mind, not templates. Long-term support after launch.</p>
          <ul className="mt-7 space-y-2 text-xs font-semibold tracking-[.04em] uppercase sm:text-sm"><li>+ 1. Proven Delivery</li><li>+ 2. Native Expertise</li><li>+ 3. Transparent Process</li></ul>
        </div>
      </div>
    </section>
  );
}

export function AppBaliCaseStudy() {
  return (
    <section id="app-why-us" aria-labelledby="app-bali-heading" className="overflow-hidden bg-white text-[#17232a]">
      <div className="mx-auto grid max-w-[1550px] items-center gap-7 px-5 py-16 sm:px-8 lg:min-h-[690px] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.12fr)_minmax(0,.48fr)_minmax(0,.76fr)] lg:gap-4 lg:px-12">
        <div className="max-w-[390px] lg:pr-4">
          <SectionLabel>Gurugram, Haryana</SectionLabel>
          <h2 id="app-bali-heading" className="mt-3 text-[clamp(38px,3.4vw,58px)] leading-[.9] font-bold tracking-[-.06em] text-[#205c83] uppercase">Why choose us<br /><span className="font-serif font-normal text-[#202930] normal-case">among the best app development companies?</span></h2>
          <p className="mt-6 text-sm leading-[1.7] text-[#60737c]">For companies looking for the best app development company, we bring technical expertise, transparency, and results for our clients.</p>
          <ul className="mt-6 space-y-2 text-xs font-semibold tracking-[.02em] text-[#2d3e47] uppercase"><li>+ Technical expertise</li><li>+ Transparency</li><li>+ Results for our clients</li></ul>
        </div>
        <div className="relative aspect-[1738/905] min-w-0 sm:aspect-auto sm:h-[490px] lg:col-span-3 lg:h-[520px]">
          <Image src="/app development/18.png" alt="Mobile app interfaces and the app development workflow" fill sizes="(max-width: 1023px) 90vw, 68vw" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
