import Image from "next/image";
import type { CSSProperties } from "react";

const projects = [
  {
    name: "Proven Delivery", place: "Full execution capability",
    description: "We do not just advise — we design, build, test, and maintain the systems ourselves, which is why clients trust us as the Best IT company in India.",
    delivery: "End-to-End Ownership", photo: "photo-1600607687920-4e2a09cf159d",
    image: [18, 32, 7, 11], note: [2, 25, 15], align: "right",
  },
  {
    name: "Full Ownership", place: "Single unified team",
    description: "Strategy, design, development, cloud, AI, and marketing all sit with one team, so you never have to coordinate between multiple vendors.",
    delivery: "Zero Vendor Friction", photo: "photo-1600210492486-724fe5c67fb0",
    image: [10, 45, 15, 24], note: [1, 50, 8], align: "right",
  },
  {
    name: "Built to Scale", place: "Enterprise architecture",
    description: "Our code, architecture, and security practices are built to the level of the Top IT Companies, so your platform still works when your business doubles.",
    delivery: "High Performance", photo: "photo-1449158743715-0a90ebb6d2d8",
    image: [26, 32, 23, 37], note: [33, 16, 16], align: "right",
  },
  {
    name: "Clear Communication", place: "Transparent progress",
    description: "You get clear timelines, honest updates, and visible progress reports — no vague promises or hidden delays.",
    delivery: "100% Transparency", photo: "photo-1510798831971-661eb04b3739",
    image: [50, 7, 15, 23], note: [66, 7, 16], align: "left",
  },
  {
    name: "Business First", place: "Workflow integration",
    description: "As a leading IT company in India, we start with your business model and workflows before writing a single line of software.",
    delivery: "Model-Driven Design", photo: "photo-1470770841072-f978cf4d019e",
    image: [50, 32, 23, 37], note: [50, 71, 18], align: "left",
  },
  {
    name: "Flexible Models", place: "Custom engagement",
    description: "Whether you need a fixed-scope project or a long-term retainer, we shape the engagement around your budget and priorities.",
    delivery: "Agile Retainers", photo: "photo-1497366754035-f200968a6e72",
    image: [74, 32, 15, 24], note: [90, 32, 10], align: "left",
  },
  {
    name: "Secure by Design", place: "Robust protection",
    description: "Encryption, access control, audit trails, and regulatory alignment are part of the foundation, not an afterthought — the standard you expect from a Best IT Services Provider.",
    delivery: "Enterprise Security", photo: "photo-1486406146926-c627a92ad1ab",
    image: [74, 58, 7, 11], note: [82, 58, 17], align: "left",
  },
  {
    name: "Long-Term Support", place: "Continuous growth",
    description: "We stay involved after go-live with training, maintenance, and continuous improvement, because a successful launch is only the beginning of a good system.",
    delivery: "Ongoing Partnership", photo: "photo-1449844908441-8829872d2607",
    image: [34, 71, 15, 23], note: [18, 81, 15], align: "right",
  },
];

export default function Agenda() {
  return (
    <section lang="fr" id="journal" aria-labelledby="agenda-heading" className="bg-[#fafaf9] px-5 py-10 sm:px-7 lg:px-10 lg:py-12">
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 lg:block lg:aspect-[1.62]">
        <header className="mb-2 sm:col-span-2 lg:absolute lg:top-[4%] lg:left-0 lg:mb-0 lg:w-[43%]">
          <h2 id="agenda-heading" className="text-[clamp(40px,4.8vw,72px)] leading-none font-bold tracking-[-0.06em] text-[#101110]">Why Capyngen</h2>
          <p className="mt-3 text-[11px] leading-relaxed text-[#858580] lg:text-xs">Eight reasons businesses pick us over other IT companies</p>
        </header>
        {projects.map((project) => {
          const [left, top, width, height] = project.image;
          const [noteLeft, noteTop, noteWidth] = project.note;
          const position = {
            "--image-left": `${left}%`, "--image-top": `${top}%`,
            "--image-width": `${width}%`, "--image-height": `${height}%`,
            "--note-left": `${noteLeft}%`, "--note-top": `${noteTop}%`,
            "--note-width": `${noteWidth}%`, "--note-align": project.align,
          } as CSSProperties;
          return (
            <article key={project.name} className="min-w-0 lg:contents" style={position}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#d4d7d1] lg:absolute lg:top-[var(--image-top)] lg:left-[var(--image-left)] lg:aspect-auto lg:h-[var(--image-height)] lg:w-[var(--image-width)]">
                <Image 
                  src={`https://images.unsplash.com/${project.photo}?auto=format&fit=crop&w=900&q=85`} 
                  alt={`${project.name}, ${project.place}`} 
                  fill 
                  unoptimized 
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="mt-3.5 text-xs leading-[1.3] text-[#7a7b74] lg:absolute lg:top-[var(--note-top)] lg:left-[var(--note-left)] lg:mt-0 lg:w-[var(--note-width)] lg:text-[clamp(8px,0.78vw,11px)] lg:[text-align:var(--note-align)] lg:[&_p]:mt-[0.7em] lg:[&_h3+p]:mt-[0.2em]">
                <h3 className="font-bold text-[#383a35]">{project.name}</h3>
                <p className="mt-0.5">{project.place}</p>
                <p className="mt-3 leading-[1.45]">{project.description}</p>
                <p className="mt-3"><span className="border-y border-[#b8b8b1] py-px">{project.delivery}</span></p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}