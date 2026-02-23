import { cn } from '../../lib/utils';

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-100',
        className
      )}
    >
      {children}
    </span>
  );
}

