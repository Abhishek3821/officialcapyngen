import type { Metadata } from "next";
import BlogsView from "../../_components/blogs-view";

export const metadata: Metadata = { title: "Blogs | Capyngen Admin" };

export default function AdminBlogsPage() {
  return <BlogsView />;
}
