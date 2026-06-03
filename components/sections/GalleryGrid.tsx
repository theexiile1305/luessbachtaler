import Image from 'next/image'
import type { GalleryImage } from '@/types'

export function GalleryGrid({ images, columns = 3 }: { images: GalleryImage[]; columns?: 2 | 3 | 4 }) {
  const colClass =
    columns === 2 ? 'grid-cols-1 sm:grid-cols-2'
    : columns === 4 ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${colClass} gap-4`}>
      {images.map((image, index) => (
        <figure key={index} className="group overflow-hidden rounded-lg bg-primary-50">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <figcaption className="px-3 py-2 text-sm text-text-muted">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
