import Image from "next/image";

// Used by the e-commerce design page.
const factors = [
  { image: "floral", alt: "Fashion model in a vivid yellow outfit beneath a clear blue sky", number: "01", title: "Quick Load", text: "Nobody wants to wait! We are getting more impatient, and if we are too slow, then we are losing our customers. We simply don't know! Capyngen won't take any side on this." },
  { image: "green", alt: "A red oversized sweatshirt styled for a playful streetwear portrait", number: "02", title: "Mobile Responsive", text: "Mobile is to humans what their soulmate is. We are aware of how crucial adaptability is, not only of the ideas and technology but of the website too." },
  { image: "coral", alt: "A fashion editorial featuring a powder-blue coat and matching trousers", number: "03", title: "Easy checkout", text: "The checkout process offers a simple flow, which makes the entire checkout process simple and quick for users. Users have the choice to do several things to ensure that they buy the product." },
  { image: "blue", alt: "A burgundy coat styled with sunglasses and a neutral knit top", number: "04", title: "Secured Shopping", text: "To make the customer buy something on your platform, we need to make them trust us. Our process is long, and we think of ideas so that every step the user takes will make them trust us." },
];

export default function BrandsShine() {
  return (
    <section id="brands-shine" aria-labelledby="brands-shine-heading" className="overflow-hidden bg-[#fff8ef] px-5 pt-8 pb-10 sm:px-7 sm:pt-10 sm:pb-14 lg:px-10 lg:pt-9 lg:pb-12">
      <div className="mx-auto max-w-[1560px]">
        <h2 id="brands-shine-heading" className="mb-7 text-center text-[clamp(34px,3.8vw,60px)] leading-[.98] font-normal tracking-[-.055em] text-[#38342c] sm:mb-4 sm:ml-[32%] sm:text-left">
          The 4<br /><span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic tracking-[-.065em]">Factors</span>
        </h2>
        <div className="grid grid-cols-1 items-start gap-x-3 gap-y-6 min-[480px]:grid-cols-2 sm:grid-cols-4 sm:gap-x-4 lg:gap-x-5">
          {factors.map((factor, index) => (
            <figure key={factor.image} className={`group relative aspect-[.72] min-w-0 overflow-hidden rounded-[5px] bg-[#e9e1d6] ring-1 ring-white/70 ${index % 2 === 1 ? "min-[480px]:mt-10 sm:mt-16 lg:mt-20" : ""}`}>
              <Image src={`/images/brands-shine/${factor.image}.webp`} alt={factor.alt} fill sizes="(max-width: 639px) 50vw, (max-width: 1640px) 25vw, 375px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/80 via-black/45 to-transparent" />
              <figcaption className="absolute right-4 bottom-4 left-4 text-left text-white"><span className="text-[11px] font-medium tracking-wide text-white/80">{factor.number}</span><strong className="mt-1 block text-base font-semibold tracking-[-.02em] sm:text-lg">{factor.title}</strong><span className="mt-1.5 block text-[11px] leading-[1.45] text-white/90 lg:text-xs">{factor.text}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
