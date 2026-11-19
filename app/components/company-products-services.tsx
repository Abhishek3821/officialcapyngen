import Image from "next/image";

const offerings = [
  { number: "01", title: "Proprietary Products", description: "Our portfolio includes proprietary software products and technology platforms developed and commercially operated by Capyngen Private Limited." },
  { number: "02", title: "Built for Business Functions", description: "We aim to build solutions that support different business functions and help organisations manage their operations through technology. Each product is developed with a focus on usability, functionality, and practical business requirements." },
  { number: "03", title: "Continuous Improvement", description: "We continuously work on improving our technology platforms to keep them aligned with evolving business needs and industry developments." },
];

export default function CompanyProductsServices() {
  return (
    <section id="company-products-services" aria-labelledby="company-products-services-heading" className="bg-[#20272d] text-white">
      <div className="bg-[#238fb8] px-5 py-5 sm:px-8 lg:py-6">
        <h2 id="company-products-services-heading" className="mx-auto max-w-[1500px] text-[clamp(30px,3.4vw,50px)] leading-none font-bold tracking-[-.05em] uppercase">Our Product Portfolio</h2>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height)_-_90px)] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:px-12 lg:py-14 2xl:gap-20">
        <div className="relative h-[330px] min-w-0 sm:h-[430px] lg:h-[min(58vh,530px)] lg:min-h-[390px]">
          <div className="absolute top-0 left-0 h-[79%] w-[74%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_20px_45px_#0005]">
            <Image src="/images/company-about-office-v2.webp" alt="Capyngen proprietary software products" fill sizes="(max-width: 1023px) 65vw, 31vw" className="object-cover object-[center_43%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-[67%] w-[70%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_22px_50px_#0007]">
            <Image src="/images/company-overview-meeting.webp" alt="Capyngen technology platforms" fill sizes="(max-width: 1023px) 65vw, 30vw" className="object-cover object-[center_42%]" />
          </div>
          <div className="absolute right-[7%] bottom-[7%] z-10 rounded-full border border-white/30 bg-[#1c6f92]/85 px-4 py-2 text-[10px] font-semibold tracking-[.14em] uppercase backdrop-blur-md sm:text-xs">Usability · Functionality</div>
        </div>

        <div className="grid gap-y-7 sm:gap-y-8">
          {offerings.map((offering) => (
            <article key={offering.number} className="border-t border-white/20 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-[clamp(34px,3vw,48px)] leading-none font-semibold tracking-[-.07em] text-[#68c9e9]">{offering.number}</span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-lg leading-tight font-semibold tracking-[-.03em] sm:text-xl">{offering.title}</h3>
                  <p className="mt-2 max-w-[600px] text-sm leading-[1.65] text-[#b3c0c8] sm:text-[15px]">{offering.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
