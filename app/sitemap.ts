import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.luessbachtaler.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/verein', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/verein/geschichte', priority: 0.7, changeFrequency: 'yearly' as const },
    { url: '/verein/vorstand', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/verein/mitglied-werden', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/veranstaltungen', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/theater', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/jugend', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/galerie', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kontakt', priority: 0.8, changeFrequency: 'yearly' as const },
  ]
  return routes.map((r) => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
