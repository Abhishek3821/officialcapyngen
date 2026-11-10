import Image from "next/image";
import s from "./education-nature.module.css";

function NaturePattern({className=""}:{className?:string}) {
  return <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.2">{Array.from({length:16},(_,i)=><g key={i} transform={`rotate(${i*22.5} 200 200)`}><path d="M200 180c-30-25-48-65-27-91 19-22 50-4 40 17-7 15-28 5-18-5m5 79c-9-40-5-70 16-88 31-26 62 17 37 36-15 11-28-12-13-17M200 143l-10-26m10 26 13-26"/><path d="M200 150c-16-44-13-75 9-97 19-19 36-14 41-3-16-2-29 5-33 18M200 38l-8 18m8-18 8 18"/></g>)}<circle cx="200" cy="200" r="28"/><circle cx="200" cy="200" r="38"/><circle cx="200" cy="200" r="53"/></g></svg>;
}

export default function EducationNature(){return <section className={s.section} aria-labelledby="education-nature-title">
  <div className={s.banner}><Image src="/images/industries/education-river.png" alt="A wild river flowing through a dark green northern forest" fill sizes="100vw" className={s.bannerImage}/><div className={s.bannerShade}/><h2 id="education-nature-title">What we give /<br/>what we do not.</h2></div>
  <div className={s.topGrid}>
    <article className={s.poetic}><h3>Poetic &<br/>immersive.</h3><p>Make room for a different kind of discovery. A little less noise. A little more space to notice, reflect and learn.</p></article>
    <div className={s.principles} aria-label="Our perspective"><p><strong>Room</strong><span>for curiosity —<br/>and a fresh perspective.</span></p><p><strong>Time</strong><span>to explore ideas,<br/>and make them your own.</span></p></div>
    <article className={s.minimal}><NaturePattern className={s.topPattern}/><h3>Minimalist &<br/>evocative.</h3><p>We leave space for what matters. Thoughtful experiences, without the distractions that get in the way.</p></article>
  </div>
  <div className={s.bottomGrid}>
    <article className={s.pine}><Image src="/images/industries/education-pine.png" alt="Pine needles and branches holding clear raindrops" fill sizes="(max-width:640px) 100vw, 33vw" className={s.pineImage}/><div className={s.pineShade}/><h3>Fresh<br/>authenticity.</h3></article>
    <article className={s.guardians}><NaturePattern className={s.lowerPattern}/><h3>The silent<br/>guardians.</h3><p>Nature reminds us that growth takes patience. Strong roots, thoughtful care and the space to find your own direction.</p></article>
    <article className={s.perspective}><NaturePattern className={s.sidePattern}/><h3>A wider<br/>perspective.</h3><p>Step back and see things differently. Follow your curiosity, discover a new connection and make room for what comes next.</p></article>
  </div>
  <article className={s.botanical} aria-labelledby="education-botanical-title">
    <div className={s.botanicalVisual}><header><NaturePattern className={s.berryHeaderPattern}/><h3 id="education-botanical-title">Karelian wild plants<br/>will pleasantly<br/>surprise you.</h3></header><div className={s.berryPhoto}><Image src="/images/industries/education-blueberries.png" alt="Ripe wild blueberries with a soft blue bloom, surrounded by deep green leaves" fill sizes="(max-width:760px) 100vw, 45vw" className={s.berryImage}/></div></div>
    <div className={s.botanicalCopy}><NaturePattern className={s.berryTopPattern}/><NaturePattern className={s.berryBottomPattern}/><dl><div><dt>Wild ingredients</dt><dd>Wild blueberry, wild mint</dd></div><div><dt>Story</dt><dd>Karelian forests turn blue in August. Blueberries are everywhere — tart, small, intensely flavourful. The pie is simple: short crust, abundant berries, a dusting of sugar. Wild mint grows along streams and adds a cooling note to the pastry.</dd></div><div><dt>Presentation</dt><dd>Warm slice. A dollop of smetana or a scoop of birch-sap sorbet alongside.</dd></div><div><dt>Flavour profile</dt><dd>Tart, buttery, refreshing</dd></div></dl></div>
  </article>
</section>;}
