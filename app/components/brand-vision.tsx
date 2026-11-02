import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Visual-first experiences", description: "Distinctive design that captures your personality and gives your brand a world of its own." },
  { title: "Digital that connects", description: "Responsive websites built around your audience, with thoughtful details at every step." },
  { title: "A creative collaboration", description: "From the first idea to the final launch, we bring clarity, craft and care to your project." },
];

function PreviewHeader() {
  return <div aria-hidden="true" className="mb-4 flex items-center justify-between border-b border-[#e5ddd2] pb-2 text-[7px] tracking-[.04em] text-[#8d887e]"><span>CAPYNGEN / CREATIVE STUDIO</span><span>Ideas into experiences</span><span>EST. DIGITAL</span></div>;
}

export default function BrandVision() {
  return (
    <section id="brand-vision" aria-label="Creative websites for modern brands" className="bg-[#78afe5] p-4 sm:p-6 lg:p-7">
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,.95fr)_minmax(0,2fr)] lg:gap-7">
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6">
          <article className="flex min-h-[255px] flex-col overflow-hidden rounded-[15px] bg-[#fff8ef] p-4 text-[#302c27] sm:p-4 xl:p-5">
            <PreviewHeader />
            <div className="grid flex-1 grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-4">
              <div className="flex flex-col items-start">
                <h2 className="text-[clamp(18px,1.55vw,26px)] leading-[1.04] font-normal tracking-[-.045em]">Built to Meet the Needs of Modern Brands</h2>
                <p className="mt-3 text-[10px] leading-[1.45] text-[#79736b] xl:text-[11px]">Fresh ideas deserve more than an ordinary website. We blend strategy, design and development to create digital experiences that feel unmistakably yours.</p>
                <Link href="/#work" className="mt-auto inline-flex min-h-7 items-center rounded-full bg-[#302d28] px-3 py-1.5 text-[9px] text-white transition-colors hover:bg-[#555044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#225f90]">View our work</Link>
              </div>
              <div className="relative min-h-[175px] overflow-hidden rounded-[8px] bg-[#d7b393]">
                <Image src="/images/hero-woman.jpg" alt="An editorial portrait illuminated by warm studio lights" fill sizes="(max-width: 639px) 30vw, (max-width: 1023px) 18vw, 13vw" className="object-cover object-[54%_center]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-15%] top-[30%] h-3 -rotate-12 bg-[#fff8ef]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-15%] top-[65%] h-3 rotate-12 bg-[#fff8ef]" />
              </div>
            </div>
          </article>

          <article className="flex min-h-[255px] flex-col overflow-hidden rounded-[15px] bg-[#fff8ef] p-4 text-[#302c27] xl:p-5">
            <PreviewHeader />
            <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-4">
              <div className="relative min-h-[185px] overflow-hidden rounded-[5px] bg-[#b2d1e2]">
                <Image src="/images/web-development/portrait.webp" alt="A creative portrait with soft blue studio lighting" fill sizes="(max-width: 639px) 40vw, (max-width: 1023px) 20vw, 15vw" className="object-cover object-center" />
              </div>
              <div>
                <h3 className="text-[clamp(18px,1.5vw,25px)] leading-tight font-normal tracking-[-.04em]">Our Service Suite</h3>
                <ul className="mt-4 space-y-3">
                  {services.map((service) => <li key={service.title}><h4 className="flex items-start gap-1 text-[8px] leading-[1.3] tracking-[.035em] text-[#9f8466] uppercase"><span aria-hidden="true">✦</span>{service.title}</h4><p className="mt-1 text-[9px] leading-[1.4] text-[#79736b]">{service.description}</p></li>)}
                </ul>
              </div>
            </div>
          </article>
        </div>

        <article aria-labelledby="brand-vision-heading" className="relative isolate grid min-h-[540px] overflow-hidden rounded-[20px] bg-[#296d99] sm:min-h-[570px]">
          <Image src="/images/web-development/portrait.webp" alt="A contemporary beauty portrait in blue and lilac light" fill sizes="(max-width: 1023px) 100vw, 66vw" className="-z-10 object-cover object-[34%_35%]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_45%,#17395025)]" />
          <div className="m-4 ml-auto flex w-[44%] min-w-[160px] flex-col justify-between rounded-[5px] bg-[#fff8ef] p-5 text-[#3a332d] sm:m-5 sm:ml-auto sm:w-[35%] sm:p-6 xl:p-7">
            <h3 id="brand-vision-heading" className="text-[clamp(27px,3.1vw,48px)] leading-[1.02] font-normal tracking-[-.055em]">Our Vision</h3>
            <div className="pt-20">
              <p className="text-[9px] leading-relaxed tracking-[.04em] text-[#a28566] uppercase xl:text-[10px]">Content without limits</p>
              <p className="mt-3 text-[12px] leading-[1.5] text-[#827a70] xl:text-[14px]">We believe every brand deserves a digital presence as original as its vision. From a bold first idea to a beautifully built website, we bring thoughtful design and technology together to help your next chapter take shape.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
