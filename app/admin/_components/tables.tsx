"use client";

import type { Blog, Career } from "../_lib/api";

const th = "px-4 py-3 text-left font-medium whitespace-nowrap";
const td = "px-4 py-3 align-top";
const clamp = "line-clamp-2 max-w-[260px]";
const editButton = "rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-blue-500";
const deleteButton = "rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-red-500";

const na = (value?: string) => (value && value.trim() ? value : "NA");

export function BlogTable({ blogs, onEdit, onDelete }: { blogs: Blog[]; onEdit: (blog: Blog) => void; onDelete: (blog: Blog) => void }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-slate-400">
          <tr>
            {["Title", "Author", "Category", "Group", "Date", "Tags", "Description", "Meta Title", "Meta Description", "Schema"].map((label) => <th key={label} scope="col" className={th}>{label}</th>)}
            <th scope="col" className={`${th} text-right`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} className="border-t border-white/5 transition-colors hover:bg-white/5">
              <td className={`${td} font-medium`}><span className={clamp}>{na(blog.title)}</span></td>
              <td className={`${td} whitespace-nowrap`}>{na(blog.author)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(blog.category)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(blog.group)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(blog.date)}</td>
              <td className={td}><span className={clamp}>{blog.tags?.length ? blog.tags.join(", ") : "NA"}</span></td>
              <td className={td}><span className={clamp}>{na(blog.description)}</span></td>
              <td className={td}><span className={clamp}>{na(blog.metaTitle)}</span></td>
              <td className={td}><span className={clamp}>{na(blog.metaDescription)}</span></td>
              <td className={`${td} whitespace-nowrap`}>{blog.schema ? <span className="text-emerald-400">Added</span> : "NA"}</td>
              <td className={`${td} text-right whitespace-nowrap`}>
                <div className="inline-flex gap-2">
                  <button type="button" onClick={() => onEdit(blog)} className={editButton} aria-label={`Edit ${blog.title}`}>Edit</button>
                  <button type="button" onClick={() => onDelete(blog)} className={deleteButton} aria-label={`Delete ${blog.title}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CareerTable({ careers, onEdit, onDelete }: { careers: Career[]; onEdit: (career: Career) => void; onDelete: (career: Career) => void }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-slate-400">
          <tr>
            {["Title", "Department", "Location", "Type", "Description"].map((label) => <th key={label} scope="col" className={th}>{label}</th>)}
            <th scope="col" className={`${th} text-right`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {careers.map((career) => (
            <tr key={career._id} className="border-t border-white/5 transition-colors hover:bg-white/5">
              <td className={`${td} font-medium`}>{na(career.title)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(career.department)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(career.location)}</td>
              <td className={`${td} whitespace-nowrap`}>{na(career.jobType)}</td>
              <td className={td}><span className={clamp}>{na(career.description)}</span></td>
              <td className={`${td} text-right whitespace-nowrap`}>
                <div className="inline-flex gap-2">
                  <button type="button" onClick={() => onEdit(career)} className={editButton} aria-label={`Edit ${career.title}`}>Edit</button>
                  <button type="button" onClick={() => onDelete(career)} className={deleteButton} aria-label={`Delete ${career.title}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
