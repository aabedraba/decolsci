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

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-secondary tracking-wider">
              01
            </span>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary">
              The Problem
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-12 max-w-4xl text-balance">
            Science Has a Geography Problem
          </h2>
        </AnimatedElement>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-7">
            <AnimatedElement delay={200}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                Global science operates under a persistent myth: that excellence
                naturally &ldquo;trickles down&rdquo; from wealthy institutions in the
                Global North to researchers in the Global South. This assumption
                doesn&apos;t just fail—it actively perpetuates inequality.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                When a Malaysian pathologist can&apos;t pursue research because EU
                collaborators refuse to work without their preferred samples, or
                when an Indonesian scientist becomes a glorified sample shipper
                for publications bearing other names, we&apos;re witnessing the
                mechanics of structural exclusion.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={400}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                The numbers tell a stark story. Between 1990 and 2013, papers
                with at least one author from a low- or middle-income country
                increased 2.8 times. Papers from high-income countries? They
                increased 11.8 times over the same period.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={500}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Meanwhile, 70% of Global South researchers who travel north for
                training stay permanently—not because they want to abandon their
                home contexts, but because returning means sacrificing
                resources, engagement, and career progression.
              </p>
            </AnimatedElement>
          </div>

          {/* Pull quote and stats sidebar */}
          <div className="lg:col-span-5">
            <AnimatedElement delay={350}>
              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12">
                <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed">
                  &ldquo;Many of the researchers turn their focus away from the
                  concerns of the Global South toward the research priorities of
                  the Global North—not by choice, but because of funding.&rdquo;
                </p>
              </blockquote>
            </AnimatedElement>

            {/* Stats list */}
            <div className="space-y-6">
              <AnimatedElement delay={450}>
                <div className="flex items-start gap-4 p-4 bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">
                    Language barriers force non-native English speakers to pay
                    for professional editing
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={500}>
                <div className="flex items-start gap-4 p-4 bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">
                    Major research organizations project future output without
                    even acknowledging Global South contributions
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={550}>
                <div className="flex items-start gap-4 p-4 bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">
                    Global policy institutions source &ldquo;experts&rdquo; almost
                    exclusively from the Global North
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
