import type { Metadata } from "next";
import DashboardView from "../_components/dashboard-view";

export const metadata: Metadata = { title: "Dashboard | Capyngen Admin" };

export default function AdminDashboardPage() {
  return <DashboardView />;
}
