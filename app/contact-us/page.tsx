import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactQuoteForm from "../components/contact-quote-form";
import ContactDigitalHero from "../components/contact-digital-hero";

export const metadata: Metadata = {
  title: "Contact Us | Capyngen",
  description: "A great project starts with a conversation. Get in touch with Capyngen to discuss your next website, brand or digital experience.",
};

const warmBackground = "bg-[radial-gradient(ellipse_at_90%_10%,#7b351c_0%,transparent_48%),radial-gradient(ellipse_at_5%_100%,#612e18_0%,transparent_44%),linear-gradient(120deg,#10100f,#20150f)]";
const orangeButton = "inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#f4772e] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#df641e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4772e]";

function Arrow({ className = "size-4" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Orbits({ className }: { className: string }) {
  return <svg aria-hidden="true" viewBox="0 0 240 220" fill="none" className={`pointer-events-none absolute ${className}`}><g transform="rotate(-40 120 110)" stroke="currentColor" strokeWidth=".8">{[0, 1, 2, 3, 4].map((index) => <ellipse key={index} cx={80 + index * 19} cy="110" rx="38" ry="90" />)}</g></svg>;
}

function ContactIcon({ type }: { type: "phone" | "email" | "office" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{type === "phone" ? <path d="m5 3 4 1 1 5-3 2a16 16 0 0 0 6 6l2-3 5 1 1 4c0 2-2 3-4 2C9 19 5 15 3 7c-1-2 0-4 2-4Z" /> : type === "email" ? <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></> : <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>}</svg>;
}

const contactCards = [
  { type: "phone", title: "Let’s talk", detail: "+62 891 234 567", description: "Big ideas are better talked through.", action: "Request a call", href: "#quote" },
  { type: "email", title: "Drop us a line", detail: "hello@capyngen.example", description: "Tell us what you have in mind.", action: "Write a message", href: "#quote" },
  { type: "office", title: "Come say hello", detail: "London, United Kingdom", description: "A place for ideas to come together.", action: "Find our office", href: "#office-map" },
] as const;

export default function ContactPage() {
  return (
    <div className="min-w-0 bg-[#faf8f5] text-[#24211e]">
      <Navbar variant="contact" />
      <main id="main-content" tabIndex={-1} className="min-w-0 outline-none">
        <ContactDigitalHero />

        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <section id="contact-details" aria-labelledby="contact-details-heading" className="pt-16 sm:pt-20">
            <div className="mx-auto max-w-[600px] text-center">
              <p className="text-[11px] font-semibold tracking-[.17em] text-[#b56a3f] uppercase">Get in touch</p>
              <h2 id="contact-details-heading" className="mt-4 text-[clamp(30px,3.5vw,46px)] leading-[1.12] font-medium tracking-[-.055em]">Good people. Great possibilities.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#7d756d] sm:text-base">Choose a way to connect. We’ll take it from there.</p>
            </div>
            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {contactCards.map((card) => (
                <article key={card.type} className="group relative isolate flex min-w-0 items-start gap-4 overflow-hidden rounded-[22px] border border-[#3d3026] bg-[#1b1815] p-6 text-white shadow-[0_8px_24px_#38241308] md:flex-col md:gap-0 lg:p-7">
                  <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 -z-10 size-56 rounded-full bg-[#a65324]/20 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] border border-[#f49c6025] bg-[#f4772e12] text-[#f6a16c]"><ContactIcon type={card.type} /></div>
                  <div className="min-w-0 flex-1 md:w-full">
                  <h3 className="text-[22px] font-medium tracking-[-.035em] md:mt-6">{card.title}</h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-[#e2d1c4]">{card.detail}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#a99a8d]">{card.description}</p>
                  <a href={card.href} className="mt-4 flex min-h-10 items-center justify-between gap-3 border-t border-[#ffffff14] pt-4 text-xs font-medium text-[#efb38d] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4772e] md:mt-6">{card.action}<Arrow /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] text-[#958a7d]">Contact information and office location are for this demo.</p>
          </section>

          <section id="office-map" aria-labelledby="office-heading" className="mt-10 grid overflow-hidden rounded-[24px] border border-[#e3ddd4] bg-white shadow-[0_12px_40px_#3d291308] md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col justify-center px-7 py-8 sm:px-8">
              <p className="text-[10px] font-semibold tracking-[.16em] text-[#b56a3f] uppercase">A place to connect</p>
              <h2 id="office-heading" className="mt-4 text-[28px] leading-tight font-medium tracking-[-.05em]">Our London<br className="hidden md:block" /> studio.</h2>
              <p className="mt-4 text-sm leading-[1.8] text-[#80766b]">Riverside Building, County Hall<br />London, United Kingdom</p>
              <a href="https://www.google.com/maps/search/?api=1&query=London+Eye" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-[#e1d6c9] px-4 py-2 text-xs font-medium text-[#865233] transition-colors hover:bg-[#faf4ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4772e]">Open in Google Maps <Arrow /></a>
            </div>
            <iframe title="Demo studio location — London Eye, London" src="https://maps.google.com/maps?q=London%20Eye&z=13&output=embed" width="800" height="340" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[300px] w-full border-0 bg-[#e5eadd] md:h-full md:min-h-[340px]" />
          </section>

          <section id="quote" aria-labelledby="quote-heading" className="grid grid-cols-1 items-start gap-8 py-16 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:py-24">
            <div className="rounded-[24px] border border-[#e4ddd3] bg-white p-6 shadow-[0_16px_50px_#442d1005] sm:p-9 lg:p-10">
              <p className="text-[10px] font-semibold tracking-[.16em] text-[#b56a3f] uppercase">Tell us a little about your idea</p>
              <h2 id="quote-heading" className="mt-4 text-[34px] leading-tight font-medium tracking-[-.055em] sm:text-[40px]">Let’s make it happen.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#82786e]">Share a few details and give your next big idea a place to start.</p>
              <ContactQuoteForm />
            </div>
            <aside aria-labelledby="next-heading" className={`relative isolate overflow-hidden rounded-[24px] px-7 py-9 text-white sm:p-10 lg:mt-8 ${warmBackground}`}>
              <Orbits className="-top-4 -right-20 -z-10 w-64 text-[#e1a77d]/15" />
              <p className="text-[10px] font-medium tracking-[.17em] text-[#e5a97d] uppercase">From hello to what’s next</p>
              <h3 id="next-heading" className="mt-5 text-[36px] leading-[1.12] font-medium tracking-[-.055em]">Your next chapter.<br /><span className="font-serif font-normal italic text-[#f3b789]">Built together.</span></h3>
              <p className="mt-5 text-sm leading-[1.8] text-[#c3b1a3]">You bring the ambition. We bring the curiosity, creativity and care to help shape it.</p>
              <ol className="mt-9 space-y-6">
                {[{ title: "We listen", text: "Your vision, your challenges, and what success looks like to you." }, { title: "We explore", text: "The right approach, with ideas tailored to your goals." }, { title: "We create", text: "A clear path from first conversation to your next launch." }].map((step, index) => <li key={step.title} className="flex gap-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d3936433] font-mono text-[11px] text-[#f0ad7c]">0{index + 1}</span><div><h4 className="text-sm font-medium">{step.title}</h4><p className="mt-1.5 text-xs leading-[1.7] text-[#b7a698]">{step.text}</p></div></li>)}
              </ol>
              <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6"><span aria-hidden="true" className="text-xl text-[#f4ad78]">✦</span><p className="text-xs text-[#dbc5b3]">Thoughtful work starts with a good conversation.</p></div>
            </aside>
          </section>

          <section aria-labelledby="contact-cta-heading" className="pb-16 lg:pb-24">
            <div className={`relative isolate overflow-hidden rounded-[26px] px-7 py-12 text-center text-white sm:px-14 sm:py-16 ${warmBackground}`}>
              <Orbits className="-bottom-12 -left-12 w-56 text-[#df9c71]/15 sm:left-0" /><Orbits className="-top-12 -right-12 w-56 text-[#df9c71]/20 sm:right-0" />
              <div className="relative mx-auto max-w-[730px]"><p className="text-[10px] font-medium tracking-[.18em] text-[#e3a77c] uppercase">Small beginnings. Big possibilities.</p><h2 id="contact-cta-heading" className="mt-5 text-[clamp(30px,3.8vw,52px)] leading-[1.15] font-medium tracking-[-.055em]">We love a good challenge.<br /><span className="font-serif font-normal italic text-[#f3b789]">What’s yours?</span></h2><p className="mx-auto mt-5 max-w-[470px] text-sm leading-relaxed text-[#c7b5a6]">A new brand, a better website, or something entirely different. Let’s find out what we can make together.</p><a href="#quote" className={`${orangeButton} mt-7`}>Let’s get started <Arrow /></a></div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
