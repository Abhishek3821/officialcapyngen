import Image from "next/image";

const values = [
  { number: "03", title: "Quality", description: "We give importance to product functionality, usability, and continuous improvement." },
  { number: "04", title: "Customer Focus", description: "We consider business needs and user requirements while developing our solutions." },
  { number: "05", title: "Growth", description: "We believe in learning, adapting, and improving with changing technology and business needs." },
];

export default function CompanyCoreValues() {
  return (
    <section id="core-values" aria-labelledby="core-values-heading" className="bg-white text-[#202a30]">
      <div className="mx-auto grid max-w-[1580px] gap-12 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-12 2xl:px-16">
        <div className="min-w-0">
          <p className="mb-3 text-[11px] font-bold tracking-[.2em] text-[#299ecc] uppercase">What guides us</p>
          <h2 id="core-values-heading" className="text-[clamp(44px,5vw,78px)] leading-none font-bold tracking-[-.065em] uppercase">
            Our Core <span className="text-[#299ecc]">Values</span>
          </h2>
          <div className="relative mt-8 pb-14 sm:mt-10 sm:pb-16">
            <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[#dce8ed] sm:h-[430px] lg:h-[min(51vh,500px)] lg:min-h-[340px]">
              <Image src="/images/company-overview-meeting.webp" alt="Capyngen team discussing new ideas and technologies" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_46%]" />
            </div>
            <div className="absolute right-4 bottom-0 left-4 grid grid-cols-2 gap-3 sm:right-8 sm:left-8 sm:gap-5">
              <article className="min-h-[112px] rounded-[18px] bg-[#202a30] px-4 py-4 text-white shadow-[0_14px_30px_#14242d26] sm:min-h-[130px] sm:px-6 sm:py-5">
                <span aria-hidden="true" className="mb-2 block text-xl leading-none text-[#7ed5f0]">✧</span>
                <h3 className="text-base font-semibold sm:text-lg">Innovation</h3>
                <p className="mt-1 text-[11px] leading-[1.45] text-white/70 sm:text-xs">We explore new ideas and technologies to develop meaningful digital solutions.</p>
              </article>
              <article className="min-h-[112px] rounded-[18px] bg-[#299ecc] px-4 py-4 text-white shadow-[0_14px_30px_#14577526] sm:min-h-[130px] sm:px-6 sm:py-5">
                <span aria-hidden="true" className="mb-2 block text-xl leading-none text-white">✦</span>
                <h3 className="text-base font-semibold sm:text-lg">Reliability</h3>
                <p className="mt-1 text-[11px] leading-[1.45] text-white/85 sm:text-xs">We focus on building dependable products that address business requirements.</p>
              </article>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:pt-14">
          <p className="max-w-[480px] text-base leading-[1.65] text-[#687984] sm:text-lg">The way we develop products and work with technology is guided by a few important values:</p>
          <div className="mt-6 border-t border-[#dfe8ec] sm:mt-9">
            {values.map((value) => (
              <article key={value.number} className="grid grid-cols-[52px_minmax(0,1fr)] gap-4 border-b border-[#dfe8ec] py-6 sm:grid-cols-[68px_minmax(0,1fr)] sm:gap-6 sm:py-7">
                <span className="text-[clamp(28px,3vw,43px)] leading-none font-semibold tracking-[-.06em] text-[#299ecc]">{value.number}</span>
                <div>
                  <h3 className="text-xl leading-tight font-semibold tracking-[-.035em] sm:text-2xl">{value.title}</h3>
                  <p className="mt-3 max-w-[480px] text-sm leading-[1.65] text-[#6c7c85] sm:text-base">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
