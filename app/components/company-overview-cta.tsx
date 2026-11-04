import Image from "next/image";
import Link from "next/link";

export default function CompanyOverviewCta() {
  return (
    <section aria-labelledby="company-cta-heading" className="bg-[#f8fbfc] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="relative mx-auto grid max-w-[1490px] items-center gap-8 overflow-hidden rounded-[30px] bg-[linear-gradient(120deg,#14232e_0%,#1d536d_62%,#258eb9_100%)] px-6 py-10 text-white shadow-[0_28px_70px_#183b4d25] sm:px-10 sm:py-14 lg:min-h-[540px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-10 lg:rounded-[38px] lg:px-16 lg:py-16">
        <div aria-hidden="true" className="absolute -top-32 right-[8%] size-[360px] rounded-full bg-[#6fd3ed]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-28 size-[420px] rounded-full bg-[#2d9cc5]/20 blur-3xl" />

        <div className="relative z-10 max-w-[690px]">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[.2em] text-[#a8e8f5] uppercase"><span className="h-px w-9 bg-[#a8e8f5]" aria-hidden="true" /> Let&apos;s create together</p>
          <h2 id="company-cta-heading" className="text-[clamp(38px,4.4vw,68px)] leading-[1.03] font-semibold tracking-[-.065em]">Your next big idea deserves a brilliant digital future.</h2>
          <p className="mt-6 max-w-[540px] text-sm leading-[1.75] text-white/75 sm:text-base">Tell us what you&apos;re building. We&apos;ll bring the strategy, design, and technology to help make it real.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173d52] transition-colors hover:bg-[#dcf5fb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7">
              Start a conversation <span aria-hidden="true" className="text-lg font-normal">↗</span>
            </Link>
            <Link href="/web-development" className="inline-flex min-h-12 items-center justify-center border-b border-white/50 px-1 text-sm font-medium text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore our work</Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-[280px] w-full max-w-[430px] items-center justify-center sm:h-[350px] lg:h-[400px]">
          <div aria-hidden="true" className="absolute size-[265px] rounded-full border border-white/15 sm:size-[350px]" />
          <div aria-hidden="true" className="absolute size-[205px] rounded-full border border-white/20 sm:size-[275px]" />
          <div aria-hidden="true" className="absolute top-[9%] right-[7%] size-3 rounded-full bg-[#a8e8f5] shadow-[0_0_26px_#a8e8f5]" />
          <div aria-hidden="true" className="absolute bottom-[12%] left-[8%] size-2 rounded-full bg-white/80 shadow-[0_0_24px_#fff]" />

          <div className="relative w-[78%] rotate-[-5deg] rounded-[24px] border border-white/60 bg-white px-6 py-7 text-[#24333b] shadow-[0_30px_65px_#091e2980] backdrop-blur-xl sm:px-8 sm:py-9">
            <div className="flex items-center justify-between border-b border-[#dce9ef] pb-3 text-[9px] font-bold tracking-[.18em] text-[#66828f] uppercase sm:text-[10px]"><span>Capyngen</span><span>Digital / 2026</span></div>
            <Image src="/images/capyngen-logo.png" alt="Capyngen Private Limited" width={500} height={300} sizes="(max-width: 640px) 200px, 270px" className="mx-auto mt-2 h-28 w-auto object-contain sm:h-36" />
            <p className="border-t border-[#dce9ef] pt-4 text-center text-xs font-semibold tracking-[.04em] sm:text-sm">Strategy. Design. Technology.</p>
          </div>
          <div className="absolute right-0 bottom-3 rotate-[5deg] rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[10px] font-semibold tracking-[.08em] text-white uppercase backdrop-blur-md sm:bottom-6 sm:text-xs">From idea to launch ↗</div>
        </div>
      </div>
    </section>
  );
}
