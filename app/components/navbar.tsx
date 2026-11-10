"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industryGroups, offerGroups, pageLinks } from "./navigation-data";

type MenuName = "offer" | "industries";

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" className={`size-3.5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} aria-hidden="true"><path d="m5 7 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MenuLink({ label, href, onClick }: { label: string; href: string; onClick: () => void }) {
  return <a href={href} onClick={onClick} className="group flex min-w-0 items-start gap-2 rounded-md py-1.5 text-[13px] leading-[1.6] text-[#d5e1e4] transition-colors hover:text-[#a8edff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a8edff]">
    <span className="mt-[9px] size-1 shrink-0 rounded-full bg-white/30 transition-colors group-hover:bg-[#a8edff]" aria-hidden="true" /><span>{label}</span>
  </a>;
}

function OfferContent({ onNavigate }: { onNavigate: () => void }) {
  // Desktop and mobile menus share all service routes, including Consulting.
  return <div className="grid grid-cols-1 gap-x-7 gap-y-7 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.1fr)_minmax(0,.65fr)] xl:gap-x-8">
    {offerGroups.map((group) => <div key={group.title} className="min-w-0">
      <h3 className="mb-3 text-[10px] leading-[1.5] font-semibold tracking-[.1em] text-[#95c9d3] uppercase xl:mb-4 xl:text-[11px]">{group.title}</h3>
      <ul className="space-y-1">{group.links.map((label) => <li key={label}><MenuLink label={label} href={label === "Web Development" ? "/web-development" : label === "App Development" ? "/app-development" : label === "Custom AI Solution" ? "/custom-ai-solution" : label === "E-Commerce Solutions" ? "/e-commerce-solutions" : label === "Blockchain Development" ? "/blockchain-development" : label === "DevOps Solutions" ? "/devops-solutions" : label === "Application Solutions" ? "/application-solutions" : label === "CRM & Management Software" ? "/crm-management-software" : label === "UI/UX Design" ? "/ui-ux-design" : label === "Website Design" ? "/website-design" : label === "Branding & Identity Design" ? "/branding-identity-design" : label === "Ecommerce Design" ? "/ecommerce-design" : label === "CMS Design" ? "/cms-design" : label === "Digital Marketing" ? "/digital-marketing" : label === "Search Engine Optimization (SEO)" ? "/search-engine-optimization" : label === "Social Media Marketing (SMM)" ? "/social-media-marketing" : label === "Pay-Per-Click Advertising (PPC)" ? "/pay-per-click-advertising" : label === "Artificial Intelligence" ? "/artificial-intelligence" : label === "Cybersecurity" ? "/cybersecurity" : label === "Network Solutions & Services" ? "/network-solutions-services" : label === "Enterprise Solutions" ? "/enterprise-solutions" : label === "Data & Analytics" ? "/data-analytics" : label === "Consulting" ? "/consulting" : "/#services"} onClick={onNavigate} /></li>)}</ul>
    </div>)}
  </div>;
}

function IndustryContent({ onNavigate }: { onNavigate: () => void }) {
  return <div className="grid grid-cols-1 gap-x-12 gap-y-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-5">
    {industryGroups.map((group, index) => <ul key={index} className="min-w-0 space-y-2">{group.map((label) => <li key={label}><MenuLink label={label} href={label === "Banking" ? "/banking" : label === "Education" ? "/education" : label === "Capital Market" ? "/capital-market" : label === "Life Science" ? "/life-science" : label === "Healthcare & Fitness" ? "/healthcare-fitness" : label === "Energy, Resources & Utilities" ? "/energy-resources-utilities" : label === "Manufacturing & Automotive" ? "/manufacturing-automotive" : "/#work"} onClick={onNavigate} /></li>)}</ul>)}
  </div>;
}

export default function Navbar({ variant = "default" }: { variant?: "default" | "contact" }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<MenuName | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuName | null>(null);
  const [scrollHidden, setScrollHidden] = useState(false);
  const [overHero, setOverHero] = useState(pathname === "/" || variant === "contact");
  const header = useRef<HTMLElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById("home") ?? document.getElementById("contact-hero");
    if (!hero) {
      const frame = window.requestAnimationFrame(() => setOverHero(false));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), { rootMargin: "-110px 0px 0px" });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const closeAll = () => { setDesktopMenu(null); setMobileOpen(false); setMobileSection(null); };

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let distance = 0;
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.min(maxY, Math.max(0, window.scrollY));
      const delta = currentY - previousY;
      previousY = currentY;
      const keyboardFocus = header.current?.contains(document.activeElement)
        && document.activeElement?.matches(":focus-visible");

      // Keep menus and keyboard navigation visible; ignore tiny scroll jitter.
      if (currentY < 48 || mobileOpen || desktopMenu || keyboardFocus) {
        setScrollHidden(false);
        distance = 0;
        return;
      }
      distance = Math.sign(delta) === Math.sign(distance) ? distance + delta : delta;
      if (Math.abs(distance) >= 8) {
        setScrollHidden(distance > 0);
        distance = 0;
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [mobileOpen, desktopMenu]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => { setMobileOpen(false); setDesktopMenu(null); setMobileSection(null); };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !desktopMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false); setDesktopMenu(null); setMobileSection(null);
        (mobileOpen ? mobileToggle.current : lastTrigger.current)?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setMobileOpen(false); setDesktopMenu(null); setMobileSection(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.removeEventListener("pointerdown", onPointerDown); };
  }, [mobileOpen, desktopMenu]);

  const desktopTrigger = (menu: MenuName, label: string) => (
    <button type="button" aria-expanded={desktopMenu === menu} aria-controls={`desktop-${menu}`} onClick={(event) => { lastTrigger.current = event.currentTarget; setDesktopMenu((value) => value === menu ? null : menu); }} className={`flex items-center gap-2 rounded-xl px-3 py-3 text-[11px] font-semibold whitespace-nowrap uppercase transition-colors focus-visible:outline-2 focus-visible:outline-[#a8edff] 2xl:px-4 2xl:text-xs ${desktopMenu === menu ? "bg-white/[.14] text-[#b8f1ff]" : "text-white/90 hover:bg-white/10 hover:text-white"}`}>
      {label}<Chevron open={desktopMenu === menu} />
    </button>
  );

  return (
    <>
      {(mobileOpen || desktopMenu) && <div aria-hidden="true" onClick={closeAll} className="fixed inset-0 z-40 bg-black/20" />}
      <header ref={header} onFocusCapture={() => setScrollHidden(false)} onBlur={(event) => { if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) closeAll(); }} className={`fixed top-0 right-0 left-0 z-50 flex h-[var(--site-header-height)] w-full min-w-0 items-center bg-transparent px-4 transition-transform duration-300 ease-out motion-reduce:transition-none sm:px-7 lg:px-10 ${scrollHidden && !mobileOpen && !desktopMenu ? "pointer-events-none -translate-y-[calc(100%_+_12px)]" : "translate-y-0"}`}>
        <a href="#main-content" className="sr-only rounded-full bg-[#087e9b] px-5 py-3 text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-5 focus:z-[70]">Skip to content</a>
        <nav aria-label="Main navigation" className={`relative mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 transition-[background-color,box-shadow] duration-300 md:h-[68px] md:px-6 ${variant === "contact" ? "rounded-[20px] border border-white/25 bg-[#182328]/90 shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-[20px] backdrop-saturate-150" : `rounded-[20px] border border-white/25 bg-linear-to-b from-white/[.08] to-transparent shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[20px] backdrop-saturate-150 ${overHero ? "bg-[#0c2023]/40" : "bg-[#0c2023]/80"}`}`}>
          <Link href="/#home" onClick={closeAll} aria-label="Capyngen home" className="flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8edff]">
            <Image src="/images/capyngen-logo.png" alt="Capyngen Private Limited" width={500} height={299} preload className="h-[52px] w-auto object-contain brightness-[1.5] saturate-[1.1] drop-shadow-[0_1px_5px_rgba(0,0,0,0.2)] md:h-[58px]" />
          </Link>
          <div className="hidden items-center gap-1 xl:flex">
            {desktopTrigger("offer", "What We Offer")}
            {desktopTrigger("industries", "Industries")}
            {pageLinks.map((link) => <a key={link.label} href={link.href} onClick={closeAll} className={`rounded-xl px-3 py-3 text-[11px] font-semibold whitespace-nowrap uppercase transition-colors focus-visible:outline-2 focus-visible:outline-[#a8edff] 2xl:px-4 2xl:text-xs ${link.label === "Contact Us" ? "ml-1 border border-white/30 bg-white/[.12] text-white hover:bg-white/25" : "text-white/90 hover:bg-white/10 hover:text-white"}`}>{link.label}</a>)}
          </div>
          <div className="flex items-center gap-3 xl:hidden">
            <a href="/contact-us" onClick={closeAll} className="hidden rounded-full border border-white/30 bg-white/[.12] px-4 py-2.5 text-xs font-medium text-white hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-[#a8edff] sm:block">Contact Us ↗</a>
            <button ref={mobileToggle} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen((value) => !value); setMobileSection(null); }} className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#a8edff]">
              <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">{mobileOpen ? <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /> : <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}</svg>
            </button>
          </div>

          <div id="desktop-offer" hidden={desktopMenu !== "offer"} className="absolute top-[calc(100%_+_10px)] right-0 left-0 hidden max-h-[calc(100svh_-_140px)] overflow-y-auto overscroll-contain rounded-[22px] border border-white/20 bg-[#12272a]/80 backdrop-blur-[24px] p-8 shadow-[0_24px_60px_rgb(0_0_0_/_0.18)] xl:block 2xl:p-10">
            <OfferContent onNavigate={closeAll} />
          </div>
          <div id="desktop-industries" hidden={desktopMenu !== "industries"} className="absolute top-[calc(100%_+_10px)] right-0 left-0 hidden max-h-[calc(100svh_-_140px)] overflow-y-auto overscroll-contain rounded-[22px] border border-white/20 bg-[#12272a]/80 backdrop-blur-[24px] p-8 shadow-[0_24px_60px_rgb(0_0_0_/_0.18)] xl:block 2xl:p-10">
            <IndustryContent onNavigate={closeAll} />
          </div>
        </nav>

        <div id="mobile-navigation" hidden={!mobileOpen} className="absolute top-[calc(100%_-_2px)] right-4 left-4 max-h-[calc(100svh_-_110px)] overflow-y-auto overscroll-contain rounded-[22px] border border-white/20 bg-[#12272a]/80 backdrop-blur-[24px] p-4 shadow-[0_24px_60px_rgb(0_0_0_/_0.20)] sm:right-7 sm:left-7 lg:right-10 lg:left-10 xl:hidden">
          {([['offer', 'What We Offer'], ['industries', 'Industries']] as const).map(([menu, label]) => <div key={menu} className="border-b border-white/15">
            <button type="button" aria-expanded={mobileSection === menu} aria-controls={`mobile-${menu}`} onClick={() => setMobileSection((value) => value === menu ? null : menu)} className={`flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-sm font-semibold uppercase focus-visible:outline-2 focus-visible:outline-[#a8edff] ${mobileSection === menu ? "text-[#b8f1ff]" : "text-white/90"}`}>{label}<Chevron open={mobileSection === menu} /></button>
            <div id={`mobile-${menu}`} hidden={mobileSection !== menu} className="px-3 pt-3 pb-6">{menu === 'offer' ? <OfferContent onNavigate={closeAll} /> : <IndustryContent onNavigate={closeAll} />}</div>
          </div>)}
          {pageLinks.map((link) => <a key={link.label} href={link.href} onClick={closeAll} className="flex items-center justify-between rounded-xl px-3 py-4 text-sm font-semibold text-white/90 uppercase hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#a8edff]">{link.label}<span className="text-white/50" aria-hidden="true">↗</span></a>)}
        </div>
      </header>
    </>
  );
}
