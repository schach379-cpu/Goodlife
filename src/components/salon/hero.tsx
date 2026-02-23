import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image wie im Original */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-salon.jpg"
          alt="Goodlife Hair Salon - Luxuriöses Interieur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-background/70 md:text-sm">
            Willkommen bei
          </span>
          <h1 className="font-sans text-5xl font-light leading-[1.1] tracking-tight text-background text-balance md:text-7xl lg:text-8xl">
            Dein Stil.{' '}
            <span className="italic font-light">Dein</span>{' '}
            <span className="text-gold">Leben.</span>
          </h1>
          <p className="max-w-lg font-[var(--font-body)] text-base leading-relaxed text-background/80 md:text-lg">
            Wir verwandeln dein Haar in ein Kunstwerk. Farbe, Schnitt und Styling auf höchstem Niveau.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 py-6 text-xs tracking-[0.25em] uppercase font-[var(--font-body)]"
            >
              <a href="#contact">Termin vereinbaren</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-background/40 text-background hover:bg-background/10 hover:text-background rounded-none px-10 py-6 text-xs tracking-[0.25em] uppercase font-[var(--font-body)] bg-transparent"
            >
              <a href="#gallery">Galerie ansehen</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-background/60" />
      </div>
    </section>
  )
}

