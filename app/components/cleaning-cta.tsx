import Image from "next/image";

export default function CleaningCta() {
  return (
    <section aria-labelledby="cleaning-cta-heading" className="bg-[#f2f3ee] px-5 py-8 sm:px-7 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-7 overflow-hidden rounded-[28px] bg-[#2b65ff] p-4 md:grid-cols-2 md:gap-8 md:p-6 lg:gap-12 lg:rounded-[38px] lg:p-8">
        <div className="min-w-0 px-2 py-5 md:px-1 md:py-4 lg:px-0 lg:py-6">
          <h2 id="cleaning-cta-heading" className="text-[clamp(28px,3.8vw,54px)] leading-[1.04] font-normal tracking-[-.045em] text-white">
            <span className="block">Ready to make the</span>
            <span className="block">switch to eco-friendly</span>
            <span className="block">cleaning?</span>
          </h2>
          <p className="mt-5 max-w-[410px] text-xs leading-[1.75] text-[#e1eaff] lg:mt-7 lg:text-sm">
            Join the movement toward sustainable living! Learn simple tips to switch to eco-friendly cleaning products and practices for a healthier home and a cleaner planet.
          </p>
          <a href="/#contact" className="mt-7 inline-flex items-center justify-center rounded-full bg-[#c4ed81] px-6 py-2.5 text-xs font-medium text-[#2455cc] transition-colors hover:bg-[#daf4ac] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-9 lg:px-8 lg:py-3 lg:text-sm">
            Contact Us
          </a>
        </div>

        <div className="relative aspect-[1.43] w-full min-w-0 overflow-hidden rounded-[20px] bg-[#d7dfce] md:min-h-[300px] lg:rounded-[26px]">
          <Image
            src="/images/cleaning-cta.webp"
            alt="A person vacuuming a living room carpet in front of a yellow sofa"
            width={870}
            height={500}
            sizes="(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 600px"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />
        </div>
      </div>
    </section>
  );
}
