import Image from "next/image";

const offerings = [
  {
    number: "01",
    title: "Core Products",
    description: "Digital products built around real business needs.",
    items: ["Web and mobile applications", "E-commerce and CRM platforms"],
  },
  {
    number: "02",
    title: "Core Services",
    description: "Creative and technical expertise from idea to launch.",
    items: ["UI/UX and brand design", "Development and digital marketing"],
  },
  {
    number: "03",
    title: "Industries Served",
    description: "Relevant solutions for teams in different sectors.",
    items: ["Banking, education, and healthcare", "E-commerce, real estate, and more"],
  },
  {
    number: "04",
    title: "Advanced Capabilities",
    description: "Technology that helps businesses adapt and grow.",
    items: ["AI and data analytics", "Enterprise and cloud solutions"],
  },
];

export default function CompanyProductsServices() {
  return (
    <section id="company-products-services" aria-labelledby="company-products-services-heading" className="bg-[#20272d] text-white">
      <div className="bg-[#238fb8] px-5 py-5 sm:px-8 lg:py-6">
        <h2 id="company-products-services-heading" className="mx-auto max-w-[1500px] text-[clamp(30px,3.4vw,50px)] leading-none font-bold tracking-[-.05em] uppercase">Products &amp; Services</h2>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height)_-_90px)] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:px-12 lg:py-14 2xl:gap-20">
        <div className="relative h-[330px] min-w-0 sm:h-[430px] lg:h-[min(58vh,530px)] lg:min-h-[390px]">
          <div className="absolute top-0 left-0 h-[79%] w-[74%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_20px_45px_#0005]">
            <Image src="/images/company-about-office-v2.webp" alt="Colleagues collaborating around a laptop" fill sizes="(max-width: 1023px) 65vw, 31vw" className="object-cover object-[center_43%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-[67%] w-[70%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_22px_50px_#0007]">
            <Image src="/images/company-overview-meeting.webp" alt="Professionals discussing a digital project" fill sizes="(max-width: 1023px) 65vw, 30vw" className="object-cover object-[center_42%]" />
          </div>
          <div className="absolute right-[7%] bottom-[7%] z-10 rounded-full border border-white/30 bg-[#1c6f92]/85 px-4 py-2 text-[10px] font-semibold tracking-[.14em] uppercase backdrop-blur-md sm:text-xs">Ideas into impact</div>
        </div>

        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-y-9">
          {offerings.map((offering) => (
            <article key={offering.number} className="border-t border-white/20 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-[clamp(34px,3vw,48px)] leading-none font-semibold tracking-[-.07em] text-[#68c9e9]">{offering.number}</span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-lg leading-tight font-semibold tracking-[-.03em] sm:text-xl">{offering.title}</h3>
                  <p className="mt-2 text-sm leading-[1.55] text-[#b3c0c8]">{offering.description}</p>
                  <ul className="mt-4 space-y-2 text-xs leading-[1.5] text-[#dce5e9] sm:text-[13px]">
                    {offering.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5"><span aria-hidden="true" className="mt-[6px] size-1.5 shrink-0 rounded-full bg-[#68c9e9]" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
