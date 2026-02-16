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

const helpOptions = [
  "I can provide funding or grant connections",
  "I have relevant expertise to share",
  "I want to amplify this work",
  "I'm interested in following updates",
  "Other (please specify below)",
];

const regions = [
  "Africa",
  "Asia",
  "Europe",
  "Latin America",
  "Middle East",
  "North America",
  "Oceania",
  "Other",
];

export function SupportSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    affiliation: "",
    region: "",
    helpType: "",
    additionalInfo: "",
    subscribe: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isEmailOnly =
    formData.helpType === "I'm interested in following updates";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isEmailOnly) {
        // Newsletter subscription endpoint (placeholder)
        // await fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     fullName: formData.fullName,
        //     email: formData.email,
        //   }),
        // });
        console.log("Newsletter subscription:", {
          fullName: formData.fullName,
          email: formData.email,
        });
      } else {
        // Full contact form endpoint (placeholder)
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData),
        // });
        console.log("Full contact form:", formData);
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      // TODO: Add error handling UI
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="support" className="py-10 md:py-16 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-serif font-bold text-secondary/20">
              04
            </span>
            <div className="flex-1">
              <div className="h-px bg-secondary/30 mb-2" />
              <span className="text-sm font-sans uppercase tracking-[0.2em] text-secondary">
                Get Involved
              </span>
            </div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - text */}
          <div>
            <AnimatedElement delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
                Join the Movement
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                This work requires collaboration across disciplines, regions,
                and institutions. Whether you&apos;re a researcher with relevant
                expertise, a funder interested in supporting equitable science,
                or an advocate who wants to amplify this work — we need you.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                Together, we can build a more complete picture of the barriers
                facing Global South researchers and identify the most promising
                pathways to change.
              </p>
            </AnimatedElement>

            {/* Survey CTA */}
            <AnimatedElement delay={350}>
              <div className="mt-6 p-4 bg-primary/10 border-l-4 border-primary">
                <p className="text-base font-medium text-foreground mb-2">
                  Help us by completing our survey
                </p>
                <p className="text-sm text-foreground/80 mb-3">
                  Share your experience as a researcher to inform our work.
                </p>
                <a
                  href="https://forms.gle/SURVEY_LINK_PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all"
                >
                  Take Survey
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Right side - form */}
          <AnimatedElement delay={400}>
            <div className="bg-card border border-border p-5">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-secondary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    We&apos;ve received your submission. We&apos;ll be in touch soon
                    about how you can contribute to Sumud Labs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@institution.org"
                      className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* How can you help */}
                  <div>
                    <label
                      htmlFor="helpType"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      How can you help? <span className="text-primary">*</span>
                    </label>
                    <select
                      id="helpType"
                      name="helpType"
                      required
                      value={formData.helpType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                    >
                      <option value="">Select an option</option>
                      {helpOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Conditional fields - only show if NOT email-only */}
                  {!isEmailOnly && (
                    <>
                      {/* Affiliation */}
                      <div>
                    <label
                      htmlFor="affiliation"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Affiliation
                    </label>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleChange}
                      placeholder="University, organization, or independent"
                      className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                      {/* Region */}
                      <div>
                        <label
                          htmlFor="region"
                          className="block text-xs font-medium text-foreground mb-1.5"
                        >
                          Country/Region <span className="text-primary">*</span>
                        </label>
                        <select
                          id="region"
                          name="region"
                          required
                          value={formData.region}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        >
                          <option value="">Select your region</option>
                          {regions.map((region) => (
                            <option key={region} value={region}>
                              {region}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Additional info */}
                      <div>
                        <label
                          htmlFor="additionalInfo"
                          className="block text-xs font-medium text-foreground mb-1.5"
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          rows={3}
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Tell us more about your interest or expertise..."
                          className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                        />
                      </div>

                      {/* Subscribe checkbox */}
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="subscribe"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 accent-primary"
                        />
                        <label
                          htmlFor="subscribe"
                          className="text-xs text-foreground/80"
                        >
                          Keep me informed about project milestones and
                          publications
                        </label>
                      </div>
                    </>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-2.5 px-6 font-medium text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : isEmailOnly ? (
                      "Subscribe to Updates"
                    ) : (
                      "Support Sumud Labs"
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-xs text-muted-foreground text-center -mt-1">
                    We respect your privacy. Your information will only be used
                    for this project and will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
