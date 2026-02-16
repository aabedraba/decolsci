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

export function ProblemSection() {
  return (
    <section id="problem" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-serif font-bold text-primary/20">
              01
            </span>
            <div className="flex-1">
              <div className="h-px bg-primary/30 mb-2" />
              <span className="text-sm font-sans uppercase tracking-[0.2em] text-primary">
                The Problem
              </span>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Why This Matters
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={150}>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8 max-w-3xl">
            Global South researchers produce vital scientific work but face
            systemic disadvantages that limit their participation and
            recognition.
          </p>
        </AnimatedElement>

        {/* Key Issues */}
        <AnimatedElement delay={200}>
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
              Key Issues:
            </h3>
            <div className="space-y-4 max-w-4xl">
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg flex-shrink-0">
                  •
                </span>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  Language barriers require non-English speakers to pay for
                  editing services just to publish in dominant journals
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg flex-shrink-0">
                  •
                </span>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  Funding flows primarily to Global North institutions, even for
                  research conducted in the Global South
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg flex-shrink-0">
                  •
                </span>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  70% of Global South researchers who train in wealthy countries
                  stay there permanently, creating brain drain
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg flex-shrink-0">
                  •
                </span>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  Research priorities often shift toward Global North interests
                  when funding depends on international partnerships
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Pull Quote */}
        <AnimatedElement delay={300}>
          <div className="border-l-4 border-primary pl-8 py-6 bg-card/50 max-w-4xl">
            <blockquote className="text-xl md:text-2xl font-serif text-foreground/90 leading-relaxed italic">
              &ldquo;Many researchers turn their focus away from the concerns of
              the Global South toward the research priorities of the Global
              North — not by choice, but because of funding.&rdquo;
            </blockquote>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
