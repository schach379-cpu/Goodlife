import { Scissors, Palette, Sparkles, Wind, Crown, Heart } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Blond & Balayage',
    description: 'Blond-Expertise, Balayage und Face-Framing – passend zu Haut, Stil und Alltag.',
    price: 'auf Anfrage',
  },
  {
    icon: Sparkles,
    title: 'Highlights & Gloss',
    description: 'Strähnen, Toner, Glossing und Shine-Refresher für Tiefe, Dimension und Glanz.',
    price: 'auf Anfrage',
  },
  {
    icon: Scissors,
    title: 'Haarschnitt',
    description: 'Präzise Schnitte für jeden Stil – von modern bis klassisch, immer sauber umgesetzt.',
    price: 'auf Anfrage',
  },
  {
    icon: Wind,
    title: 'Styling',
    description: 'Perfektes Finish: glatt, Wellen oder Locken – für Alltag, Event oder Fotos.',
    price: 'auf Anfrage',
  },
  {
    icon: Heart,
    title: 'Pflege & Treatments',
    description: 'Newsha-Pflege, Repair und Feuchtigkeit – individuell auf deine Haarstruktur.',
    price: 'auf Anfrage',
  },
  {
    icon: Crown,
    title: 'Event & Bridal',
    description: 'Looks für besondere Tage – elegant, haltbar und typgerecht.',
    price: 'auf Anfrage',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-accent">
            Unsere Services
          </span>
          <h2 className="mt-4 font-sans text-4xl font-light leading-[1.15] text-foreground text-balance md:text-5xl">
            Exzellenz in <span className="italic">jedem Detail</span>
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
            Blond- &amp; Balayage-Experten. Meisterbetrieb seit 2014. Offizieller Newsha-Partner.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center bg-secondary p-10 text-center transition-colors hover:bg-background"
            >
              <service.icon
                className="h-8 w-8 text-accent transition-transform group-hover:scale-110"
                strokeWidth={1.2}
              />
              <h3 className="mt-6 font-sans text-xl font-light text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 font-[var(--font-body)] text-lg font-medium text-foreground">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

