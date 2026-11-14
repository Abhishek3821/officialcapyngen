import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PpcHero from "../components/pay-per-click-advertising/hero";
import PpcSections from "../components/pay-per-click-advertising/sections";

export const metadata: Metadata = {
  title: "PPC Services That Turn Your Clicks Into Conversions | Capyngen",
  description: "Capyngen helps you rank your website with targeted Google Ads campaigns (PPC). Immediate visibility, hyper-niche targeting, and total budget control.",
};

export default function PayPerClickAdvertisingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><PpcHero /><PpcSections /></main><Footer /></>;
}
