"use client";

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

export function WorkSection() {
  return (
    <section id="work" className="py-10 md:py-16 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-serif font-bold text-secondary/20">
              02
            </span>
            <div className="flex-1">
              <div className="h-px bg-secondary/30 mb-2" />
              <span className="text-sm font-sans uppercase tracking-[0.2em] text-secondary">
                Our Work
              </span>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            What We&apos;re Doing
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={150}>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8 max-w-3xl">
            We&apos;re conducting a systematic literature review to map what
            research already tells us about barriers facing Global South
            scientists.
          </p>
        </AnimatedElement>

        {/* Our Process */}
        <AnimatedElement delay={200}>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-6">
              Our Process:
            </h3>
            <div className="relative space-y-4">
              {/* Animated vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-primary/20">
                <div className="h-full w-full bg-primary origin-top animate-[scaleY_1.5s_ease-out_forwards] scale-y-0" style={{ animationDelay: '250ms' }} />
              </div>
              {/* Step 1 */}
              <AnimatedElement delay={250}>
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-card/30">
                    <span className="text-sm font-sans font-bold text-primary-foreground">
                      01
                    </span>
                  </div>
                  <div className="flex-1 bg-background border border-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      Collect
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Gather studies, reports, and analyses on barriers to
                      scientific participation in chemistry and related fields
                    </p>
                  </div>
                </div>
              </AnimatedElement>

              {/* Step 2 */}
              <AnimatedElement delay={300}>
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-card/30">
                    <span className="text-sm font-sans font-bold text-primary-foreground">
                      02
                    </span>
                  </div>
                  <div className="flex-1 bg-background border border-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      Extract
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Use AI-assisted analysis to identify specific barriers, needs,
                      and proposed solutions across all sources
                    </p>
                  </div>
                </div>
              </AnimatedElement>

              {/* Step 3 */}
              <AnimatedElement delay={350}>
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-card/30">
                    <span className="text-sm font-sans font-bold text-primary-foreground">
                      03
                    </span>
                  </div>
                  <div className="flex-1 bg-background border border-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      Categorize
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Group findings into themes (funding, language, infrastructure,
                      recognition, collaboration models, etc.)
                    </p>
                  </div>
                </div>
              </AnimatedElement>

              {/* Step 4 */}
              <AnimatedElement delay={400}>
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-card/30">
                    <span className="text-sm font-sans font-bold text-primary-foreground">
                      04
                    </span>
                  </div>
                  <div className="flex-1 bg-background border border-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      Synthesize
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Identify which barriers appear most frequently and where
                      researchers agree on solutions
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>

        {/* Focus Areas */}
        <AnimatedElement delay={300}>
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-6">
              Our Focus Areas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              <div className="bg-card border border-border p-6">
                <h4 className="text-base font-sans font-semibold text-primary mb-2 uppercase tracking-wider">
                  Disciplines
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Chemistry and adjacent fields (green chemistry, materials
                  science, environmental chemistry, biochemistry, pharmacology)
                </p>
              </div>
              <div className="bg-card border border-border p-6">
                <h4 className="text-base font-sans font-semibold text-primary mb-2 uppercase tracking-wider">
                  Regions
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  All Global South regions (Africa, Latin America, Asia, Pacific
                  Islands)
                </p>
              </div>
              <div className="bg-card border border-border p-6">
                <h4 className="text-base font-sans font-semibold text-primary mb-2 uppercase tracking-wider">
                  Timespan
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  15-year timespan (2010–2025)
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
