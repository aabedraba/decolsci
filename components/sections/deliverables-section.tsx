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

const deliverables = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    type: "Primary",
    title: "Academic Paper",
    description:
      "Target journals: Research Policy, Science and Public Policy, Scientometrics, Higher Education",
    audience: "Academic researchers, journal editors, university administrators",
    purpose:
      "Establish evidence-based consensus on barriers and contribute to the decolonial science literature",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    type: "Secondary",
    title: "Supplementary Database",
    description:
      "A publicly accessible database of all coded articles with filters for barrier type, region, methodology, and year",
    audience: "Researchers conducting follow-up studies, grant writers needing citations",
    purpose:
      "Make our data transparent and reusable for future meta-analyses",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    type: "Optional",
    title: "Interactive Evidence Gap Map",
    description:
      "Visual tool (using EPPI-Mapper or Tableau) showing where evidence is concentrated and where critical gaps exist",
    audience: "Funders, policymakers, science advocates",
    purpose:
      "Enable stakeholders to quickly identify under-researched areas needing intervention",
  },
];

const timeline = [
  { phase: "Literature collection & screening", months: "Months 1-3" },
  { phase: "Data extraction & coding", months: "Months 3-5" },
  { phase: "Synthesis & writing", months: "Months 5-7" },
  { phase: "Submission & revision", months: "Months 7-10" },
];

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-primary-foreground/80 tracking-wider">
              06
            </span>
            <div className="h-px w-12 bg-primary-foreground/40" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-primary-foreground/80">
              Deliverables
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-8 max-w-4xl text-balance">
            What We&apos;ll Produce
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-16 max-w-3xl">
            This project will generate multiple outputs designed for different
            audiences—from academic peer review to policy advocacy.
          </p>
        </AnimatedElement>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {deliverables.map((item, index) => (
            <AnimatedElement key={item.title} delay={300 + index * 150}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-6 md:p-8 h-full flex flex-col">
                {/* Icon and type */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary-foreground">{item.icon}</div>
                  <span className="text-xs font-sans uppercase tracking-[0.15em] text-accent font-medium">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Audience and purpose */}
                <div className="mt-auto space-y-4 pt-6 border-t border-primary-foreground/20">
                  <div>
                    <p className="text-xs font-sans uppercase tracking-[0.1em] text-primary-foreground/60 mb-1">
                      Audience
                    </p>
                    <p className="text-sm text-primary-foreground/80">
                      {item.audience}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-[0.1em] text-primary-foreground/60 mb-1">
                      Purpose
                    </p>
                    <p className="text-sm text-primary-foreground/80">
                      {item.purpose}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Timeline */}
        <AnimatedElement delay={750}>
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-6 md:p-8 max-w-3xl">
            <h3 className="text-sm font-sans uppercase tracking-[0.15em] text-accent mb-6 font-medium">
              Timeline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {timeline.map((item, index) => (
                <div key={item.phase} className="flex items-center gap-3">
                  <span className="text-sm font-mono text-primary-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-primary-foreground font-medium">
                      {item.phase}
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                      {item.months}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
