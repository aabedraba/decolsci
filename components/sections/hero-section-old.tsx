"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";

function AnimatedStat({
  value,
  label,
  suffix = "",
  delay = 0,
}: {
  value: number | string;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isNumeric = typeof value === "number";
  const { count, start } = useCountUp(isNumeric ? value : 0, 2000, false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      const timeout = setTimeout(() => {
        start();
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, hasStarted, start, delay]);

  return (
    <div
      ref={ref}
      className={`bg-card border border-border p-6 md:p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-2">
        {isNumeric ? `${count}${suffix}` : value}
      </p>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {label}
      </p>
    </div>
  );
}

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
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-primary"
    >
      {/* Subtle animated background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FDFBF7' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 relative z-10">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6 tracking-tight leading-none animate-fade-in-up">
          Sumud Labs
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-base text-primary-foreground/90 max-w-3xl leading-relaxed mb-12 font-sans animate-fade-in-up animate-delay-100">
          Mapping the barriers that prevent Global South researchers from
          equitable participation in chemistry and scientific knowledge
          production — and finding where consensus exists across studies.
        </p>

        {/* Three-Square Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl animate-fade-in-up animate-delay-200">
          {/* Square 1: Name */}
          <div className="bg-card border-2 border-primary-foreground/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary">01</span>
              </div>
              <div className="h-px flex-1 bg-primary-foreground/20" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
              Sumud Labs
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Mapping Barriers in Global Chemistry Research
            </p>
          </div>

          {/* Square 2: Motivation */}
          <div className="bg-card border-2 border-primary-foreground/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div className="h-px flex-1 bg-primary-foreground/20" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
              Our Motivation
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Education is the great equalizer. We make science accessible to everyone.
            </p>
          </div>

          {/* Square 3: Plan */}
          <div className="bg-card border-2 border-primary-foreground/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div className="h-px flex-1 bg-primary-foreground/20" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
              The Path
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Systematic Scoping Review: 2010-2025 Evidence Mapping
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
