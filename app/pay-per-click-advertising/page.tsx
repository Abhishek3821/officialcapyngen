import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PpcHero from "../components/pay-per-click-advertising/hero";
import PpcSections from "../components/pay-per-click-advertising/sections";

export const metadata: Metadata = {
  title: "Pay-Per-Click Advertising (PPC) | Capyngen",
  description: "Connect with the right audience through thoughtful pay-per-click advertising, purposeful creative, and campaigns built around meaningful results.",
};

export default function PayPerClickAdvertisingPage() {
  return <><Navbar /><main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none"><PpcHero /><PpcSections /></main><Footer /></>;
}
