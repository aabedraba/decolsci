"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-background mb-4">
              Sumud Labs
            </h3>
            <p className="text-background/70 leading-relaxed max-w-sm">
              A systematic scoping review mapping barriers facing Global South
              researchers in scientific knowledge production.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-sans uppercase tracking-[0.15em] text-background/60 mb-4">
              Sections
            </h4>
            <nav className="space-y-3">
              {[
                { id: "problem", label: "The Problem" },
                { id: "work", label: "Our Work" },
                { id: "team", label: "Team" },
                { id: "support", label: "Get Involved" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/news"
                className="block text-background/80 hover:text-background transition-colors"
              >
                News
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans uppercase tracking-[0.15em] text-background/60 mb-4">
              Get Involved
            </h4>
            <p className="text-background/70 leading-relaxed mb-4">
              Ready to support decolonizing scientific knowledge production?
            </p>
            <button
              onClick={() => scrollToSection("support")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium transition-colors hover:bg-primary/90"
            >
              Join Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Sumud Labs. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Committed to open science and epistemic justice.
          </p>
        </div>
      </div>
    </footer>
  );
}
