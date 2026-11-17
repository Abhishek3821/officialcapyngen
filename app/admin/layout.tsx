import type { Metadata } from "next";
import { ToastProvider } from "./_components/toast";

// Admin portal: separate from the public site (no site navbar/footer) and hidden from search engines.
// Access is enforced by proxy.ts at the project root.
export const metadata: Metadata = {
  title: { default: "Admin | Capyngen", template: "%s" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white scheme-dark">
      <ToastProvider>{children}</ToastProvider>
    </div>
  );
}
