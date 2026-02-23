import { Phone, Instagram, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid-symmetric items-center gap-10"
      id="hero"
    >
      <div className="space-y-6">
        <Badge>Meisterbetrieb seit 2014 ®</Badge>
        <div className="space-y-4">
          <h1 id="hero-heading" className="headline">
            Hair that feels like
            <span className="block bg-gradient-to-r from-brand-300 via-brand-500 to-fuchsia-500 bg-clip-text text-transparent">
              Goodlife.
            </span>
          </h1>
          <p className="subheadline">
            Blond- & Balayage-Experten und offizieller Newsha-Partner. Meisterbetrieb mit klaren Linien, cleanen Cuts und Color – für deinen Look.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="shadow-subtle"
          >
            <a href="#kontakt">
              <Phone className="mr-2 h-4 w-4" />
              Termin anfragen
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.instagram.com/hairsalon.goodlife" target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Live Vibes auf Instagram
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="chip">
            <Sparkles className="mr-1 h-3 w-3" />
            Blond & Balayage Experts
          </span>
          <span className="chip">Newsha Partner</span>
          <span className="chip">Meisterbetrieb seit 2014</span>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 -z-10 bg-gradient-to-b from-brand-500/30 via-transparent to-transparent blur-3xl" />
        <div className="section-card relative aspect-[4/5] overflow-hidden border-white/15 p-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,_#22d3ee33,_transparent_55%),radial-gradient(circle_at_100%_100%,_#e879f933,_transparent_55%)] opacity-60" />
          <div className="relative flex h-full flex-col justify-between p-5">
            <header className="flex items-center justify-between text-xs text-slate-200">
              <span className="font-semibold tracking-[0.18em] uppercase">Goodlife</span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-[0.65rem]">
                Hair Studio
              </span>
            </header>
            <div className="space-y-3">
              <p className="text-sm text-slate-100">
                „Der Moment, wenn der Spiegel sagt:
                <br />
                <span className="font-semibold">That&apos;s you.</span>“
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-300">
                Cuts • Color • Styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

