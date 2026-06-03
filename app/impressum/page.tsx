import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  ...createMetadata({ title: 'Impressum', description: "Impressum des GTEV D'Lüßbachtaler Höhenrain e.V. gemäß § 5 TMG.", path: '/impressum' }),
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <Hero variant="page" title="Impressum" />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-text-muted leading-relaxed">
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Angaben gemäß § 5 TMG</h2>
            <address className="not-italic">
              <strong className="text-text">Gebirgstrachten-Erhaltungsverein D&apos;Lüßbachtaler Höhenrain e.V.</strong><br />
              Attenhauser Str. 22<br />82335 Berg / Höhenrain<br />Bayern, Deutschland
            </address>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Vereinsregister</h2>
            <p>Registergericht: Amtsgericht München</p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Vertreten durch</h2>
            <p>1. Vorstand: Johann Buchner</p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:info@luessbachtaler.de" className="text-primary-700 hover:underline">info@luessbachtaler.de</a></p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>Johann Buchner, Attenhauser Str. 22, 82335 Berg / Höhenrain</p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          </section>
        </div>
      </section>
    </>
  )
}
