import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Datenschutzerklärung',
    description: "Datenschutzerklärung des GTEV D'Lüßbachtaler Höhenrain e.V. gemäß DSGVO.",
    path: '/datenschutz',
  }),
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <Hero variant="page" title="Datenschutzerklärung" />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-text-muted leading-relaxed">
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">
              1. Verantwortlicher
            </h2>
            <address className="not-italic">
              Gebirgstrachten-Erhaltungsverein D&apos;Lüßbachtaler Höhenrain e.V.
              <br />
              Attenhauser Str. 22, 82335 Berg / Höhenrain
              <br />
              E-Mail:{' '}
              <a href="mailto:info@luessbachtaler.de" className="text-primary-700 hover:underline">
                info@luessbachtaler.de
              </a>
            </address>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">
              2. Datenerhebung beim Websitebesuch
            </h2>
            <p>
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
              kommenden Browser automatisch Informationen an unseren Server gesendet (IP-Adresse,
              Datum/Uhrzeit, aufgerufene Seite, Referrer, Browser). Diese Daten werden temporär für
              Sicherheits- und Betriebszwecke gespeichert (Art. 6 Abs. 1 lit. f DSGVO) und danach
              gelöscht.
            </p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks
              Bearbeitung der Anfrage bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a
              DSGVO. Für den E-Mail-Versand nutzen wir <strong className="text-text">Resend</strong>{' '}
              (Resend Inc., San Francisco, USA). Weitere Infos:{' '}
              <a
                href="https://resend.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:underline"
              >
                resend.com/privacy
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">4. Cookies</h2>
            <p>
              Unsere Website verwendet keine Tracking- oder Analyse-Cookies. Es werden
              ausschließlich technisch notwendige Cookies verwendet, sofern dies für den Betrieb
              erforderlich ist.
            </p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art.
              17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21
              DSGVO). Beschwerden richten Sie an das Bayerische Landesamt für Datenschutzaufsicht
              (BayLDA), Promenade 27, 91522 Ansbach.
            </p>
          </section>
          <section>
            <h2 className="font-serif font-bold text-primary-700 text-xl mb-3">
              6. Datensicherheit
            </h2>
            <p>
              Diese Seite nutzt SSL/TLS-Verschlüsselung für die Datenübertragung. Diese
              Datenschutzerklärung hat den Stand Juni 2026.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
