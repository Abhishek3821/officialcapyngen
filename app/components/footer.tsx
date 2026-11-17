"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { industryRoutes } from "./navigation-data";

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

const offerLinks = [
  { label: "Web Development", href: "/web-development" },
  { label: "App Development", href: "/app-development" },
  { label: "Custom AI Solutions", href: "/custom-ai-solution" },
  { label: "E-Commerce Solutions", href: "/e-commerce-solutions" },
  { label: "Blockchain Development", href: "/blockchain-development" },
  { label: "DevOps Solutions", href: "/devops-solutions" },
  { label: "Application Solutions", href: "/application-solutions" },
  { label: "CRM & Management Software", href: "/crm-management-software" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Website Design", href: "/website-design" },
  { label: "Branding & Identity Design", href: "/branding-identity-design" },
  { label: "Ecommerce Design", href: "/ecommerce-design" },
  { label: "CMS Design", href: "/cms-design" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
  { label: "Social Media Marketing (SMM)", href: "/social-media-marketing" },
  { label: "Pay-Per-Click Advertising (PPC)", href: "/pay-per-click-advertising" },
  { label: "Artificial Intelligence", href: "/artificial-intelligence" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Network Solutions & Services", href: "/network-solutions-services" },
  { label: "Enterprise Solutions", href: "/enterprise-solutions" },
  { label: "Data & Analytics", href: "/data-analytics" },
  { label: "Consulting", href: "/consulting" },
];

const industryLinks = Object.entries(industryRoutes).map(([label, href]) => ({ label, href }));

const companyLinks = [
  { label: "Company Overview", href: "/company-overview" },
  { label: "Our Products", href: "/company-overview#company-products-services" },
  { label: "Careers", href: "/careers" },
  { label: "News & Updates", href: "/news-and-updates" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/capyngen", icon: <path d="M14 22V13h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" fill="currentColor" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/capyngen/", icon: <path d="M6 9v11M6 5v.01M10 20v-6.5a3.5 3.5 0 0 1 7 0V20m-7-11v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> },
  { label: "Instagram", href: "https://www.instagram.com/capyngen_official/", icon: <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></> },
  { label: "Twitter", href: "https://x.com/capyngen", icon: <path d="M22 5.9a8 8 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.3 8.3 0 0 0 22 5.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /> },
  { label: "YouTube", href: "https://www.youtube.com/@Capyngen_official", icon: <><rect x="2.5" y="5" width="19" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" /><path d="m10 9 5 3-5 3Z" fill="currentColor" /></> },
];

const dnbUrl = "https://dunsregistered.dnb.com";

const headingStyle = "relative mb-7 pb-2 text-lg font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-10 after:rounded-full after:bg-linear-to-r after:from-[#a32c82] after:to-[#c969b5]";
const linkStyle = "text-sm text-[#d5bddf] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]";
const VISIBLE_LINKS = 10;

function LinkColumn({ id, title, links }: { id: string; title: string; links: { label: string; href: string }[] }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? links : links.slice(0, VISIBLE_LINKS);
  return (
    <nav aria-labelledby={`${id}-heading`} className="min-w-0">
      <h2 id={`${id}-heading`} className={headingStyle}>{title}</h2>
      <ul id={`${id}-list`} className="space-y-3">
        {shown.map((link) => <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>)}
      </ul>
      {links.length > VISIBLE_LINKS && <button type="button" aria-expanded={expanded} aria-controls={`${id}-list`} onClick={() => setExpanded((value) => !value)} className="mt-4 text-sm font-semibold text-[#e3a6ff] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]">{expanded ? "Show Less" : "Show More"}</button>}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer id="contact" aria-label="Capyngen footer" className="relative isolate overflow-hidden bg-white pt-6 sm:pt-12">
      <FooterLandscape />
      <div className="-mt-px bg-[#35084e] px-5 pt-10 pb-8 text-[#f3eaf6] sm:px-7 sm:pt-12 lg:px-12 lg:pt-16 lg:pb-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.6fr)]">
            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <Link href="/" aria-label="Capyngen home" className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]">
                <Image src="/images/capyngen-logo.png" alt="Capyngen Private Limited" width={500} height={300} className="h-24 w-auto object-contain brightness-[1.5]" />
              </Link>
              <p className="mt-6 max-w-[440px] text-sm leading-[1.8] text-[#d5bddf]">Transforming businesses through innovative IT solutions. We deliver cutting-edge technology that drives growth and efficiency for modern enterprises.</p>
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#e3a6ff]"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="m3.5 6.5 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.8" /></svg>
                  <div><p className="text-[#bfa1cc]">Email</p><a href="mailto:query@capyngen.com" className="break-all text-white hover:text-[#e3a6ff]">query@capyngen.com</a></div>
                </li>
                <li className="flex gap-3">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#e3a6ff]"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" /></svg>
                  <div><p className="text-[#bfa1cc]">Address</p><address className="not-italic text-white"><a href="https://www.google.com/maps/search/?api=1&query=Tower+B3+Spaze+i-Tech+Park+Sector+49+Gurugram+Haryana+122018" target="_blank" rel="noreferrer" className="hover:text-[#e3a6ff]">Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</a></address></div>
                </li>
              </ul>
            </div>

            <LinkColumn id="footer-offer" title="What We Offer" links={offerLinks} />
            <LinkColumn id="footer-industries" title="Industries" links={industryLinks} />

            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <div className="grid gap-10 sm:grid-cols-2">
                <nav aria-labelledby="footer-company-heading">
                  <h2 id="footer-company-heading" className={headingStyle}>Company</h2>
                  <ul className="space-y-3">{companyLinks.map((link) => <li key={link.label}><Link href={link.href} className={`${linkStyle} uppercase`}>{link.label}</Link></li>)}</ul>
                </nav>
                <div>
                  <h2 className={headingStyle}>Stay Connected</h2>
                  <p className="text-sm text-[#d5bddf]">Follow us on social media</p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((social) => <li key={social.label}><a href={social.href} target="_blank" rel="noreferrer" aria-label={`Capyngen on ${social.label}`} className="flex size-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-[#a32c82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df9ddc]"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">{social.icon}</svg></a></li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
                <a href={dnbUrl} target="_blank" rel="noreferrer" aria-label="Verify Capyngen's D-U-N-S registration on Dun & Bradstreet" className="block size-30 shrink-0 rounded-md bg-white p-1.5 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]">
                  <Image src="/images/dnb/duns-registered-static.webp" alt="D&B D-U-N-S Registered seal" width={512} height={512} sizes="120px" className="size-full object-contain" />
                </a>
                <div className="size-30 shrink-0 rounded-md bg-white p-1.5">
                  <Image src="/images/dnb/company-profile-qr.svg" alt="QR code linking to Capyngen's D&B company profile" width={164} height={164} unoptimized className="size-full object-contain" />
                </div>
                <div className="min-w-37.5">
                  <p className="text-base font-semibold text-white">D-U-N-S Registered</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#bfa1cc]">Official D&amp;B seal and<br />verification QR.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-14 border-t border-white/10 pt-10 lg:mt-16">
            <a href="#top" aria-label="Back to top" className="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-md border border-[#c969b5]/60 bg-[#35084e] text-[#e3a6ff] transition-colors hover:bg-[#4c1170] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#df9ddc]">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <p className="text-sm leading-relaxed text-[#d5bddf]">Orinite is a proprietary software product brand owned, developed, and operated by Capyngen Private Limited.</p>
            <p className="mt-3 text-sm text-[#d5bddf]">Official Website: <a href="https://orinite.com" target="_blank" rel="noreferrer" className="text-[#e3a6ff] underline-offset-4 hover:text-white hover:underline">https://orinite.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
