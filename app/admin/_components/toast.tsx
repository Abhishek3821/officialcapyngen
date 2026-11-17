"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type ToastType = "success" | "error" | "info";
type Toast = { id: number; type: ToastType; message: string };

const ToastContext = createContext<{ push: (type: ToastType, message: string) => void } | null>(null);

const tone: Record<ToastType, string> = {
  success: "border-emerald-500/40 text-emerald-300",
  error: "border-red-500/40 text-red-300",
  info: "border-white/15 text-slate-200",
};

const icon: Record<ToastType, string> = { success: "✓", error: "!", info: "i" };

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => setToasts((list) => list.filter((toast) => toast.id !== id)), []);

  const push = useCallback((type: ToastType, message: string) => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list, { id, type, message }]);
    window.setTimeout(() => dismiss(id), 3500);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div aria-live="polite" className="fixed top-4 right-4 z-[60] flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2">
        {toasts.map((toast) => (
          <div key={toast.id} role={toast.type === "error" ? "alert" : "status"} className={`flex items-start gap-3 rounded-xl border bg-[#0b1530]/95 px-4 py-3 text-sm shadow-2xl backdrop-blur ${tone[toast.type]}`}>
            <span aria-hidden="true" className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold">{icon[toast.type]}</span>
            <p className="flex-1 text-slate-100">{toast.message}</p>
            <button type="button" onClick={() => dismiss(toast.id)} aria-label="Dismiss notification" className="text-slate-400 hover:text-white">✕</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
