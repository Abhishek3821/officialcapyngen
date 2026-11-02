import Image from "next/image";

const looks = [
  { image: "floral", alt: "Fashion model in a vivid yellow outfit beneath a clear blue sky" },
  { image: "green", alt: "A red oversized sweatshirt styled for a playful streetwear portrait" },
  { image: "coral", alt: "A fashion editorial featuring a powder-blue coat and matching trousers" },
  { image: "blue", alt: "A burgundy coat styled with sunglasses and a neutral knit top" },
];

export default function BrandsShine() {
  return (
    <section id="brands-shine" aria-labelledby="brands-shine-heading" className="overflow-hidden bg-[#fff8ef] px-5 pt-8 pb-10 sm:px-7 sm:pt-10 sm:pb-14 lg:px-10 lg:pt-9 lg:pb-12">
      <div className="mx-auto max-w-[1560px]">
        <h2 id="brands-shine-heading" className="mb-7 text-center text-[clamp(34px,3.8vw,60px)] leading-[.98] font-normal tracking-[-.055em] text-[#38342c] sm:mb-4 sm:ml-[32%] sm:text-left">
          Where Brands<br /><span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic tracking-[-.065em]">Shine</span>
        </h2>
        <div className="grid grid-cols-2 items-start gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4 lg:gap-x-5">
          {looks.map((look, index) => (
            <figure key={look.image} className={`group relative aspect-[.72] min-w-0 overflow-hidden rounded-[5px] bg-[#e9e1d6] ring-1 ring-white/70 ${index % 2 === 1 ? "mt-10 sm:mt-16 lg:mt-20" : ""}`}>
              <Image src={`/images/brands-shine/${look.image}.webp`} alt={look.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1640px) 25vw, 375px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
