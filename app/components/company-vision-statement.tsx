import Image from "next/image";

const visionPillars = [
  { number: "01", title: "Our Mission", description: "Our mission is to develop reliable, user-focused, and scalable technology solutions that address real business challenges. We aim to combine innovation with practical functionality so businesses can manage their operations more efficiently." },
  { number: "02", title: "How We Deliver", description: "Through continuous development and improvement, we strive to deliver software products and digital platforms that support business productivity and growth." },
];

export default function CompanyVisionStatement() {
  return (
    <section id="vision-statement" aria-labelledby="vision-statement-heading" className="bg-[#f8fbfc] text-[#202a30]">
      <div className="mx-auto flex max-w-[1570px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:px-12 lg:py-12 2xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-14">
          <div className="relative order-2 h-[290px] overflow-hidden rounded-[22px] bg-[#dce8ef] sm:h-[370px] lg:order-1 lg:h-[min(52vh,470px)] lg:min-h-[360px]">
            <Image src="/images/company-vision-statement.webp" alt="Capyngen vision for innovative and practical digital solutions" fill sizes="(max-width: 1023px) 100vw, 53vw" className="object-cover object-[center_45%]" />
          </div>
          <div className="order-1 lg:order-2 lg:pb-12">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.2em] text-[#258fb9] uppercase"><span className="h-px w-8 bg-[#258fb9]" aria-hidden="true" /> Our vision &amp; mission</p>
            <h2 id="vision-statement-heading" className="text-[clamp(46px,5.4vw,86px)] leading-[.92] font-bold tracking-[-.07em] uppercase">Vision</h2>
            <p className="mt-6 max-w-[500px] text-sm leading-[1.7] text-[#687b85] sm:text-base">Our vision is to become a trusted technology company known for developing innovative and practical digital solutions. We aim to create software products that help businesses work smarter, simplify their processes, and adapt to an increasingly digital business environment.</p>
            <p className="mt-4 max-w-[500px] text-sm leading-[1.7] text-[#687b85] sm:text-base">We see technology as an important part of business development and continuously work towards building solutions that create long-term value.</p>
          </div>
        </div>

        <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:-mt-10 lg:gap-5">
          {visionPillars.map((pillar, index) => (
            <article key={pillar.number} className={`flex min-h-[190px] flex-col justify-between rounded-[18px] p-6 text-white shadow-[0_16px_36px_#172a3b24] sm:min-h-[205px] sm:p-7 ${index % 2 === 0 ? "bg-[#202a30]" : "bg-[#299ecc]"}`}>
              <span className="text-2xl leading-none font-semibold tracking-[-.05em]">{pillar.number}</span>
              <div>
                <h3 className="text-xl leading-tight font-semibold tracking-[-.03em] sm:text-2xl">{pillar.title}</h3>
                <p className="mt-2 max-w-[560px] text-sm leading-[1.6] text-white/80">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
