"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { VisionSection } from "@/components/sections/vision-section";
import { ObjectiveSection } from "@/components/sections/objective-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { TeamSection } from "@/components/sections/team-section";
import { DeliverablesSection } from "@/components/sections/deliverables-section";
import { SupportSection } from "@/components/sections/support-section";
import { FloatingCTA } from "@/components/floating-cta";
import { Footer } from "@/components/footer";

export default function DecolsciPage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <ObjectiveSection />
      <MethodologySection />
      <TeamSection />
      <DeliverablesSection />
      <SupportSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
