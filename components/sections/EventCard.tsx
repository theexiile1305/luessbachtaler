import type { Event } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { categoryLabels } from '@/content/events'

const categoryVariant: Record<Event['category'], 'green' | 'gold' | 'neutral'> = {
  vereinsabend: 'green',
  ausflug: 'gold',
  fest: 'gold',
  theater: 'neutral',
  jugend: 'green',
  sonstige: 'neutral',
}

export function EventCard({ event }: { event: Event }) {
  const dateObj = new Date(event.date + 'T00:00:00')
  const day = dateObj.toLocaleDateString('de-DE', { day: '2-digit' })
  const month = dateObj.toLocaleDateString('de-DE', { month: 'short' })
  const weekday = dateObj.toLocaleDateString('de-DE', { weekday: 'long' })
  const fullDate = dateObj.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="flex gap-4 bg-surface rounded-lg shadow-card p-5 hover:shadow-card-hover transition-shadow duration-200">
      <div className="shrink-0 w-14 text-center" aria-label={fullDate}>
        <div className="bg-primary-700 text-white rounded-t px-2 py-0.5">
          <span className="text-xs uppercase tracking-wide">{month}</span>
        </div>
        <div className="bg-primary-50 rounded-b px-2 py-1 border border-primary-100">
          <span className="text-2xl font-bold text-primary-700 leading-none">{day}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <Badge label={categoryLabels[event.category]} variant={categoryVariant[event.category]} />
          {event.featured && <Badge label="Highlight" variant="gold" />}
        </div>
        <h3 className="font-serif font-bold text-primary-700 text-lg leading-tight mb-2">
          {event.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-3">{event.description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
          <time dateTime={event.date}>
            {weekday}, {day}. {dateObj.toLocaleDateString('de-DE', { month: 'long' })}{' '}
            {dateObj.getFullYear()}
          </time>
          {event.time && <span>{event.time} Uhr</span>}
          <span>{event.location}</span>
        </div>
      </div>
    </article>
  )
}
