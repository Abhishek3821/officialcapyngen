"use client";

import AtlasPhoto from "./atlas-photo";
import useInfiniteCarousel from "./use-infinite-carousel";
import s from "./education-showcase.module.css";

type LearningPlace = { name: string; city: string; type: string; scene: number };

function Arrow({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={previous ? { transform: "rotate(180deg)" } : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function EducationShowcase({ places, onOpen }: { places: LearningPlace[]; onOpen: (index: number) => void }) {
  const carousel = useInfiniteCarousel(places.length);
  return <section id="education-showcase" className={s.section} aria-labelledby="showcase-heading">
    <header className={s.heading}><h2 id="showcase-heading">Learning showcase</h2><div className={s.controls} aria-label="Learning showcase controls"><button type="button" disabled={!carousel.ready} onClick={() => carousel.move(-1)} aria-label="Previous learning concepts"><Arrow previous /></button><button type="button" disabled={!carousel.ready} onClick={() => carousel.move(1)} aria-label="Next learning concepts"><Arrow /></button></div></header>
    <div className={s.viewport} ref={carousel.viewport} {...carousel.handlers} role="region" aria-roledescription="carousel" aria-label="Learning concept gallery" tabIndex={0}>
      <div className={s.rail} ref={carousel.rail}>
        {[0, 1, 2].flatMap(copy => places.map((place, index) => <article className={s.card} key={`${copy}-${place.name}`} aria-hidden={copy !== 1 ? true : undefined}>
          <button type="button" disabled={!carousel.ready} tabIndex={copy === 1 ? 0 : -1} aria-label={`Explore ${place.name}`} onClick={() => onOpen(index)} onFocus={event => { if (copy === 1 && event.currentTarget.matches(":focus-visible")) carousel.focusCard(index); }}>
            <AtlasPhoto image="/images/industries/education.png" scene={place.scene} label={place.name} className={s.photo} />
            <span className={s.caption}><strong>{place.city}</strong><span>{place.name}</span><span>{place.type} / Design concept</span></span>
            <span className={s.open} aria-hidden="true">↗</span>
          </button>
        </article>))}
      </div>
    </div>
  </section>;
}
