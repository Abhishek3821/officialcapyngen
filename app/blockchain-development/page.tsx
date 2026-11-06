import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BlockchainHero, BlockchainVision, BlockchainPricing, BlockchainMoodboard, BlockchainServices } from "../components/blockchain-development/intro";
import { BlockchainStrategy, BlockchainChallenge, BlockchainSwot } from "../components/blockchain-development/strategy";

export const metadata: Metadata = {
  title: "Blockchain Development | Capyngen",
  description: "Explore Capyngen's blockchain development strategy, services, challenges, and opportunities.",
};

export default function BlockchainDevelopmentPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-w-0 max-w-full outline-none">
      <BlockchainHero />
      <BlockchainVision />
      <BlockchainPricing />
      <BlockchainMoodboard />
      <BlockchainServices />
      <BlockchainStrategy />
      <BlockchainChallenge />
      <BlockchainSwot />
    </main>
    <Footer />
  </>;
}
