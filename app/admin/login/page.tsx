import type { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = { title: "Admin Sign In | Capyngen" };

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-[#020617] via-[#020617] to-black px-4 py-10">
      <LoginForm />
    </main>
  );
}
