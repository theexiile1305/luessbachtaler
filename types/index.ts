export interface Event {
  id: string
  title: string
  date: string
  time?: string
  endTime?: string
  location: string
  description: string
  category: 'vereinsabend' | 'ausflug' | 'fest' | 'theater' | 'jugend' | 'sonstige'
  featured?: boolean
}

export interface BoardMember {
  role: string
  name: string
  email?: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
