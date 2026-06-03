import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Der Verein',
  description:
    "Alles über den GTEV D'Lüßbachtaler Höhenrain e.V.: Geschichte, Vorstand, Mitgliedschaft und unser Vereinsleben in Höhenrain, Bayern.",
  path: '/verein',
})

const subPages = [
  {
    title: 'Geschichte',
    description: 'Von der Gründung 1920 bis heute - lesen Sie, wie alles begann.',
    href: '/verein/geschichte',
    icon: '📜',
  },
  {
    title: 'Vorstand',
    description: 'Lernen Sie die Menschen kennen, die unseren Verein leiten.',
    href: '/verein/vorstand',
    icon: '👥',
  },
  {
    title: 'Mitglied werden',
    description: 'Werden Sie Teil unserer Gemeinschaft - Informationen zur Mitgliedschaft.',
    href: '/verein/mitglied-werden',
    icon: '🤝',
  },
]

export default function VereinPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Der Verein"
        subtitle="Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler Höhenrain e.V."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading as="h2" title="Über uns" />
              <div className="mt-6 space-y-5 text-text-muted leading-relaxed">
                <p>
                  Wir sind der <strong className="text-text">Gebirgstrachten-Erhaltungsverein
                  D'Lüßbachtaler Höhenrain e.V.</strong> - ein Verein mit tiefen Wurzeln und
                  lebendigem Brauchtum im Herzen der Gemeinde Berg am Starnberger See.
                </p>
                <p>
                  Unser Name leitet sich vom Lüßbach ab, der durch unsere Heimat Höhenrain fließt.
                  Seit unserer Wiedergründung im Jahr 1982 mit 196 Gründungsmitgliedern wächst
                  unser Verein stetig und verbindet Generationen durch gemeinsame Werte: Tracht,
                  Tradition und Heimatliebe.
                </p>
                <p>
                  Gleichzeitig mit dem Verein wurde die <strong className="text-text">Lüßbacher
                  Blasmusik</strong> gegründet, die seither ein fester Bestandteil unseres
                  Vereinslebens ist und unsere Veranstaltungen musikalisch begleitet.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="font-serif font-bold text-primary-700 text-lg mb-3">
                  Unsere Aktivitäten
                </h3>
                <ul className="space-y-3 text-text-muted text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent-500 font-bold">→</span>
                    <span><strong className="text-text">Schuhplattler</strong> in der Erwachsenen-, Kinder- und Jugendgruppe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-500 font-bold">→</span>
                    <span><strong className="text-text">Vereinsabende</strong> - monatliche Treffen mit Proben und Geselligkeit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-500 font-bold">→</span>
                    <span><strong className="text-text">Theatergruppe</strong> - jährliche Aufführungen für Mitglieder und Gäste</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-500 font-bold">→</span>
                    <span><strong className="text-text">Lüßbacher Blasmusik</strong> - Musik bei Festen und Auftritten</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-500 font-bold">→</span>
                    <span><strong className="text-text">Vereinsausflüge</strong> und Jahresfeste</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-text mb-2">Kontakt</h3>
                <p className="text-text-muted text-sm">
                  1. Vorstand: Johann Buchner
                  <br />
                  <a
                    href="mailto:info@luessbachtaler.de"
                    className="text-primary-700 hover:underline mt-1 block"
                  >
                    info@luessbachtaler.de
                  </a>
                </p>
                <Button href="/kontakt" variant="ghost" size="sm" className="mt-4">
                  Nachricht schreiben
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-16 bg-surface-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            title="Mehr erfahren"
            centered
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {subPages.map((page) => (
              <Link key={page.href} href={page.href} className="group block">
                <Card className="h-full group-hover:shadow-card-hover">
                  <CardBody>
                    <div className="text-3xl mb-3" aria-hidden="true">{page.icon}</div>
                    <h3 className="font-serif font-bold text-primary-700 text-lg mb-2">
                      {page.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{page.description}</p>
                    <span className="inline-block mt-4 text-primary-600 text-sm font-medium group-hover:underline">
                      Mehr erfahren →
                    </span>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
