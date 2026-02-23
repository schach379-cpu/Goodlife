import { cn } from '../../lib/utils';

export function Card({ className, children }) {
  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/8 bg-slate-900/80 p-6 shadow-subtle backdrop-blur-xl sm:p-8',
        className
      )}
    >
      {children}
    </article>
  );
}

export function CardHeader({ className, children }) {
  return (
    <header className={cn('mb-4 flex flex-col gap-2', className)}>
      {children}
    </header>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-base font-semibold tracking-tight text-slate-50', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn('text-sm text-slate-300', className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={cn('mt-2 text-sm text-slate-200', className)}>
      {children}
    </div>
  );
}

