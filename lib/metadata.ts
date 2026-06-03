import type { Metadata } from 'next'

const BASE_URL = 'https://www.luessbachtaler.de'
export const SITE_NAME = "GTEV D' Lüßbachtaler Höhenrain"
const DEFAULT_DESCRIPTION =
  "Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler Höhenrain e.V. - Tradition, Schuhplattler und gelebtes Brauchtum in Höhenrain, Gemeinde Berg, Bayern."

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
}: {
  title: string
  description?: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  }
}
