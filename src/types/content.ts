export interface Program {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  slug: string
  host: string
  hostEn?: string
  schedule: string
  scheduleEn?: string
  image: string
  isActive: boolean
  category: string
  duration?: string
  frequency?: string
  tags?: string[]
  episodes?: Episode[]
}

export interface Episode {
  id: string
  programId: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  slug: string
  audioUrl: string
  duration: number
  publishedAt: Date
  image?: string
}





export interface SiteSettings {
  siteName: string
  siteNameEn?: string
  description: string
  descriptionEn?: string
  logo: string
  favicon: string
  socialMedia: {
    facebook?: string
    instagram?: string
    youtube?: string
    telegram?: string
    whatsapp?: string
  }
  contact: {
    email: string
    phone: string
    address: string
    addressEn?: string
  }
  radioStream: {
    liveUrl: string
    isLive: boolean
    currentShow?: string
  }
}