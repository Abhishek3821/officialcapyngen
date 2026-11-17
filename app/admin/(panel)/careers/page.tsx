import type { Metadata } from "next";
import CareersView from "../../_components/careers-view";

export const metadata: Metadata = { title: "Careers | Capyngen Admin" };

export default function AdminCareersPage() {
  return <CareersView />;
}
