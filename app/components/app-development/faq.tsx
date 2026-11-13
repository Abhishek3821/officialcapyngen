const faqs = [
  { question: "What makes Capyngen one of the best app development companies in India?", answer: "We build more than code; we build apps that work after we ship them. We bring together product thinking, clean development, and post-launch support to make sure your app works for your users." },
  { question: "How do I select the best app development company in India?", answer: "Find a partner who inquires about your business objectives first, technology second. Capyngen's process always begins with discovery; the app is built more exactly to your needs, not in a template." },
  { question: "What does your best Android app development services provider offer?", answer: "We develop native Android apps that work seamlessly across device tiers and levels, including battery drain, memory, and UI transitions. We deal with all aspects of Play Store submissions and refreshes." },
  { question: "Is Capyngen a leading iOS app development company in India?", answer: "Yes. We can build you an app that will run on an iOS device, based on the current version of Swift, following Apple's Human Interface Guidelines, and with the complete application submission process to the App Store." },
  { question: "Which are the best app development services companies for startups?", answer: "Startups want a partner who understands MVP scoping and tight budgets. Capyngen partners with early-stage startups to scope the smallest buildable version of the concept, and then develop from there." },
  { question: "Can you provide top app development in Gurgaon with local support?", answer: "Yes. We are based in Gurugram, Haryana, and are happy to meet locally and work locally. We also work with clients in other locations in India and internationally." },
  { question: "What are your top app development services and solutions?", answer: "We offer native iOS & Android development for each platform, cross-platform builds, product design & UX, API integration, and post-launch maintenance. All projects define milestones and provide weekly progress reports." },
  { question: "How long does it take to build a business app?", answer: "Timelines are based on complexity. A lean MVP can be built in 8-12 weeks. An end-to-end, complete app with integrations and custom back-end work usually takes 3-6 months. We'll give you an estimate after discovery." },
  { question: "Do you provide app maintenance after launch?", answer: "Sure. We have support plans that include bug fixes, OS compatibility updates, performance monitoring, as well as new features." },
  { question: "How do I start a project with Capyngen?", answer: "Provide us with your information using the contact form, or contact us via our website. We will arrange a discovery call to listen to your needs and inform you with a transparent proposal including scope, timeline, and cost." },
];

export default function AppDevelopmentFaq() {
  return (
    <section id="app-faq" aria-labelledby="app-faq-heading" className="bg-[#fffefd] text-[#17232a]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-12 lg:px-12 lg:py-20">
        <h2 id="app-faq-heading" className="text-[clamp(38px,4vw,64px)] leading-[.95] font-bold tracking-[-.06em] text-[#205c83] uppercase">Frequently Asked <span className="font-serif font-normal text-[#202930] normal-case">Questions</span></h2>
        <div className="divide-y divide-[#d8e3e8] border-y border-[#d8e3e8]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] leading-[1.45] font-semibold tracking-[-.01em] text-[#17232a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a85b0] lg:text-[17px] [&::-webkit-details-marker]:hidden">
                <span>Q{index + 1}. {faq.question}</span>
                <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#2a85b0] text-sm text-[#237ca8] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[760px] pr-10 text-sm leading-[1.65] text-[#667a84] lg:text-[15px]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
