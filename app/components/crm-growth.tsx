import Image from "next/image";

function Arrow() {
  return <svg viewBox="0 0 20 20" fill="none" className="size-3.5" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function CrmGrowth() {
  return (
    <section id="crm-growth" aria-labelledby="crm-growth-heading" className="overflow-hidden bg-white px-5 py-10 sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10 lg:gap-20">
          <h2 id="crm-growth-heading" className="text-[clamp(31px,4.2vw,60px)] leading-[1.12] font-normal tracking-[-.045em] text-[#161918]">
            <span className="block">Capyngen – Turning</span>
            <span className="block">Ideas into <span className="bg-linear-to-r from-[#427ee3] via-[#2c8d99] to-[#1e9f49] bg-clip-text text-transparent">Powerful Solutions</span></span>
          </h2>

          <div className="w-full max-w-[410px] md:justify-self-end md:pt-1">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-[#f5f6fb] py-1 pr-3 pl-1 text-[9px] text-[#5f6270] sm:text-[10px]">
              <span className="rounded-full bg-[#3154e4] px-3 py-1 text-[9px] font-medium text-white shadow-[0_2px_8px_rgb(49_84_228_/_0.2)]">Capyngen</span>
              <span>Next-Gen Digital Tech</span>
            </div>
            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.55] text-[#777b7a] lg:mt-5 lg:text-base">
              Capyngen helps businesses move forward with innovative technology and result-driven <span className="text-[#4d79cf]">digital solutions</span>. From custom software to AI, CRM, and marketing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 lg:mt-6">
              <a href="/#services" className="inline-flex items-center gap-7 rounded-full bg-[#6567ff] px-4 py-2.5 text-[10px] font-medium text-white transition-colors hover:bg-[#4b4ee7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6567ff] sm:text-xs lg:px-5">Know More<Arrow /></a>
              <a href="/#contact" className="inline-flex items-center gap-5 rounded-full border border-[#6567ff] px-4 py-2.5 text-[10px] font-medium text-[#6567ff] transition-colors hover:bg-[#f0f0ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6567ff] sm:text-xs lg:px-5">See It in Action<Arrow /></a>
            </div>
          </div>
        </div>

        <div className="relative mt-7 min-h-[180px] md:mt-6 md:aspect-[3.5] md:min-h-[240px] lg:mt-5">
          <div className="relative mx-auto flex min-h-[145px] w-full items-center justify-center md:absolute md:inset-y-0 md:left-[13%] md:w-[73%]">
            <Image src="/images/crm-infinity.webp" alt="A flowing chrome infinity ribbon with violet-blue highlights" width={1600} height={500} sizes="(max-width: 767px) 100vw, (max-width: 1440px) 73vw, 970px" className="h-auto max-h-[330px] w-full object-contain" />
          </div>
          <div className="mt-1 flex justify-between gap-4 text-[clamp(17px,2.2vw,30px)] leading-tight font-normal tracking-[-.04em] md:mt-0">
            <p className="bg-linear-to-r from-[#5083e8] to-[#249d52] bg-clip-text text-transparent md:absolute md:top-[45%] md:left-0">Smart Solutions</p>
            <p className="bg-linear-to-r from-[#5083e8] to-[#249d52] bg-clip-text text-transparent md:absolute md:right-0 md:bottom-[12%]">Long-Term Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}