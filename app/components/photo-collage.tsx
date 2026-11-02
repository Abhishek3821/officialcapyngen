import Image from "next/image";

const moments = [
  { id: "friends", alt: "Friends enjoying a day outdoors", layout: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2" },
  { id: "coffee", alt: "Friends sharing a conversation at a table", layout: "lg:col-start-3 lg:col-span-2 lg:row-start-1" },
  { id: "celebration", alt: "Students gathering and celebrating together", layout: "lg:col-start-5 lg:col-span-2 lg:row-start-1" },
  { id: "cafe", alt: "A welcoming neighbourhood cafe", layout: "lg:col-start-1 lg:col-span-2 lg:row-start-3" },
  { id: "photographer", alt: "A photographer capturing a moment in autumn", layout: "col-span-2 row-span-2 lg:col-start-3 lg:col-span-3 lg:row-start-2 lg:row-span-2" },
  { id: "mountains", alt: "Sunlight falling across mountain peaks", layout: "lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2" },
  { id: "portrait", alt: "A portrait in natural light", layout: "lg:col-start-6 lg:row-start-2 lg:row-span-2" },
  { id: "architecture", alt: "Colourful architecture on the coast", layout: "lg:col-start-1 lg:col-span-2 lg:row-start-4" },
  { id: "travel", alt: "An open road waiting to be explored", layout: "lg:col-start-3 lg:row-start-4" },
  { id: "group", alt: "Friends watching the sunset together", layout: "lg:col-start-7 lg:col-span-2 lg:row-start-3" },
  { id: "stars", alt: "A colourful nebula in the night sky", layout: "lg:col-start-4 lg:col-span-2 lg:row-start-4" },
  { id: "together", alt: "Flowers and details from a shared celebration", layout: "col-span-2 lg:col-start-6 lg:col-span-3 lg:row-start-4" },
];

export default function PhotoCollage() {
  return (
    <section id="moments" aria-labelledby="moments-heading" className="overflow-hidden bg-[#f5f3ef] px-5 py-10 sm:px-7 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        <header className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold tracking-[.2em] text-[#7e7d72] uppercase"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#b79a73]" />The moments between</p>
            <h2 id="moments-heading" className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.05] tracking-[-0.04em] text-[#292c25]">Moments worth <em className="font-normal text-[#7a806a]">keeping.</em></h2>
          </div>
          <p className="max-w-[270px] text-xs leading-[1.7] text-[#838579] sm:text-right sm:text-[13px]">A collection of people, places, and everything in between.</p>
        </header>

        <div className="grid auto-rows-[130px] grid-cols-2 gap-2.5 sm:auto-rows-[165px] sm:grid-cols-4 sm:gap-3 lg:auto-rows-[clamp(100px,10vw,145px)] lg:grid-cols-8 lg:gap-3.5">
          {moments.map((moment) => (
            <figure key={moment.id} className={`group relative m-0 min-h-0 overflow-hidden rounded-[14px] bg-[#dddcd3] shadow-[0_2px_6px_rgb(30_35_25_/_0.04)] sm:rounded-[18px] ${moment.layout}`}>
              <Image
                src={`/images/moments/${moment.id}.jpg`}
                alt={moment.alt}
                width={900}
                height={900}
                sizes={moment.id === "photographer" ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 38vw" : "(max-width: 639px) 50vw, 25vw"}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transform-none motion-reduce:transition-none"
              />
              {moment.id === "photographer" && <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent px-5 pt-16 pb-5 text-white sm:px-6 sm:pb-6">
                <p className="text-[9px] tracking-[.18em] uppercase text-white/75">A different perspective</p>
                <p className="mt-2 font-serif text-[clamp(22px,2.4vw,34px)] leading-tight tracking-[-0.025em]">See the extraordinary<br />in the everyday.</p>
              </figcaption>}
            </figure>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-[#dcded3] pt-4 text-[10px] tracking-[.08em] text-[#939588] uppercase">
          <span>People. Places. Perspectives.</span>
          <span>12 frames, one story</span>
        </div>
      </div>
    </section>
  );
}
