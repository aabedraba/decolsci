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

const timelineSteps = [
  {
    phase: "Q1",
    title: "Evidence Collection",
    detail: "Map inequities in chemistry research through systematic review.",
  },
  {
    phase: "Q2",
    title: "Survey Intake",
    detail: "Collect Global South perspectives on local barriers and needs.",
  },
  {
    phase: "Q3",
    title: "Pattern Analysis",
    detail: "Synthesize findings to identify high-impact intervention points.",
  },
  {
    phase: "Q4",
    title: "Intervention Design",
    detail: "Co-design pilots with researchers and partner institutions.",
  },
  {
    phase: "Q5",
    title: "Program Rollout",
    detail: "Launch programs, monitor outcomes, and refine implementation.",
  },
] as const;

export function FiguresSection() {
  return (
    <section id="figures" className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedElement>
          <div className="mb-4">
            <div className="h-px bg-secondary/30 mb-2" />
            <span className="text-sm font-sans uppercase tracking-[0.2em] text-secondary">
              Timeline
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={80}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Program Timeline
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={140} className="lg:col-span-12">
          <div className="bg-background border border-border p-5 md:p-6">
            <div className="md:hidden space-y-4 border-l border-border pl-4">
              {timelineSteps.map((step) => (
                <div key={step.phase} className="relative">
                  <span className="absolute -left-[1.15rem] top-1 h-3 w-3 rounded-full bg-primary border border-background" />
                  <p className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-1">
                    {step.phase}
                  </p>
                  <p className="text-base font-serif font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="text-sm text-foreground/75">{step.detail}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:block relative">
              <div className="absolute left-0 right-0 top-4 h-px bg-border" />
              <div className="grid grid-cols-5 gap-4">
                {timelineSteps.map((step) => (
                  <div key={step.phase} className="relative pt-8">
                    <span className="absolute top-2 left-0 h-4 w-4 rounded-full bg-primary border-2 border-background" />
                    <p className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-1">
                      {step.phase}
                    </p>
                    <p className="text-base lg:text-lg font-serif font-semibold text-foreground leading-snug mb-1">
                      {step.title}
                    </p>
                    <p className="text-xs lg:text-sm text-foreground/75 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
