import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { EventCard } from '@/components/sections/EventCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { getUpcomingEvents } from '@/content/events'

export const metadata: Metadata = {
  title: "GTEV D' Lüßbachtaler Höhenrain – Trachtenverein Berg, Bayern",
  description:
    "Willkommen beim GTEV D'Lüßbachtaler Höhenrain e.V. – Trachtenverein aus Höhenrain (Gemeinde Berg, Bayern) mit Tradition seit 1920: Schuhplattler, Theater, Blasmusik und Vereinsleben.",
  alternates: { canonical: 'https://www.luessbachtaler.de' },
}

const activities = [
  { icon: '🥾', title: 'Schuhplattler', description: 'Unsere Tänzerinnen und Tänzer pflegen den traditionellen Schuhplattler – von der Kinder- bis zur Erwachsenengruppe.', href: '/jugend' },
  { icon: '🎭', title: 'Theater', description: 'Jedes Jahr bringt unsere Theatergruppe ein neues Stück auf die Bühne – Volkstheater mit Herzblut und Humor.', href: '/theater' },
  { icon: '🎶', title: 'Blasmusik', description: 'Die Lüßbacher Blasmusik umrahmt unsere Feste und Veranstaltungen mit traditioneller bayerischer Musik.', href: '/verein' },
  { icon: '👨‍👩‍👧‍👦', title: 'Gemeinschaft', description: 'Monatliche Vereinsabende, Ausflüge und Feste – bei uns steht das Miteinander an erster Stelle.', href: '/veranstaltungen' },
]

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: "Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler Höhenrain e.V.",
  alternateName: "GTEV D' Lüßbachtaler Höhenrain",
  description: "Traditioneller Trachtenverein in Höhenrain (Gemeinde Berg, Bayern) mit Schuhplattler, Theater und Blasmusik seit 1920.",
  url: 'https://www.luessbachtaler.de',
  email: 'info@luessbachtaler.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Attenhauser Str. 22',
    addressLocality: 'Berg / Höhenrain',
    postalCode: '82335',
    addressCountry: 'DE',
  },
  sameAs: ['https://www.instagram.com/', 'https://www.facebook.com/'],
  foundingDate: '1982',
}

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents(3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <Hero
        title="Tradition und Gemeinschaft in Höhenrain"
        subtitle="Willkommen beim Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler. Seit 1920 pflegen wir bayerisches Brauchtum, Tracht und Heimatverbundenheit im Herzen der Gemeinde Berg."
        primaryCta={{ label: 'Veranstaltungen', href: '/veranstaltungen' }}
        secondaryCta={{ label: 'Über uns', href: '/verein' }}
      />

      {/* About */}
      <section className="py-20 bg-background" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading as="h2" title="Der Verein" subtitle="Ein Stück lebendiger bayerischer Tradition mitten in Höhenrain." />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>Gegründet 1920 als <em>Würmseelust Höhenrain</em> und 1982 wiedergegründet als <em>D&apos;Lüßbachtaler</em>, vereinen wir Mitglieder aller Generationen unter dem gemeinsamen Ziel: bayerische Tracht, Schuhplattler und Brauchtum lebendig zu halten.</p>
                <p>Ob auf Vereinsabenden, beim Jahresfest oder bei öffentlichen Auftritten – unsere Gemeinschaft wächst mit jeder gemeinsamen Stunde zusammen.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button href="/verein" variant="primary">Mehr über uns</Button>
                <Button href="/verein/mitglied-werden" variant="ghost">Mitglied werden</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-700 rounded-lg p-8 text-center text-white">
                <div className="font-serif text-4xl font-bold text-accent-300">1920</div>
                <div className="text-primary-200 text-sm mt-1">Gegründet</div>
              </div>
              <div className="bg-accent-500 rounded-lg p-8 text-center text-primary-900">
                <div className="font-serif text-4xl font-bold">200+</div>
                <div className="text-primary-800 text-sm mt-1">Mitglieder</div>
              </div>
              <div className="bg-surface rounded-lg p-8 text-center shadow-card col-span-2">
                <div className="font-serif text-4xl font-bold text-primary-700">Höhenrain</div>
                <div className="text-text-muted text-sm mt-1">Gemeinde Berg, Bayern</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-surface-warm" aria-labelledby="activities-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading as="h2" title="Was uns bewegt" subtitle="Tracht, Musik, Theater und Gemeinschaft – das sind die vier Säulen unseres Vereinslebens." centered />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <Link key={activity.href} href={activity.href} className="group block">
                <Card className="h-full group-hover:shadow-card-hover">
                  <CardBody>
                    <div className="text-3xl mb-4" aria-hidden="true">{activity.icon}</div>
                    <h3 className="font-serif font-bold text-primary-700 text-lg mb-2">{activity.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{activity.description}</p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-background" aria-labelledby="events-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <SectionHeading as="h2" title="Nächste Veranstaltungen" subtitle="Besuchen Sie uns – wir freuen uns auf Sie!" />
              <Button href="/veranstaltungen" variant="ghost" size="sm" className="shrink-0">Alle Termine →</Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </div>
        </section>
      )}

      {/* Theater teaser */}
      <section className="py-20 bg-primary-700 text-white" aria-labelledby="theater-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading as="h2" title="Volkstheater mit Herzblut" subtitle="Unsere Theatergruppe begeistert jedes Jahr mit einem neuen Stück – Volkstheater, das unterhält, lacht und berührt." />
              <div className="mt-8"><Button href="/theater" variant="secondary" size="md">Zur Theatergruppe</Button></div>
            </div>
            <div className="bg-primary-600 rounded-lg p-10 text-center" aria-hidden="true">
              <div className="text-7xl mb-4">🎭</div>
              <p className="font-serif text-xl text-primary-200 italic">&ldquo;Lachen ist die beste Medizin.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Youth teaser */}
      <section className="py-20 bg-surface-warm" aria-labelledby="jugend-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-50 rounded-lg p-10 text-center" aria-hidden="true">
              <div className="text-7xl mb-4">👟</div>
              <p className="font-serif text-xl text-primary-700 italic">Tradition kennt kein Alter</p>
            </div>
            <div>
              <SectionHeading as="h2" title="Jugend und Nachwuchs" subtitle="In unserer Kinder- und Jugend-Plattelgruppe lernen die Jüngsten den Schuhplattler – mit Spaß und Begeisterung." />
              <div className="mt-8"><Button href="/jugend" variant="primary" size="md">Zur Jugendgruppe</Button></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-accent-500" aria-labelledby="join-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading as="h2" title="Werden Sie Mitglied!" subtitle="Ob jung oder alt – bei den Lüßbachtalern sind alle herzlich willkommen. Treten Sie unserem Verein bei und erleben Sie Gemeinschaft, Tradition und jede Menge Freude." centered ornament={false} />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/verein/mitglied-werden" variant="primary" size="lg">Jetzt Mitglied werden</Button>
            <Button href="/kontakt" variant="ghost" size="lg" className="border-primary-800 text-primary-900 hover:bg-primary-600/10">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>
    </>
  )
}
