import Image from "next/image";
import s from "./education-nature.module.css";

function NaturePattern({className=""}:{className?:string}) {
  return <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.2">{Array.from({length:16},(_,i)=><g key={i} transform={`rotate(${i*22.5} 200 200)`}><path d="M200 180c-30-25-48-65-27-91 19-22 50-4 40 17-7 15-28 5-18-5m5 79c-9-40-5-70 16-88 31-26 62 17 37 36-15 11-28-12-13-17M200 143l-10-26m10 26 13-26"/><path d="M200 150c-16-44-13-75 9-97 19-19 36-14 41-3-16-2-29 5-33 18M200 38l-8 18m8-18 8 18"/></g>)}<circle cx="200" cy="200" r="28"/><circle cx="200" cy="200" r="38"/><circle cx="200" cy="200" r="53"/></g></svg>;
}

const integrationText="On top of that is the ease of integration that is associated with the use of educational ERP software and the best IT solutions for education industry.";
const pairs=[
  {challenge:"Customers struggle to find training that meets their specific needs.",solution:"Implement an AI-powered recommendation engine that automatically surfaces the right content to the right user at the right time, based on their role, behavior, and goals."},
  {challenge:"Training lags behind product releases.",solution:"Invest in agile content development tools to keep materials up to date and leverage generative AI to instantly draft, update, and localize training content, reducing the lag from weeks to hours"},
  {challenge:"Customers aren’t engaging with training.",solution:"Utilize mobile learning, badges, and community platforms to enhance the experience's interactivity."},
];

export default function EducationNature(){return <section className={s.section} aria-labelledby="education-nature-title">
  <div className={s.banner}><Image src="/images/industries/education-river.png" alt="Benefits of choosing Capyngen" fill sizes="100vw" className={s.bannerImage}/><div className={s.bannerShade}/><h2 id="education-nature-title">Benefits of <br/>Choosing Capyngen</h2></div>
  <div className={s.topGrid}>
    <article className={s.poetic}><h3>An additional layer <br/>of excellence.</h3><p>With Capyngen, you integrate an additional layer of excellence into your academic institution through resilient digital infrastructure:</p></article>
    <div className={s.principles} aria-label="Benefits"><p><strong>Improved</strong><span>and interactive <br/>learning.</span></p><p><strong>On-hand</strong><span>information and intelligence <br/>to make decisions.</span></p></div>
    <article className={s.minimal}><NaturePattern className={s.topPattern}/><h3>Better <br/>administration.</h3><p>Better administration and decreased paperwork.</p></article>
  </div>
  <div className={s.bottomGrid}>
    <article className={s.pine}><Image src="/images/industries/education-pine.png" alt="Secure, scalable and cloud-based IT infrastructure" fill sizes="(max-width:640px) 100vw, 33vw" className={s.pineImage}/><div className={s.pineShade}/><h3>Secure, scalable <br/>and cloud-based.</h3></article>
    <article className={s.guardians}><NaturePattern className={s.lowerPattern}/><h3>Higher-level <br/>security.</h3><p>The security measures for sensitive data are at a higher level.</p></article>
    <article className={s.perspective}><NaturePattern className={s.sidePattern}/><h3>Ease of <br/>integration.</h3><p>{integrationText}</p></article>
  </div>
  <article className={s.botanical} aria-labelledby="education-botanical-title">
    <div className={s.botanicalVisual}><header><NaturePattern className={s.berryHeaderPattern}/><h3 id="education-botanical-title">Common Challenges <br/>and Solutions</h3></header><div className={s.berryPhoto}><Image src="/images/industries/education-blueberries.png" alt="Common challenges and solutions" fill sizes="(max-width:760px) 100vw, 45vw" className={s.berryImage}/></div></div>
    <div className={s.botanicalCopy}><NaturePattern className={s.berryTopPattern}/><NaturePattern className={s.berryBottomPattern}/><dl><div><dt>Overview</dt><dd>Even the strongest education programs encounter hurdles. Here are a few common pitfalls and solutions:</dd></div>{pairs.map((item,i)=><div key={item.challenge}><dt>0{i+1}</dt><dd><strong>Challenge:</strong> {item.challenge}<br/><strong>Solution:</strong> {item.solution}</dd></div>)}</dl></div>
  </article>
</section>;}
