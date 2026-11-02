import Image from "next/image";

const stories = [
  {
    id: "careers", category: "Inclusion", title: "The code for careers in tech",
    description: "Job-ready tech skills for a more inclusive future",
    alt: "A diverse group of learners and mentors together at a technology careers programme",
    href: "https://www.capgemini.com/news/inside-stories/the-code-for-careers-in-tech/",
  },
  {
    id: "wildlife", category: "Future-shaping projects", title: "DNA analysis for wildlife conservation",
    description: "Helping conservationists conduct genetic analysis in the field to protect vulnerable species",
    alt: "A research team working together on portable genetic analysis equipment",
    href: "https://www.capgemini.com/news/inside-stories/enabling-real-time-dna-analysis-for-wildlife-conservation/",
  },
  {
    id: "water", category: "Future-shaping projects", title: "Protecting water quality in reservoirs with AI",
    description: "An early detection system to monitor and remove harmful algal blooms",
    alt: "A scientist examining water samples through a microscope in a laboratory",
    href: "https://www.capgemini.com/news/inside-stories/protecting-moroccos-water-resources-with-ai/",
  },
];

function Story({ story, featured = false }: { story: (typeof stories)[number]; featured?: boolean }) {
  return (
    <article className="min-w-0">
      <a href={story.href} target="_blank" rel="noreferrer" aria-label={`${story.title} — opens original story in a new tab`} className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#78d4ef]">
        <div className={`relative aspect-[16/9] overflow-hidden bg-[#28303a] ${featured ? "" : "rounded-[3px]"}`}>
          <Image src={`/images/inside-stories/${story.id}.webp`} alt={story.alt} width={featured ? 1600 : 1000} height={featured ? 900 : 563} sizes={featured ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"} className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none" />
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs leading-relaxed font-normal text-[#f0f2f6] lg:text-[13px]"><span aria-hidden="true" className="h-px w-4 shrink-0 bg-[#f0f2f6]" />{story.category}</p>
        <h3 className={`mt-2 font-medium tracking-[-.02em] text-white decoration-white/60 underline-offset-4 group-hover:underline ${featured ? "text-[clamp(21px,2vw,28px)] leading-[1.3]" : "text-[clamp(19px,1.6vw,24px)] leading-[1.3]"}`}>{story.title}</h3>
        <p className="mt-3 max-w-[650px] text-[13px] leading-[1.75] font-normal text-[#f0f1f4] lg:text-sm">{story.description}</p>
      </a>
    </article>
  );
}

export default function InsideStories() {
  return (
    <section id="inside-stories" aria-labelledby="inside-stories-heading" className="bg-[#11151b] px-5 py-9 sm:px-7 sm:py-11 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 id="inside-stories-heading" className="mb-7 text-[clamp(25px,2.3vw,34px)] leading-tight font-normal tracking-[-.025em] text-white">Inside stories</h2>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,2.06fr)_minmax(0,1fr)] md:gap-6 lg:gap-7">
          <Story story={stories[0]} featured />
          <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 md:gap-7">
            <Story story={stories[1]} />
            <Story story={stories[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
