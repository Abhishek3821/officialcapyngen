import AdminNavbar from "../_components/admin-navbar";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#020617] to-black">
      <AdminNavbar />
      <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
    </div>
  );
}
