import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Geschichte',
  description:
    "Die Geschichte des GTEV D'Lüßbachtaler Höhenrain: Von der Gründung 1920 über die Wiedergründung 1982 bis heute.",
  path: '/verein/geschichte',
})

const timeline = [
  {
    year: '1920',
    title: 'Gründung: Würmseelust Höhenrain',
    content: `Am 25. September 1920 gründeten 20 begeisterte Männer und Frauen aus Höhenrain den Verein "Würmseelust Höhenrain". Der Name spielte auf den nahegelegenen Würmsee (heute Starnberger See) an. Trotz der schwierigen Nachkriegszeit wuchs der Verein schnell auf rund 40 Mitglieder an.`,
  },
  {
    year: '1934',
    title: 'Auflösung in der Wirtschaftskrise',
    content: `Die anhaltende wirtschaftliche Notlage und die politischen Umbrüche der 1930er Jahre zwangen den Verein zur Auflösung. Nach 14 Jahren aktiven Vereinslebens musste die Gemeinschaft schweren Herzens aufgelöst werden. Das Brauchtum lebte jedoch in den Herzen der Mitglieder und ihrer Familien weiter.`,
  },
  {
    year: '1980',
    title: 'Gründung der Lüßbacher Blasmusik',
    content: `Noch vor der offiziellen Neugründung des Vereins entstand 1980 die Lüßbacher Blasmusik. Eine Gruppe musikbegeisterter Heimatverbundener aus Höhenrain gründete die Kapelle, um traditionelle bayerische Blasmusik in der Region lebendig zu erhalten. Die Musikanten sollten wenig später zum Herzstück des neuen Vereins werden.`,
  },
  {
    year: '1982',
    title: 'Wiedergründung als D\'Lüßbachtaler',
    content: `Am 6. März 1982 war es soweit: Mit 196 Gründungsmitgliedern wurde der Verein feierlich neu gegründet und erhielt seinen heutigen Namen "D'Lüßbachtaler Höhenrain" - abgeleitet vom Lüßbach, der durch die Heimat fließt. Die Lüßbacher Blasmusik trat dem neuen Verein bei und bereicherte das Vereinsleben von Beginn an.`,
  },
  {
    year: 'Heute',
    title: 'Lebendiges Brauchtum in Höhenrain',
    content: `Heute zählen die Lüßbachtaler mehrere Hundert Mitglieder und sind ein fester Bestandteil des kulturellen Lebens in Höhenrain und der Gemeinde Berg. Schuhplattler, Theater, Blasmusik und zahlreiche Feste verbinden Jung und Alt und tragen dazu bei, dass bayerische Tradition lebendig bleibt - nicht als Museum, sondern als gelebte Gemeinschaft.`,
  },
]

export default function GeschichtePage() {
  return (
    <>
      <Hero
        variant="page"
        title="Geschichte"
        subtitle="Über 100 Jahre Tracht, Tradition und Gemeinschaft in Höhenrain."
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            title="Unsere Geschichte"
            subtitle="Was 1920 mit 20 Gleichgesinnten begann, ist heute eine blühende Gemeinschaft - ein Stück lebendiger bayerischer Heimat."
          />

          <div className="mt-16 space-y-0">
            {timeline.map((entry, index) => (
              <div key={entry.year} className="flex gap-8 relative">
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div
                    className="absolute left-[2.25rem] top-16 bottom-0 w-0.5 bg-border"
                    aria-hidden="true"
                  />
                )}

                {/* Year marker */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-18 h-18 rounded-full bg-primary-700 text-white flex items-center justify-center font-serif font-bold text-sm text-center w-[4.5rem] h-[4.5rem] leading-tight">
                    {entry.year}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-12 flex-1">
                  <h3 className="font-serif font-bold text-primary-700 text-xl mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{entry.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-accent-50 border border-accent-200 rounded-lg p-6">
            <p className="text-text-muted text-sm leading-relaxed italic">
              Haben Sie Fotos oder Erinnerungen aus der Vereinsgeschichte? Wir freuen uns über
              historische Bilder und Berichte, die wir in unserem Vereinsarchiv bewahren können.{' '}
              <a href="/kontakt" className="text-primary-700 hover:underline font-medium">
                Kontaktieren Sie uns!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
