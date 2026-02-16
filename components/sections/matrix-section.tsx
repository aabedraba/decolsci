"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function AnimatedElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const phases = [
  {
    title: "Data Collection & Analysis",
    description: "Systematic scoping review and lived experience survey",
  },
  {
    title: "Program Design",
    description: "Evidence-based intervention development",
  },
  {
    title: "Fundraising",
    description: "Securing resources for implementation",
  },
  {
    title: "Execution",
    description: "Building equitable research infrastructure",
  },
];

export function MatrixSection() {
  return (
    <section id="matrix" className="py-8 md:py-12 bg-background flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-sans font-medium text-secondary tracking-wider">
              01
            </span>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary">
              Our Work
            </span>
          </div>
        </AnimatedElement>

        {/* 2x2 Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 lg:grid-rows-2 lg:auto-rows-fr">
          {/* Cell 1: As It Stands (Top Left) */}
          <AnimatedElement delay={100}>
            <div className="bg-card border border-border p-4 md:p-5 flex flex-col h-full">
              {/* Cell header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-secondary">01</span>
                <div className="h-px w-6 bg-secondary" />
                <span className="text-xs uppercase tracking-wider text-secondary">
                  As It Stands
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-3">
                As It Stands
              </h2>

              {/* Intro */}
              <p className="text-xs md:text-sm text-foreground/90 leading-relaxed mb-3">
                There exists a man-made gap in chemistry research that actively
                perpetuates inequality between the Global South and the Global
                North.
              </p>

              {/* Bullet points */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Language barriers force non-native English speakers to pay
                    for professional editing services to publish in dominant
                    journals
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Major research organizations project future output without
                    acknowledging Global South contributions
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Global policy institutions source experts almost exclusively
                    from the Global North
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary pl-3 py-2 mt-auto">
                <p className="text-xs md:text-sm font-serif italic text-foreground/80 leading-relaxed">
                  &ldquo;Many of the researchers turn their focus away from the
                  concerns of the Global South toward the research priorities of
                  the Global North—not by choice, but because of funding.&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimatedElement>

          {/* Cell 2: Knowledge Production (Top Right) */}
          <AnimatedElement delay={200}>
            <div className="bg-background border border-border p-4 md:p-5 flex flex-col h-full">
              {/* Cell header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-secondary">02</span>
                <div className="h-px w-6 bg-secondary" />
                <span className="text-xs uppercase tracking-wider text-secondary">
                  Our Vision
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">
                Knowledge Production belongs to everyone
              </h2>

              {/* Subtitle */}
              <p className="text-xs md:text-sm font-serif text-foreground/90 mb-3">
                Global challenges demand global knowledge, catalyzing an
                equitable and sustainable transitions
              </p>

              {/* Stats as bullets */}
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 p-2 bg-card">
                  <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">70%</span> of
                    Global South researchers stay in Global North permanently
                  </p>
                </div>
                <div className="flex items-start gap-2 p-2 bg-card">
                  <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">
                      2.8× vs 11.8×
                    </span>{" "}
                    LMIC authorship growth compared to high-income countries
                  </p>
                </div>
                <div className="flex items-start gap-2 p-2 bg-card">
                  <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary">15-year</span>{" "}
                    systematic review spanning 2010-2025
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-primary/10 border-l-2 border-primary p-3 mt-auto">
                <p className="text-xs md:text-sm font-serif text-foreground/90 leading-relaxed">
                  &ldquo;We&apos;re not just documenting problems. We&apos;re
                  identifying and prioritizing issues, and we are acting upon
                  them.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Cell 3: Objective (Bottom Left) */}
          <AnimatedElement delay={300}>
            <div className="bg-background border border-border p-4 md:p-5 flex flex-col h-full">
              {/* Cell header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-secondary">03</span>
                <div className="h-px w-6 bg-secondary" />
                <span className="text-xs uppercase tracking-wider text-secondary">
                  Current Focus
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">
                Objective
              </h2>

              {/* Subtitle */}
              <p className="text-xs md:text-sm font-serif text-foreground/90 mb-3">
                Guided by evidence, grounded in experience: Co-Creating the path
                forward
              </p>

              {/* Bullet points */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary text-primary text-xs font-bold shrink-0">
                    1
                  </div>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Generation of a scoping review systematically mapping
                    barriers in chemistry research
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary text-primary text-xs font-bold shrink-0">
                    2
                  </div>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Our survey will provide lived experience from researchers
                    across Global South regions
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary text-primary text-xs font-bold shrink-0">
                    3
                  </div>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    Using these key empirical indicators, we will design
                    evidence-based interventions and policy recommendations
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Cell 4: The Path Forward (Bottom Right) */}
          <AnimatedElement delay={400}>
            <div className="bg-card border border-border p-4 md:p-5 flex flex-col h-full">
              {/* Cell header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-secondary">04</span>
                <div className="h-px w-6 bg-secondary" />
                <span className="text-xs uppercase tracking-wider text-secondary">
                  Timeline
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-3">
                The Path Forward
              </h2>

              {/* Timeline */}
              <div className="flex flex-col gap-2">
                {phases.map((phase, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < phases.length - 1 && (
                        <div className="w-px h-full min-h-[2rem] bg-primary/30 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm md:text-base font-serif font-semibold text-foreground mb-0.5">
                        {phase.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
