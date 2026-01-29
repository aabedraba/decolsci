"use client";

import React from "react"
import Image from "next/image";

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
    name: "Abdallah",
    title: "Engineer & Developer Relations",
    affiliation: "Product Lead",
    bio: "An engineer at heart, but rather than settling into one role, I've embraced the nature of small startup teams where I've worked as an engineer, developer relations lead, and product lead. Deeply passionate about developer tooling, communities and decolonization.",
    image: "/abdallah.jpeg",
  },
  {
    name: "Minhal",
    title: "Scientist & Engineer",
    affiliation: "Optics & Nanomaterials",
    bio: "Experienced scientist and engineer with deep knowledge in optics, spectroscopy, and nanomaterials. My work has spanned 0-to-1 product creation, bringing cutting-edge products to market, and in-depth technical work to de-risk and vet novel technologies in the semiconductor and metrology spaces. My research interests are in structure-function relationships of nanomaterials, specifically in understanding how the structural properties of nanomaterials affect their light emission efficiency, color, and spectral shape.",
    image: "/minhal.jpeg",
  },
  {
    name: "Francisco",
    title: "Materials Scientist",
    affiliation: "Nanomaterials & Photocatalysis",
    bio: "Nanomaterials, inorganic synthesis of colloids, electrochemistry, photocatalysis, solar energy conversion, optoelectronic devices.",
    image: "/francisco.jpeg",
  },
  {
    name: "Professor Avtar Singh Matharu",
    title: "Senior Lecturer & Course Director",
    affiliation: "Green Chemistry & Sustainable Technology",
    bio: "Professor Avtar Singh Matharu is Senior Lecturer and PGT MSc Green Chemistry and Sustainable Industrial Technology Course Director. The GCCE is an internationally-leading academic facility for the provision of excellence in green and sustainable chemical technologies, processes and products. He has been External Examiner at Keele University for their Postgraduate Taught MSc in Environmental Science & Green Technologies. He is Editor-in-Chief of Elsevier Current Research in Green and Sustainable Chemistry. Avtar specialises in gaining high additional chemical value from otherwise low-value resources or waste such as unavoidable food supply chain wastes, developing sustainable supply chains and circular economy within the context of biorefineries.",
    image: "/avtar.jpeg",
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
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-gray-200">
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
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
