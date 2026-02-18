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
    name: "Minhal",
    title: "Scientist & Engineer",
    affiliation: "Optics & Nanomaterials",
    bio: "PhD in Chemistry from the University of Toronto. Passionate about making science accessible to everyone, recognizing that education is the great equalizer. Determined to connect students with resources that enable them to grow as scholars and scientists.",
    image: "/minhal.jpeg",
  },
  {
    name: "Francisco",
    title: "Materials Scientist",
    affiliation: "Nanomaterials & Photocatalysis",
    bio: "Born and raised in Chile. PhD in physical chemistry from the University of Toronto. With a green chemistry background, he identified systemic patterns of inequality in global chemistry research and is ready to lead the paradigm shift toward equitable research.",
    image: "/francisco.jpeg",
  },
  {
    name: "Professor Avtar Singh Matharu",
    title: "Senior Lecturer & Course Director",
    affiliation: "Green Chemistry & Sustainable Technology",
    bio: "Senior Lecturer and MSc Course Director at the Green Chemistry Centre of Excellence. Editor-in-Chief of Elsevier Current Research in Green and Sustainable Chemistry. Specializes in developing sustainable supply chains and circular economy within biorefineries.",
    image: "/avtar.jpeg",
  },
  {
    name: "Abdallah",
    title: "Engineer & Developer Relations",
    affiliation: "Product Lead",
    bio: "Engineer with startup experience in engineering, developer relations, and product leadership. Deeply passionate about developer tooling, communities, and decolonization.",
    image: "/abdallah.jpeg",
  },
];

function TeamMemberCard({
  member,
  delay,
}: {
  member: (typeof teamMembers)[0];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-card border border-border p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md h-full">
        {/* Profile Image - Circular, centered, compact */}
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-border bg-gray-200">
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="object-cover w-full h-full object-top"
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-sm md:text-base font-serif font-semibold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-xs text-primary font-medium mb-1 line-clamp-2">{member.title}</p>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {member.affiliation}
          </p>
        </div>

        {/* Bio - always visible */}
        <div className="pt-3 mt-3 border-t border-border">
          <p className="text-foreground/80 leading-relaxed text-xs text-left">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="mb-4">
            <div className="h-px bg-secondary/30 mb-2" />
            <span className="text-sm font-sans uppercase tracking-[0.2em] text-secondary">
              The Team
            </span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Who We Are
          </h2>
        </AnimatedElement>

        {/* Team intro text */}
        <AnimatedElement delay={150}>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 max-w-3xl">
            We are chemistry PhDs and software engineers with backgrounds in
            academic research, green chemistry, and systems thinking. Through
            extensive interactions with scientists from both Global South and
            Global North contexts, we&apos;ve witnessed firsthand the systemic
            inequities that shape scientific research.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8 max-w-3xl">
            Our goal is to contribute to dismantling these barriers and
            building a more equitable academic system. We aim to do this by
            strengthening relationships between key stakeholders across regions
            and developing programs that support equitable knowledge generation
            and scientific innovation.
          </p>
        </AnimatedElement>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
