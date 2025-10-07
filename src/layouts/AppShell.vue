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
    <AppFooter />

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
import AppFooter from '@/components/layout/AppFooter.vue'

const { locale } = useI18n()
const siteStore = useSiteStore()
const { isRTL, currentLocale, toggleLanguage } = useRtl()
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>