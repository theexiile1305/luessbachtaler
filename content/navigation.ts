import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Der Verein',
    href: '/verein',
    children: [
      { label: 'Über uns', href: '/verein' },
      { label: 'Geschichte', href: '/verein/geschichte' },
      { label: 'Vorstand', href: '/verein/vorstand' },
      { label: 'Mitglied werden', href: '/verein/mitglied-werden' },
    ],
  },
  { label: 'Veranstaltungen', href: '/veranstaltungen' },
  { label: 'Theater', href: '/theater' },
  { label: 'Jugend', href: '/jugend' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Kontakt', href: '/kontakt' },
]
