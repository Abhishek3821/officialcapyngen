"use client";

import { useState } from "react";

function FooterLandscape() {
  return (
    <svg viewBox="0 0 1440 230" fill="none" aria-hidden="true" className="block h-auto min-h-[90px] w-full text-[#35084e]" preserveAspectRatio="xMidYMax slice">
      <defs><linearGradient id="footer-shoe"><stop stopColor="#6d1b84" /><stop offset="1" stopColor="#a42b91" /></linearGradient></defs>
      <path d="M0 159C120 181 170 216 291 161S453 83 546 111 647 112 738 153 899 224 1032 190 1234 140 1322 168 1393 174 1440 188V230H0Z" fill="currentColor" />
      {[12, 37, 65, 271, 296, 323, 349, 685, 711, 740, 1012, 1040, 1072, 1132, 1156, 1180, 1370, 1405, 1430].map((x, index) => {
        const y = index < 3 ? 155 : index < 7 ? 153 - (index - 3) * 12 : index < 10 ? 143 + (index - 7) * 6 : index < 13 ? 192 - (index - 10) * 8 : index < 16 ? 157 - (index - 13) * 8 : 172;
        return <g key={x}><path d={`M${x} ${y}v-29m0 12-8-7m8 2 8-8`} stroke="currentColor" strokeWidth="3" /><circle cx={x} cy={y - 40} r={index % 3 === 0 ? 13 : 9} fill="currentColor" /><circle cx={x - 9} cy={y - 23} r="5" fill="currentColor" /><circle cx={x + 9} cy={y - 28} r="4" fill="currentColor" /></g>;
      })}
      {[{ x: 57, y: 125, w: 23, h: 47 }, { x: 726, y: 112, w: 22, h: 66 }, { x: 837, y: 151, w: 25, h: 46 }, { x: 888, y: 128, w: 23, h: 77 }, { x: 947, y: 170, w: 23, h: 41 }].map((building) => <g key={building.x}><path d={`M${building.x} ${building.y + building.h}v-${building.h}l${building.w / 2}-6 ${building.w / 2} 6v${building.h}Z`} fill="currentColor" />{Array.from({ length: Math.floor(building.h / 9) }, (_, row) => [0, 1, 2].map((col) => <rect key={`${row}-${col}`} x={building.x + 4 + col * 6} y={building.y + 4 + row * 9} width="3" height="5" fill="white" />))}</g>)}
      <g stroke="currentColor"><circle cx="795" cy="148" r="34" strokeWidth="4" /><circle cx="795" cy="148" r="26" strokeWidth="1.5" />{Array.from({ length: 12 }, (_, i) => <g key={i} transform={`rotate(${i * 30} 795 148)`}><path d="M795 148v-29" strokeWidth="1.3" /><circle cx="795" cy="107" r="2.3" fill="currentColor" stroke="none" /></g>)}<path d="m781 193 14-45 15 45" strokeWidth="4" /></g>
      <path d="M955 60c-14-20-36-5-32 12 4 18 22 34 28 43 8-9 28-27 30-43 3-18-14-28-26-12Z" fill="currentColor" /><path d="m949 113 4 7 4-7" stroke="currentColor" strokeWidth="1.5" />
      <g transform="translate(88 139) rotate(7)"><path d="M0 12c13-1 24-23 29-29 10 13 24 21 50 23 18 2 39 12 64 10 9 12 7 21-6 26C92 53 28 47-4 37Z" fill="url(#footer-shoe)" stroke="currentColor" strokeWidth="3" /><path d="M-2 32c35 9 90 14 144 0M24-2c18 20 38 17 48 23s24 15 45 15M9 10c11 13 24 13 37 14" stroke="#f3def3" strokeWidth="2" /><path d="m48 5-4 8m13-5-4 8m14-4-4 8" stroke="white" strokeWidth="2" /></g>
      <g transform="translate(1192 108) rotate(-8)"><path d="M0 24c18-4 42-7 59-30 10-11 17-4 13 6l-7 12c16 17 39 22 61 22l20-15 4 31c-38 18-99 20-145-1Z" fill="url(#footer-shoe)" stroke="currentColor" strokeWidth="3" /><path d="M6 43c51 21 103 18 140-2M50 8l-7 17m16-15-6 15m14-11-5 14" stroke="#fff" strokeWidth="5" strokeLinecap="round" /></g>
    </svg>
  );
}

const linkStyle = "cursor-pointer list-none text-[#d5bddf] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc] [&::-webkit-details-marker]:hidden";

export default function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState("");

  return (
    <footer id="contact" aria-label="Footway footer" className="relative isolate overflow-hidden bg-white pt-6 sm:pt-12">
      <FooterLandscape />
      <div className="-mt-px bg-[#35084e] px-5 pt-8 pb-7 text-[#f3eaf6] sm:px-7 sm:pt-12 lg:px-12 lg:pt-14 lg:pb-9">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,.85fr)_minmax(0,.85fr)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold">Footway’s Newsletter</h2>
              <form className="mt-6 max-w-[390px]" onSubmit={(event) => { event.preventDefault(); setNewsletterMessage("Newsletter signup is coming soon. For updates, contact myfriends@footway.co.uk."); }}>
                <label htmlFor="footer-email" className="sr-only">Your email</label>
                <input id="footer-email" name="email" type="email" autoComplete="email" required placeholder="Your email" aria-describedby="newsletter-message" className="w-full rounded-sm border border-white/5 bg-[#29033d] px-4 py-3 text-sm text-white placeholder:text-[#967ba4] focus:border-[#c969b5] focus:outline-none focus:ring-2 focus:ring-[#c969b5]/30" />
                <button type="submit" className="mt-4 rounded-sm bg-linear-to-r from-[#6a238c] to-[#a32c82] px-6 py-2.5 text-xs font-bold tracking-[.05em] text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]">SUBSCRIBE</button>
                <p id="newsletter-message" role="status" className="mt-3 text-xs leading-relaxed text-[#d5bddf]">{newsletterMessage}</p>
              </form>
            </div>

            <div className="min-w-0 text-xs leading-[1.8]">
              <h2 className="mb-6 text-sm font-semibold">Terms and conditions</h2>
              <div className="space-y-1">
                <details><summary className={linkStyle}>Free returns!</summary><p className="py-2 text-[#bfa1cc]">Contact our team for help arranging a return.</p></details>
                <details><summary className={linkStyle}>30 days return policy!</summary><p className="py-2 text-[#bfa1cc]">For return conditions and order support, email myfriends@footway.co.uk.</p></details>
                <details><summary className={linkStyle}>All shoes in stock!</summary><p className="py-2 text-[#bfa1cc]">Contact our team to check your preferred style and size.</p></details>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="font-semibold">Follow Footway</span>
                <a href="https://www.facebook.com/footway" aria-label="Footway on Facebook" target="_blank" rel="noreferrer" className="text-[#dfcbe6] transition-colors hover:text-white"><svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true"><path d="M14 22V13h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" /></svg></a>
                <a href="https://www.instagram.com/footway" aria-label="Footway on Instagram" target="_blank" rel="noreferrer" className="text-[#dfcbe6] transition-colors hover:text-white"><svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg></a>
              </div>
            </div>

            <div className="min-w-0 text-xs leading-[1.8]">
              <h2 className="mb-6 text-sm font-semibold">Information</h2>
              <div className="space-y-1">
                <details><summary className={linkStyle}>FAQs</summary><p className="py-2 text-[#bfa1cc]">Questions about your order? Call or email our customer service team below.</p></details>
                <details><summary className={linkStyle}>About us at Footway</summary><p className="py-2 text-[#bfa1cc]">Footway is part of Footway Group, based in Kista, Sweden.</p></details>
                <details><summary className={linkStyle}>Footway Legal</summary><p className="py-2 text-[#bfa1cc]">Company number: 559063-2377. Contact our head office for company information.</p></details>
              </div>
              <div className="mt-6 flex flex-col text-[#d5bddf]">
                <a href="tel:08000988300" className="hover:text-white">0800 098 8300</a>
                <a href="mailto:myfriends@footway.co.uk" className="break-all hover:text-white">myfriends@footway.co.uk</a>
              </div>
            </div>

            <div className="min-w-0 text-xs leading-[1.8]">
              <h2 className="mb-6 text-sm font-semibold">Contact</h2>
              <p className="font-semibold">Footway</p>
              <p className="text-[#d5bddf]">Company number: 559063-2377</p>
              <p className="mt-6 font-semibold">Head office:</p>
              <address className="font-normal text-[#d5bddf] not-italic">Victoria Tower, Nolsögatan 3,<br />164 40 Kista, Sweden</address>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-8 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-6 lg:border-0 lg:pt-0">
            <div aria-label="Trust and security marks shown in the design" className="flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2"><div className="flex size-11 items-center justify-center rounded-full border-[3px] border-[#c1b889] bg-[#f1efe4] font-serif text-3xl font-bold italic text-[#328b89]">e</div><span className="text-[10px] leading-[1.3] font-bold">TRUSTED<br />SHOPS</span></div>
              <div className="flex items-center gap-1"><span className="-rotate-6 bg-white px-1 text-xl font-black text-[#35084e]">PCI<span className="text-[#75a44a]">✓</span></span><span className="text-sm leading-none font-bold">DSS<small className="block text-[6px] font-normal">COMPLIANT</small></span></div>
            </div>
            <div className="text-center text-[11px] leading-[1.9] text-[#c7abd3]">
              <p>Part of Footway Group, publicly traded on Nasdaq OMX.</p>
              <a href="mailto:myfriends@footway.co.uk" className="hover:text-white">myfriends@footway.co.uk</a><span>, 0800 098 8300</span>
              <p className="my-2 text-base tracking-[.12em]" aria-label="Serving customers across Europe">🇸🇪 🇳🇴 🇫🇮 🇩🇰 🇵🇱 🇬🇧 🇩🇪 🇳🇱 🇦🇹 🇫🇷 🇨🇭</p>
              <p>© 2010–2026 Footway. All rights reserved.</p>
            </div>
            <div aria-label="Payment methods illustrated: Adyen, Mastercard, Visa" className="flex items-center justify-center gap-6 lg:justify-end">
              <span className="text-2xl font-black tracking-[-.06em]">adyen</span>
              <svg viewBox="0 0 62 40" className="h-9 w-14" aria-hidden="true"><circle cx="23" cy="20" r="18" fill="#ed0026" /><circle cx="40" cy="20" r="18" fill="#ffac00" fillOpacity=".95" /></svg>
              <span className="text-2xl font-black italic tracking-tight">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
