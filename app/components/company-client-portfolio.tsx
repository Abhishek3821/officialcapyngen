import Image from "next/image";
import Link from "next/link";

export default function CompanyClientPortfolio() {
  return (
    <section id="client-portfolio" aria-labelledby="client-portfolio-heading" className="overflow-hidden border-t border-white/10 bg-[#252a30] text-white">
      <div className="mx-auto grid max-w-[1560px] gap-9 px-5 py-14 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,.93fr)_minmax(0,1.07fr)] lg:items-center lg:gap-8 lg:px-12 lg:py-10 2xl:px-16">
        <div className="relative z-10 flex min-w-0 flex-col lg:min-h-[570px] lg:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[.22em] text-[#7dd0e9] uppercase">A SaaS product brand by Capyngen</p>
            <h2 id="client-portfolio-heading" className="max-w-[600px] text-[clamp(46px,5.5vw,86px)] leading-[.91] font-bold tracking-[-.07em] uppercase">Orinite</h2>
          </div>

          <div className="relative -mx-5 mt-9 bg-[#238fb8] px-5 py-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-0 lg:bg-transparent lg:px-0 lg:py-7 lg:before:absolute lg:before:inset-y-0 lg:before:right-[-100vw] lg:before:left-[-100vw] lg:before:-z-10 lg:before:bg-[#238fb8]">
            <p className="max-w-[540px] text-sm leading-[1.6] font-medium text-white sm:text-base">Orinite is an independent SaaS product brand owned, developed, managed, and operated by Capyngen Private Limited.</p>
          </div>

          <div className="mt-9 lg:mt-0">
            <p className="mb-6 max-w-[560px] text-sm leading-[1.65] text-[#b9c4c9] sm:text-base">Under the Orinite brand, we offer business management solutions designed to help organisations manage important business activities through technology. Our current product offerings include:</p>
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
            <article className="border-t border-white/25 pt-5">
              <span aria-hidden="true" className="mb-3 block text-2xl leading-none text-[#80d3eb]">⌁</span>
              <h3 className="text-lg font-semibold tracking-[-.03em]">Orinite HRMS</h3>
              <p className="mt-2 max-w-[300px] text-sm leading-[1.6] text-[#b9c4c9]">Orinite HRMS is designed to support human resource management activities and help businesses organise employee-related processes. It provides a digital approach to managing HR operations and supporting workforce administration.</p>
            </article>
            <article className="border-t border-white/25 pt-5">
              <span aria-hidden="true" className="mb-3 block text-2xl leading-none text-[#80d3eb]">✦</span>
              <h3 className="text-lg font-semibold tracking-[-.03em]">Orinite CRM</h3>
              <p className="mt-2 max-w-[300px] text-sm leading-[1.6] text-[#b9c4c9]">Orinite CRM focuses on helping businesses manage customer relationships, organise sales activities, and maintain better visibility into customer interactions. It supports businesses in managing customer-related information and sales processes.</p>
            </article>
            </div>
            <p className="mt-7 max-w-[600px] border-l-2 border-[#80d3eb] pl-4 text-xs leading-[1.65] text-[#9fadb4] sm:text-[13px]">All intellectual property rights, product development, technology management, and commercial operations of Orinite are held by Capyngen Private Limited, subject to applicable third-party licences.</p>
            <Link href="/our-products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#80d3eb] hover:text-white">Explore our products <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="relative z-20 h-[360px] min-w-0 sm:h-[470px] lg:h-[min(76vh,650px)] lg:min-h-[530px]">
          <div className="absolute top-0 right-[6%] h-[47%] w-[53%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0005]">
            <Image src="/images/inside-stories/careers.webp" alt="Teams using Orinite business management solutions" fill sizes="(max-width: 1023px) 50vw, 30vw" className="object-cover object-center" />
          </div>
          <div className="absolute top-[23%] left-0 h-[52%] w-[65%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0007]">
            <Image src="/images/company-about-office.webp" alt="Orinite HRMS supporting HR operations" fill sizes="(max-width: 1023px) 60vw, 35vw" className="object-cover object-[center_42%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-[44%] w-[54%] overflow-hidden rounded-[18px] border-[5px] border-[#252a30] bg-[#d9e5e9] shadow-[0_18px_45px_#0007]">
            <Image src="/images/company-overview-meeting.webp" alt="Orinite CRM supporting customer relationships" fill sizes="(max-width: 1023px) 50vw, 30vw" className="object-cover object-[center_46%]" />
          </div>
          <div className="absolute right-[47%] bottom-[10%] flex size-12 items-center justify-center rounded-full border border-white/20 bg-[#238fb8] shadow-lg sm:size-14" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="size-6"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
