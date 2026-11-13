import Image from "next/image";

const industries = [
  { name: "E-Commerce", image: "floral", alt: "Fashion model in a vivid yellow outfit beneath a clear blue sky" },
  { name: "Healthcare", image: "green", alt: "A red oversized sweatshirt styled for a playful streetwear portrait" },
  { name: "Finance", image: "coral", alt: "A fashion editorial featuring a powder-blue coat and matching trousers" },
  { name: "Education", image: "blue", alt: "A burgundy coat styled with sunglasses and a neutral knit top" },
];

export default function BrandsShine() {
  return (
    <section id="brands-shine" aria-labelledby="brands-shine-heading" className="overflow-hidden bg-[#fff8ef] px-5 pt-8 pb-10 sm:px-7 sm:pt-10 sm:pb-14 lg:px-10 lg:pt-9 lg:pb-12">
      <div className="mx-auto max-w-[1560px]">
        <h2 id="brands-shine-heading" className="mb-7 text-center text-[clamp(34px,3.8vw,60px)] leading-[.98] font-normal tracking-[-.055em] text-[#38342c] sm:mb-4 sm:ml-[32%] sm:text-left">
          Our Work<br /><span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic tracking-[-.065em]">Speaks for Itself</span>
        </h2>
        <div className="grid grid-cols-2 items-start gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4 lg:gap-x-5">
          {industries.map((industry, index) => (
            <figure key={industry.image} className={`group relative aspect-[.72] min-w-0 overflow-hidden rounded-[5px] bg-[#e9e1d6] ring-1 ring-white/70 ${index % 2 === 1 ? "mt-10 sm:mt-16 lg:mt-20" : ""}`}>
              <Image src={`/images/brands-shine/${industry.image}.webp`} alt={industry.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1640px) 25vw, 375px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/40 to-transparent" />
              <figcaption className="absolute right-4 bottom-4 left-4 text-left text-xs font-medium tracking-wide text-white sm:text-sm">{industry.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
