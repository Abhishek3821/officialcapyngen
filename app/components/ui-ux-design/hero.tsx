import Image from "next/image";
import Link from "next/link";

const process = [
  { number: "01", label: "Research" },
  { number: "02", label: "Design" },
  { number: "03", label: "Refine" },
];

function ImageRibbon({ src, alt, className, position }: { src: string; alt: string; className: string; position: string }) {
  return (
    <div className={`absolute overflow-hidden rounded-[90px] bg-[#dcebea] shadow-[0_18px_42px_#194b5720] [transform:skewX(-22deg)] ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1023px) 70vw, 34vw" className={`object-cover [transform:skewX(22deg)_scale(1.4)] ${position}`} />
    </div>
  );
}

export default function UiUxHero() {
  return (
    <section id="ui-ux-hero" aria-labelledby="ui-ux-heading" className="overflow-hidden bg-[#fdfefd] text-[#17282c]">
      <div className="mx-auto grid min-h-[calc(100svh_-_var(--site-header-height))] max-w-[1520px] items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:px-16 lg:py-8">
        <div className="relative z-10 max-w-[650px]">
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-[#2b8e9c] uppercase">Capyngen / UI/UX Design</p>
          <h1 id="ui-ux-heading" className="text-[clamp(46px,5.2vw,82px)] leading-[1.03] font-bold tracking-[-.065em]">
            Our Healthcare<br />Solutions Meet<br /><span className="text-[#208fa0]">Every Need.</span>
          </h1>
          <p className="mt-6 max-w-[510px] text-base leading-[1.7] text-[#6c7b7c] sm:text-lg">
            We design clear, caring digital experiences that help people connect with the healthcare services they need.
          </p>
          <Link href="/contact-us" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f2a927] px-7 py-3.5 text-sm font-semibold text-[#263027] shadow-[0_10px_25px_#e8a52b35] transition-colors hover:bg-[#ffc04d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#208fa0]">
            Get Started <span aria-hidden="true">↗</span>
          </Link>
          <div className="mt-12 grid max-w-[520px] grid-cols-3 gap-4 border-t border-[#dce5e4] pt-6 sm:gap-8">
            {process.map((step) => (
              <div key={step.number}>
                <p className="text-[clamp(30px,3vw,42px)] leading-none font-semibold tracking-[-.06em]">{step.number}</p>
                <p className="mt-2 text-xs text-[#718083] sm:text-sm">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[390px] w-full max-w-[680px] sm:h-[490px] lg:h-[620px]" aria-label="Healthcare professionals at work">
          <div aria-hidden="true" className="absolute top-[10%] left-[1%] size-5 rounded-full bg-[#4bd2ce] sm:size-7" />
          <div aria-hidden="true" className="absolute top-[17%] right-[7%] size-4 rounded-full bg-[#f5ad1d] sm:size-5" />
          <div aria-hidden="true" className="absolute right-[14%] bottom-[7%] size-5 rounded-full bg-[#f5ad1d]" />
          <div aria-hidden="true" className="absolute -right-[13%] top-[22%] size-24 rounded-full bg-[#5ad8cf] sm:size-32" />
          <ImageRibbon src="/images/e-commerce-solutions/team.webp" alt="Healthcare team together" className="top-[5%] left-[22%] h-[31%] w-[64%]" position="object-[center_35%]" />
          <ImageRibbon src="/images/e-commerce-solutions/hero.webp" alt="Doctor and nurse speaking with a patient" className="top-[34%] left-[9%] h-[32%] w-[76%]" position="object-[62%_45%]" />
          <ImageRibbon src="/images/e-commerce-solutions/care.webp" alt="Healthcare worker supporting a patient" className="right-[3%] bottom-[4%] h-[31%] w-[66%]" position="object-[center_40%]" />
        </div>
      </div>
    </section>
  );
}
