"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageHero, StatCard } from "./ui";
import { BlogService, CareerService } from "../_lib/api";

type Counts = { blogs: number | null; careers: number | null; online: boolean | null };

export default function DashboardView() {
  const [counts, setCounts] = useState<Counts>({ blogs: null, careers: null, online: null });

  useEffect(() => {
    let active = true;
    Promise.allSettled([BlogService.list(), CareerService.list()]).then(([blogs, careers]) => {
      if (!active) return;
      setCounts({
        blogs: blogs.status === "fulfilled" ? blogs.value.length : null,
        careers: careers.status === "fulfilled" ? careers.value.length : null,
        online: blogs.status === "fulfilled" || careers.status === "fulfilled",
      });
    });
    return () => { active = false; };
  }, []);

  const show = (value: number | null) => (counts.online === null ? "…" : value ?? "—");

  return (
    <>
      <PageHero
        title="Welcome Back, Admin 👋"
        subtitle="Manage blogs, careers, and system content from one central dashboard."
        action={<div className="flex flex-wrap gap-3">
          <Link href="/admin/blogs" className="rounded-xl bg-black/70 px-5 py-2.5 text-sm font-semibold hover:bg-black">Manage Blogs</Link>
          <Link href="/admin/careers" className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">Manage Careers</Link>
        </div>}
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <StatCard label="Total Blogs" value={show(counts.blogs)} />
        <StatCard label="Total Careers" value={show(counts.careers)} />
        <StatCard label="System Status" value={counts.online === null ? "Checking…" : counts.online ? "Online" : "API unreachable"} tone={counts.online === null ? undefined : counts.online ? "good" : "bad"} />
      </div>

      <section aria-labelledby="quick-actions" className="rounded-3xl border border-white/5 bg-[#020617] p-6 shadow-2xl">
        <h2 id="quick-actions" className="mb-4 text-xl font-semibold">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/blogs" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold hover:bg-indigo-500">+ Add Blog</Link>
          <Link href="/admin/careers" className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-500">+ Add Career</Link>
          <Link href="/admin/reports" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">View Reports</Link>
          <Link href="/" target="_blank" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">Open Website ↗</Link>
        </div>
      </section>
    </>
  );
}
