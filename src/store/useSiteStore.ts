import { defineStore } from 'pinia'
import type { SiteSettings } from '@/types/content'

interface SiteState {
  settings: SiteSettings
  isRTL: boolean
  currentLocale: string
  theme: 'light' | 'dark'
}

export const useSiteStore = defineStore('site', {
  state: (): SiteState => ({
    settings: {
      siteName: 'إذاعة الريّان',
      siteNameEn: 'Rayan Radio',
      description: 'إذاعة إسلامية متنوعة تقدم برامج دينية وثقافية واجتماعية هادفة',
      descriptionEn: 'An Islamic radio station offering diverse religious, cultural, and social programs',
      logo: '/logos/rayan-logo.svg',
      favicon: '/favicon.ico',
      socialMedia: {
        facebook: 'https://facebook.com/rayanradio',
        twitter: 'https://twitter.com/rayanradio',
        instagram: 'https://instagram.com/rayanradio',
        youtube: 'https://youtube.com/rayanradio',
        telegram: 'https://t.me/rayanradio'
      },
      contact: {
        email: 'info@rayanradio.com',
        phone: '+966501234567',
        address: 'الرياض، المملكة العربية السعودية',
        addressEn: 'Riyadh, Saudi Arabia'
      },
      radioStream: {
        liveUrl: 'https://stream.rayanradio.com/live',
        isLive: true,
        currentShow: 'البرنامج الصباحي'
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