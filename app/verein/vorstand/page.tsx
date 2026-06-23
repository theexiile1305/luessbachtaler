import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { board } from '@/content/board'

export const metadata: Metadata = createMetadata({
  title: 'Vorstand',
  description:
    "Der Vorstand des GTEV D'Lüßbachtaler Höhenrain e.V. – die Menschen hinter unserem Verein.",
  path: '/verein/vorstand',
})

function PersonIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mx-auto mb-4">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function VorstandPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Vorstand"
        subtitle="Die gewählten Vertreterinnen und Vertreter unseres Vereins."
      />
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h2"
            title="Der Vorstand"
            subtitle="Unser Vorstand arbeitet ehrenamtlich für die Gemeinschaft – ein herzliches Dankeschön an alle, die sich einbringen."
          />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {board.map((member) => (
              <Card key={`${member.role}-${member.name}`} className="text-center">
                <CardBody>
                  <PersonIcon />
                  <div className="text-xs font-semibold uppercase tracking-wide text-accent-600 mb-1">
                    {member.role}
                  </div>
                  <div className="font-serif font-bold text-primary-700 text-lg">{member.name}</div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-2 block text-xs text-primary-600 hover:underline truncate"
                    >
                      {member.email}
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-primary-50 rounded-lg p-6 border border-primary-100">
            <p className="text-text-muted text-sm leading-relaxed">
              <strong className="text-text">Ehrenamt macht unseren Verein aus.</strong> Alle
              Vorstandsmitglieder engagieren sich freiwillig für das Wohl des Vereins. Haben Sie
              Fragen?{' '}
              <a href="mailto:info@luessbachtaler.de" className="text-primary-700 hover:underline">
                info@luessbachtaler.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
