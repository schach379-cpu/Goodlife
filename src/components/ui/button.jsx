import { cn } from '../../lib/utils';

export function Button({ className, variant = 'primary', size = 'md', asChild = false, ...props }) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60';

  const variants = {
    primary: 'bg-white text-slate-950 hover:bg-slate-100',
    outline: 'border border-white/15 bg-transparent text-slate-50 hover:bg-white/5',
    ghost: 'bg-white/0 text-slate-100 hover:bg-white/10',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-6 text-sm',
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

