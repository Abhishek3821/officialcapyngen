"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../_lib/actions";

const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "Blogs", href: "/admin/blogs" },
  { label: "Careers", href: "/admin/careers" },
  { label: "Reports", href: "/admin/reports" },
] as const;

export default function AdminNavbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-[#071830] bg-[#0A1F44]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6">
        <Link href="/admin" aria-label="Admin dashboard" className="flex items-center gap-3">
          <Image src="/images/capyngen-logo.png" alt="Capyngen" width={500} height={300} priority className="h-12 w-auto object-contain md:h-14" />
          <span className="hidden rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-slate-300 uppercase sm:inline">Admin</span>
        </Link>

        <nav aria-label="Admin" className="order-3 -mx-1 flex w-full gap-1 overflow-x-auto md:order-none md:w-auto">
          {links.map((link) => {
            const active = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${active ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>{link.label}</Link>;
          })}
        </nav>

        <form action={logout}>
          <button type="submit" className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-[#0A1F44] shadow transition-colors hover:bg-white">Logout</button>
        </form>
      </div>
    </header>
  );
}
