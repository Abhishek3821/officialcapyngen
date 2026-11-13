const faqs = [
  { question: "What makes Capyngen the best custom AI solution company in India?", answer: "We work with your problems, not with a model. As a leading Custom AI solution provider in India, our aim is to create a system that disrupts a quantifiable business figure. Not to deliver pilots that never scale to production." },
  { question: "Do you provide AI development services in Gurugram?", answer: "Q. Do you have any new AI development services in Gurgaon? Yes. Our AI build services in Gurgaon include an entire build cycle of audit, strategy, engineering, integration, and handover. We collaborate with teams in Delhi NCR and all over." },
  { question: "What kinds of artificial intelligence solutions do you build?", answer: "We develop AI applications in the areas of document processing, business automation, customer service, prediction, and recommendation, all designed to deliver a targeted business result." },
  { question: "Is Capyngen an AI development company or a consulting firm?", answer: "Both. We're an AI development company that can also provide consulting on the AI use case. So we can tell you what the right use case is and then actually build it for you." },
  { question: "Do you offer AI consulting services for enterprises?", answer: "Can you help a business focus on AI use cases and determine its data needs? Yes. Our enterprise AI consulting team can help you pinpoint high-impact use cases, determine data maturity and build a plan that integrates with your architecture and security standards." },
  { question: "Can you integrate AI into our existing software stack?", answer: "Of course. Our AI software development projects can be integrated with your CRM, ERP, or internal apps. Enterprise AI solutions are a bust if they're disconnected from your workflow; they've got to be built into it." },
  { question: "What types of AI software development projects do you take on?", answer: "AI software development: we build AI software for custom agents, automation engines, document understanding and decision support. As India's top custom AI solutions company, we define each engagement based on a well-defined business problem." },
  { question: "How do you measure whether an AI solution worked?", answer: "We agree on KPIs before the build begins. As a best custom AI solution services provider, we measure processing time, reduction in cost, accuracy, and adoption, not just whether the model ran error-free." },
  { question: "How long does a typical project take?", answer: "On average, a low-code build can deliver to production in 610 weeks. Enterprise AI projects tend to be more complicated and can take anywhere from 35 months from audit to handover, given the extent of integration." },
  { question: "How do I begin working with Capyngen's elite customised AI product and services?", answer: "Have a call with us via the contact form. We'll set up a discovery call and explore your bottleneck and map a feasible roadmap. AI consulting services and AI development services in Gurugram are here for teams willing to develop." },
];

export function AiFaq() {
  return (
    <section id="ai-faq" aria-labelledby="ai-faq-heading" className="bg-[#d3e5f0] text-[#15395f]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-12 lg:px-12 lg:py-20">
        <h2 id="ai-faq-heading" className="text-[clamp(42px,4.5vw,68px)] leading-none font-semibold tracking-[-.06em]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-[18px] border border-[#dce8f3] bg-white p-5 shadow-[0_12px_32px_#165da90a] sm:px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] leading-[1.45] font-semibold text-[#15395f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176ac4] lg:text-base [&::-webkit-details-marker]:hidden">
                <span>Q{index + 1}. {faq.question}</span>
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#207ccd] text-base text-white transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pr-10 text-sm leading-[1.65] text-[#6b8094]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
