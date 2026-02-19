import Link from "next/link";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm font-sans uppercase tracking-[0.15em] text-secondary hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 tracking-tight leading-none">
            News
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-foreground/85 max-w-4xl leading-relaxed mb-10">
            This page is reserved for updates, publications, and resources from
            Sumud Labs. Soon, this section will host PDFs or curated links to
            PDFs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <article className="bg-card border border-border p-5 md:p-6">
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                Placeholder
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Update Slot 01
              </h2>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                Reserved for upcoming updates and publication links.
              </p>
            </article>

            <article className="bg-card border border-border p-5 md:p-6">
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                Placeholder
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Update Slot 02
              </h2>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                Reserved for upcoming updates and publication links.
              </p>
            </article>

            <article className="bg-card border border-border p-5 md:p-6">
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                Placeholder
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Update Slot 03
              </h2>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                Reserved for upcoming updates and publication links.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
