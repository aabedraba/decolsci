"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { SupportSection } from "@/components/sections/support-section";
import { FloatingCTA } from "@/components/floating-cta";
import { Footer } from "@/components/footer";

export default function SumudLabsPage() {
  return (
    <main className="relative">
      <HeroSection />
      <TeamSection />
      <SupportSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
