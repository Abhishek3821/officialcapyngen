import Image from "next/image";
import type { CSSProperties } from "react";

const projects = [
  {
    name: "Villa Kogelhofun", place: "Noord Beveland · Pays-Bas",
    description: "La Villa Kogelhofun est un exercice d’auto suffisance, conçu par l’architecte Paul de Ruiter. Une demeure à énergie neutre, en carbone autonome.",
    delivery: "Livraison hiver 2016", photo: "photo-1600607687920-4e2a09cf159d",
    image: [18, 32, 7, 11], note: [2, 25, 15], align: "right",
  },
  {
    name: "Globe House", place: "Knokke · Belgique",
    description: "Une demeure à énergie neutre en carbone, autonome et ouverte sur le paysage. Des espaces chaleureux baignés de lumière naturelle.",
    delivery: "Livraison été 2015", photo: "photo-1600210492486-724fe5c67fb0",
    image: [10, 45, 15, 24], note: [1, 50, 8], align: "right",
  },
  {
    name: "Non Program Pavillon", place: "Barcelone · Espagne",
    description: "Ce petit pavillon situé dans le centre de l’Espagne est signé par le cabinet d’architecture Jesús T. García Architects.",
    delivery: "Livraison hiver 2015", photo: "photo-1449158743715-0a90ebb6d2d8",
    image: [26, 32, 23, 37], note: [33, 16, 16], align: "right",
  },
  {
    name: "The Holiday Home", place: "Bern · Suisse",
    description: "Une maison de vacances composée d’une aile principale et de chambres qui s’adaptent naturellement au terrain et à ses nombreuses zones de vie.",
    delivery: "Livraison été 2014", photo: "photo-1510798831971-661eb04b3739",
    image: [50, 7, 15, 23], note: [66, 7, 16], align: "left",
  },
  {
    name: "Minimod", place: "Madrid · Espagne",
    description: "Une maison mobile à production d’un module, réalisée avec des éléments préfabriqués. Un système de châssis en acier qui s’adapte à l’espace et aux besoins, en choisissant parmi différentes finitions intérieures et extérieures.",
    delivery: "Livraison printemps 2015", photo: "photo-1470770841072-f978cf4d019e",
    image: [50, 32, 23, 37], note: [50, 71, 18], align: "left",
  },
  {
    name: "Nedregate", place: "Paris · France",
    description: "Le cabinet d’architecture a achevé la rénovation d’un bâtiment industriel en un espace culturel ouvert et lumineux.",
    delivery: "Livraison été 2015", photo: "photo-1497366754035-f200968a6e72",
    image: [74, 32, 15, 24], note: [90, 32, 10], align: "left",
  },
  {
    name: "Carré Seine", place: "Paris · France",
    description: "Résidence hôtelière de 175 chambres et 69 logements. Situé en bord de Seine, face à l’Île Saint Germain.",
    delivery: "Livraison hiver 2016", photo: "photo-1486406146926-c627a92ad1ab",
    image: [74, 58, 7, 11], note: [82, 58, 17], align: "left",
  },
  {
    name: "Werkhaus", place: "Berlin · Allemagne",
    description: "Une maison pensée comme un atelier à vivre. L’architecture associe matériaux naturels, lignes simples et espaces généreux.",
    delivery: "Livraison été 2014", photo: "photo-1449844908441-8829872d2607",
    image: [34, 71, 15, 23], note: [18, 81, 15], align: "right",
  },
];

export default function Agenda() {
  return (
    <section lang="fr" id="journal" aria-labelledby="agenda-heading" className="bg-[#fafaf9] px-5 py-10 sm:px-7 lg:px-10 lg:py-12">
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 lg:block lg:aspect-[1.62]">
        <header className="mb-2 sm:col-span-2 lg:absolute lg:top-[4%] lg:left-0 lg:mb-0 lg:w-[43%]">
          <h2 id="agenda-heading" className="text-[clamp(44px,5.3vw,76px)] leading-none font-bold tracking-[-0.06em] text-[#101110]">Agenda</h2>
          <p className="mt-3 text-[11px] leading-relaxed text-[#858580] lg:text-xs">8 nouvelles constructions en cours, livrées en 2014 - 2015 - 2016</p>
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
                <Image src={`/images/agenda/${project.photo}.jpg`} alt={`${project.name}, ${project.place}`} width={900} height={675} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="h-full w-full object-cover" />
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
