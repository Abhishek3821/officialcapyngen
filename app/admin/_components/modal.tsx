"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

/** Native <dialog> modal. Mount it to open; unmount (via onClose) to close. */
export default function Modal({ title, onClose, children, footer, size = "lg" }: { title: string; onClose: () => void; children: ReactNode; footer?: ReactNode; size?: "md" | "lg" }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === ref.current) onClose(); }}
      className={`m-auto w-[calc(100%-2rem)] ${size === "lg" ? "max-w-3xl" : "max-w-md"} overflow-hidden rounded-2xl border border-white/10 bg-[#0b1530] p-0 text-slate-100 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close" className="rounded-md px-2 py-1 text-slate-400 hover:bg-white/10 hover:text-white">✕</button>
      </div>
      <div className="max-h-[70vh] overflow-y-auto px-5 py-5">{children}</div>
      {footer && <div className="flex flex-wrap justify-end gap-2 border-t border-white/10 bg-black/20 px-5 py-4">{footer}</div>}
    </dialog>
  );
}
