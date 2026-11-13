import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BlockchainHero, BlockchainVision, BlockchainPricing, BlockchainMoodboard, BlockchainServices } from "../components/blockchain-development/intro";
import { BlockchainStrategy, BlockchainChallenge, BlockchainSwot, BlockchainFaq } from "../components/blockchain-development/strategy";

export const metadata: Metadata = {
  title: "Custom Blockchain Development Company in India | Capyngen",
  description: "Developing Custom Blockchain Solutions That Perform at Scale. Your Trusted Partner for building and Scaling Web3 with security and Customization.",
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
      <BlockchainFaq />
    </main>
    <Footer />
  </>;
}
