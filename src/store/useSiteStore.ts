import { defineStore } from 'pinia'
import type { SiteSettings } from '@/types/content'
import { getImagePath } from '@/utils/assets'

interface SiteState {
  settings: SiteSettings
  isRTL: boolean
  currentLocale: string
  theme: 'light' | 'dark'
}

export const useSiteStore = defineStore('site', {
  state: (): SiteState => ({
    settings: {
      siteName: '',
      siteNameEn: '',
      description: 'الإذاعة السورية الأكثر انتشاراً في المنطقة الجنوبية',
      descriptionEn: 'The Most Popular Syrian Radio in the Southern Region',
      logo: getImagePath('logo.webp'),
      favicon: '/favicon.ico',
      socialMedia: {
        facebook: 'https://www.facebook.com/RayanFMRadio',
        youtube: 'https://www.youtube.com/@RayanFMRadio',
        instagram: 'https://www.instagram.com/rayanfm.90.2/',
        whatsapp: 'https://wa.me/971507811815'
      },
      contact: {
        email: 'info@rayanradio.com',
        phone: '+963-16-123456',
        address: 'السويداء، سوريا',
        addressEn: 'As-Suwayda, Syria'
      },
      radioStream: {
        liveUrl: 'https://broadcast.shoutstream.co.uk:8078/stream',
        isLive: true,
        currentShow: 'صباحك مع راما'
      }
    },
    isRTL: true,
    currentLocale: 'ar',
    theme: 'light'
  }),

  getters: {
    siteName: (state) => state.currentLocale === 'ar' ? state.settings.siteName : state.settings.siteNameEn,
    siteDescription: (state) => state.currentLocale === 'ar' ? state.settings.description : state.settings.descriptionEn,
    contactAddress: (state) => state.currentLocale === 'ar' ? state.settings.contact.address : state.settings.contact.addressEn
  },

  actions: {
    setLocale(locale: string) {
      this.currentLocale = locale
      this.isRTL = locale === 'ar'
      document.documentElement.lang = locale
      document.documentElement.dir = this.isRTL ? 'rtl' : 'ltr'
    },

    setTheme(theme: 'light' | 'dark') {
      this.theme = theme
      document.documentElement.setAttribute('data-theme', theme)
    },

    updateRadioStatus(isLive: boolean, currentShow?: string) {
      this.settings.radioStream.isLive = isLive
      if (currentShow) {
        this.settings.radioStream.currentShow = currentShow
      }
    }
  }
})