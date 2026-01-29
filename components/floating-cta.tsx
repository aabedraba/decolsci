"use client";

import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 80vh)
      const heroHeight = window.innerHeight * 0.8;
      const shouldShow = window.scrollY > heroHeight;

      // Check if form section is in viewport
      const formSection = document.getElementById("support");
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        const formInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsFormVisible(formInView);
      }

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("support");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't render if not visible or if form is in view
  if (!isVisible || isFormVisible) return null;

  return (
    <button
      onClick={scrollToForm}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-secondary text-secondary-foreground px-6 py-4 shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl hover:scale-105 flex items-center gap-2 font-medium"
      aria-label="Scroll to support form"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="hidden sm:inline">Support Us</span>
    </button>
  );
}
