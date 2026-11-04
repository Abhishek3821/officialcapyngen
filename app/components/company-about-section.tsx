import Image from "next/image";
import Link from "next/link";

const profilePoints = [
  { number: "01", title: "Company Background", description: "Capyngen brings strategy, design, and technology together to create digital experiences with purpose." },
  { number: "02", title: "Business Sector", description: "Our work spans web development, design, digital marketing, and emerging technologies." },
  { number: "03", title: "Operational Scale", description: "From first concept to launch, we support every stage of a brand’s digital journey." },
];

export default function CompanyAboutSection() {
  return (
    <section id="about-company" aria-labelledby="about-company-heading" className="bg-[#f2f7f9] text-[#202a30]">
      <div className="mx-auto flex max-w-[1700px] flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-10 lg:py-8 2xl:px-14">
        <div className="grid items-stretch gap-5 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-7 xl:grid-cols-[minmax(0,.95fr)_minmax(0,1.1fr)_minmax(0,.95fr)]">
          <div className="flex flex-col items-start justify-center py-3 md:py-6 xl:pr-3">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold tracking-[.2em] text-[#218fb7] uppercase sm:mb-10">
              <span className="h-px w-9 bg-[#218fb7]" aria-hidden="true" /> Who we are
            </div>
            <h2 id="about-company-heading" className="text-[clamp(48px,5.4vw,86px)] leading-[.88] font-bold tracking-[-.075em] uppercase">
              <span className="block">About</span>
              <span className="mt-2 block text-[#299ecc]">Company</span>
            </h2>
            <div className="mt-8 max-w-[430px] border-l-[3px] border-[#299ecc] pl-5 sm:mt-11">
              <h3 className="text-lg font-semibold tracking-[-.035em] sm:text-xl">Built around better ideas.</h3>
              <p className="mt-3 text-sm leading-[1.75] text-[#667780] sm:text-base">We craft meaningful digital experiences through thoughtful strategy, creative design, and technology that helps brands grow.</p>
            </div>
            <Link href="/contact-us" className="mt-9 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#202a30] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#217e9f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#299ecc] sm:mt-11">
              Let&apos;s work together <span aria-hidden="true" className="text-lg font-normal">↗</span>
            </Link>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-[#dde9ee] shadow-[0_24px_70px_#1c425321] md:min-h-[560px] lg:min-h-[610px] xl:h-[min(73vh,700px)] xl:min-h-[560px]">
            <Image src="/images/company-about-office-v2.webp" alt="Three colleagues smiling together over a laptop in a bright office" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 38vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#102733a8] to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/20 px-4 py-2 text-[11px] font-semibold tracking-[.08em] text-white uppercase backdrop-blur-md sm:bottom-7 sm:left-7">People · Purpose · Progress</div>
          </div>

          <div id="about-company-points" className="flex flex-col justify-center rounded-[24px] border border-[#dce8ed] bg-white p-6 shadow-[0_15px_50px_#1d4f6210] sm:p-8 md:col-span-2 xl:col-span-1 xl:px-7 xl:py-8 2xl:px-10">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#299ecc] uppercase">What defines us</p>
            <h3 className="mt-3 mb-3 text-[clamp(23px,2.2vw,34px)] leading-[1.12] font-semibold tracking-[-.055em]">One team. Many ways to make an impact.</h3>
            <div className="mt-2 grid gap-0 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-1">
              {profilePoints.map((point) => (
                <article key={point.number} className="flex items-start gap-4 border-t border-[#e6edef] py-5 first:border-t-0 sm:gap-3 sm:border-t-0 sm:border-l sm:px-4 sm:first:border-l-0 sm:first:pl-0 md:gap-4 xl:border-t xl:border-l-0 xl:px-0 xl:first:border-t-0">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#e9f5f9] text-sm font-bold text-[#218fb7]">{point.number}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm leading-tight font-semibold tracking-[-.025em] sm:text-base">{point.title}</h4>
                    <p className="mt-2 text-xs leading-[1.6] text-[#71818a] sm:text-[13px]">{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 border-t border-[#e6edef] pt-5 text-xs font-medium text-[#71818a]">
              <span className="size-2 rounded-full bg-[#299ecc]" aria-hidden="true" /> Capyngen Private Limited
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
