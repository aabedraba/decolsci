"use client";

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

const matrixRows = [
  [
    { number: "01", title: "The Problem", tone: "bg-background/70" },
    { number: "02", title: "Our Vision", tone: "bg-card" },
  ],
  [
    { number: "03", title: "Current Objective", tone: "bg-card" },
    { number: "04", title: "Methodology", tone: "bg-background/70" },
  ],
] as const;

export function ProblemSection() {
  return (
    <section id="problem" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <AnimatedElement>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="lg:col-span-8 xl:col-span-7">
              <div className="overflow-hidden border border-border bg-card shadow-sm">
                <table className="w-full table-fixed border-collapse">
                  <tbody>
                    {matrixRows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={rowIndex === 0 ? "border-b border-border" : ""}
                      >
                        {row.map((cell, colIndex) => (
                          <td
                            key={cell.title}
                            className={`h-40 md:h-52 px-5 py-6 md:px-8 md:py-10 align-top ${
                              colIndex === 0 ? "border-r border-border" : ""
                            } ${cell.tone}`}
                          >
                            <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary/70 mb-4">
                              {cell.number}
                            </p>
                            <h2 className="text-xl md:text-3xl font-serif font-bold text-foreground leading-tight">
                              {cell.title}
                            </h2>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="hidden lg:block lg:col-span-4 xl:col-span-5 min-h-[20rem]"
              aria-hidden="true"
            >
              {/* Reserved quote space */}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
