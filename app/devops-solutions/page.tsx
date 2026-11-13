import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { DevOpsHero, DevOpsCapabilities, DevOpsProcess, DevOpsSuite } from "../components/devops-solutions/devops-intro";
import { TopDestination, MoreThanProperty, OurProperties, DevOpsFaq } from "../components/devops-solutions/travel-details";

export const metadata: Metadata = {
  title: "DevOps Solutions & Services | Capyngen",
  description: "DevOps Solutions Where Delivery Stops Being the Hard Part. We re-deploy that last mile with automation, for faster releases and quieter weekends.",
};

export default function DevOpsSolutionsPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <DevOpsHero />
      <DevOpsCapabilities />
      <DevOpsProcess />
      <DevOpsSuite />
      <TopDestination />
      <MoreThanProperty />
      <OurProperties />
      <DevOpsFaq />
    </main>
    <Footer />
  </>;
}
