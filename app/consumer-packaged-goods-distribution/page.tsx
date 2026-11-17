import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import ConsumerGoodsExperience from "../components/industries/consumer-goods";

export const metadata: Metadata = {
  title: "Consumer Packaged Goods & Distribution | Capyngen",
  description: "Explore a greener way to live, from considered materials and beautiful spaces to everyday care and inspiring escapes.",
};

export default function ConsumerGoodsPage() {
  return <><Navbar /><ConsumerGoodsExperience /><CleaningCta /><Footer /></>;
}
