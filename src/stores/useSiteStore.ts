import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    socialMedia: {
      facebook: 'https://www.facebook.com/RayanFMRadio',
      twitter: 'https://twitter.com/rayanfm',
      instagram: 'https://www.instagram.com/rayanfm.90.2/',
      linkedin: 'https://linkedin.com/company/rayanfm',
      youtube: 'https://www.youtube.com/@RayanFMRadio',
      telegram: 'https://t.me/rayanfm',
      whatsapp: 'https://wa.me/971507811815'
    },
    contact: {
      phone: '+971507811815',
      email: 'info@rayanfm.net',
      address: 'UAE'
    }
  }),
  
  getters: {
    getSocialMedia: (state) => state.socialMedia,
    getContact: (state) => state.contact
  }
})