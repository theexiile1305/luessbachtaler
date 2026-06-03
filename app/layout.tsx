import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luessbachtaler.de'),
  title: {
    default: "GTEV D' Lüßbachtaler Höhenrain – Trachtenverein Berg, Bayern",
    template: "%s | GTEV D' Lüßbachtaler Höhenrain",
  },
  description:
    "Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler Höhenrain e.V. – Tradition, Schuhplattler und gelebtes Brauchtum in Höhenrain, Gemeinde Berg, Bayern.",
  keywords: [
    'Trachtenverein Höhenrain',
    "GTEV D' Lüßbachtaler",
    'Trachtenverein Berg',
    'Trachtenverein Starnberg',
    'Schuhplattler Höhenrain',
    'Bayerisches Brauchtum',
    'Theater Höhenrain',
    'Vereinsleben Höhenrain',
    'Lüßbacher Blasmusik',
  ],
  authors: [{ name: "GTEV D' Lüßbachtaler Höhenrain e.V." }],
  creator: "GTEV D' Lüßbachtaler Höhenrain e.V.",
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: "GTEV D' Lüßbachtaler Höhenrain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${lora.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
