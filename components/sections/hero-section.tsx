"use client";

import { useEffect, useRef, useState } from "react";

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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 tracking-tight leading-none animate-fade-in-up">
          Sumud Labs
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg lg:text-xl text-primary-foreground/95 max-w-4xl leading-relaxed mb-16 font-sans animate-fade-in-up animate-delay-100">
          Identifying the barriers that prevent Global South researchers from
          contributing equally to scientific knowledge — and finding where
          evidence points to solutions.
        </p>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl animate-fade-in-up animate-delay-200">
          {/* Card 1: The Problem */}
          <div className="bg-card border-2 border-primary-foreground/20 p-8 backdrop-blur-sm hover:border-primary-foreground/40 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              The Problem
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Global South researchers face obstacles that limit their ability
              to participate in and shape scientific knowledge production.
            </p>
          </div>

          {/* Card 2: Our Approach */}
          <div className="bg-card border-2 border-primary-foreground/20 p-8 backdrop-blur-sm hover:border-primary-foreground/40 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Our Approach
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              We&apos;re systematically reviewing existing research to identify
              which barriers appear most often and where scholars agree on
              solutions.
            </p>
          </div>

          {/* Card 3: The Method */}
          <div className="bg-card border-2 border-primary-foreground/20 p-8 backdrop-blur-sm hover:border-primary-foreground/40 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              The Method
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Analyzing 15 years of studies across chemistry, materials
              science, and related fields to map the evidence landscape.
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
