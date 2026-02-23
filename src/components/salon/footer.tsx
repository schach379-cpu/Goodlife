import { Instagram, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xl font-bold tracking-[0.2em] uppercase text-foreground">
              Goodlife
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-[var(--font-body)]">
              Hairsalon
            </span>
            <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-muted-foreground max-w-xs">
              Meisterbetrieb seit 2014 – Blond &amp; Balayage Experts, offizieller Newsha-Partner in Castrop-Rauxel.
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground font-[var(--font-body)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Widumerstr. 14, 45768 Castrop-Rauxel
              </span>
              <a className="inline-flex items-center gap-2 hover:text-foreground transition-colors" href="tel:02305544584">
                <Phone className="h-4 w-4" />
                02305 544584
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-foreground">
              Navigation
            </span>
            <nav className="flex flex-col items-center gap-2 mt-2">
              {['Home', 'Services', 'Galerie', 'Kontakt'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-[var(--font-body)] text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-end gap-3">
            <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-foreground">
              Social Media
            </span>
            <a
              href="https://www.instagram.com/hairsalon.goodlife"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-[var(--font-body)] text-sm">@hairsalon.goodlife</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <span className="font-[var(--font-body)] text-xs text-muted-foreground">
            {'© 2026 Hairsalon Goodlife. Alle Rechte vorbehalten.'}
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-[var(--font-body)] text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-[var(--font-body)] text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

