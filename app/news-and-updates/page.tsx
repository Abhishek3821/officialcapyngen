import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsUpdatesContent from "../components/news-updates-content";

export const metadata: Metadata = {
  title: "News & Updates | Capyngen",
  description: "Ideas and perspectives on design, technology, business, and the people shaping digital experiences.",
};

export default function NewsAndUpdatesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 outline-none">
        <NewsUpdatesContent />
      </main>
      <Footer />
    </>
  );
}
