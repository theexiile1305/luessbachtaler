import Link from 'next/link'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const footerLinks = {
  verein: [
    { label: 'Über uns', href: '/verein' },
    { label: 'Geschichte', href: '/verein/geschichte' },
    { label: 'Vorstand', href: '/verein/vorstand' },
    { label: 'Mitglied werden', href: '/verein/mitglied-werden' },
  ],
  aktivitaeten: [
    { label: 'Veranstaltungen', href: '/veranstaltungen' },
    { label: 'Theater', href: '/theater' },
    { label: 'Jugend', href: '/jugend' },
    { label: 'Galerie', href: '/galerie' },
  ],
  rechtliches: [
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary-700 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-1">
            <p className="font-serif text-xl font-bold mb-1 text-accent-300">D&apos;Lüßbachtaler</p>
            <p className="text-primary-200 text-sm mb-4">GTEV Höhenrain e.V.</p>
            <address className="not-italic text-primary-200 text-sm leading-relaxed">
              Attenhauser Str. 22<br />82335 Berg / Höhenrain<br />Bayern
            </address>
            <a href="mailto:info@luessbachtaler.de" className="block mt-3 text-accent-300 hover:text-accent-200 text-sm transition-colors">
              info@luessbachtaler.de
            </a>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label="Lüßbachtaler auf Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label="Lüßbachtaler auf Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Der Verein</h3>
            <ul className="space-y-2">
              {footerLinks.verein.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-200 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Aktivitäten</h3>
            <ul className="space-y-2">
              {footerLinks.aktivitaeten.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-200 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-200 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-600 pt-6 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 text-center sm:text-left">
          <p className="text-primary-300 text-sm">© {year} Gebirgstrachten-Erhaltungsverein D&apos;Lüßbachtaler Höhenrain e.V.</p>
          <p className="text-primary-400 text-xs text-center">
            Built with ❤️ by{' '}
            <a
              href="https://github.com/theexiile1305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
            >
              theexiile1305
            </a>
            . Please report any issues at{' '}
            <a
              href="https://github.com/theexiile1305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-primary-400 text-xs sm:text-right">Gegründet 1920 · Wiedergegründet 1982</p>
        </div>
      </div>
    </footer>
  )
}
