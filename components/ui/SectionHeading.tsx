interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  ornament?: boolean
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  ornament = true,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const alignClass = centered ? 'text-center items-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {ornament && <span className="inline-block w-10 h-0.5 bg-accent-500" aria-hidden="true" />}
      <Tag className="font-serif text-3xl md:text-4xl font-bold text-primary-700 leading-tight">
        {title}
      </Tag>
      {subtitle && <p className="text-text-muted text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  )
}
