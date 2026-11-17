"use client";

import { useState } from "react";
import BlogModal from "./blog-modal";
import { BlogTable } from "./tables";
import { ConfirmModal, EmptyState, PageHero, StatCard, TableSkeleton, primaryButton } from "./ui";
import { useCollection } from "./use-collection";
import { BlogService, type Blog } from "../_lib/api";

export default function BlogsView() {
  const blogs = useCollection(BlogService, "Blog");
  const [editor, setEditor] = useState<{ blog: Blog | null } | null>(null);
  const [toDelete, setToDelete] = useState<Blog | null>(null);

  const openCreate = () => setEditor({ blog: null });

  return (
    <>
      <PageHero title="Blog Management" subtitle="Create, edit and publish articles for the Capyngen website." action={<button type="button" onClick={openCreate} className="rounded-xl bg-black/70 px-5 py-2.5 text-sm font-semibold hover:bg-black">+ Create Blog</button>} />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <StatCard label="Total Blogs" value={blogs.loading ? "…" : blogs.items.length} />
        <StatCard label="Deleted (this session)" value={blogs.deletedCount} />
        <StatCard label="API Status" value={blogs.loading ? "Checking…" : blogs.loadError ? "Unreachable" : "Online"} tone={blogs.loading ? undefined : blogs.loadError ? "bad" : "good"} />
      </div>

      <section aria-label="Blogs" className="rounded-3xl border border-white/5 bg-[#020617] p-4 shadow-2xl sm:p-6">
        {blogs.loading ? <TableSkeleton /> : blogs.loadError ? (
          <EmptyState title="Could not load blogs" subtitle={blogs.loadError} action={<button type="button" onClick={blogs.reload} className={primaryButton}>Try again</button>} />
        ) : blogs.items.length === 0 ? (
          <EmptyState title="No blogs yet" subtitle="Start by creating your first article." action={<button type="button" onClick={openCreate} className={primaryButton}>Create your first blog</button>} />
        ) : (
          <BlogTable blogs={blogs.items} onEdit={(blog) => setEditor({ blog })} onDelete={setToDelete} />
        )}
      </section>

      {editor && (
        <BlogModal
          initial={editor.blog}
          onClose={() => setEditor(null)}
          onError={(message) => blogs.push("error", message)}
          onSave={async (payload) => {
            const ok = editor.blog ? await blogs.update(editor.blog._id, payload) : await blogs.create(payload);
            if (ok) setEditor(null);
          }}
        />
      )}

      {toDelete && (
        <ConfirmModal
          title="Delete Blog?"
          message={`Are you sure you want to delete "${toDelete.title}"? This cannot be undone.`}
          confirmText="Yes, Delete"
          onCancel={() => setToDelete(null)}
          onConfirm={async () => { await blogs.remove(toDelete._id); setToDelete(null); }}
        />
      )}
    </>
  );
}
