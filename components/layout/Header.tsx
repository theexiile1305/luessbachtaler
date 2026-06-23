import Link from 'next/link'
import { Navigation } from './Navigation'

function TrachtenIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="18" cy="18" r="17" stroke="#1a3a2a" strokeWidth="1.5" fill="#eef5f0" />
      <path
        d="M11 24 C11 19 14 16 18 16 C22 16 25 19 25 24"
        stroke="#1a3a2a"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="18" cy="13" r="3" fill="#1a3a2a" />
      <path d="M13 26 L23 26" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 relative">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 hover:opacity-90 transition-opacity"
            aria-label="D'Lüßbachtaler – zur Startseite"
          >
            <TrachtenIcon />
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-primary-700 leading-tight text-lg">
                D&apos;Lüßbachtaler
              </div>
              <div className="text-text-muted text-xs leading-tight">GTEV Höhenrain e.V.</div>
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
