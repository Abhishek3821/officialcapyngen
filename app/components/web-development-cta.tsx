import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentCta() {
  return (
    <section id="web-development-cta" aria-labelledby="web-development-cta-heading" className="overflow-hidden bg-[#fff8ef] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="relative isolate mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-10 overflow-hidden rounded-[28px] bg-[#1c3b65] px-7 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[520px] rounded-full bg-[#6799d1]/20 blur-3xl" />
        <div>
          <p className="text-[11px] font-medium tracking-[.16em] text-[#b6d1ed] uppercase">Your next chapter starts here</p>
          <h2 id="web-development-cta-heading" className="mt-5 max-w-[600px] text-[clamp(38px,4.8vw,72px)] leading-[1.02] font-medium tracking-[-.055em]">Have a big idea?<br /><span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#d5ebac]">Let’s build it.</span></h2>
          <p className="mt-6 max-w-[440px] text-sm leading-[1.75] text-[#d4dfed] sm:text-base">Turn your vision into a website people remember. Let’s create something thoughtful, responsive and unmistakably yours.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#d5ebac] px-6 py-3 text-sm font-semibold text-[#183451] transition-colors hover:bg-[#e5f4cd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start Your Project <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            <Link href="/#work" className="rounded-sm py-2 text-sm text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-[#d5ebac] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore our work</Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto w-full max-w-[560px] py-4 select-none lg:py-6">
          <div className="absolute inset-3 translate-x-3 translate-y-3 rotate-[4deg] rounded-[18px] border border-white/25 bg-[#86b4e1]/25 sm:translate-x-4 sm:translate-y-4" />
          <div className="relative -rotate-2 overflow-hidden rounded-[16px] border border-white/30 bg-[#fff8ef] text-[#273343] shadow-[0_22px_60px_#07182c55]">
            <div className="flex h-9 items-center gap-1.5 border-b border-[#e1dcd4] bg-[#f0ece6] px-4"><span className="size-1.5 rounded-full bg-[#dca59a]" /><span className="size-1.5 rounded-full bg-[#dec78f]" /><span className="size-1.5 rounded-full bg-[#a8c7a1]" /><span className="mx-auto rounded bg-white/70 px-8 py-1 text-[8px] text-[#7e858b]">Your next great website</span></div>
            <div className="flex items-center justify-between px-5 pt-5 text-[7px] tracking-wider sm:px-7 sm:text-[8px]"><span className="font-bold">CAPYNGEN / DIGITAL STUDIO</span><span>DESIGN. DEVELOP. LAUNCH.</span></div>
            <div className="grid grid-cols-[1.2fr_1fr] gap-4 p-5 sm:gap-6 sm:p-7">
              <div className="flex flex-col items-start justify-center"><span className="text-[8px] tracking-wider text-[#778675]">MADE FOR WHAT’S NEXT</span><p className="mt-3 text-[clamp(22px,2.8vw,40px)] leading-[1.02] tracking-[-.06em]">Built around<br />your next<br /><span className="font-serif italic text-[#49749b]">big idea.</span></p><span className="mt-5 rounded-full bg-[#253d51] px-3 py-2 text-[8px] text-white">Discover the possibilities ↗</span></div>
              <div className="relative aspect-[.78] overflow-hidden rounded-t-[70px] rounded-b-lg bg-[#a9bed7]"><Image src="/images/web-development/portrait.webp" alt="" fill sizes="(max-width: 1023px) 40vw, 230px" className="object-cover" /></div>
            </div>
            <div className="flex justify-between gap-3 border-t border-[#e5ddd1] px-5 py-4 text-[7px] tracking-[.08em] text-[#717c83] sm:px-7 sm:text-[8px]"><span>THOUGHTFUL DESIGN</span><span>SEAMLESS DEVELOPMENT</span><span>EVERY SCREEN</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
