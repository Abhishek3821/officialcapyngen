import Image from "next/image";

function Portrait({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`relative overflow-hidden bg-[#d8d3c8] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

export function BlockchainStrategy() {
  return <section id="blockchain-strategy" aria-labelledby="blockchain-strategy-title" className="overflow-hidden bg-[#efefec] text-[#101413]">
    <div className="mx-auto grid min-h-[670px] max-w-[1500px] lg:grid-cols-[.8fr_1.2fr]">
      <div className="grid min-h-[560px] grid-rows-[1.3fr_.7fr] border-r border-[#c7c8c3]"><Portrait src="/images/blockchain-development/fashion.webp" alt="Fashion portrait in warm neutral tones" className="min-h-[360px]" position="object-[center_22%]" /><div className="flex items-center justify-center border-t border-[#c7c8c3] px-8 text-center"><p className="max-w-[330px] text-base leading-[1.5] font-semibold">Good strategy turns ambitious ideas into products people can trust.</p></div></div>
      <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-16"><div className="self-end rounded-full border border-[#b6b9b3] px-4 py-1 text-[11px] tracking-[.1em] uppercase">Capyngen</div><h2 id="blockchain-strategy-title" className="mt-12 text-center text-[clamp(52px,6vw,96px)] leading-[.94] font-black tracking-[-.07em] uppercase lg:mt-14">The Strategic<br />Solution</h2><Portrait src="/images/blockchain-development/portrait.webp" alt="A thoughtful portrait in a dark olive setting" className="mx-auto mt-9 h-[210px] w-[210px] rounded-[32px] sm:h-[260px] sm:w-[260px]" /><p className="mx-auto mt-8 max-w-[620px] text-center text-sm leading-[1.75] text-[#575d58] sm:text-base">We connect business needs to secure architecture, clear user journeys, and careful implementation. Every blockchain feature has a purpose, from a stronger record of ownership to more transparent operations.</p></div>
    </div>
  </section>;
}

const challenges = [
  { number: "1", title: "Finding the real use case", description: "Separate a useful blockchain opportunity from a fashionable idea." },
  { number: "2", title: "Building trust", description: "Make identity, permissions, and transactions clear to users." },
  { number: "3", title: "Making systems work together", description: "Connect new infrastructure to the tools teams already use." },
  { number: "4", title: "Planning for scale", description: "Design for security, performance, and ongoing change." },
];

export function BlockchainChallenge() {
  return <section id="blockchain-challenge" aria-labelledby="blockchain-challenge-title" className="overflow-hidden bg-[#f1f1ee] text-[#111514]">
    <div className="mx-auto grid min-h-[650px] max-w-[1500px] lg:grid-cols-[1.12fr_.88fr]">
      <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-20"><p className="text-xs tracking-[.2em] text-[#767e77] uppercase">07 / What we solve</p><h2 id="blockchain-challenge-title" className="mt-4 text-[clamp(55px,6.3vw,98px)] leading-[.95] font-black tracking-[-.075em] uppercase">The Challenge</h2><div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">{challenges.map((item) => <article key={item.number} className="max-w-[310px]"><span className="flex size-10 items-center justify-center border border-[#565e57] text-lg font-semibold">{item.number}</span><h3 className="mt-4 text-lg font-semibold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-[1.65] text-[#606a62]">{item.description}</p></article>)}</div></div>
      <Portrait src="/images/blockchain-development/fashion.webp" alt="Contemporary fashion portrait against a warm stone wall" className="min-h-[440px]" position="object-[center_30%]" />
    </div>
  </section>;
}

const swot = [
  { label: "Strengths", text: "Clear strategy, secure engineering, and thoughtful design." },
  { label: "Weaknesses", text: "New systems need careful onboarding and integration." },
  { label: "Opportunities", text: "Transparent records and connected digital products." },
  { label: "Threats", text: "Changing standards, risks, and user expectations." },
];

export function BlockchainSwot() {
  return <section id="blockchain-swot" aria-labelledby="blockchain-swot-title" className="overflow-hidden bg-[#e9e9e6] text-[#101514]">
    <div className="mx-auto grid min-h-[660px] max-w-[1500px] grid-cols-1 lg:grid-cols-[.9fr_1.1fr_1fr]">
      <div className="flex flex-col justify-between px-6 py-14 sm:px-12 lg:px-14"><div><p className="text-xs tracking-[.2em] text-[#777e76] uppercase">08 / Perspective</p><h2 id="blockchain-swot-title" className="mt-5 text-[clamp(58px,6.4vw,100px)] leading-[.86] font-black tracking-[-.08em] uppercase">SWOT<br />Analysis</h2></div><p className="mt-10 max-w-[290px] border-l-2 border-[#111514] pl-5 text-base leading-[1.6] text-[#5f6860]">A clear view of the forces shaping a successful blockchain product.</p></div>
      <Portrait src="/images/brands-shine/floral.webp" alt="Fashion portrait in a yellow outfit" className="min-h-[440px]" position="object-[center_22%]" />
      <div className="grid grid-rows-[.75fr_1.25fr]"><div className="grid grid-cols-2 gap-2 p-3"><Portrait src="/images/blockchain-development/fashion.webp" alt="Editorial fashion portrait" className="min-h-[190px]" position="object-[center_25%]" /><Portrait src="/images/blockchain-development/portrait.webp" alt="Thoughtful portrait" className="min-h-[190px]" position="object-[center_25%]" /></div><div className="grid gap-4 border-t border-[#c5c8c2] p-6 sm:grid-cols-2 lg:p-8">{swot.map((item) => <article key={item.label}><h3 className="text-xs font-bold tracking-[.1em] uppercase">{item.label}</h3><p className="mt-2 text-sm leading-[1.55] text-[#656d65]">{item.text}</p></article>)}</div></div>
    </div>
  </section>;
}
