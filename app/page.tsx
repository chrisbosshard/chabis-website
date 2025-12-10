import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <FeatureShowcase />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
