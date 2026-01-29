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

const scopeItems = [
  {
    title: "Disciplines",
    content:
      "Chemistry and adjacent fields (green chemistry, materials science, environmental chemistry, biochemistry, pharmacology)",
  },
  {
    title: "Geography",
    content:
      "All Global South regions—Africa, Latin America, Asia, Pacific Islands",
  },
  {
    title: "Time Frame",
    content: "2010–2025",
  },
  {
    title: "Literature Types",
    content:
      "Peer-reviewed articles, grey literature (UNESCO, OECD reports, regional science councils), qualitative studies, interviews",
  },
];

export function ObjectiveSection() {
  return (
    <section id="objective" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-secondary tracking-wider">
              03
            </span>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary">
              Current Objective
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-12 max-w-4xl text-balance">
            A Systematic Scoping Review
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-12 max-w-3xl">
            Our immediate goal is to conduct a rigorous scoping review that
            systematically maps the literature on barriers facing Global South
            researchers in chemistry and adjacent fields—green chemistry,
            materials science, environmental chemistry, biochemistry, and
            pharmacology.
          </p>
        </AnimatedElement>

        {/* Research question callout */}
        <AnimatedElement delay={300}>
          <div className="bg-primary/10 border-l-4 border-primary p-6 md:p-8 mb-16 max-w-4xl">
            <p className="text-sm font-sans uppercase tracking-[0.15em] text-primary mb-4 font-medium">
              Research Question
            </p>
            <p className="text-lg md:text-xl font-serif text-foreground leading-relaxed">
              What are the most prevalent barriers preventing Global South
              researchers from equitable participation in scientific knowledge
              production in chemistry and related fields, and where is there
              consensus across existing studies?
            </p>
          </div>
        </AnimatedElement>

        {/* Scope details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scopeItems.map((item, index) => (
            <AnimatedElement key={item.title} delay={400 + index * 100}>
              <div className="bg-card border border-border p-6 h-full">
                <h3 className="text-sm font-sans uppercase tracking-[0.15em] text-primary mb-3 font-medium">
                  {item.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Why this matters */}
        <AnimatedElement delay={800}>
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              Why This Matters
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Without a comprehensive map of existing evidence, researchers,
              funders, and policymakers are forced to rely on anecdotal
              understanding. This review will create a clear picture of where
              the literature agrees—and where critical gaps remain.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
