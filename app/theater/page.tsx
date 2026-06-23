import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Theater',
  description:
    "Die Theatergruppe des GTEV D'Lüßbachtaler Höhenrain: jährliche Volkstheater-Aufführungen in Höhenrain.",
  path: '/theater',
})

export default function TheaterPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Theater"
        subtitle="Volkstheater mit Herzblut – seit Jahrzehnten bringt unsere Theatergruppe Lachen und Freude nach Höhenrain."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading as="h2" title="Unsere Theatergruppe" />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Theater gehört zum Vereinsleben der Lüßbachtaler wie der Schuhplattler zur Tracht.
                  Seit vielen Jahren erarbeitet unsere engagierte Theatergruppe jedes Jahr ein neues
                  Stück – meistens heiteres Volkstheater, das unterhält, zum Lachen bringt und dabei
                  immer nah am Leben der Menschen bleibt.
                </p>
                <p>
                  Vom Bauernschwank bis zum modernen Komödieneinakter: Unser Spielplan ist so
                  vielfältig wie unsere Mitglieder. Was alle Stücke verbindet, ist die Leidenschaft,
                  mit der sie einstudiert und aufgeführt werden.
                </p>
                <p>
                  Die Aufführungen finden im Herbst statt – in der Regel im September – und sind bei
                  Mitgliedern und Gästen aus der ganzen Umgebung beliebt.
                </p>
              </div>
            </div>
            <div className="bg-primary-700 rounded-lg p-12 text-center text-white">
              <div className="text-8xl mb-6" aria-hidden="true">
                🎭
              </div>
              <blockquote className="font-serif text-xl italic text-primary-100">
                &ldquo;Wenn das Publikum lacht, wissen wir: es war richtig!&rdquo;
              </blockquote>
              <p className="mt-4 text-primary-300 text-sm">– Die Theatergruppe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading as="h2" title="Mitmachen erwünscht!" centered />
          <p className="mt-4 text-text-muted text-center leading-relaxed max-w-2xl mx-auto">
            Sie stehen gerne auf der Bühne oder arbeiten lieber hinter den Kulissen? Ob als
            Schauspieler, Souffleuse, Bühnenbildner oder Kostümschneiderin – in unserer
            Theatergruppe ist jede helfende Hand willkommen.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🎤',
                title: 'Auf der Bühne',
                desc: 'Spielen, spielen, spielen – alle Altersgruppen sind herzlich eingeladen.',
              },
              {
                icon: '🔦',
                title: 'Hinter den Kulissen',
                desc: 'Licht, Ton, Technik, Bühnenbau – das Theater läuft auf vielen Schultern.',
              },
              {
                icon: '🪡',
                title: 'Kostüm & Maske',
                desc: 'Kreativität und handwerkliches Geschick sind immer gefragt.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-lg p-5 shadow-card text-center">
                <div className="text-3xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/kontakt" variant="primary" size="md">
              Interesse anmelden
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <h2 className="font-serif font-bold text-primary-700 text-2xl mb-4">
              Karten & Vorführungen
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Unsere Theatervorstellungen finden im Herbst statt. Genaue Termine finden Sie auf
              unserer{' '}
              <a href="/veranstaltungen" className="text-primary-700 hover:underline">
                Veranstaltungsseite
              </a>
              .
            </p>
            <p className="text-text-muted leading-relaxed">
              Karten sind erhältlich an der Abendkasse oder im Vorverkauf beim Vorstand. Schreiben
              Sie uns gerne an{' '}
              <a href="mailto:info@luessbachtaler.de" className="text-primary-700 hover:underline">
                info@luessbachtaler.de
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
