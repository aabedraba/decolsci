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

const principles = [
  {
    title: "Epistemic Justice Matters",
    description:
      "Research agendas should reflect the priorities of those most affected by scientific questions, not just those with the most funding.",
    color: "bg-primary",
  },
  {
    title: "Language is Power",
    description:
      "Multilingual scholarship isn't a 'nice-to-have'—it's essential for knowledge diversity and prevents entire bodies of evidence from being erased.",
    color: "bg-secondary",
  },
  {
    title: "Parachute Science Must End",
    description:
      "Global North researchers conducting extractive research in the South without meaningful local collaboration perpetuates colonial dynamics.",
    color: "bg-accent",
  },
  {
    title: "Citations Tell a Story",
    description:
      "Whose knowledge gets cited shapes whose voices are heard in policy, funding decisions, and curriculum design.",
    color: "bg-primary",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-secondary-foreground/80 tracking-wider">
              02
            </span>
            <div className="h-px w-12 bg-secondary-foreground/40" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary-foreground/80">
              Our Vision
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-8 max-w-4xl text-balance">
            Knowledge Production Belongs to Everyone
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed mb-16 max-w-3xl">
            Science claims universality, but its infrastructure is anything but
            universal. From English-language dominance in journals to funding
            mechanisms that exclude entire regions, the current system treats
            Global South researchers as data collectors rather than intellectual
            leaders.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={250}>
          <p className="text-xl md:text-2xl font-serif text-secondary-foreground mb-12">
            Decolsci challenges this paradigm. We believe that:
          </p>
        </AnimatedElement>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {principles.map((principle, index) => (
            <AnimatedElement key={principle.title} delay={300 + index * 100}>
              <div className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${principle.color}`} />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-secondary-foreground">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={700}>
          <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-3xl">
            We&apos;re not just documenting problems. We&apos;re mapping where consensus
            exists across the literature so future interventions can target the
            most impactful leverage points.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
