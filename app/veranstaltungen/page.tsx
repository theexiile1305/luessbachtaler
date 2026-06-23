import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { EventCard } from '@/components/sections/EventCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { createMetadata } from '@/lib/metadata'
import { events, getUpcomingEvents } from '@/content/events'

export const metadata: Metadata = createMetadata({
  title: 'Veranstaltungen',
  description:
    "Alle Veranstaltungen und Termine des GTEV D'Lüßbachtaler Höhenrain: Vereinsabende, Feste, Theater und Ausflüge.",
  path: '/veranstaltungen',
})

function buildEventJsonLd(event: (typeof events)[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.time ? `${event.date}T${event.time}:00+02:00` : event.date,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Höhenrain',
        addressCountry: 'DE',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: "GTEV D' Lüßbachtaler Höhenrain e.V.",
      url: 'https://www.luessbachtaler.de',
    },
    description: event.description,
  }
}

export default function VeranstaltungenPage() {
  const upcoming = getUpcomingEvents()
  const past = events
    .filter((e) => e.date < new Date().toISOString().split('T')[0])
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5)

  return (
    <>
      {upcoming.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(upcoming.map(buildEventJsonLd)),
          }}
        />
      )}

      <Hero
        variant="page"
        title="Veranstaltungen"
        subtitle="Alle Termine auf einen Blick - kommen Sie vorbei und erleben Sie unser Vereinsleben!"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcoming.length > 0 ? (
            <>
              <SectionHeading
                as="h2"
                title="Kommende Veranstaltungen"
                subtitle={`${upcoming.length} Termin${upcoming.length === 1 ? '' : 'e'} in den nächsten Monaten`}
              />
              <div className="mt-10 space-y-4">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4" aria-hidden="true">
                📅
              </div>
              <h2 className="font-serif font-bold text-primary-700 text-2xl mb-3">
                Keine Termine eingetragen
              </h2>
              <p className="text-text-muted">
                Aktuelle Termine erhalten Sie bei unseren{' '}
                <a
                  href="mailto:info@luessbachtaler.de"
                  className="text-primary-700 hover:underline"
                >
                  Vorstandsmitgliedern
                </a>
                .
              </p>
            </div>
          )}

          {past.length > 0 && (
            <div className="mt-16">
              <SectionHeading as="h2" title="Vergangene Veranstaltungen" />
              <div className="mt-8 space-y-3">
                {past.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-border last:border-0 opacity-60"
                  >
                    <div>
                      <span className="font-medium text-text">{event.title}</span>
                      <span className="text-text-muted text-sm ml-2">{event.location}</span>
                    </div>
                    <time dateTime={event.date} className="text-sm text-text-muted shrink-0">
                      {new Date(event.date + 'T00:00:00').toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 bg-primary-50 rounded-lg p-6 border border-primary-100">
            <p className="text-text-muted text-sm">
              <strong className="text-text">Auf dem Laufenden bleiben:</strong> Folgen Sie uns auf{' '}
              Instagram und Facebook für aktuelle Neuigkeiten und kurzfristige Terminankündigungen.
              Oder schreiben Sie uns Ihre E-Mail-Adresse - wir freuen uns, Sie einzuladen.{' '}
              <a href="/kontakt" className="text-primary-700 hover:underline">
                Kontakt aufnehmen →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
