"use client";

import AtlasPhoto from "./atlas-photo";
import useInfiniteCarousel from "./use-infinite-carousel";
import s from "./education-showcase.module.css";

type Challenge = { name: string; city: string; type: string; scene: number };

function Arrow({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={previous ? { transform: "rotate(180deg)" } : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function EducationShowcase({ places }: { places: Challenge[] }) {
  const { viewport, rail, handlers, ready, move, focusCard } = useInfiniteCarousel(places.length);
  return <section id="education-showcase" className={s.section} aria-labelledby="showcase-heading">
    <header className={s.heading}><div><h2 id="showcase-heading">Education Challenges We Solve</h2><p className={s.intro}>Addressing operational, administrative, and technological hurdles faced by contemporary educational institutions.</p></div><div className={s.controls} aria-label="Education challenges controls"><button type="button" disabled={!ready} onClick={() => move(-1)} aria-label="Previous challenges"><Arrow previous /></button><button type="button" disabled={!ready} onClick={() => move(1)} aria-label="Next challenges"><Arrow /></button></div></header>
    <div className={s.viewport} ref={viewport} {...handlers} role="region" aria-roledescription="carousel" aria-label="Education challenges" tabIndex={0}>
      <div className={s.rail} ref={rail}>
        {[0, 1, 2].flatMap(copy => places.map((place, index) => <article className={s.card} key={`${copy}-${place.city}`} aria-hidden={copy !== 1 ? true : undefined}>
          <a href="/contact-us" draggable={false} tabIndex={copy === 1 ? 0 : -1} aria-label={`Contact us about ${place.city}`} onFocus={event => { if (copy === 1 && event.currentTarget.matches(":focus-visible")) focusCard(index); }}>
            <AtlasPhoto image="/images/industries/education.png" scene={place.scene} label={place.city} className={s.photo} />
            <span className={s.caption}><strong>{place.city}</strong><span>{place.name}</span><span>{place.type} / Challenge 0{index + 1}</span></span>
            <span className={s.open} aria-hidden="true">↗</span>
          </a>
        </article>))}
      </div>
    </div>
  </section>;
}
