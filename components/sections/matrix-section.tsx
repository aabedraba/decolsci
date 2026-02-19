"use client";

const matrixQuadrants = [
  {
    title: "The Facts",
    subtitle:
      "There exists a man-made gap in chemistry research that actively perpetuates inequality between the Global South and the Global North.",
    bullets: [
      "Lack of infrastruture and funding",
      "Brain drain",
      "Language barriers",
    ],
  },
  {
    title: "Our Vision",
    subtitle:
      "Global challenges demand global knowledge. We will catalyze the transition to equitable and sustainable research in chemistry.",
    bullets: [],
  },
  {
    title: "Current Objectives",
    subtitle:
      "Guided by Evidence, Grounded in Experience: Co-Creating a Path Forward",
    bullets: [
      "We are conducting a systematic literature review of inequities in chemistry.",
      "We are running a Global South survey to map local barriers",
      "Beyond documenting: Identifying and prioritizing issues and addressing them",
    ],
  },
  {
    title: "Methodology",
    subtitle: "The Path Forward",
    bullets: [
      "Literature surve results and analysis",
      "Global south feedback and advice",
      "Development of initiative",
      "Beta-version deployment",
    ],
  },
] as const;

export function MatrixSection() {
  return (
    <section id="matrix" className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-[1580px] rounded-2xl border border-border bg-card/40 p-1 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {matrixQuadrants.map((quadrant, quadrantIndex) => {
              return (
                <article
                  key={quadrant.title}
                  className="bg-card px-5 py-5 md:px-7 md:py-6 lg:px-9 lg:py-7"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center px-1.5 border border-primary/40 text-primary text-sm font-sans font-semibold leading-none">
                      {String(quadrantIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="text-[2.1rem] md:text-[2.5rem] lg:text-[2.8rem] font-serif font-bold text-foreground leading-[1.08] mb-2">
                    {quadrant.title}
                  </h2>
                  <p className="text-lg md:text-xl font-serif text-foreground/90 leading-snug mb-3">
                    {quadrant.subtitle}
                  </p>
                  {quadrant.bullets.length > 0 && (
                    <ul className="space-y-2 text-base md:text-lg text-foreground/85 leading-relaxed font-sans">
                      {quadrant.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${quadrant.title}-${bulletIndex}`}
                          className="flex items-start gap-2.5"
                        >
                          <span className="mt-2 block h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
