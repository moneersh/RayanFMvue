<template>
  <div class="min-h-screen bg-base-100" :class="{ 'rtl': isRTL }">
    <!-- Header -->
    <header class="navbar bg-primary text-primary-content shadow-lg">
      <div class="container mx-auto">
        <div class="navbar-start">
          <router-link to="/" class="btn btn-ghost text-xl">
            <img :src="siteStore.settings.logo" alt="Logo" class="w-36 h-36 mr-6">
            {{ siteStore.siteName }}
          </router-link>
        </div>

        <div class="navbar-center hidden lg:flex">
          <MainNav />
        </div>

        <div class="navbar-end">
          <!-- Language Toggle -->
          <button @click="toggleLanguage" class="btn btn-ghost btn-sm">
            {{ currentLocale === 'ar' ? 'EN' : 'ع' }}
          </button>

          <!-- Mobile Menu -->
          <div class="dropdown dropdown-end lg:hidden">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <MainNav :is-mobile="true" />
            </ul>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer bg-gradient-to-br from-base-200 to-base-300 text-base-content">
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- About Section -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <img :src="siteStore.settings.logo" alt="Rayan Radio" class="w-16 h-16 mr-4">
              <h3 class="font-bold text-2xl text-primary">{{ $t('footer.about') }}</h3>
            </div>
            <p class="text-sm leading-relaxed opacity-90 mb-6">{{ $t('footer.description') }}</p>
            <div class="flex gap-4">
              <a v-for="(url, platform) in siteStore.settings.socialMedia" 
                 :key="platform" 
                 :href="url" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer">
                <i :class="getSocialIcon(platform)" class="text-lg"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-primary">{{ $t('footer.quickLinks') }}</h3>
            <FooterNav />
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-primary">{{ $t('footer.contact') }}</h3>
            <div class="space-y-4 text-sm">
              <div class="flex items-center">
                <i class="fas fa-phone text-primary mr-3"></i>
                <a href="tel:+971507811815" class="hover:text-primary transition-colors">+971507811815</a>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope text-primary mr-3"></i>
                <a href="mailto:info@rayanfm.net" class="hover:text-primary transition-colors">info@rayanfm.net</a>
              </div>
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                <span>{{ locale === 'en' ? 'As Suwayda, Syria' : 'السويداء، سوريا' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="divider my-8 opacity-30"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>{{ $t('footer.rights') }}</p>
          <div class="flex items-center mt-4 md:mt-0">
            <span class="mr-2">{{ $t('footer.poweredBy') }}</span>
            <span class="font-semibold">Vue.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Audio Player Bar -->
    <PlayerBar />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSiteStore } from '@/store/useSiteStore'
import { useRtl } from '@/composables/useRtl'
import MainNav from '@/components/nav/MainNav.vue'
import FooterNav from '@/components/nav/FooterNav.vue'
import PlayerBar from '@/components/podcast/PlayerBar.vue'

const { locale } = useI18n()
const siteStore = useSiteStore()
const { isRTL, currentLocale, toggleLanguage } = useRtl()

// Social media icon mapper
const getSocialIcon = (platform: string): string => {
  const iconMap: { [key: string]: string } = {
    facebook: 'fab fa-facebook-f',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    youtube: 'fab fa-youtube',
    telegram: 'fab fa-telegram',
    whatsapp: 'fab fa-whatsapp',
    linkedin: 'fab fa-linkedin-in'
  }
  return iconMap[platform.toLowerCase()] || 'fas fa-link'
}
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>