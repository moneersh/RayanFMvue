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
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-start">
          <!-- About Section -->
          <div>
            <h3 class="font-bold text-lg mb-4">{{ $t('footer.about') }}</h3>
            <p class="text-sm opacity-80">{{ siteStore.siteDescription }}</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-bold text-lg mb-4">{{ $t('footer.quickLinks') }}</h3>
            <FooterNav />
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-bold text-lg mb-4">{{ $t('footer.contact') }}</h3>
            <div class="text-sm space-y-2">
              <p>{{ siteStore.settings.contact.email }}</p>
              <p>{{ siteStore.settings.contact.phone }}</p>
              <p>{{ siteStore.contactAddress }}</p>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="font-bold text-lg mb-4">{{ $t('footer.followUs') }}</h3>
            <div class="flex gap-2">
              <a v-for="(url, platform) in siteStore.settings.socialMedia" 
                 :key="platform" 
                 :href="url" 
                 class="btn btn-outline btn-sm"
                 target="_blank"
                 rel="noopener noreferrer">
                {{ platform }}
              </a>
            </div>
          </div>
        </div>

        <div class="divider"></div>
        <div class="text-center">
          <p class="text-sm opacity-80">{{ $t('footer.rights') }}</p>
        </div>
      </div>
    </footer>

    <!-- Audio Player Bar -->
    <PlayerBar />
  </div>
</template>

<script setup lang="ts">
import { useSiteStore } from '@/store/useSiteStore'
import { useRtl } from '@/composables/useRtl'
import MainNav from '@/components/nav/MainNav.vue'
import FooterNav from '@/components/nav/FooterNav.vue'
import PlayerBar from '@/components/podcast/PlayerBar.vue'

const siteStore = useSiteStore()
const { isRTL, currentLocale, toggleLanguage } = useRtl()
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>