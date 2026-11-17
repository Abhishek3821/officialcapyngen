"use client";

import { useEffect, useState } from "react";
import { EmptyState, PageHero, StatCard, TableSkeleton } from "./ui";
import { BlogService, CareerService, errorMessage, type Blog, type Career } from "../_lib/api";

type State = { loading: boolean; error: string; blogs: Blog[]; careers: Career[] };

function countBy<T>(items: T[], key: (item: T) => string) {
  const counts = new Map<string, number>();
  for (const item of items) {
    const label = key(item)?.trim() || "Unspecified";
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function Breakdown({ title, rows }: { title: string; rows: [string, number][] }) {
  const max = Math.max(1, ...rows.map(([, value]) => value));
  return (
    <section className="rounded-3xl border border-white/5 bg-[#020617] p-6 shadow-2xl">
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>
      {rows.length === 0 ? <p className="text-sm text-slate-400">No data yet.</p> : (
        <ul className="space-y-3">
          {rows.map(([label, value]) => (
            <li key={label}>
              <div className="flex justify-between gap-4 text-sm"><span className="truncate text-slate-300">{label}</span><span className="font-semibold">{value}</span></div>
              <div className="mt-1.5 h-2 rounded-full bg-white/5"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${(value / max) * 100}%` }} /></div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function ReportsView() {
  const [state, setState] = useState<State>({ loading: true, error: "", blogs: [], careers: [] });

  useEffect(() => {
    let active = true;
    Promise.all([BlogService.list(), CareerService.list()])
      .then(([blogs, careers]) => { if (active) setState({ loading: false, error: "", blogs, careers }); })
      .catch((error) => { if (active) setState({ loading: false, error: errorMessage(error), blogs: [], careers: [] }); });
    return () => { active = false; };
  }, []);

  const latest = [...state.blogs].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")).slice(0, 8);
  const withSeo = state.blogs.filter((blog) => blog.metaTitle && blog.metaDescription).length;

  return (
    <>
      <PageHero title="Content Reports" subtitle="A live overview of blogs and job openings published through the admin portal." />

      {state.loading ? <TableSkeleton /> : state.error ? (
        <EmptyState title="Could not load reports" subtitle={state.error} />
      ) : (
        <>
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            <StatCard label="Blogs" value={state.blogs.length} />
            <StatCard label="Blogs with SEO meta" value={`${withSeo}/${state.blogs.length}`} />
            <StatCard label="Blogs with schema" value={state.blogs.filter((blog) => blog.schema).length} />
            <StatCard label="Open jobs" value={state.careers.length} />
          </div>

          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            <Breakdown title="Blogs by category" rows={countBy(state.blogs, (blog) => blog.category)} />
            <Breakdown title="Jobs by department" rows={countBy(state.careers, (career) => career.department)} />
          </div>

          <section className="rounded-3xl border border-white/5 bg-[#020617] p-6 shadow-2xl">
            <h2 className="mb-4 text-lg font-semibold">Latest blogs</h2>
            {latest.length === 0 ? <p className="text-sm text-slate-400">No blogs published yet.</p> : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-slate-400"><tr><th scope="col" className="py-2 pr-4 text-left font-medium">Title</th><th scope="col" className="py-2 pr-4 text-left font-medium">Category</th><th scope="col" className="py-2 pr-4 text-left font-medium">Author</th><th scope="col" className="py-2 text-left font-medium">Date</th></tr></thead>
                  <tbody>{latest.map((blog) => <tr key={blog._id} className="border-t border-white/10"><td className="py-3 pr-4 font-medium">{blog.title}</td><td className="py-3 pr-4 whitespace-nowrap">{blog.category}</td><td className="py-3 pr-4 whitespace-nowrap">{blog.author}</td><td className="py-3 whitespace-nowrap">{blog.date}</td></tr>)}</tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}
