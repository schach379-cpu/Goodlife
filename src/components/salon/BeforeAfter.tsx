'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const transformations = [
  { 
    before: '/images/transform-1-before.jpg', 
    after: '/images/transform-1-after.jpg', 
    label: 'Color Correction' 
  },
  { 
    before: '/images/transform-2-before.jpg', 
    after: '/images/transform-2-after.jpg', 
    label: 'Balayage' 
  },
  { 
    before: '/images/transform-3-before.jpg', 
    after: '/images/transform-3-after.jpg', 
    label: 'Schnitt' 
  },
  { 
    before: '/images/transform-4-before.jpg', 
    after: '/images/transform-4-after.jpg', 
    label: 'Styling' 
  },
]

function TransformationCard({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: typeof transformations[0]
  isActive: boolean
  onClick: () => void
}) {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    if (!isActive) {
      setShowAfter(false)
      return
    }

    const interval = setInterval(() => {
      setShowAfter(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => isActive && setShowAfter(true)}
      onMouseLeave={() => isActive && setShowAfter(false)}
      className={`group relative aspect-[3/4] w-full overflow-hidden transition-all duration-500 ${
        isActive ? 'ring-4 ring-accent ring-offset-4' : 'opacity-60 hover:opacity-80'
      }`}
    >
      <div className="absolute inset-0 transition-opacity duration-700">
        <img 
          src={item.before} 
          alt={`${item.label} - Vorher`} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-black/70 px-4 py-2 font-[var(--font-body)] text-sm tracking-widest uppercase text-white backdrop-blur-sm">
            Vorher
          </span>
        </div>
      </div>

      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          showAfter ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={item.after} 
          alt={`${item.label} - Nachher`} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-black/70 px-4 py-2 font-[var(--font-body)] text-sm tracking-widest uppercase text-white backdrop-blur-sm">
            Nachher
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <span className="rounded-full bg-black/70 px-4 py-2 font-[var(--font-body)] text-xs tracking-widest uppercase text-white backdrop-blur-sm">
          {item.label}
        </span>
      </div>
    </button>
  )
}

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrev = () => {
    setActiveIndex(prev => prev === 0 ? transformations.length - 1 : prev - 1)
  }

  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % transformations.length)
  }

  return (
    <section id="before-after" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-[var(--font-body)] text-xs tracking-[0.5em] uppercase text-accent">
            Unsere Ergebnisse
          </span>
          <h2 className="mt-4 font-sans text-4xl font-light leading-[1.15] text-foreground text-balance md:text-5xl">
            Vorher & <span className="italic">Nachher</span>
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-base leading-relaxed text-muted-foreground">
            Klicke auf ein Bild oder warte auf den automatischen Wechsel
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {transformations.map((item, index) => (
            <TransformationCard
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={goToPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
