'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { Instagram } from 'lucide-react'

const galleryItems = [
  { src: '/images/transform-1-after.jpg', alt: 'Transformation 1 - Nachher', label: 'Nachher' },
  { src: '/images/transform-1-before.jpg', alt: 'Transformation 1 - Vorher', label: 'Vorher' },
  { src: '/images/transform-2-after.jpg', alt: 'Transformation 2 - Nachher', label: 'Nachher' },
  { src: '/images/transform-2-before.jpg', alt: 'Transformation 2 - Vorher', label: 'Vorher' },
  { src: '/images/transform-3-after.jpg', alt: 'Transformation 3 - Nachher', label: 'Nachher' },
  { src: '/images/transform-3-before.jpg', alt: 'Transformation 3 - Vorher', label: 'Vorher' },
  { src: '/images/transform-4-after.jpg', alt: 'Transformation 4 - Nachher', label: 'Nachher' },
  { src: '/images/transform-4-before.jpg', alt: 'Transformation 4 - Vorher', label: 'Vorher' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-accent">
            Unsere Arbeiten
          </span>
          <h2 className="mt-4 font-sans text-4xl font-light leading-[1.15] text-foreground text-balance md:text-5xl">
            unsere Arbeiten
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
            Entdecke unsere neuesten Kreationen und lass dich inspirieren
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems.map((item, index) => {
            const isLarge = index === 0 || index === 5
            return (
              <button
                key={item.src}
                onClick={() => setSelectedImage(index)}
                className={`group relative overflow-hidden ${
                  isLarge ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[3/4]'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-background">
                    {item.label}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/hairsalon.goodlife"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-border px-8 py-4 transition-colors hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-[var(--font-body)] text-sm tracking-widest uppercase">
              Folge uns auf Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedImage !== null && (
            <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-[4/3]">
              <img
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

