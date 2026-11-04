import Image from "next/image";

export default function CompanyClientPortfolio() {
  return (
    <section id="client-portfolio" aria-labelledby="client-portfolio-heading" className="overflow-hidden border-t border-white/10 bg-[#252a30] text-white">
      <div className="mx-auto grid max-w-[1560px] gap-9 px-5 py-14 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,.93fr)_minmax(0,1.07fr)] lg:items-center lg:gap-8 lg:px-12 lg:py-10 2xl:px-16">
        <div className="relative z-10 flex min-w-0 flex-col lg:min-h-[570px] lg:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[.22em] text-[#7dd0e9] uppercase">The people we build for</p>
            <h2 id="client-portfolio-heading" className="max-w-[600px] text-[clamp(46px,5.5vw,86px)] leading-[.91] font-bold tracking-[-.07em] uppercase">Client<br />Portfolio</h2>
          </div>

          <div className="relative -mx-5 mt-9 bg-[#238fb8] px-5 py-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-0 lg:bg-transparent lg:px-0 lg:py-7 lg:before:absolute lg:before:inset-y-0 lg:before:right-[-100vw] lg:before:left-[-100vw] lg:before:-z-10 lg:before:bg-[#238fb8]">
            <p className="max-w-[540px] text-sm leading-[1.6] font-medium text-white sm:text-base">From emerging brands to established teams, we shape digital work around the people and goals behind every brief.</p>
          </div>

          <div className="mt-9 grid gap-7 sm:grid-cols-2 sm:gap-8 lg:mt-0">
            <article className="border-t border-white/25 pt-5">
              <span aria-hidden="true" className="mb-3 block text-2xl leading-none text-[#80d3eb]">⌁</span>
              <h3 className="text-lg font-semibold tracking-[-.03em]">Client Base</h3>
              <p className="mt-2 max-w-[260px] text-sm leading-[1.6] text-[#b9c4c9]">We work with ambitious teams at different stages of their digital journey.</p>
            </article>
            <article className="border-t border-white/25 pt-5">
              <span aria-hidden="true" className="mb-3 block text-2xl leading-none text-[#80d3eb]">✦</span>
              <h3 className="text-lg font-semibold tracking-[-.03em]">Client Categories</h3>
              <p className="mt-2 max-w-[260px] text-sm leading-[1.6] text-[#b9c4c9]">Partners across commerce, services, technology, and growing industries.</p>
            </article>
          </div>
        </div>

        <div className="relative z-20 h-[360px] min-w-0 sm:h-[470px] lg:h-[min(76vh,650px)] lg:min-h-[530px]">
          <div className="absolute top-0 right-[6%] h-[47%] w-[53%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0005]">
            <Image src="/images/inside-stories/careers.webp" alt="Professionals gathered for a group photograph" fill sizes="(max-width: 1023px) 50vw, 30vw" className="object-cover object-center" />
          </div>
          <div className="absolute top-[23%] left-0 h-[52%] w-[65%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0007]">
            <Image src="/images/company-about-office.webp" alt="Colleagues planning around a laptop" fill sizes="(max-width: 1023px) 60vw, 35vw" className="object-cover object-[center_42%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-[44%] w-[54%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0007]">
            <Image src="/images/company-overview-meeting.webp" alt="Professionals discussing ideas at a table" fill sizes="(max-width: 1023px) 50vw, 30vw" className="object-cover object-[center_46%]" />
          </div>
          <div className="absolute right-[47%] bottom-[10%] flex size-12 items-center justify-center rounded-full border border-white/20 bg-[#238fb8] shadow-lg sm:size-14" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="size-6"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
