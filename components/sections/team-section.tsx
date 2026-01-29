"use client";

import React from "react"

import { useState } from "react";
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

const teamMembers = [
  {
    name: "Dr. Amara Okonkwo",
    title: "Principal Investigator",
    affiliation: "University of Cape Town",
    bio: "Dr. Okonkwo is a science policy researcher whose work focuses on research capacity building in Africa. Having navigated the barriers of international collaboration firsthand, she brings deep understanding of the structural challenges facing Global South scientists to Decolsci.",
    initials: "AO",
    color: "bg-primary",
  },
  {
    name: "Dr. Wei Chen",
    title: "Co-Investigator",
    affiliation: "National University of Singapore",
    bio: "Dr. Chen specializes in bibliometrics and science communication. Her research on citation patterns across geographies revealed systematic underrepresentation of Global South scholarship, motivating her involvement in this systematic review.",
    initials: "WC",
    color: "bg-secondary",
  },
  {
    name: "Maria Santos",
    title: "Research Coordinator",
    affiliation: "Universidade de São Paulo",
    bio: "Maria is a doctoral candidate in chemistry education whose research examines how colonial legacies shape chemistry curricula in Latin America. She coordinates the literature search and extraction processes for Decolsci.",
    initials: "MS",
    color: "bg-accent",
  },
  {
    name: "Dr. Raj Patel",
    title: "Methods Advisor",
    affiliation: "University of Toronto",
    bio: "Dr. Patel brings expertise in systematic review methodology and evidence synthesis. His previous work on global health equity informs our approach to capturing diverse evidence types and ensuring methodological rigor.",
    initials: "RP",
    color: "bg-primary",
  },
];

function TeamMemberCard({
  member,
  delay,
}: {
  member: (typeof teamMembers)[0];
  delay: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="bg-card border border-border p-6 md:p-8 cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(e) => e.key === "Enter" && setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        {/* Avatar */}
        <div
          className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-serif font-bold mb-6`}
        >
          {member.initials}
        </div>

        {/* Info */}
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-1">{member.title}</p>
        <p className="text-sm text-muted-foreground mb-4">
          {member.affiliation}
        </p>

        {/* Bio - collapsible */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-foreground/80 leading-relaxed pt-4 border-t border-border">
            {member.bio}
          </p>
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
          <span>{isExpanded ? "Show less" : "Read bio"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-sans font-medium text-secondary tracking-wider">
              05
            </span>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm font-sans uppercase tracking-[0.15em] text-secondary">
              The Team
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-16 max-w-4xl text-balance">
            Who We Are
          </h2>
        </AnimatedElement>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
