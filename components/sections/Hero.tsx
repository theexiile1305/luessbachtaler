import { Button } from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'home' | 'page'
}

export function Hero({ title, subtitle, primaryCta, secondaryCta, variant = 'home' }: HeroProps) {
  if (variant === 'page') {
    return (
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block w-10 h-0.5 bg-accent-500 mb-4" aria-hidden="true" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white mb-4">{title}</h1>
            {subtitle && <p className="text-primary-200 text-lg leading-relaxed">{subtitle}</p>}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-primary-700 text-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 opacity-5" aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-12 h-0.5 bg-accent-400" aria-hidden="true" />
            <span className="text-accent-300 text-sm font-semibold uppercase tracking-widest">Seit 1920</span>
          </div>
          <h1 id="hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">{title}</h1>
          {subtitle && <p className="text-primary-100 text-lg md:text-xl leading-relaxed mb-8">{subtitle}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && <Button href={primaryCta.href} variant="secondary" size="lg">{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
