const faqs = [
  { question: "What makes Capyngen the best Ecommerce Website Design company in India?", answer: "Conversion-focused design and sophisticated development technology. We are the top Ecommerce Website Design company in India, and we don't just create beautiful stores; we create beautiful stores that load quickly, convert, and keep your customers coming back." },
  { question: "How is Capyngen different from other ecommerce design agencies?", answer: "Theme install Anyone can do the theme install. We are special because of our design customisation and enhancements to shopability. As an Ecommerce Website Design Company India, we are designing your store and designing the way your customers shop for your business." },
  { question: "Which technologies do you use for ecommerce development?", answer: "What we can do for you: we work with JavaScript and set up PWA Accelerated Mobile Pages) for high-performance UX/UI. How we do it: our stack allows your store to be lightning fast, lean, and secure without being held back by a template." },
  { question: "What are the 6 factors you focus on in ecommerce design?", answer: "Fast load speed, mobile responsiveness, simple checkout process, secure shopping and clear navigation. These have every other aspect that ensures visitors to either browse or go. The best Ecommerce Website Design services provider considers them as must-haves." },
  { question: "Do you offer 24/7 support for overseas clients?", answer: "Yes. We are one of the very few ecommerce design companies in India that offer 247 dedicated assistance globally across continents." },
  { question: "How long does an ecommerce website design project take?", answer: "A specialised storefront takes 48 weeks. This varies by catalogue size, custom features, and integrations. We provide an agreed timeline before kickoff." },
  { question: "Can you integrate payment gateways and accounting tools?", answer: "Yes, Seamless connection to the top accounting, billing, and marketing tools. Shopping cart feature with the convenience of many different forms of payment, shipping features and methods of payment." },
  { question: "Is my customer data secure on websites you build?", answer: "Protection at all levels. We adhere to the highest standards of security and compliance, and employ robust encryption and secure development practices to safeguard your customer data in all your transactions." },
  { question: "Do you serve businesses in Gurgaon and across India?", answer: "Yes. Our Ecommerce Website Design company in Gurugram works with startups, corporations, and international brands. We even collaborate as a strategic consulting partner to match our technological expertise with your long-term business objectives." },
  { question: "How do I get started with Capyngen?", answer: "Fill out our contact form; we will have a conversation about your needs and will provide a realistic design and development plan. As one of the best Ecommerce Website Design companies, we begin with the end in mind: your end goal." },
];

export default function EcommerceFaq() {
  return (
    <section id="ecommerce-faq" aria-labelledby="ecommerce-faq-heading" className="bg-[#fff8ef] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
      <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
        <div><p className="text-[11px] font-medium tracking-[.16em] text-[#49749b] uppercase">Ecommerce Website Design</p><h2 id="ecommerce-faq-heading" className="mt-5 text-[clamp(38px,4.8vw,72px)] leading-[1.02] font-medium tracking-[-.055em] text-[#1c3b65]">Frequently Asked <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic text-[#49749b]">Questions</span></h2></div>
        <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-[18px] bg-white p-5 shadow-[0_10px_30px_#1c3b650d] sm:px-7">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base leading-[1.5] font-semibold text-[#1c3b65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c3b65] [&::-webkit-details-marker]:hidden"><span><span className="mr-2 text-[#49749b]">Q{index + 1}.</span>{faq.question}</span><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d5ebac] text-base text-[#183451] transition-transform group-open:rotate-45">+</span></summary>
          <p className="mt-3 pr-10 text-sm leading-[1.7] text-[#5b6b7d]">{faq.answer}</p>
        </details>)}</div>
      </div>
    </section>
  );
}
