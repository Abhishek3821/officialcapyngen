import Image from "next/image";
import Link from "next/link";

const portraits = ["/images/client-1.jpg", "/images/client-2.jpg", "/images/client-3.jpg"];

export default function WebsiteDesignHero() {
  return (
    <section id="website-design-hero" aria-labelledby="website-design-heading" className="overflow-hidden bg-white text-[#1e2827]">
      <div className="mx-auto grid min-h-[calc(100svh_-_var(--site-header-height))] max-w-[1500px] gap-4 px-5 py-5 sm:gap-5 sm:px-8 lg:grid-cols-[1fr_1.04fr] lg:gap-6 lg:px-12 lg:py-8">
        <div className="flex flex-col justify-between rounded-[30px] bg-[#f4f5f2] px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e3efb7] px-4 py-2 text-[11px] font-semibold tracking-[.06em] text-[#526321] uppercase">
              <span className="size-1.5 rounded-full bg-[#87a928]" aria-hidden="true" /> Website Design
            </span>
            <h1 id="website-design-heading" className="mt-9 max-w-[630px] text-[clamp(42px,4.7vw,78px)] leading-[1.04] font-semibold tracking-[-.065em]">
              Websites made for every side of your business.
            </h1>
            <p className="mt-6 max-w-[530px] text-sm leading-[1.75] text-[#687370] sm:text-base">
              Clear, thoughtful design that helps people discover what you do, trust your brand, and take the next step with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#143f39] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#226056] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#143f39]">
                Get Started <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#work" className="inline-flex items-center gap-2 rounded-full border border-[#cdd6d0] bg-white px-6 py-3 text-sm font-semibold text-[#33433e] transition-colors hover:border-[#75988c] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#143f39]">
                Explore Our Work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-4 border-t border-[#dce1db] pt-6">
            <div className="flex shrink-0 -space-x-2" aria-hidden="true">
              {portraits.map((src) => <Image key={src} src={src} alt="" width={36} height={36} className="size-9 rounded-full border-2 border-[#f4f5f2] object-cover" />)}
            </div>
            <p className="max-w-[260px] text-xs leading-[1.5] text-[#67726d] sm:text-sm">Human-centered thinking in every page and interaction.</p>
          </div>
        </div>

        <div className="relative min-h-[400px] overflow-hidden rounded-[30px] bg-[#dbe9e9] sm:min-h-[550px] lg:min-h-0">
          <Image src="/images/e-commerce-solutions/team.webp" alt="Healthcare professionals working together" fill priority sizes="(max-width: 1023px) 100vw, 52vw" className="object-cover object-[54%_center]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#103b44]/15 via-transparent to-transparent" />
          <div className="absolute right-5 bottom-5 flex items-center gap-3 rounded-full border border-white/60 bg-white/95 px-4 py-3 shadow-[0_12px_30px_#204b4c25] backdrop-blur-sm sm:right-7 sm:bottom-7">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#e8f3ed] text-[#27825e]" aria-hidden="true">✦</span>
            <div><p className="text-xs font-semibold leading-none text-[#293b36]">Built with care</p><p className="mt-1 text-[10px] text-[#71817b]">People-first experiences</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
