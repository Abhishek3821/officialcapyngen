import Image from "next/image";

const photos = {
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
  gardenHome: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=900&q=85",
  modernHome: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  kitchen: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1800&q=90",
};

export default function LivingSpaces() {
  return (
    <section id="about" aria-labelledby="living-spaces-heading" className="bg-white py-6 sm:py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-7 lg:px-12">
          <div className="relative isolate flex min-h-[290px] items-center overflow-hidden rounded-[28px] bg-[#164c73] px-6 py-10 sm:min-h-[340px] sm:px-10 lg:min-h-[450px] lg:rounded-[44px] lg:px-16">
            <Image src={photos.building} alt="Modern architecture rising against a blue sky" fill unoptimized sizes="(max-width: 1440px) 100vw, 1344px" className="-z-20 object-cover object-[70%_45%]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#052438]/95 via-[#123e5b]/80 to-[#246a9b]/5" />
            <div className="max-w-[720px] text-[#fffdf6]">
              <p className="mb-5 text-[11px] tracking-[.025em] text-white/85 sm:text-sm lg:mb-7">Industries We Serve:</p>
              <h2 id="living-spaces-heading" className="font-serif text-[clamp(28px,4.2vw,62px)] leading-[1.08] font-normal tracking-[-0.045em]">
                Industries Capyngen <br />
                <em className="font-normal">Serves</em>
              </h2>
            </div>
          </div>
        </div>

        <div className="my-10 grid grid-cols-2 items-center gap-x-5 gap-y-7 px-5 sm:my-14 sm:px-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] md:gap-6 md:px-0 lg:my-20 lg:gap-10">
          <div className="relative aspect-[.9] overflow-hidden rounded-[24px] bg-[#b8bcb1] md:aspect-[.85] md:self-start md:rounded-l-none md:rounded-r-[38px]">
            <Image src={photos.gardenHome} alt="Contemporary digital workspace environment" fill unoptimized sizes="(max-width: 767px) 50vw, 27vw" className="object-cover" />
          </div>

          <div className="order-first col-span-2 mx-auto flex w-full max-w-[480px] flex-col items-center px-1 text-center md:order-none md:col-span-1 md:py-10">
            <svg viewBox="0 0 32 32" fill="none" className="mb-6 size-8 text-[#193f60] lg:mb-8 lg:size-10" aria-hidden="true"><path d="M16 1c1.8 8.5 6.5 13.2 15 15-8.5 1.8-13.2 6.5-15 15C14.2 22.5 9.5 17.8 1 16 9.5 14.2 14.2 9.5 16 1Z" fill="currentColor" /></svg>
            <h3 className="font-serif text-[clamp(27px,3.3vw,46px)] leading-[1.08] tracking-[-0.035em] text-[#282824]">
              Tailored solutions across <em>seven core</em> industries.
            </h3>
            <p className="mt-5 max-w-[390px] text-[13px] leading-[1.8] text-[#74736c] lg:mt-7 lg:text-base">
              Capyngen works with businesses across seven core industries, delivering custom software, AI solutions, cloud platforms, and digital marketing. As the Best IT company in India, we adapt our approach to each sector&apos;s specific compliance, security, and operational needs.
            </p>
            <button type="button" className="mt-6 rounded-sm bg-[#090b09] px-7 py-3 text-xs font-medium text-[#fffdf6] transition-colors hover:bg-[#234863] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234863] lg:mt-8 lg:px-9 lg:py-4 lg:text-sm">Get in touch</button>
          </div>

          <div className="relative aspect-[.9] overflow-hidden rounded-[24px] bg-[#b6b5a7] md:mt-24 md:aspect-[.85] md:self-end md:rounded-r-none md:rounded-l-[38px]">
            <Image src={photos.modernHome} alt="Modern technology architecture setup" fill unoptimized sizes="(max-width: 767px) 50vw, 27vw" className="object-cover" />
          </div>
        </div>

        <div className="px-5 sm:px-7 lg:px-16">
          <div className="relative isolate min-h-[350px] overflow-hidden rounded-[28px] bg-[#19251e] px-6 py-9 sm:min-h-[390px] sm:px-10 sm:py-12 lg:min-h-[480px] lg:rounded-[44px] lg:px-16 lg:py-16">
            <Image src={photos.kitchen} alt="Thoughtfully engineered digital platform interface" fill unoptimized sizes="(max-width: 1440px) 100vw, 1312px" className="-z-20 object-cover object-[65%_center]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/60 to-black/10" />
            <div className="w-full max-w-[350px] text-[#fffdf6] lg:max-w-[400px]">
              <h3 className="font-serif text-[clamp(28px,3.5vw,50px)] leading-[1.02] tracking-[-0.035em]">Compliance &amp; <br /><em>security first.</em></h3>
              <p className="mt-5 text-[13px] leading-[1.8] text-white/85 lg:mt-6 lg:text-base">
                Delivering industry-specific robust digital ecosystems built precisely around your operational demands and regulatory standards.
              </p>
              <button type="button" className="mt-6 rounded-sm bg-[#fffdf6] px-6 py-3 text-xs font-semibold text-[#242820] transition-colors hover:bg-[#e9e5db] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-8 lg:px-8 lg:py-4 lg:text-sm">View Solutions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}