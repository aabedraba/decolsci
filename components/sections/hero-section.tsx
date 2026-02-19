"use client";

import { useEffect, useRef, useState } from "react";

const heroCards = [
  {
    title: "Motivation and Vision",
    text: "Breaking inherent inequalities in chemistry",
  },
  {
    title: "The Plan",
    text: "Towards a sustainable and equitable future",
  },
  {
    title: "Placeholder",
    text: "Placeholder text",
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

      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-5 pb-7 md:pt-7 md:pb-8 lg:pt-8 lg:pb-10 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-3 tracking-tight leading-none animate-fade-in-up">
          Sumud Labs
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-primary-foreground/95 max-w-5xl leading-relaxed mb-4 md:mb-5 font-sans animate-fade-in-up animate-delay-100">
          Identifying the barriers that prevent Global South researchers from
          contributing equally to scientific knowledge - and finding where
          evidence points to solutions.
        </p>

        <div className="mx-auto w-full max-w-[1080px] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 animate-fade-in-up animate-delay-200">
          {heroCards.map((card) => (
            <article
              key={card.title}
              className="bg-card/95 border-2 border-primary-foreground/20 px-5 py-6 md:px-6 md:py-8 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.5)] min-h-[130px] flex flex-col justify-center"
            >
              <h2 className="text-2xl md:text-[2rem] font-serif font-bold text-foreground leading-[1.08]">
                {card.title}
              </h2>
              <p className="text-sm md:text-base text-foreground/85 font-sans leading-relaxed mt-2">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
