interface BadgeProps {
  label: string
  variant?: 'green' | 'gold' | 'neutral'
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  green: 'bg-primary-100 text-primary-700',
  gold: 'bg-accent-100 text-accent-700',
  neutral: 'bg-surface-warm text-text-muted',
}

export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide ${variantClasses[variant]}`}
    >
      {label}
    </span>
  )
}
