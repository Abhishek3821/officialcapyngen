import type { ReactNode } from "react";
import type { ProductKey } from "./data";

// Illustrative product screens built from HTML/CSS (decorative; hidden from assistive tech).
// Names and figures inside are sample placeholders, not real data.

function Window({ title, children, dark = false }: { title: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-2xl border shadow-[0_30px_80px_-20px_rgba(15,23,42,.35)] ${dark ? "border-white/10 bg-[#0f1a2e]" : "border-[#e3e8f0] bg-white"}`}>
      <div className={`flex items-center gap-2 border-b px-4 py-3 ${dark ? "border-white/10 bg-white/[.03]" : "border-[#edf1f6] bg-[#f8fafc]"}`}>
        <span className="size-2.5 rounded-full bg-[#ff6b6b]" /><span className="size-2.5 rounded-full bg-[#ffc94d]" /><span className="size-2.5 rounded-full bg-[#4ade80]" />
        <span className={`ml-3 truncate rounded-md px-3 py-1 text-[10px] ${dark ? "bg-white/5 text-white/50" : "bg-white text-slate-400 ring-1 ring-[#e9eef5]"}`}>{title}</span>
      </div>
      {children}
    </div>
  );
}

const bar = (w: string, tone = "bg-slate-200") => <span className={`block h-2 rounded-full ${tone}`} style={{ width: w }} />;

/** Hero dashboard combining all three modules. */
export function SuiteMockup() {
  const heights = [38, 52, 44, 66, 58, 74, 62, 86, 70, 92];
  return (
    <div aria-hidden="true" className="relative">
      <Window title="app.orinite.com / dashboard" dark>
        <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[150px_1fr]">
          <div className="space-y-1.5 border-r border-white/10 p-2.5 sm:p-3">
            <div className="mb-4 flex items-center gap-2 px-1"><span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-[#2dd4bf] to-[#6366f1] text-xs font-bold text-white">O</span><span className="hidden text-xs font-semibold text-white sm:inline">Orinite</span></div>
            {[["Overview", true], ["HRMS", false], ["CRM", false], ["Operations", false], ["Reports", false]].map(([label, active]) => (
              <div key={String(label)} className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[11px] ${active ? "bg-white/10 text-white" : "text-white/45"}`}><span className={`size-3 shrink-0 rounded ${active ? "bg-[#2dd4bf]" : "bg-white/15"}`} /><span className="hidden sm:inline">{label}</span></div>
            ))}
          </div>
          <div className="space-y-3 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[["Team", "bg-[#2dd4bf]"], ["Clients", "bg-[#818cf8]"], ["Tasks", "bg-[#fb923c]"]].map(([label, tone]) => (
                <div key={label} className="rounded-xl bg-white/[.04] p-2.5 ring-1 ring-white/10 sm:p-3"><p className="text-[9px] text-white/45 sm:text-[10px]">{label}</p><div className="mt-2 flex items-end justify-between"><span className="block h-3 w-8 rounded bg-white/80 sm:w-10" /><span className={`block h-1.5 w-6 rounded-full ${tone}`} /></div></div>
              ))}
            </div>
            <div className="rounded-xl bg-white/[.04] p-3 ring-1 ring-white/10">
              <div className="mb-3 flex items-center justify-between"><span className="block h-2 w-20 rounded-full bg-white/40" /><span className="block h-2 w-10 rounded-full bg-white/15" /></div>
              <div className="flex h-24 items-end gap-1.5 sm:h-28">{heights.map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-linear-to-t from-[#6366f1]/40 to-[#2dd4bf]" style={{ height: `${h}%` }} />)}</div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[0, 1].map((i) => <div key={i} className="space-y-2 rounded-xl bg-white/[.04] p-3 ring-1 ring-white/10">{bar("70%", "bg-white/30")}{bar("90%", "bg-white/10")}{bar("55%", "bg-white/10")}</div>)}
            </div>
          </div>
        </div>
      </Window>

      <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-[#13213a]/95 p-3 shadow-2xl backdrop-blur sm:block lg:-left-10">
        <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#14b8a6]/20 text-[#5eead4]">✓</span><div><p className="text-[11px] font-semibold text-white">HR record updated</p><p className="text-[10px] text-white/50">Orinite HRMS</p></div></div>
      </div>
      <div className="absolute -top-5 -right-3 hidden rounded-2xl border border-white/10 bg-[#13213a]/95 p-3 shadow-2xl backdrop-blur sm:block lg:-right-8">
        <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#6366f1]/25 text-[#a5b4fc]">↗</span><div><p className="text-[11px] font-semibold text-white">New lead added</p><p className="text-[10px] text-white/50">Orinite CRM</p></div></div>
      </div>
    </div>
  );
}

function HrmsScreen() {
  const people = [["AK", "bg-[#99f6e4]"], ["RS", "bg-[#c7d2fe]"], ["PM", "bg-[#fed7aa]"], ["NJ", "bg-[#bbf7d0]"]];
  return (
    <Window title="Orinite HRMS / Employees">
      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3"><span className="block h-2.5 w-28 rounded-full bg-slate-800/80" /><span className="rounded-lg bg-[#14b8a6] px-3 py-1.5 text-[10px] font-semibold text-white">+ Add employee</span></div>
        <div className="grid grid-cols-3 gap-2">
          {[["Present", "bg-[#14b8a6]", "82%"], ["On leave", "bg-[#f59e0b]", "40%"], ["Remote", "bg-[#6366f1]", "58%"]].map(([label, tone, w]) => <div key={label} className="rounded-xl border border-[#edf1f6] p-2.5"><p className="text-[9px] text-slate-400">{label}</p><div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className={`h-full rounded-full ${tone}`} style={{ width: w }} /></div></div>)}
        </div>
        <div className="divide-y divide-[#f0f3f7] rounded-xl border border-[#edf1f6]">
          {people.map(([initials, tone], i) => (
            <div key={initials} className="flex items-center gap-3 px-3 py-2.5">
              <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-slate-700 ${tone}`}>{initials}</span>
              <div className="flex-1 space-y-1.5">{bar(`${60 - i * 6}%`, "bg-slate-300")}{bar(`${40 + i * 5}%`)}</div>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${i === 2 ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>{i === 2 ? "Leave" : "Active"}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function CrmScreen() {
  const columns = [["Lead", 3, "bg-[#c7d2fe]"], ["Contacted", 2, "bg-[#a5b4fc]"], ["Proposal", 2, "bg-[#818cf8]"], ["Won", 1, "bg-[#4ade80]"]] as const;
  return (
    <Window title="Orinite CRM / Sales pipeline">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3"><span className="block h-2.5 w-28 rounded-full bg-slate-800/80" /><div className="flex gap-1.5"><span className="block h-6 w-14 rounded-lg bg-slate-100" /><span className="rounded-lg bg-[#6366f1] px-3 py-1.5 text-[10px] font-semibold text-white">+ Deal</span></div></div>
        <div className="grid grid-cols-4 gap-2">
          {columns.map(([label, count, tone]) => (
            <div key={label} className="space-y-2 rounded-xl bg-[#f6f7fb] p-2">
              <div className="flex items-center justify-between"><p className="truncate text-[9px] font-semibold text-slate-500">{label}</p><span className="text-[9px] text-slate-400">{count}</span></div>
              {Array.from({ length: count }, (_, i) => <div key={i} className="space-y-1.5 rounded-lg bg-white p-2 shadow-sm ring-1 ring-[#eceff5]"><span className={`block h-1.5 w-8 rounded-full ${tone}`} />{bar("90%", "bg-slate-200")}{bar("60%", "bg-slate-100")}</div>)}
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function BmScreen() {
  const steps = [["Request", "done"], ["Review", "done"], ["Approval", "active"], ["Complete", "todo"]] as const;
  return (
    <Window title="Orinite Business Management / Workflows">
      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between"><span className="block h-2.5 w-32 rounded-full bg-slate-800/80" /><span className="rounded-lg bg-[#f97316] px-3 py-1.5 text-[10px] font-semibold text-white">+ Task</span></div>
        <div className="flex items-center">
          {steps.map(([label, state], i) => (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span className={`flex size-7 items-center justify-center rounded-full text-[10px] font-bold ${state === "done" ? "bg-[#f97316] text-white" : state === "active" ? "bg-white text-[#f97316] ring-2 ring-[#f97316]" : "bg-slate-100 text-slate-400"}`}>{state === "done" ? "✓" : i + 1}</span>
                <span className="text-[9px] text-slate-500">{label}</span>
              </div>
              {i < steps.length - 1 && <span className={`mx-1 mb-4 h-0.5 flex-1 rounded ${state === "done" ? "bg-[#f97316]" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["Operations", "72%"], ["Admin", "48%"], ["Inventory", "64%"], ["Finance", "36%"]].map(([label, w]) => <div key={label} className="rounded-xl border border-[#f1ece7] p-3"><div className="flex justify-between"><p className="text-[10px] font-medium text-slate-600">{label}</p><span className="text-[9px] text-slate-400">{w}</span></div><div className="mt-2 h-1.5 rounded-full bg-orange-50"><div className="h-full rounded-full bg-[#fb923c]" style={{ width: w }} /></div></div>)}
        </div>
      </div>
    </Window>
  );
}

export function ProductMockup({ product }: { product: ProductKey }) {
  return <div aria-hidden="true">{product === "hrms" ? <HrmsScreen /> : product === "crm" ? <CrmScreen /> : <BmScreen />}</div>;
}
