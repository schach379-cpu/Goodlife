export function About() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Bild wie im Original */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/stylist-at-work.jpg"
              alt="Unser Stylist bei der Arbeit"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-accent">
              Uber uns
            </span>
            <h2 className="font-sans text-4xl font-light leading-[1.15] text-foreground text-balance md:text-5xl">
              Wo Handwerk auf <span className="italic">Leidenschaft</span> trifft
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
                Bei Goodlife Hair Salon steht dein individueller Stil im Mittelpunkt.
                Unser erfahrenes Team vereint modernste Techniken mit persönlicher
                Beratung, um das Beste aus deinem Haar herauszuholen.
              </p>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
                Von Balayage und Highlights über präzise Schnitte bis hin zu
                kompletten Umstylings – wir sorgen dafür, dass du dich rundum wohlfühlst
                und mit einem Lächeln unseren Salon verlässt.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div className="flex flex-col items-center text-center">
                <span className="font-sans text-3xl font-light text-foreground md:text-4xl">5+</span>
                <span className="mt-1 font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground">
                  Jahre Erfahrung
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-sans text-3xl font-light text-foreground md:text-4xl">1k+</span>
                <span className="mt-1 font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground">
                  Zufriedene Kunden
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-sans text-3xl font-light text-foreground md:text-4xl">4.9</span>
                <span className="mt-1 font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground">
                  Bewertung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

