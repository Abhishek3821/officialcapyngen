"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Design" | "Technology" | "Business" | "People";

const categories: Category[] = ["All", "Design", "Technology", "Business", "People"];

const stories: { category: Exclude<Category, "All">; title: string; summary: string; image: string; alt: string }[] = [
  { category: "Design", title: "The architecture of digital products that last", summary: "Why strong foundations matter as much as the final interface.", image: "/images/project-showcase/futureco.webp", alt: "Sculptural white staircase in a contemporary building" },
  { category: "Technology", title: "When technology meets field research", summary: "A closer look at tools that can support work beyond the screen.", image: "/images/inside-stories/wildlife.webp", alt: "Researchers working with technology in a lab" },
  { category: "Business", title: "Why collaboration turns ideas into outcomes", summary: "The value of shared thinking from the first conversation onward.", image: "/images/company-future-outlook.webp", alt: "Team celebrating a shared idea around a table" },
  { category: "Technology", title: "Better data, clearer decisions for water quality", summary: "How useful information can help teams act with confidence.", image: "/images/inside-stories/water.webp", alt: "Researcher working with a water sample in a laboratory" },
  { category: "People", title: "Building more inclusive paths into technology", summary: "Good digital work benefits from more voices and perspectives.", image: "/images/inside-stories/careers.webp", alt: "A diverse group of technology professionals" },
  { category: "Design", title: "Designing for the world we share", summary: "Making sustainable thinking part of the creative process.", image: "/images/project-showcase/renewasphere.webp", alt: "Green building facade surrounded by plants" },
  { category: "Business", title: "What growing teams need from digital tools", summary: "Simple, adaptable systems create room for the work that matters.", image: "/images/company-about-office.webp", alt: "Colleagues discussing work around a laptop" },
  { category: "People", title: "A culture of curiosity fuels better work", summary: "Listening and learning make ambitious ideas stronger.", image: "/images/company-vision-statement.webp", alt: "Four colleagues reviewing an idea together" },
  { category: "Design", title: "Making every interaction feel considered", summary: "Small details can shape a much better experience.", image: "/images/web-development/chair.webp", alt: "Blue chair in a minimal design setting" },
];

function CategoryLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] font-bold tracking-[.16em] text-[#168bb6] uppercase">{children}</span>;
}

export default function NewsUpdatesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleStories = activeCategory === "All" ? stories.slice(0, 5) : stories.filter((story) => story.category === activeCategory);
  const leadStory = visibleStories[0];
  const sideStories = visibleStories.slice(1, 5);

  return (
    <>
      <section id="news-featured" aria-labelledby="news-featured-heading" className="bg-[#fafbfa] text-[#17232a]">
        <div className="mx-auto grid max-w-[1550px] gap-5 px-5 pt-12 pb-16 sm:px-8 lg:min-h-[calc(100svh_-_var(--site-header-height))] lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)_minmax(0,.82fr)] lg:items-stretch lg:gap-6 lg:px-12 lg:pt-16 lg:pb-14">
          <div className="flex flex-col justify-between pb-3 lg:pr-4">
            <div>
              <CategoryLabel>Featured perspective</CategoryLabel>
              <h1 id="news-featured-heading" className="mt-5 max-w-[520px] font-serif text-[clamp(40px,3.9vw,68px)] leading-[1.04] tracking-[-.05em]">Good digital experiences begin with a better question.</h1>
              <p className="mt-6 max-w-[440px] text-sm leading-[1.75] text-[#64747c] sm:text-base">The most meaningful digital work starts by understanding people, their needs, and the possibilities in front of them.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#dfe7ea] pt-5 text-xs text-[#64747c]">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#d8edf5] font-bold text-[#167da4]">C</span>
              <span><strong className="block font-semibold text-[#27343b]">Capyngen Journal</strong>Ideas &amp; perspectives</span>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[18px] bg-[#dce8ed] sm:min-h-[500px] lg:min-h-[560px]">
            <Image src="/images/company-vision-statement.webp" alt="Four people discussing ideas around a laptop" fill priority sizes="(max-width: 1023px) 100vw, 37vw" className="object-cover object-[42%_center]" />
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
            <article className="relative min-h-[220px] overflow-hidden rounded-[18px] bg-[#17394a] text-white sm:min-h-[250px] lg:min-h-0">
              <Image src="/images/inside-stories/wildlife.webp" alt="People working with technology in a research lab" fill sizes="(max-width: 1023px) 50vw, 24vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102630e8] via-[#10263080] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-[10px] font-bold tracking-[.15em] text-[#a3e3f4] uppercase">Technology</span>
                <h2 className="mt-2 font-serif text-xl leading-tight tracking-[-.03em] sm:text-2xl">Technology works best when it works for people.</h2>
              </div>
            </article>
            <article className="flex min-h-[220px] flex-col justify-between rounded-[18px] bg-[#eaf3f7] p-5 sm:min-h-[250px] sm:p-6 lg:min-h-0">
              <span aria-hidden="true" className="font-serif text-5xl leading-none text-[#299ecc]">“</span>
              <div>
                <p className="font-serif text-xl leading-[1.25] tracking-[-.03em] text-[#24333b] sm:text-2xl">The best ideas become stronger when more people can shape them.</p>
                <p className="mt-4 text-[10px] font-bold tracking-[.14em] text-[#168bb6] uppercase">A Capyngen perspective</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="recently-added" aria-labelledby="recently-added-heading" className="border-t border-[#e7ecee] bg-white text-[#17232a]">
        <div className="mx-auto max-w-[1550px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-6 border-b border-[#e2e9ec] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <CategoryLabel>From the journal</CategoryLabel>
              <h2 id="recently-added-heading" className="mt-2 font-serif text-[clamp(34px,3vw,52px)] leading-none tracking-[-.05em]">Recently Added</h2>
            </div>
            <div role="group" aria-label="Filter stories by category" className="project-track flex max-w-full gap-5 overflow-x-auto whitespace-nowrap pb-1 sm:gap-7">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 border-b-2 pb-2 text-[10px] font-bold tracking-[.1em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#299ecc] sm:text-xs ${activeCategory === category ? "border-[#168bb6] text-[#167da4]" : "border-transparent text-[#87949b] hover:text-[#24333b]"}`}>{category}</button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
            <article className="group relative min-h-[460px] overflow-hidden rounded-[18px] bg-[#dbe6eb] sm:min-h-[560px] lg:min-h-[650px]">
              <Image src={leadStory.image} alt={leadStory.alt} fill sizes="(max-width: 1023px) 100vw, 52vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e28eb] via-[#0a1e2850] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <span className="text-[10px] font-bold tracking-[.18em] text-[#a8e9f9] uppercase">{leadStory.category}</span>
                <h3 className="mt-3 max-w-[560px] font-serif text-[clamp(28px,2.8vw,44px)] leading-[1.12] tracking-[-.04em]">{leadStory.title}</h3>
                <p className="mt-3 max-w-[500px] text-sm leading-[1.65] text-white/80">{leadStory.summary}</p>
              </div>
            </article>

            <div className="grid content-start gap-x-5 gap-y-8 sm:grid-cols-2 lg:gap-y-9">
              {sideStories.map((story) => (
                <article key={story.title} className="min-w-0">
                  <div className="relative aspect-[1.6] overflow-hidden rounded-[12px] bg-[#dce7eb]"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover" /></div>
                  <div className="mt-4"><CategoryLabel>{story.category}</CategoryLabel></div>
                  <h3 className="mt-2 font-serif text-[clamp(19px,1.45vw,26px)] leading-[1.2] tracking-[-.035em]">{story.title}</h3>
                  <p className="mt-3 text-xs leading-[1.6] text-[#76858d] sm:text-sm">{story.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="more-stories" aria-labelledby="more-stories-heading" className="border-t border-[#e7ecee] bg-[#fbfcfc] text-[#17232a]">
        <div className="mx-auto max-w-[1550px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div><CategoryLabel>More to explore</CategoryLabel><h2 id="more-stories-heading" className="mt-2 font-serif text-[clamp(34px,3vw,52px)] leading-none tracking-[-.05em]">More Perspectives</h2></div>
            <span className="hidden text-xs font-medium text-[#89979e] sm:block">Design · Technology · People</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,.83fr)_minmax(0,1.17fr)] lg:gap-12">
            <div className="grid content-start gap-8">
              <article className="grid grid-cols-[minmax(0,1fr)_110px] gap-5 border-t border-[#dce5e8] pt-7 sm:grid-cols-[minmax(0,1fr)_170px] sm:gap-8">
                <div><CategoryLabel>Business</CategoryLabel><h3 className="mt-3 font-serif text-xl leading-[1.2] tracking-[-.03em] sm:text-[28px]">Good digital work starts with a conversation.</h3><p className="mt-3 text-xs leading-[1.65] text-[#74838b] sm:text-sm">Understanding the challenge together helps teams make decisions with purpose.</p></div>
                <div className="relative h-[120px] overflow-hidden rounded-[10px] bg-[#dce8ed] sm:h-[160px]"><Image src="/images/company-about-office-v2.webp" alt="Colleagues discussing a project" fill sizes="(max-width: 639px) 110px, 170px" className="object-cover" /></div>
              </article>
              <article className="grid grid-cols-[minmax(0,1fr)_110px] gap-5 border-t border-[#dce5e8] pt-7 sm:grid-cols-[minmax(0,1fr)_170px] sm:gap-8">
                <div><CategoryLabel>Design</CategoryLabel><h3 className="mt-3 font-serif text-xl leading-[1.2] tracking-[-.03em] sm:text-[28px]">What makes an experience feel effortless?</h3><p className="mt-3 text-xs leading-[1.65] text-[#74838b] sm:text-sm">A thoughtful interface brings clarity to every step of a customer journey.</p></div>
                <div className="relative h-[120px] overflow-hidden rounded-[10px] bg-[#dce8ed] sm:h-[160px]"><Image src="/images/web-development/chair.webp" alt="Minimal blue chair representing thoughtful product design" fill sizes="(max-width: 639px) 110px, 170px" className="object-cover" /></div>
              </article>
            </div>
            <article className="min-w-0">
              <CategoryLabel>People</CategoryLabel>
              <h3 className="mt-3 max-w-[720px] font-serif text-[clamp(27px,2.5vw,42px)] leading-[1.15] tracking-[-.04em]">Making more room for the next generation of digital talent.</h3>
              <div className="relative mt-5 h-[340px] overflow-hidden rounded-[16px] bg-[#dce8ed] sm:h-[460px]"><Image src="/images/inside-stories/careers.webp" alt="Group of people working in technology" fill sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover object-center" /></div>
              <p className="mt-4 max-w-[680px] text-sm leading-[1.65] text-[#74838b]">Fresh perspectives, shared knowledge, and opportunity help shape better work for everyone.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
