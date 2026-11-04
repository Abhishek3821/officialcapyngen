import Image from "next/image";
import Link from "next/link";

import WebDevelopmentGallery from "./web-development-gallery";

export default function WebDevelopmentHero() {
  return (
    <section id="web-development-hero" data-nav-theme="light" aria-labelledby="web-development-heading" className="grid w-full grid-cols-1 overflow-hidden bg-white md:min-h-[max(620px,calc(100svh_-_var(--site-header-height)))] md:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
      <div className="flex min-w-0 flex-col justify-center px-6 pt-12 pb-10 sm:px-9 md:pt-8 md:pr-10 md:pb-10 md:pl-[max(32px,calc((100vw_-_1440px)/2))] lg:pr-10">
        <h1 id="web-development-heading" className="max-w-[820px] text-[clamp(38px,5vw,72px)] leading-[1.13] font-semibold tracking-[-.045em] text-[#181b19]">
          <span className="block">Turn Your Ideas</span>
          <span className="block">into Stunning</span>
          <span className="block">Websites That Work</span>
        </h1>
        <p className="mt-6 max-w-[620px] text-sm leading-[1.65] tracking-[-.01em] text-[#858884] lg:mt-7 lg:text-[17px]">
          Tell us what you have in mind. We’ll turn it into a fast, responsive website that looks great and works beautifully on every screen.
        </p>
        <div className="mt-7 flex shrink-0 flex-wrap items-center gap-3 lg:mt-8">
          <Link href="/contact-us#quote" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1c1e1c] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3b4439] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1e1c] lg:min-h-[54px] lg:px-7">Start Your Project</Link>
          <Link href="/#work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e2e5de] bg-white px-6 py-3.5 text-sm font-medium text-[#242823] transition-colors hover:border-[#b9c2b2] hover:bg-[#f8f9f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1e1c] lg:min-h-[54px] lg:px-7">Explore Our Work</Link>
        </div>
        <div className="mt-9 flex shrink-0 items-center gap-4 md:mt-[clamp(36px,7svh,76px)]">
          <div className="flex shrink-0 -space-x-3" aria-hidden="true">{[1, 2, 3, 4].map((client) => <Image key={client} src={`/images/client-${client}.jpg`} alt="" width={40} height={40} className="size-9 rounded-full border-[3px] border-white object-cover lg:size-10" />)}</div>
          <p className="max-w-[285px] text-xs leading-[1.6] text-[#8b8e88] lg:text-sm">From your first idea to your next launch.<br /><span className="font-medium text-[#626b5f]">Designed and developed by Capyngen.</span></p>
        </div>
      </div>

      <div className="relative min-w-0 md:min-h-0">
        <div className="md:absolute md:inset-0">
          <WebDevelopmentGallery />
        </div>
      </div>
    </section>
  );
}
