import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GalleryGrid } from '@/components/sections/GalleryGrid'
import { createMetadata } from '@/lib/metadata'
import type { GalleryImage } from '@/types'

export const metadata: Metadata = createMetadata({
  title: 'Galerie',
  description:
    "Bilder aus dem Vereinsleben des GTEV D'Lüßbachtaler Höhenrain: Feste, Aufführungen, Ausflüge und Vereinsabende.",
  path: '/galerie',
})

// Placeholder images - replace with real photos in /public/images/galerie/
// All currently point to the same placeholder SVG; swap src paths with actual images.
const PLACEHOLDER = '/images/galerie/placeholder.svg'

const galleryImages: GalleryImage[] = [
  {
    src: PLACEHOLDER,
    alt: 'Schuhplattler-Aufführung beim Sommerfest der Lüßbachtaler',
    caption: 'Sommerfest 2025',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Kinder-Plattelgruppe beim Vereinsfest',
    caption: 'Nachwuchs in Aktion',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Theateraufführung: Ensemble auf der Bühne',
    caption: 'Theater 2025',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Lüßbacher Blasmusik beim Dorffest',
    caption: 'Lüßbacher Blasmusik',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Vereinsausflug in das Tegernseer Tal',
    caption: 'Vereinsausflug',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Mitglieder in Tracht beim Jahresfest',
    caption: 'Jahresfest',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Jugend-Plattelgruppe bei der Probe',
    caption: 'Jugendprobe',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Nikolausfeier für die Kinder des Vereins',
    caption: 'Nikolausfeier',
    width: 800,
    height: 600,
  },
  {
    src: PLACEHOLDER,
    alt: 'Vereinsabend mit geselligem Beisammensein',
    caption: 'Vereinsabend',
    width: 800,
    height: 600,
  },
]

export default function GaleriePage() {
  return (
    <>
      <Hero
        variant="page"
        title="Galerie"
        subtitle="Eindrücke aus unserem Vereinsleben – Feste, Theater, Schuhplattler und vieles mehr."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading as="h2" title="Bilder aus dem Vereinsleben" />
          </div>

          <GalleryGrid images={galleryImages} columns={3} />

          <div className="mt-12 bg-primary-50 rounded-lg p-6 border border-primary-100 text-center">
            <p className="text-text-muted text-sm leading-relaxed">
              <strong className="text-text">Sie haben eigene Fotos?</strong> Wenn Sie schöne
              Aufnahmen von unseren Veranstaltungen haben, freuen wir uns sehr über eine Zusendung!
              Schreiben Sie uns an{' '}
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
