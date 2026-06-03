import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Headers are configured in vercel.json for Vercel deployments.
  // For local preview use `pnpm build && pnpm start` and check Network tab.
}

export default nextConfig
