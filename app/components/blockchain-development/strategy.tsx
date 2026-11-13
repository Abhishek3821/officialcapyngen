import Image from "next/image";

function Portrait({ src, alt, className = "", position = "object-center" }: { src: string; alt: string; className?: string; position?: string }) {
  return <div className={`relative overflow-hidden bg-[#d8d3c8] ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${position}`} /></div>;
}

export function BlockchainStrategy() {
  return <section id="blockchain-why-capyngen" aria-labelledby="blockchain-strategy-title" className="overflow-hidden bg-[#efefec] text-[#101413]">
    <div className="mx-auto grid min-h-[670px] max-w-[1500px] lg:grid-cols-[.8fr_1.2fr]">
      <div className="grid min-h-[560px] grid-rows-[1.3fr_.7fr] border-r border-[#c7c8c3]"><Portrait src="/images/blockchain-development/fashion.webp" alt="Fashion portrait in warm neutral tones" className="min-h-[360px]" position="object-[center_22%]" /><div className="flex items-center justify-center border-t border-[#c7c8c3] px-8 text-center"><p className="max-w-[330px] text-base leading-[1.5] font-semibold">When most blockchain companies sell you technology, we sell you judgement.</p></div></div>
      <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-16"><div className="self-end rounded-full border border-[#b6b9b3] px-4 py-1 text-[11px] tracking-[.1em] uppercase">Capyngen</div><h2 id="blockchain-strategy-title" className="mt-12 text-center text-[clamp(52px,6vw,96px)] leading-[.94] font-black tracking-[-.07em] uppercase lg:mt-14">Why Choose<br />Capyngen</h2><Portrait src="/images/blockchain-development/portrait.webp" alt="A thoughtful portrait in a dark olive setting" className="mx-auto mt-9 h-[210px] w-[210px] rounded-[32px] sm:h-[260px] sm:w-[260px]" /><p className="mx-auto mt-8 max-w-[620px] text-center text-sm leading-[1.75] text-[#575d58] sm:text-base">When most blockchain companies sell you technology, we sell you judgement. As a Top blockchain development company in India, we&apos;re valuable because we can tell the difference between when distributed ledgers will benefit your business and when they won&apos;t. That truth, with delivery-grade engineering, is why leading companies select Capyngen as their Top blockchain development company in India over a vendor that just ships code and vanishes.</p></div>
    </div>
  </section>;
}

const infrastructure = [
  { number: "1", title: "Rollup Infrastructure", description: "Deploy and run optimistic rollups on modular stacks with secure, scalable infrastructure and SLAs." },
  { number: "2", title: "App Chain Infrastructure", description: "Available Blockchain infrastructure with application-specific platforms." },
  { number: "3", title: "Node Infrastructure", description: "High-performance RPC, validator, and staking nodes designed for low latency and high uptime." },
  { number: "4", title: "Data Indexing", description: "A solid data index for blockchain explorers, analytics, and app backends." },
];

export function BlockchainChallenge() {
  return <section id="blockchain-infrastructure" aria-labelledby="blockchain-challenge-title" className="overflow-hidden bg-[#f1f1ee] text-[#111514]">
    <div className="mx-auto grid min-h-[650px] max-w-[1500px] lg:grid-cols-[1.12fr_.88fr]">
      <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-20"><p className="text-xs tracking-[.2em] text-[#767e77] uppercase">07 / Our Blockchain Infrastructure Services</p><h2 id="blockchain-challenge-title" className="mt-4 text-[clamp(55px,6.3vw,98px)] leading-[.95] font-black tracking-[-.075em] uppercase">Powering Custom Chains</h2><div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">{infrastructure.map((item) => <article key={item.number} className="max-w-[310px]"><span className="flex size-10 items-center justify-center border border-[#565e57] text-lg font-semibold">{item.number}</span><h3 className="mt-4 text-lg font-semibold leading-tight">{item.title}</h3><p className="mt-3 text-sm leading-[1.65] text-[#606a62]">{item.description}</p></article>)}</div></div>
      <Portrait src="/images/blockchain-development/fashion.webp" alt="Contemporary fashion portrait against a warm stone wall" className="min-h-[440px]" position="object-[center_30%]" />
    </div>
  </section>;
}

const industries = [
  { label: "FinTech", text: "Blockchain development is transforming the fintech industry for the better by enabling secure, transparent, and fast transactions." },
  { label: "Banking", text: "Blockchain transaction processing; fraud reduction; customer trust." },
  { label: "Marketing", text: "Blockchain options are a lot better for the consumer engagement and increased brand loyalty." },
  { label: "Healthcare and Life Science", text: "Data security is improved, patient privacy is better, and records can be made interoperable through blockchain solutions." },
];

export function BlockchainSwot() {
  return <section id="blockchain-industries" aria-labelledby="blockchain-swot-title" className="overflow-hidden bg-[#e9e9e6] text-[#101514]">
    <div className="mx-auto grid min-h-[660px] max-w-[1500px] grid-cols-1 lg:grid-cols-[.9fr_1.1fr_1fr]">
      <div className="flex flex-col justify-between px-6 py-14 sm:px-12 lg:px-14"><div><p className="text-xs tracking-[.2em] text-[#777e76] uppercase">08 / Who we work with</p><h2 id="blockchain-swot-title" className="mt-5 text-[clamp(58px,6.4vw,100px)] leading-[.86] font-black tracking-[-.08em] uppercase">Indus&shy;tries</h2></div><p className="mt-10 max-w-[290px] border-l-2 border-[#111514] pl-5 text-base leading-[1.6] text-[#5f6860]">It&apos;s any business that will benefit from the creation of auditable records or disintermediated trust.</p></div>
      <Portrait src="/images/brands-shine/floral.webp" alt="Fashion portrait in a yellow outfit" className="min-h-[440px]" position="object-[center_22%]" />
      <div className="grid grid-rows-[.75fr_1.25fr]"><div className="grid grid-cols-2 gap-2 p-3"><Portrait src="/images/blockchain-development/fashion.webp" alt="Editorial fashion portrait" className="min-h-[190px]" position="object-[center_25%]" /><Portrait src="/images/blockchain-development/portrait.webp" alt="Thoughtful portrait" className="min-h-[190px]" position="object-[center_25%]" /></div><div className="grid gap-4 border-t border-[#c5c8c2] p-6 sm:grid-cols-2 lg:p-8">{industries.map((item) => <article key={item.label}><h3 className="text-xs font-bold tracking-[.1em] uppercase">{item.label}</h3><p className="mt-2 text-sm leading-[1.55] text-[#656d65]">{item.text}</p></article>)}</div></div>
    </div>
  </section>;
}

const faqs = [
  { question: "What makes Capyngen the Best blockchain development company in India?", answer: "We pair integrity with secure engineering; we'll always let you know when blockchain isn't the solution. Part of our integrity is knowing when to turn down a project as well as when to build it." },
  { question: "What makes Capyngen unique as a Top Blockchain Development Company in India?", answer: "Top blockchain development companies in India are evaluated based on production systems, not pilots. At Swash, we focus on integrations that stand the test of real users and real transaction volume." },
  { question: "What does a Best blockchain development services provider engagement include?", answer: "Confirmation of the idea, architecture design, smart contract code integration, security audit, and technical support after go-live; all phases have clear delivery." },
  { question: "What industries do you work in as a top blockchain development company in India?", answer: "Finance, supply chain, health records, or identity management. It's any business that will benefit from the creation of auditable records or disintermediated trust." },
  { question: "Do you offer blockchain consulting for businesses in Gurgaon?", answer: "Yes. We deliver enterprise-grade blockchain development in Gurgaon that can help you on your journey to tokenisation, transparency of the supply chain, or secure record storage." },
  { question: "What does a top blockchain development solution and services mean in practice?", answer: "It means infrastructure you can work on. Not PowerPoint decks. Architecture that you can review, contracts you can check, and integrations that can make your existing systems work for you." },
  { question: "Can you integrate blockchain into our existing software stack?", answer: "Yes. We connect your distributed ledgers with your existing CRM, ERP, or internal tools. Our mission is to deliver invisible blockchain benefits without disrupting your existing thinking." },
  { question: "How do you approach smart contract security?", answer: "All contracts are checked thoroughly for edge cases, re-entrancy bugs, and logical issues. Security is a lock at each stage of deployment, not a feature at the end." },
  { question: "What is the typical timeline for a blockchain project?", answer: "Targeted integrations go live in 812 weeks. Multi-system, complex platforms take 46 months." },
  { question: "How do I start working with the Best blockchain development services companies?", answer: "Use our contact form to get in touch. We'll see if blockchain is a good fit for your use case, and if it is, we'll work to get you from scope to production." },
];

export function BlockchainFaq() {
  return <section id="blockchain-faq" aria-labelledby="blockchain-faq-title" className="overflow-hidden bg-[#f4f0e9] text-[#454d3b]">
    <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-16 lg:py-24">
      <div><p className="text-xs tracking-[.22em] text-[#8b8b78] uppercase">09 / Get in touch</p><h2 id="blockchain-faq-title" className="mt-7 font-serif text-[clamp(52px,5vw,84px)] leading-none tracking-[-.07em]">Frequently Asked Questions</h2></div>
      <div className="border-t border-[#d9d3c6]">{faqs.map((faq, index) => <details key={faq.question} className="group border-b border-[#d9d3c6] py-5">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl leading-[1.4] text-[#454d3b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#596b4b] [&::-webkit-details-marker]:hidden"><span><span className="mr-3 text-[#a98b52]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#596b4b] font-sans text-base text-white transition-transform group-open:rotate-45">+</span></summary>
        <p className="mt-3 max-w-[720px] pr-10 text-base leading-[1.7] text-[#777e6c]">{faq.answer}</p>
      </details>)}</div>
    </div>
    <div className="flex justify-between bg-[#b49b83] px-6 py-5 text-xs tracking-[.12em] text-white/90 sm:px-12"><span>CAPYNGEN / BLOCKCHAIN DEVELOPMENT</span><span>09</span></div>
  </section>;
}
