import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/features/contact/ContactForm'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Kontakt',
  description: "Nehmen Sie Kontakt auf mit dem GTEV D'Lüßbachtaler Höhenrain – per E-Mail, Post oder über unser Kontaktformular.",
  path: '/kontakt',
})

export default function KontaktPage() {
  return (
    <>
      <Hero variant="page" title="Kontakt" subtitle="Haben Sie Fragen, möchten Sie Mitglied werden oder uns einfach Hallo sagen? Wir freuen uns auf Ihre Nachricht!" />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading as="h2" title="So erreichen Sie uns" />
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2">Postanschrift</h3>
                  <address className="not-italic text-text-muted leading-relaxed">
                    Gebirgstrachten-Erhaltungsverein<br />
                    D&apos;Lüßbachtaler Höhenrain e.V.<br />
                    Attenhauser Str. 22<br />
                    82335 Berg / Höhenrain<br />
                    Bayern
                  </address>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2">E-Mail</h3>
                  <a href="mailto:info@luessbachtaler.de" className="text-primary-700 hover:underline">info@luessbachtaler.de</a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2">Vereinsabend</h3>
                  <p className="text-text-muted text-sm leading-relaxed">Die einfachste Möglichkeit, uns persönlich kennenzulernen: Kommen Sie einfach zu einem unserer monatlichen Vereinsabende vorbei. <a href="/veranstaltungen" className="text-primary-700 hover:underline">Termine →</a></p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-600 text-sm font-medium">Instagram</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-600 text-sm font-medium">Facebook</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2">Anfahrt</h3>
                  <p className="text-text-muted text-sm mb-2">Höhenrain liegt in der Gemeinde Berg am Starnberger See, ca. 35 km südlich von München.</p>
                  <a href="https://maps.google.com/?q=Attenhauser+Str.+22,+82335+Berg" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline text-sm font-medium">Auf Google Maps öffnen →</a>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading as="h2" title="Nachricht schreiben" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
