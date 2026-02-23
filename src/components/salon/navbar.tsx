'use client'

import { useState } from 'react'
import { Menu, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex flex-col items-start">
          <span className="font-sans text-xl font-bold tracking-[0.2em] uppercase text-foreground lg:text-2xl">
            Goodlife
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-[var(--font-body)]">
            Hairsalon
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-[var(--font-body)] tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://www.instagram.com/hairsalon.goodlife"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-6 py-2 text-xs tracking-widest uppercase font-[var(--font-body)]"
          >
            <a href="#contact">Termin buchen</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background border-border">
            <div className="flex flex-col items-center justify-center gap-8 pt-16">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg tracking-[0.2em] uppercase text-foreground transition-colors hover:text-accent font-[var(--font-body)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href="https://www.instagram.com/hairsalon.goodlife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm font-[var(--font-body)]">@hairsalon.goodlife</span>
                </a>
                <Button
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-3 text-xs tracking-widest uppercase font-[var(--font-body)]"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Termin buchen
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

