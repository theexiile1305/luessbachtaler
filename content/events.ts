import type { Event } from '@/types'

export const events: Event[] = [
  {
    id: 'vae-2026-06',
    title: 'Vereinsabend',
    date: '2026-06-14',
    time: '19:00',
    location: 'Gasthof Zur Post, Höhenrain',
    description:
      'Monatlicher Vereinsabend mit geselligem Beisammensein, Vereinsnachrichten und gemeinsamen Übungsstunden.',
    category: 'vereinsabend',
  },
  {
    id: 'sommerfest-2026',
    title: 'Sommerfest der Lüßbachtaler',
    date: '2026-07-12',
    time: '14:00',
    location: 'Festplatz Höhenrain',
    description:
      'Unser traditionelles Sommerfest mit Schuhplattler-Vorführungen der Kinder- und Jugendgruppe, Musik der Lüßbacher Blasmusik und bayerischer Gastronomie.',
    category: 'fest',
    featured: true,
  },
  {
    id: 'vae-2026-07',
    title: 'Vereinsabend',
    date: '2026-07-19',
    time: '19:00',
    location: 'Gasthof Zur Post, Höhenrain',
    description: 'Monatlicher Vereinsabend - Besprechung des Sommerfests und Proben.',
    category: 'vereinsabend',
  },
  {
    id: 'theater-2026-sept',
    title: 'Theaterprobe - Hauptprobe',
    date: '2026-09-05',
    time: '18:00',
    location: 'Vereinsheim Höhenrain',
    description:
      'Generalprobe für das diesjährige Herbststück. Alle Mitwirkenden bitte pünktlich erscheinen.',
    category: 'theater',
  },
  {
    id: 'theater-premiere-2026',
    title: 'Theateraufführung - Premiere',
    date: '2026-09-12',
    time: '19:30',
    location: 'Gasthof Zur Post, Höhenrain',
    description:
      'Premiere unseres neuen Theaterstücks. Karten sind an der Abendkasse und bei Vorstandsmitgliedern erhältlich.',
    category: 'theater',
    featured: true,
  },
  {
    id: 'theater-2026-2',
    title: 'Theateraufführung',
    date: '2026-09-19',
    time: '19:30',
    location: 'Gasthof Zur Post, Höhenrain',
    description: 'Zweite Aufführung unseres diesjährigen Theaterstücks.',
    category: 'theater',
  },
  {
    id: 'vae-2026-09',
    title: 'Vereinsabend',
    date: '2026-09-27',
    time: '19:00',
    location: 'Gasthof Zur Post, Höhenrain',
    description: 'Monatlicher Vereinsabend - Nachbesprechung der Theateraufführungen.',
    category: 'vereinsabend',
  },
  {
    id: 'ausflug-2026-okt',
    title: 'Vereinsausflug',
    date: '2026-10-11',
    location: 'Tegernseer Tal',
    description:
      'Jahresausflug in das Tegernseer Tal mit Besichtigung eines benachbarten Trachtenvereins, gemeinsamer Wanderung und Einkehr.',
    category: 'ausflug',
    featured: true,
  },
  {
    id: 'vae-2026-10',
    title: 'Vereinsabend',
    date: '2026-10-18',
    time: '19:00',
    location: 'Gasthof Zur Post, Höhenrain',
    description: 'Monatlicher Vereinsabend - Planung der Adventszeit.',
    category: 'vereinsabend',
  },
  {
    id: 'nikolausfeier-2026',
    title: 'Nikolausfeier für Kinder',
    date: '2026-12-06',
    time: '15:00',
    location: 'Vereinsheim Höhenrain',
    description:
      'Traditionelle Nikolausfeier für die Kinder unserer Mitglieder. Der Nikolaus kommt persönlich - die Kinder der Plattelgruppen zeigen ihre Kunststücke.',
    category: 'jugend',
    featured: true,
  },
  {
    id: 'weihnachtsfeier-2026',
    title: 'Weihnachtsfeier',
    date: '2026-12-20',
    time: '18:00',
    location: 'Gasthof Zur Post, Höhenrain',
    description:
      'Jahresabschlussfeier mit Ehrungen verdienter Mitglieder, musikalischer Umrahmung durch die Lüßbacher Blasmusik und gemütlichem Beisammensein.',
    category: 'vereinsabend',
    featured: true,
  },
]

export function getUpcomingEvents(count?: number): Event[] {
  const today = new Date().toISOString().split('T')[0]
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
  return count !== undefined ? upcoming.slice(0, count) : upcoming
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.featured)
}

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const categoryLabels: Record<Event['category'], string> = {
  vereinsabend: 'Vereinsabend',
  ausflug: 'Ausflug',
  fest: 'Fest',
  theater: 'Theater',
  jugend: 'Jugend',
  sonstige: 'Sonstiges',
}
