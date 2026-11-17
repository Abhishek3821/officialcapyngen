import type { Metadata } from "next";
import ReportsView from "../../_components/reports-view";

export const metadata: Metadata = { title: "Reports | Capyngen Admin" };

export default function AdminReportsPage() {
  return <ReportsView />;
}
