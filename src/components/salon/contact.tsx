'use client'

import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Widumerstr. 14',
    detail: '45768 Castrop-Rauxel',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '02305 544584',
    detail: 'Mo–Fr 8:30–18:30 · Sa 8:30–15:00',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: 'Mo–Fr 8:30–18:30',
    detail: 'Sa 8:30–15:00 · So geschlossen',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-accent">
                Kontakt
              </span>
              <h2 className="mt-4 font-sans text-4xl font-light leading-[1.15] text-foreground text-balance md:text-5xl">
                Lass uns deinen <span className="italic">neuen Look</span> planen
              </h2>
              <p className="mt-4 font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
                Termine am schnellsten per Anruf oder Instagram DM. Wir freuen uns auf dich!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                    <item.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="mt-1 font-[var(--font-body)] text-sm text-foreground">
                      {item.value}
                    </span>
                    <span className="font-[var(--font-body)] text-sm text-muted-foreground">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hairsalon.goodlife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-foreground hover:text-background hover:border-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="tel:02305544584"
                className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-foreground hover:text-background hover:border-foreground"
                aria-label="Telefon"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="bg-secondary p-8 lg:p-12">
            <h3 className="font-sans text-2xl font-light text-foreground">
              Nachricht senden
            </h3>
            <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground"
                    htmlFor="firstName"
                  >
                    Vorname
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Dein Vorname"
                    className="rounded-none border-border bg-background font-[var(--font-body)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground"
                    htmlFor="lastName"
                  >
                    Nachname
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Dein Nachname"
                    className="rounded-none border-border bg-background font-[var(--font-body)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground"
                  htmlFor="phone"
                >
                  Telefon (optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Deine Nummer"
                  className="rounded-none border-border bg-background font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground"
                  htmlFor="service"
                >
                  Gewünschter Service
                </label>
                <Input
                  id="service"
                  placeholder="z.B. Balayage, Blond, Schnitt..."
                  className="rounded-none border-border bg-background font-[var(--font-body)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-[var(--font-body)] text-xs tracking-widest uppercase text-muted-foreground"
                  htmlFor="message"
                >
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  placeholder="Erzähl uns kurz von deinem Wunsch-Look..."
                  rows={4}
                  className="rounded-none border-border bg-background font-[var(--font-body)] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-6 text-xs tracking-[0.25em] uppercase font-[var(--font-body)]"
              >
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

