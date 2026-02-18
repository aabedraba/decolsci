"use client";

import { useEffect, useRef, useState } from "react";

const matrixQuadrants = [
  {
    number: "01",
    title: "The Problem",
    subtitle: "Science has a Geography Problem",
    bullets: [
      "The numbers tell a stark story.",
      "Placeholder point for additional data.",
      "Placeholder point for additional context.",
    ],
  },
  {
    number: "02",
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
    number: "03",
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
    number: "04",
    title: "Methodology",
    subtitle: "The Path Forward",
    bullets: [
      "Lorem ipsum placeholder point one.",
      "Lorem ipsum placeholder point two.",
      "Lorem ipsum placeholder point three.",
    ],
  },
] as const;

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23FDFBF7\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-14 md:py-16 lg:py-20 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 tracking-tight leading-none animate-fade-in-up">
          Sumud Labs
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-primary-foreground/95 max-w-5xl leading-relaxed mb-10 md:mb-12 font-sans animate-fade-in-up animate-delay-100">
          Identifying the barriers that prevent Global South researchers from
          contributing equally to scientific knowledge - and finding where
          evidence points to solutions.
        </p>

        <div className="w-full border-2 border-primary-foreground/25 bg-card/95 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.45)] animate-fade-in-up animate-delay-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {matrixQuadrants.map((quadrant, index) => {
              const isLeftColumn = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <article
                  key={quadrant.title}
                  className={`px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14 min-h-[18rem] md:min-h-[22rem] lg:min-h-[24rem] ${
                    isLeftColumn ? "lg:border-r lg:border-border" : ""
                  } ${isTopRow ? "lg:border-b lg:border-border" : ""}`}
                >
                  <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/80 mb-5">
                    {quadrant.number}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-serif font-bold text-foreground leading-[1.05] mb-4">
                    {quadrant.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl font-serif text-foreground/90 leading-snug mb-6">
                    {quadrant.subtitle}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base lg:text-lg text-foreground/85 leading-relaxed font-sans">
                    {quadrant.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={`${quadrant.title}-${bulletIndex}`}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
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
