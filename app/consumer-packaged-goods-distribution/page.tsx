import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import ConsumerGoodsExperience from "../components/industries/consumer-goods";

export const metadata: Metadata = {
  title: "CPG Software Development Company | Capyngen",
  description: "Capyngen is a CPG software development company that helps CPG brands transform supply chain operations, accelerate time-to-market and deliver better customer experiences.",
};

export default function ConsumerGoodsPage() {
  return <><Navbar /><ConsumerGoodsExperience /><CleaningCta /><Footer /></>;
}
