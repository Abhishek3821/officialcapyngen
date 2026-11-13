import Image from "next/image";

const reasons = [
  { number: "01", title: "Advanced Technology", description: "To convert ideas into successful implementations, our expert ecommerce web development team employ technologies such as Laravel & Node.Js with React.js for ecommerce web Development. And the most advanced UI/UX design thinking." },
  { number: "02", title: "More Security", description: "This is how we make our ecommerce websites more secure; as we are developing ecommerce websites with the latest web development technology, our developed ecommerce websites are more secure than others. While you are on with our ecommerce web development solution you can be sure your client informations are more than safe with our encriptions." },
  { number: "03", title: "24x7 Open", description: "As we are providing services and dedicated support for overseas clients also, we are the only one ecommerce web development company in India who provide 24*7 support in India. Get in touch with the best ecommerce web design company in India now!" },
  { number: "04", title: "Tailored Cost", description: "An online store can be launched in a shorter span of time versus a physical store. The major challenge in such a case is to identify the most suitable ecommerce website development company to get the best outcome. After finding a team for this purpose, the rest of the process is handled by them." },
];

export default function EcommerceWhyChoose() {
  return (
    <section id="ecommerce-why-choose" aria-labelledby="ecommerce-why-choose-heading" className="bg-[#20272d] text-white">
      <div className="bg-[#238fb8] px-5 py-5 sm:px-8 lg:py-6">
        <h2 id="ecommerce-why-choose-heading" className="mx-auto max-w-[1500px] text-[clamp(30px,3.4vw,50px)] leading-none font-bold tracking-[-.05em] uppercase">Why You Choose Capyngen for Ecommerce Design Company</h2>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height)_-_90px)] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 lg:px-12 lg:py-14 2xl:gap-20">
        <div className="relative h-[330px] min-w-0 sm:h-[430px] lg:h-[min(58vh,530px)] lg:min-h-[390px]">
          <div className="absolute top-0 left-0 h-[79%] w-[74%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_20px_45px_#0005]">
            <Image src="/images/company-about-office-v2.webp" alt="Colleagues collaborating around a laptop" fill sizes="(max-width: 1023px) 65vw, 31vw" className="object-cover object-[center_43%]" />
          </div>
          <div className="absolute right-0 bottom-0 h-[67%] w-[70%] overflow-hidden rounded-[22px] border-[5px] border-[#20272d] bg-[#dce8ec] shadow-[0_22px_50px_#0007]">
            <Image src="/images/company-overview-meeting.webp" alt="Professionals discussing a digital project" fill sizes="(max-width: 1023px) 65vw, 30vw" className="object-cover object-[center_42%]" />
          </div>
          <div className="absolute right-[7%] bottom-[7%] z-10 rounded-full border border-white/30 bg-[#1c6f92]/85 px-4 py-2 text-[10px] font-semibold tracking-[.14em] uppercase backdrop-blur-md sm:text-xs">Design customisation</div>
        </div>

        <div>
          <p className="mb-8 max-w-[640px] text-base leading-[1.6] text-[#b3c0c8]">In a landscape where anyone can pick a theme and create a webstore, we excel in design customisation &amp; boost shopability for our clients.</p>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-y-9">
            {reasons.map((reason) => (
              <article key={reason.number} className="border-t border-white/20 pt-6">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-[clamp(34px,3vw,48px)] leading-none font-semibold tracking-[-.07em] text-[#68c9e9]">{reason.number}</span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-lg leading-tight font-semibold tracking-[-.03em] sm:text-xl">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-[1.55] text-[#b3c0c8]">{reason.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
