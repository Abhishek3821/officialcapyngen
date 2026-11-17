"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import Modal from "./modal";
import { Field, fieldStyle, primaryButton, secondaryButton } from "./ui";
import { errorMessage, uploadImage, type Blog, type BlogInput } from "../_lib/api";

type FormState = Record<"title" | "author" | "description" | "content" | "image" | "tags" | "category" | "group" | "date" | "metaTitle" | "metaDescription" | "schema", string>;

function toForm(blog: Blog | null): FormState {
  return {
    title: blog?.title ?? "",
    author: blog?.author ?? "",
    description: blog?.description ?? "",
    content: blog?.content ?? "",
    image: blog?.image ?? "",
    tags: (blog?.tags ?? []).join(", "),
    category: blog?.category ?? "",
    group: blog?.group ?? "",
    date: blog?.date ?? "",
    metaTitle: blog?.metaTitle ?? "",
    metaDescription: blog?.metaDescription ?? "",
    schema: blog?.schema ? JSON.stringify(blog.schema, null, 2) : "",
  };
}

const required: (keyof FormState)[] = ["title", "author", "description", "content", "category", "group", "date"];

export default function BlogModal({ initial, onClose, onSave, onError }: { initial: Blog | null; onClose: () => void; onSave: (payload: BlogInput) => Promise<void>; onError: (message: string) => void }) {
  const [form, setForm] = useState<FormState>(() => toForm(initial));
  const [preview, setPreview] = useState(initial?.image ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  async function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setPreview(URL.createObjectURL(file));
    try {
      const url = await uploadImage(file);
      setForm((current) => ({ ...current, image: url }));
    } catch (error) {
      setPreview(form.image);
      onError(`Image upload failed: ${errorMessage(error)}`);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit() {
    if (uploading) return onError("Please wait, the image is still uploading.");
    if (required.some((key) => !form[key].trim())) return onError("Please fill all required fields.");
    if (!form.image) return onError("Please upload an image first.");

    let schema: unknown;
    if (form.schema.trim()) {
      try { schema = JSON.parse(form.schema); } catch { return onError("Schema must be valid JSON."); }
    }

    setSaving(true);
    await onSave({
      title: form.title.trim(),
      author: form.author.trim(),
      description: form.description.trim(),
      content: form.content.trim(),
      image: form.image,
      category: form.category.trim(),
      group: form.group.trim(),
      date: form.date,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      metaTitle: form.metaTitle.trim(),
      metaDescription: form.metaDescription.trim(),
      schema,
    });
    setSaving(false);
  }

  return (
    <Modal title={initial ? "Edit Blog" : "Create Blog"} onClose={onClose} footer={<>
      <button type="button" onClick={onClose} className={secondaryButton}>Cancel</button>
      <button type="button" onClick={handleSubmit} disabled={saving || uploading} className={primaryButton}>{saving ? "Saving…" : initial ? "Save Changes" : "Save Blog"}</button>
    </>}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Title" required><input name="title" value={form.title} onChange={update} className={fieldStyle} /></Field>
        <Field label="Author" required><input name="author" value={form.author} onChange={update} className={fieldStyle} /></Field>
        <Field label="Category" required><input name="category" value={form.category} onChange={update} className={fieldStyle} /></Field>
        <Field label="Group" required><input name="group" value={form.group} onChange={update} className={fieldStyle} /></Field>
        <Field label="Date" required><input type="date" name="date" value={form.date} onChange={update} className={`${fieldStyle} scheme-dark`} /></Field>
        <Field label="Tags (comma separated)"><input name="tags" value={form.tags} onChange={update} placeholder="AI, Cloud, DevOps" className={fieldStyle} /></Field>
        <Field label="Brief Description" required className="md:col-span-2"><textarea name="description" value={form.description} onChange={update} rows={2} className={fieldStyle} /></Field>
        <Field label="Content" required className="md:col-span-2"><textarea name="content" value={form.content} onChange={update} rows={7} className={fieldStyle} /></Field>
        <Field label="Meta Title"><input name="metaTitle" value={form.metaTitle} onChange={update} className={fieldStyle} /></Field>
        <Field label="Meta Description"><textarea name="metaDescription" value={form.metaDescription} onChange={update} rows={2} className={fieldStyle} /></Field>
        <Field label="Schema (JSON)" className="md:col-span-2"><textarea name="schema" value={form.schema} onChange={update} rows={4} placeholder='{"@context":"https://schema.org","@type":"BlogPosting"}' className={`${fieldStyle} font-mono`} /></Field>
        <Field label="Cover Image" required className="md:col-span-2">
          <input type="file" accept="image/*" onChange={handleImage} className={`${fieldStyle} file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-3 file:py-1.5 file:text-sm file:text-white`} />
          {uploading && <span className="block text-xs text-indigo-300">Uploading image…</span>}
          {preview && <Image src={preview} alt="Cover preview" width={720} height={320} unoptimized className="mt-2 h-44 w-full rounded-lg border border-white/10 object-cover" />}
        </Field>
      </div>
    </Modal>
  );
}
