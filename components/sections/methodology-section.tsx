"use client";

import React from "react"

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

const methodologySteps = [
  {
    step: "01",
    title: "Collect",
    description:
      "Systematic literature search across major databases (Scopus, Web of Science, PubMed) and grey literature repositories. We'll use controlled vocabulary and Boolean search strings optimized for chemistry + equity keywords.",
  },
  {
    step: "02",
    title: "Extract",
    description:
      "AI-assisted tagging and human verification to identify barriers, needs, proposed solutions, and geographic specificity. Each article will be coded for methodology type (qualitative, bibliometric, survey, case study).",
  },
  {
    step: "03",
    title: "Categorize",
    description:
      "Group findings into thematic clusters using iterative coding. Themes will emerge from the data, not predetermined categories.",
  },
  {
    step: "04",
    title: "Synthesize",
    description:
      "Frequency analysis to show which barriers appear most consistently, regional comparison to identify context-specific patterns, and temporal trends to track how conversations have evolved since 2010.",
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-secondary tracking-wider">
              04
            </span>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary">
              Methodology
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 max-w-4xl text-balance">
            How We&apos;re Building This Evidence Map
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-16 max-w-3xl">
            Our approach follows established systematic review protocols, with a
            focus on transparency and replicability.
          </p>
        </AnimatedElement>

        {/* Process steps timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-[calc(2rem+1px)] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 lg:space-y-12">
            {methodologySteps.map((item, index) => (
              <AnimatedElement key={item.step} delay={300 + index * 150}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                  {/* Step number */}
                  <div className="flex items-start gap-4 lg:w-24 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-sans font-semibold text-sm z-10">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background border border-border p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Methodological rigor callout */}
        <AnimatedElement delay={900}>
          <div className="mt-16 bg-secondary/10 border border-secondary/20 p-6 md:p-8 max-w-3xl">
            <h3 className="text-sm font-sans uppercase tracking-[0.15em] text-secondary mb-4 font-medium">
              Methodological Rigor
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re not cherry-picking studies that support a predetermined
              narrative. Our goal is to accurately represent the full spectrum
              of evidence—including contradictions and knowledge gaps.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
