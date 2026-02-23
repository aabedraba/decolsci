"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { MatrixSection } from "@/components/sections/matrix-section";
import { FiguresSection } from "@/components/sections/figures-section";
import { TeamSection } from "@/components/sections/team-section";
import { SupportSection } from "@/components/sections/support-section";
import { FloatingCTA } from "@/components/floating-cta";
import { Footer } from "@/components/footer";

export default function SumudLabsPage() {
  return (
    <main className="relative">
      <HeroSection />
      <MatrixSection />
      <FiguresSection />
      <TeamSection />
      <SupportSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
