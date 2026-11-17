"use client";

import { useState, type ReactNode } from "react";
import Modal from "./modal";

export const fieldStyle = "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20";
export const primaryButton = "inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60";
export const secondaryButton = "inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10";

export function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: ReactNode; className?: string }) {
  return (
    <label className={`block space-y-1.5 ${className}`}>
      <span className="text-sm text-slate-300">{label}{required && <span className="text-red-400"> *</span>}</span>
      {children}
    </label>
  );
}

export function PageHero({ title, subtitle, accent = "indigo", action }: { title: string; subtitle: string; accent?: "indigo" | "emerald"; action?: ReactNode }) {
  const gradient = accent === "emerald" ? "from-emerald-600 to-teal-700" : "from-indigo-600 to-purple-700";
  return (
    <div className={`mb-8 flex flex-col gap-5 rounded-3xl bg-linear-to-r ${gradient} p-6 shadow-xl sm:p-8 md:flex-row md:items-center md:justify-between`}>
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-white/85">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, tone }: { label: string; value: ReactNode; tone?: "good" | "bad" }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111827] p-5 shadow-lg sm:p-6">
      <p className="text-sm text-white/65">{label}</p>
      <p className={`mt-2 text-2xl font-bold sm:text-3xl ${tone === "good" ? "text-emerald-400" : tone === "bad" ? "text-amber-400" : ""}`}>{value}</p>
    </div>
  );
}

export function EmptyState({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-white/10 px-6 py-14 text-center">
      <div aria-hidden="true" className="mb-3 text-4xl">🗂️</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function TableSkeleton() {
  return <div aria-label="Loading" className="h-52 animate-pulse rounded-xl bg-white/10" />;
}

export function ConfirmModal({ title, message, confirmText = "Delete", onConfirm, onCancel }: { title: string; message: string; confirmText?: string; onConfirm: () => Promise<void>; onCancel: () => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <Modal title={title} onClose={onCancel} size="md" footer={<>
      <button type="button" onClick={onCancel} className={secondaryButton}>Cancel</button>
      <button type="button" disabled={busy} onClick={async () => { setBusy(true); await onConfirm(); }} className={`${primaryButton} bg-red-600 hover:bg-red-500`}>{busy ? "Deleting…" : confirmText}</button>
    </>}>
      <p className="text-sm text-slate-300">{message}</p>
    </Modal>
  );
}
