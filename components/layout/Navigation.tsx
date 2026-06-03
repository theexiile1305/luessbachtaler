'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/content/navigation'

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  const closeAll = useCallback(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [])

  useEffect(() => {
    closeAll()
  }, [pathname, closeAll])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeAll])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeAll])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav ref={navRef} aria-label="Hauptnavigation">
      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-1" role="list">
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            {item.children ? (
              <>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                  aria-expanded={openDropdown === item.href}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-4 py-2 rounded text-sm font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-text hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform duration-150 ${openDropdown === item.href ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === item.href && (
                  <ul
                    className="absolute top-full left-0 mt-1 min-w-48 bg-surface rounded-lg shadow-card-hover border border-border py-1 z-50"
                    role="list"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            pathname === child.href
                              ? 'text-primary-700 bg-primary-50 font-medium'
                              : 'text-text hover:text-primary-700 hover:bg-primary-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`block px-4 py-2 rounded text-sm font-medium transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-text hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 rounded text-primary-700 hover:bg-primary-50 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-surface border-t border-border shadow-card-hover z-50 md:hidden"
        >
          <ul className="py-2" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-3.5 font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-text hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="bg-surface-warm border-t border-border" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-10 py-3 text-sm transition-colors duration-150 ${
                            pathname === child.href
                              ? 'text-primary-700 font-medium'
                              : 'text-text-muted hover:text-primary-700'
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
