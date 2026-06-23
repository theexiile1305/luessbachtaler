import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Mitglied werden',
  description:
    "Werden Sie Mitglied beim GTEV D'Lüßbachtaler Höhenrain – Informationen zu Mitgliedschaft, Aufnahme und Beiträgen.",
  path: '/verein/mitglied-werden',
})

const benefits = [
  {
    icon: '🤝',
    title: 'Gemeinschaft',
    description: 'Teil einer lebendigen Dorfgemeinschaft werden, die zusammenhält.',
  },
  {
    icon: '🎭',
    title: 'Theater & Feste',
    description: 'Mitgestalten bei Theateraufführungen, Festen und besonderen Anlässen.',
  },
  {
    icon: '👟',
    title: 'Schuhplattler',
    description: 'Den traditionellen Schuhplattler erlernen oder perfektionieren.',
  },
  {
    icon: '🎶',
    title: 'Musik & Kultur',
    description: 'Auftritte der Lüßbacher Blasmusik erleben und unterstützen.',
  },
  {
    icon: '👶',
    title: 'Kinder & Jugend',
    description: 'Kinder in der Plattelgruppe fit für Brauchtum und Gemeinschaft machen.',
  },
  {
    icon: '🏔️',
    title: 'Ausflüge',
    description: 'Gemeinsame Ausflüge in die bayerische Heimat mit Gleichgesinnten.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Kontakt aufnehmen',
    description:
      'Schreiben Sie uns eine E-Mail oder nutzen Sie unser Kontaktformular. Wir melden uns umgehend.',
  },
  {
    step: '2',
    title: 'Vereinsabend besuchen',
    description:
      'Kommen Sie einfach zu einem unserer monatlichen Vereinsabende – ganz unverbindlich, um die Gemeinschaft kennenzulernen.',
  },
  {
    step: '3',
    title: 'Aufnahmeantrag ausfüllen',
    description:
      'Mit dem Aufnahmeantrag werden Sie offizielles Mitglied. Den Antrag erhalten Sie beim Vorstand.',
  },
]

export default function MitgliedWerdenPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Mitglied werden"
        subtitle="Werden Sie Teil unserer Gemeinschaft – ob jung, ob alt, ob Trachtenliebhaber oder einfach Heimatverbundener."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading as="h2" title="Warum Mitglied werden?" />
              <p className="mt-4 text-text-muted leading-relaxed">
                Ein Verein lebt von seinen Mitgliedern. Bei den Lüßbachtalern finden Sie eine
                herzliche Gemeinschaft, die Tradition nicht als Last, sondern als Freude versteht.
                Egal, ob Sie aktiv mittanzen, beim Theater mitspielen oder einfach die Gemeinschaft
                unterstützen möchten – Sie sind willkommen!
              </p>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <h3 className="font-serif font-bold text-primary-700 text-lg mb-4">
                Mitgliedsbeitrag
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                {[
                  'Erwachsene',
                  'Jugendliche (bis 18 Jahre)',
                  'Familienmitgliedschaft',
                  'Fördermitgliedschaft',
                ].map((type) => (
                  <li key={type} className="flex justify-between">
                    <span>{type}</span>
                    <span className="font-medium text-text">auf Anfrage</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-text-muted">
                Genaue Beitragsinformationen erhalten Sie beim Vorstand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading as="h2" title="Das erwartet Sie" centered />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 bg-surface rounded-lg p-5 shadow-card">
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {b.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{b.title}</h3>
                  <p className="text-text-muted text-sm">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading as="h2" title="So werden Sie Mitglied" centered />
          <div className="mt-12 space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-700 text-white flex items-center justify-center font-serif font-bold text-lg">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif font-bold text-primary-700 text-xl mb-2">{s.title}</h3>
                  <p className="text-text-muted leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button href="/kontakt" variant="primary" size="lg">
              Jetzt Kontakt aufnehmen
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
