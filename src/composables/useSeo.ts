import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useSiteStore } from '@/store/useSiteStore'
import { getImagePath } from '@/utils/assets'

interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
}

export function useSeo(options: SeoOptions = {}) {
  const siteStore = useSiteStore()

  const seoTitle = computed(() => {
    const baseTitle = siteStore.siteName
    return options.title ? `${options.title} | ${baseTitle}` : baseTitle
  })

  const seoDescription = computed(() => 
    options.description || siteStore.siteDescription
  )

  const seoImage = computed(() => 
    options.image || `${window.location.origin}${getImagePath('images/og-default.jpg')}`
  )

  const seoUrl = computed(() => 
    options.url || window.location.href
  )

  useHead({
    title: seoTitle.value,
    meta: [
      { name: 'description', content: seoDescription },
      { name: 'keywords', content: options.keywords?.join(', ') || 'إذاعة, راديو, إسلام, برامج دينية' },
      
      // Open Graph
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoImage },
      { property: 'og:url', content: seoUrl },
      { property: 'og:type', content: options.type || 'website' },
      { property: 'og:site_name', content: siteStore.siteName },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoTitle },
      { name: 'twitter:description', content: seoDescription },
      { name: 'twitter:image', content: seoImage }
    ]
  })

  return {
    setSeoTitle: (title: string) => options.title = title,
    setSeoDescription: (description: string) => options.description = description,
    setSeoImage: (image: string) => options.image = image
  }
}