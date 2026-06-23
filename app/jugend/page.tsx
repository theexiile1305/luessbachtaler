import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Jugend',
  description:
    "Die Jugendgruppe des GTEV D'Lüßbachtaler Höhenrain: Kinder- und Jugend-Plattelgruppe für alle, die den Schuhplattler lernen möchten.",
  path: '/jugend',
})

const groups = [
  {
    title: 'Kinder-Plattelgruppe',
    age: 'ab ca. 5 Jahren',
    icon: '👟',
    description:
      'Die Kinder-Plattelgruppe ist der ideale Einstieg für die Jüngsten. Hier lernen Kinder ab etwa 5 Jahren die ersten Schritte des Schuhplattlers – spielerisch, mit viel Spaß und unter liebevoller Anleitung.',
    details: [
      'Proben regelmäßig im Vereinsheim',
      'Auftritte bei Vereinsfesten',
      'Tracht wird vom Verein gestellt',
      'Keine Vorkenntnisse nötig',
    ],
  },
  {
    title: 'Jugend-Plattelgruppe',
    age: 'ca. 12–18 Jahre',
    icon: '🥾',
    description:
      'Die Jugend-Plattelgruppe richtet sich an Jugendliche, die das Tanzen ernst nehmen und ihren Schuhplattler weiterentwickeln möchten. Hier werden auch anspruchsvollere Figuren eingeübt.',
    details: [
      'Regelmäßige Proben mit fortgeschrittenen Techniken',
      'Teilnahme an überregionalen Veranstaltungen',
      'Vereinsausflüge und Gemeinschaftsevents',
      'Übergang in die Erwachsenengruppe möglich',
    ],
  },
]

export default function JugendPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Jugend"
        subtitle="Tradition kennt kein Alter – unsere Kinder- und Jugend-Plattelgruppen begeistern mit Eifer und Herzblut."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-accent-50 rounded-lg p-12 text-center border border-accent-200">
              <div className="text-8xl mb-4" aria-hidden="true">
                👟
              </div>
              <p className="font-serif text-lg text-primary-700 italic">
                Vom ersten Tritt bis zum großen Auftritt
              </p>
            </div>
            <div>
              <SectionHeading as="h2" title="Nachwuchs mit Begeisterung" />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Unsere Jugendarbeit ist uns besonders wichtig. Kinder und Jugendliche, die den
                  Schuhplattler erlernen und lieben, sind die Zukunft unseres Vereins.
                </p>
                <p>
                  In einer ungezwungenen, familiären Atmosphäre lernen unsere Jüngsten nicht nur
                  traditionelle Tanzschritte, sondern auch Teamgeist und Heimatverbundenheit.
                </p>
                <p>
                  Wir freuen uns über jedes Kind und jeden Jugendlichen, der seinen Weg zu uns
                  findet – ganz egal, ob die Eltern bereits Mitglieder sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading as="h2" title="Unsere Gruppen" centered />
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {groups.map((group) => (
              <Card key={group.title} elevated>
                <CardBody>
                  <div className="text-4xl mb-3" aria-hidden="true">
                    {group.icon}
                  </div>
                  <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                    {group.age}
                  </div>
                  <h3 className="font-serif font-bold text-primary-700 text-xl mb-3">
                    {group.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <ul className="space-y-1.5">
                    {group.details.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-text-muted">
                        <span className="text-accent-500 shrink-0 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            as="h2"
            title="Jetzt anmelden!"
            subtitle="Neugierig geworden? Nehmen Sie einfach Kontakt mit uns auf – wir laden Sie gerne zu einer Schnupperstunde ein."
            centered
            ornament={false}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt" variant="primary" size="lg">
              Kontakt aufnehmen
            </Button>
            <Button href="mailto:info@luessbachtaler.de" variant="ghost" size="lg">
              info@luessbachtaler.de
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
