import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Laura M.',
    text: 'Absolut begeistert! Mein Balayage ist genau so geworden, wie ich es mir vorgestellt habe. Super freundlich und professionell.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    text: 'Blond-Expertise auf den Punkt. Beratung top, Ergebnis top. Ich komme wieder.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    text: 'Sehr sauberer Schnitt und entspannte Atmosphäre. Absolute Empfehlung.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-background/50">
            Kundenstimmen
          </span>
          <h2 className="mt-4 font-sans text-4xl font-light leading-[1.15] text-background text-balance md:text-5xl">
            Was unsere <span className="italic">Kunden sagen</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center border border-background/10 p-8 text-center"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-[var(--font-body)] text-sm leading-relaxed text-background/80 italic">
                {`"${testimonial.text}"`}
              </p>
              <span className="mt-6 font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-background/60">
                {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

