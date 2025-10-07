import { computed } from 'vue'
import { useSiteStore } from '@/store/useSiteStore'
import { useI18n } from 'vue-i18n'

export function useRtl() {
  const siteStore = useSiteStore()
  const { locale } = useI18n()

  const isRTL = computed(() => siteStore.isRTL)
  const currentLocale = computed(() => siteStore.currentLocale)

  const toggleLanguage = () => {
    const newLocale = currentLocale.value === 'ar' ? 'en' : 'ar'
    locale.value = newLocale
    siteStore.setLocale(newLocale)
  }

  const setLanguage = (lang: string) => {
    locale.value = lang
    siteStore.setLocale(lang)
  }

  return {
    isRTL,
    currentLocale,
    toggleLanguage,
    setLanguage
  }
}