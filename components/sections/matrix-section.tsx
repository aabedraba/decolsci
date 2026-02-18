"use client";

const matrixQuadrants = [
  {
    title: "The Problem",
    subtitle:
      "There exists a man-made gap in chemistry research that actively perpetuates inequality between the Global South and the Global North.",
    bullets: [
      "Funding flows to the Global North",
      "Brain drain",
      "Language barriers",
    ],
  },
  {
    title: "Our Vision",
    subtitle:
      "Global Challenges Demand Global Knowledge: Catalyzing an Equitable and Sustainable Transition",
    bullets: [
      "Science claims universality, but its infrastructure is anything but universal.",
      "From English-language dominance in journals to funding mechanisms that exclude entire regions, the current system is structurally unequal.",
      "Global South researchers are too often treated as data collectors rather than intellectual leaders.",
    ],
  },
  {
    title: "Current Objective",
    subtitle:
      "Guided by Evidence, Grounded in Experience: Co-Creating a Path Forward",
    bullets: [
      "We are conducting a systematic literature review of inequities in chemistry.",
      "We are also running a survey to map barriers in scientific participation.",
      "The survey focuses on barriers chemists in the Global South face.",
    ],
  },
  {
    title: "Methodology",
    subtitle: "The Path Forward",
    bullets: [
      "Lorem ipsum placeholder point one.",
      "Lorem ipsum placeholder point two.",
      "Lorem ipsum placeholder point three.",
    ],
  },
] as const;

export function MatrixSection() {
  return (
    <section id="matrix" className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[1080px] rounded-2xl border border-border bg-card/40 p-1 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {matrixQuadrants.map((quadrant, quadrantIndex) => {
              return (
                <article
                  key={quadrant.title}
                  className="bg-card px-4 py-4 md:px-6 md:py-5 lg:px-7 lg:py-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex h-6 min-w-6 items-center justify-center px-1.5 border border-primary/40 text-primary text-xs font-sans font-semibold leading-none">
                      {String(quadrantIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="text-2xl md:text-[2rem] lg:text-[2.2rem] font-serif font-bold text-foreground leading-[1.08] mb-2">
                    {quadrant.title}
                  </h2>
                  <p className="text-sm md:text-base font-serif text-foreground/90 leading-snug mb-2">
                    {quadrant.subtitle}
                  </p>
                  <ul className="space-y-1 text-xs md:text-sm text-foreground/85 leading-relaxed font-sans">
                    {quadrant.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={`${quadrant.title}-${bulletIndex}`}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
