const items = [
  'Blond',
  'Balayage',
  'Haircuts',
  'Coloring',
  'Styling',
  'Treatments',
  'Newsha',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-4">
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            <span className="font-[var(--font-body)] text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}

