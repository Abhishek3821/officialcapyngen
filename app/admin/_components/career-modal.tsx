"use client";

import { useState } from "react";
import Modal from "./modal";
import { Field, fieldStyle, primaryButton, secondaryButton } from "./ui";
import type { Career, CareerInput } from "../_lib/api";

const empty: CareerInput = { title: "", department: "", location: "", jobType: "", description: "", requirements: "", applyLink: "" };

const shortFields = [
  ["title", "Job Title", true],
  ["department", "Department", false],
  ["location", "Location", false],
  ["jobType", "Job Type", false],
] as const;

export default function CareerModal({ initial, onClose, onSave, onError }: { initial: Career | null; onClose: () => void; onSave: (payload: CareerInput) => Promise<void>; onError: (message: string) => void }) {
  const [form, setForm] = useState<CareerInput>(() => {
    if (!initial) return empty;
    const { title, department, location, jobType, description, requirements, applyLink } = initial;
    return { title, department, location, jobType, description, requirements, applyLink };
  });
  const [saving, setSaving] = useState(false);
  const set = (key: keyof CareerInput, value: string) => setForm((current) => ({ ...current, [key]: value }));

  async function handleSubmit() {
    if (!form.title.trim()) return onError("Job title is required.");
    setSaving(true);
    await onSave(Object.fromEntries(Object.entries(form).map(([key, value]) => [key, (value ?? "").trim()])) as CareerInput);
    setSaving(false);
  }

  return (
    <Modal title={initial ? "Edit Job" : "Add Job"} onClose={onClose} footer={<>
      <button type="button" onClick={onClose} className={secondaryButton}>Cancel</button>
      <button type="button" onClick={handleSubmit} disabled={saving} className={`${primaryButton} bg-emerald-600 hover:bg-emerald-500`}>{saving ? "Saving…" : initial ? "Update" : "Save"}</button>
    </>}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shortFields.map(([key, label, isRequired]) => <Field key={key} label={label} required={isRequired}><input value={form[key] ?? ""} onChange={(event) => set(key, event.target.value)} className={fieldStyle} /></Field>)}
        <Field label="Description" className="sm:col-span-2"><textarea rows={3} value={form.description ?? ""} onChange={(event) => set("description", event.target.value)} className={fieldStyle} /></Field>
        <Field label="Requirements" className="sm:col-span-2"><textarea rows={3} value={form.requirements ?? ""} onChange={(event) => set("requirements", event.target.value)} className={fieldStyle} /></Field>
        <Field label="Apply Link" className="sm:col-span-2"><input type="url" value={form.applyLink ?? ""} onChange={(event) => set("applyLink", event.target.value)} placeholder="https://" className={fieldStyle} /></Field>
      </div>
    </Modal>
  );
}
