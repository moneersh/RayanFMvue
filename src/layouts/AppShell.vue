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
              <h3 class="font-bold text-2xl text-primary">{{ $t('footer.about') }}</h3>
            </div>
            <p class="text-sm leading-relaxed opacity-90 mb-6">{{ $t('footer.description') }}</p>
            <div class="flex gap-4">
              <!-- Facebook -->
              <a href="https://facebook.com/rayanradio" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <!-- Instagram -->
              <a href="https://instagram.com/rayanradio" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538zm7.424 0c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538z"/>
                </svg>
              </a>
              
              <!-- YouTube -->
              <a href="https://youtube.com/@rayanradio" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="YouTube">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              <!-- Telegram -->
              <a href="https://t.me/rayanradio" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Telegram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.348 0 0 5.348 0 11.944s5.348 11.944 11.944 11.944 11.944-5.348 11.944-11.944S18.54 0 11.944 0zm4.618 7.703l-1.73 8.165c-.13.596-.469.744-.95.463l-2.625-1.934-1.267 1.22c-.14.14-.259.259-.532.259l.19-2.683 4.87-4.4c.212-.188-.046-.293-.329-.106l-6.026 3.796-2.596-.811c-.564-.177-.576-.564.118-.834l10.15-3.914c.469-.177.881.106.727.835z"/>
                </svg>
              </a>
              
              <!-- WhatsApp -->
              <a href="https://wa.me/971507811815" 
                 class="btn btn-circle btn-outline btn-primary hover:btn-primary transition-all duration-300"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="WhatsApp">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                </svg>
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
        
        <div class="text-center text-sm opacity-80">
          <p>{{ $t('footer.rights', { year: currentYear }) }}</p>
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

// Dynamic year for copyright
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>