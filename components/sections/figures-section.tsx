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

const barrierBars = [
  { label: "Language gatekeeping", value: 84 },
  { label: "Funding asymmetry", value: 77 },
  { label: "Infrastructure gaps", value: 69 },
  { label: "Authorship inequality", value: 58 },
] as const;

const trendValues = [22, 30, 38, 47, 56, 64, 71] as const;

const timelineSteps = [
  {
    phase: "Q1",
    title: "Evidence Collection",
    detail: "Dummy placeholder for baseline literature mapping",
  },
  {
    phase: "Q2",
    title: "Survey Intake",
    detail: "Dummy placeholder for participant submissions",
  },
  {
    phase: "Q3",
    title: "Pattern Analysis",
    detail: "Dummy placeholder for coding and clustering",
  },
  {
    phase: "Q4",
    title: "Intervention Design",
    detail: "Dummy placeholder for pilot strategy drafts",
  },
  {
    phase: "Q5",
    title: "Program Rollout",
    detail: "Dummy placeholder for implementation planning",
  },
] as const;

const linePoints = trendValues
  .map((value, index) => {
    const x = (index / (trendValues.length - 1)) * 100;
    const y = 100 - value;
    return `${x},${y}`;
  })
  .join(" ");

export function FiguresSection() {
  return (
    <section id="figures" className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedElement>
          <div className="mb-4">
            <div className="h-px bg-secondary/30 mb-2" />
            <span className="text-sm font-sans uppercase tracking-[0.2em] text-secondary">
              Figures and Timeline
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={80}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-5 text-balance">
            Data Sketchpad
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={120}>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-4xl mb-8">
            Placeholder charts and figures to reserve layout space. These are
            dummy visualizations and can be replaced with final research figures
            later.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <AnimatedElement delay={180} className="lg:col-span-7">
            <div className="h-full bg-background border border-border p-5 md:p-6">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/80">
                    Figure A
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                    Barrier Intensity Snapshot
                  </h3>
                </div>
                <span className="text-xs px-2 py-1 border border-border text-foreground/70 bg-card">
                  Dummy
                </span>
              </div>

              <div className="space-y-4">
                {barrierBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between items-center text-sm text-foreground/80 mb-1">
                      <span>{bar.label}</span>
                      <span className="font-medium text-primary">{bar.value}%</span>
                    </div>
                    <div className="h-4 border border-border bg-card">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            <AnimatedElement delay={220}>
              <div className="bg-background border border-border p-5 md:p-6">
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/80 mb-2">
                  Figure B
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                  Distribution Model
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div
                    className="w-36 h-36 rounded-full border border-border flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "conic-gradient(var(--primary) 0deg 230deg, var(--secondary) 230deg 320deg, var(--accent) 320deg 360deg)",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground/70">
                        Dummy
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80 w-full">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-primary block" />
                        Group A
                      </span>
                      <span>64%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-secondary block" />
                        Group B
                      </span>
                      <span>25%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-accent block" />
                        Group C
                      </span>
                      <span>11%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={260}>
              <div className="bg-background border border-border p-5 md:p-6">
                <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/80 mb-2">
                  Figure C
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                  Trend Line Placeholder
                </h3>
                <div className="relative h-40 border border-border bg-card px-3 py-2">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="0.8"
                      points="0,80 100,80"
                    />
                    <polyline
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="0.8"
                      points="0,60 100,60"
                    />
                    <polyline
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="0.8"
                      points="0,40 100,40"
                    />
                    <polyline
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      points={linePoints}
                    />
                  </svg>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={300} className="lg:col-span-12">
            <div className="bg-background border border-border p-5 md:p-6">
              <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/80 mb-2">
                Timeline
              </p>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-5">
                Program Sequence Placeholder
              </h3>

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

          <AnimatedElement delay={340} className="lg:col-span-12">
            <div className="bg-background border border-dashed border-border p-5 md:p-6">
              <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/80 mb-2">
                Figure Slots
              </p>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-5">
                Reserved Space for Final Assets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-40 md:h-52 border border-dashed border-border bg-card flex items-center justify-center text-foreground/60 text-sm font-sans">
                  Figure Placeholder 1
                </div>
                <div className="h-40 md:h-52 border border-dashed border-border bg-card flex items-center justify-center text-foreground/60 text-sm font-sans">
                  Figure Placeholder 2
                </div>
                <div className="h-40 md:h-52 border border-dashed border-border bg-card flex items-center justify-center text-foreground/60 text-sm font-sans">
                  Figure Placeholder 3
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
