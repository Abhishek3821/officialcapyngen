import Image from "next/image";

const stages = [
  { label: "Discover", height: 35 },
  { label: "Design", height: 51 },
  { label: "Build", height: 68 },
  { label: "Scale", height: 88 },
];

export default function CompanyBusinessOverview() {
  return (
    <section id="business-overview" aria-labelledby="business-overview-heading" className="bg-[#171d23] text-white">
      <div className="mx-auto grid max-w-[1640px] gap-10 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.82fr)_minmax(0,.78fr)] lg:items-center lg:gap-8 lg:px-12 lg:py-12 2xl:gap-12 2xl:px-16">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.22em] text-[#72c9e9] uppercase"><span className="h-px w-9 bg-[#72c9e9]" aria-hidden="true" /> Capyngen at a glance</p>
          <h2 id="business-overview-heading" className="text-[clamp(47px,5.2vw,82px)] leading-[.94] font-bold tracking-[-.07em] uppercase">
            Business<br /><span className="text-[#55bde1]">Overview</span>
          </h2>
          <p className="mt-6 max-w-[410px] text-sm leading-[1.7] text-[#b6c4cb] sm:text-base">Connecting strategy, design, and technology to turn ambitious ideas into useful digital experiences.</p>

          <div className="mt-10 max-w-[475px] border-t border-white/15 pt-6 sm:mt-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-[.12em] text-[#aab9c1] uppercase">Our approach</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-.045em] sm:text-3xl">From idea to impact</p>
              </div>
              <span className="rounded-full border border-[#62c4e4]/35 px-3 py-1 text-xs font-semibold text-[#87d5ed]">04 stages</span>
            </div>
            <div className="mt-7 grid h-[205px] grid-cols-4 items-end gap-4 border-b border-white/20 sm:h-[235px] sm:gap-7" aria-label="Discover, design, build, and scale are the four stages of our approach">
              {stages.map((stage) => (
                <div key={stage.label} className="flex h-full flex-col justify-end gap-3">
                  <div className="relative flex-1">
                    <div className="absolute right-1 bottom-0 left-0 rounded-t-[5px] bg-white/90" style={{ height: `${stage.height}%` }} />
                    <div className="absolute right-0 bottom-0 w-[42%] rounded-t-[5px] bg-[#299ecc]" style={{ height: `${Math.max(stage.height - 12, 18)}%` }} />
                  </div>
                  <span className="pb-3 text-center text-[10px] font-medium tracking-[.03em] text-[#b8c7cf] sm:text-xs">{stage.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-[#34434c] sm:h-[270px] lg:h-[min(33vh,310px)] lg:min-h-[220px]">
            <Image src="/images/company-about-office.webp" alt="Colleagues discussing a project at a table" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 29vw" className="object-cover object-[center_40%]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101820a8] to-transparent" aria-hidden="true" />
            <span className="absolute bottom-4 left-5 text-[11px] font-semibold tracking-[.16em] uppercase">Think together</span>
          </div>
          <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-[#34434c] sm:h-[270px] lg:h-[min(33vh,310px)] lg:min-h-[220px]">
            <Image src="/images/company-overview-meeting.webp" alt="Team members reviewing digital work on laptops" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 29vw" className="object-cover object-[center_52%]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101820a8] to-transparent" aria-hidden="true" />
            <span className="absolute bottom-4 left-5 text-[11px] font-semibold tracking-[.16em] uppercase">Build with purpose</span>
          </div>
        </div>

        <div className="grid min-w-0 gap-7 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
          <article className="relative border-t border-white/20 pt-6">
            <div className="mb-5 flex size-12 items-center justify-center rounded-[14px] bg-[#299ecc] text-white">
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.8" /><path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-xl font-semibold tracking-[-.035em] sm:text-2xl">Business Sector</h3>
            <p className="mt-3 max-w-[340px] text-sm leading-[1.65] text-[#b2c0c7]">Digital services across web development, design, marketing, and emerging technology.</p>
            <p className="mt-5 text-sm font-semibold text-[#73cdec]">Strategy · Creativity · Technology</p>
          </article>
          <article className="relative border-t border-white/20 pt-6">
            <div className="mb-5 flex size-12 items-center justify-center rounded-[14px] bg-[#299ecc] text-white">
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true"><path d="M4 19V5m0 14h16M8 15l4-4 3 2 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="text-xl font-semibold tracking-[-.035em] sm:text-2xl">Products &amp; Services</h3>
            <p className="mt-3 max-w-[340px] text-sm leading-[1.65] text-[#b2c0c7]">Connected digital solutions shaped around the needs of each business and its customers.</p>
            <p className="mt-5 text-sm font-semibold text-[#73cdec]">From first concept to launch</p>
          </article>
        </div>
      </div>
    </section>
  );
}
