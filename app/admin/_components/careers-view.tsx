"use client";

import { useState } from "react";
import CareerModal from "./career-modal";
import { CareerTable } from "./tables";
import { ConfirmModal, EmptyState, PageHero, StatCard, TableSkeleton, primaryButton } from "./ui";
import { useCollection } from "./use-collection";
import { CareerService, type Career } from "../_lib/api";

export default function CareersView() {
  const careers = useCollection(CareerService, "Job");
  const [editor, setEditor] = useState<{ career: Career | null } | null>(null);
  const [toDelete, setToDelete] = useState<Career | null>(null);

  const openCreate = () => setEditor({ career: null });
  const emerald = `${primaryButton} bg-emerald-600 hover:bg-emerald-500`;

  return (
    <>
      <PageHero accent="emerald" title="Career Management" subtitle="Manage all job openings from one dashboard." action={<button type="button" onClick={openCreate} className="rounded-xl bg-black/70 px-5 py-2.5 text-sm font-semibold hover:bg-black">+ Create Job</button>} />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        <StatCard label="Total Jobs" value={careers.loading ? "…" : careers.items.length} />
        <StatCard label="Deleted (this session)" value={careers.deletedCount} />
        <StatCard label="API Status" value={careers.loading ? "Checking…" : careers.loadError ? "Unreachable" : "Online"} tone={careers.loading ? undefined : careers.loadError ? "bad" : "good"} />
      </div>

      <section aria-label="Job openings" className="rounded-3xl border border-white/5 bg-[#020617] p-4 shadow-2xl sm:p-6">
        {careers.loading ? <TableSkeleton /> : careers.loadError ? (
          <EmptyState title="Could not load jobs" subtitle={careers.loadError} action={<button type="button" onClick={careers.reload} className={emerald}>Try again</button>} />
        ) : careers.items.length === 0 ? (
          <EmptyState title="No job openings yet" subtitle="Add a role to show it on the careers page." action={<button type="button" onClick={openCreate} className={emerald}>Add your first job</button>} />
        ) : (
          <CareerTable careers={careers.items} onEdit={(career) => setEditor({ career })} onDelete={setToDelete} />
        )}
      </section>

      {editor && (
        <CareerModal
          initial={editor.career}
          onClose={() => setEditor(null)}
          onError={(message) => careers.push("error", message)}
          onSave={async (payload) => {
            const ok = editor.career ? await careers.update(editor.career._id, payload) : await careers.create(payload);
            if (ok) setEditor(null);
          }}
        />
      )}

      {toDelete && (
        <ConfirmModal
          title="Delete Job?"
          message={`Are you sure you want to delete "${toDelete.title}"? This cannot be undone.`}
          confirmText="Yes, Delete"
          onCancel={() => setToDelete(null)}
          onConfirm={async () => { await careers.remove(toDelete._id); setToDelete(null); }}
        />
      )}
    </>
  );
}
