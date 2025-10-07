<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-rayan-light/95 backdrop-blur-lg border-b border-rayan-gray/50 shadow-lg" :class="{ 'rtl-header': locale === 'ar' }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">
        
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-4 group" :class="{ 'space-x-reverse': locale === 'ar' }">
            <!-- Rayan FM Logo -->
            <div class="relative w-16 h-16 lg:w-20 lg:h-20 group-hover:scale-105 transition-transform duration-300">
              <!-- Logo Image with Brand Styling -->
              <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-lg ring-2 ring-rayan-orange/30 group-hover:ring-rayan-orange/50 transition-all duration-300">
                <img 
                  :src="logoUrl" 
                  alt="Rayan FM Logo"
                  class="w-full h-full object-cover"
                  @error="handleLogoError"
                  v-if="!logoError"
                >
                <!-- Fallback with same styling if logo fails to load -->
                <div v-if="logoError" class="absolute inset-0 rounded-full bg-gradient-to-br from-rayan-purple to-rayan-purple/80 shadow-lg flex items-center justify-center">
                  <div class="w-8 h-8 lg:w-10 lg:h-10 bg-rayan-orange rounded-lg flex items-center justify-center shadow-inner">
                    <span class="text-white font-black text-lg lg:text-xl">R</span>
                  </div>
                </div>
              </div>
              <!-- Sound waves animation -->
              <div class="absolute inset-0 rounded-full border-2 border-rayan-orange/30 animate-ping"></div>
            </div>
            
            <!-- Brand Text -->
            <div class="flex flex-col">
              <h1 class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-rayan-orange to-rayan-purple bg-clip-text text-transparent leading-tight">
                {{ locale === 'ar' ? 'راديو الريان' : 'Rayan FM' }}
              </h1>
              <div class="flex items-center space-x-2 -mt-1" :class="{ 'space-x-reverse': locale === 'ar' }">
                <span class="text-sm lg:text-base font-bold text-rayan-purple">FM 90.2 MHz</span>
                <div class="w-2 h-2 bg-rayan-orange rounded-full animate-pulse"></div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8" :class="{ 'space-x-reverse': locale === 'ar' }">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="relative group px-3 py-2 text-rayan-purple hover:text-rayan-orange font-semibold transition-colors duration-300"
            active-class="text-rayan-orange"
          >
            {{ locale === 'ar' ? item.nameAr : item.nameEn }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rayan-orange to-rayan-purple group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </nav>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4" :class="{ 'space-x-reverse': locale === 'ar' }">
          
          <!-- Live Status Badge -->
          <div class="hidden sm:flex items-center bg-rayan-orange/10 text-rayan-orange px-4 py-2 rounded-full text-sm font-bold border border-rayan-orange/20">
            <div class="w-2 h-2 bg-rayan-orange rounded-full mr-2 animate-pulse" :class="{ 'ml-2 mr-0': locale === 'ar' }"></div>
            {{ locale === 'ar' ? 'مباشر' : 'LIVE' }}
          </div>

          <!-- Language Toggle -->
          <button 
            @click="toggleLanguage"
            class="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-rayan-gray hover:bg-rayan-orange/10 transition-colors duration-300 group"
            :title="locale === 'ar' ? 'English' : 'العربية'"
          >
            <span class="text-sm font-bold text-rayan-purple group-hover:text-rayan-orange transition-colors duration-300">
              {{ locale === 'ar' ? 'EN' : 'ع' }}
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-rayan-gray hover:bg-rayan-orange/10 transition-colors duration-300 group"
            :class="{ 'bg-rayan-orange text-white': isMobileMenuOpen }"
          >
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" d="M3 12h18m-9-9v18"/>
              <path v-else d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-rayan-gray/50 bg-rayan-light/95 backdrop-blur-lg">
          <div class="px-4 py-6 space-y-4">
            
            <!-- Mobile Navigation Links -->
            <div class="space-y-2">
              <router-link 
                v-for="item in navItems" 
                :key="item.path"
                :to="item.path"
                @click="closeMobileMenu"
                class="flex items-center justify-between w-full px-4 py-3 text-rayan-purple hover:text-rayan-orange hover:bg-rayan-orange/5 rounded-xl transition-all duration-300 group"
                active-class="text-rayan-orange bg-rayan-orange/10"
              >
                <span class="font-medium">{{ locale === 'ar' ? item.nameAr : item.nameEn }}</span>
                <svg class="w-5 h-5 text-rayan-gray group-hover:text-rayan-orange transition-colors duration-300" :class="{ 'rotate-180': locale === 'ar' }" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>

            <!-- Mobile Actions -->
            <div class="pt-4 border-t border-rayan-gray">
              <div class="flex items-center justify-between">
                
                <!-- Mobile Live Status -->
                <div class="flex items-center bg-rayan-orange/10 text-rayan-orange px-4 py-2 rounded-xl text-sm font-bold border border-rayan-orange/20">
                  <div class="w-2 h-2 bg-rayan-orange rounded-full mr-2 animate-pulse" :class="{ 'ml-2 mr-0': locale === 'ar' }"></div>
                  {{ locale === 'ar' ? 'البث المباشر' : 'LIVE NOW' }}
                </div>

                <!-- Mobile Language Toggle -->
                <button 
                  @click="toggleLanguage"
                  class="flex items-center justify-center px-4 py-2 rounded-xl bg-rayan-purple text-white font-semibold hover:bg-rayan-purple/90 transition-colors duration-300"
                >
                  {{ locale === 'ar' ? 'English' : 'العربية' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>

  <!-- Header Spacer -->
  <div class="h-20 lg:h-24"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
// Logo URL using Vite's base configuration
const logoUrl = ref('./logo.webp')

// Try to use i18n if available, fallback gracefully
let locale: any
let toggleLanguage: any
try {
  const { locale: i18nLocale } = useI18n()
  locale = i18nLocale
  toggleLanguage = () => {
    locale.value = locale.value === 'ar' ? 'en' : 'ar'
  }
} catch (e) {
  locale = { value: 'en' }
  toggleLanguage = () => {
    locale.value = locale.value === 'ar' ? 'en' : 'ar'
  }
}

// Mobile menu state
const isMobileMenuOpen = ref(false)
const logoError = ref(false)

// Logo error handling
const handleLogoError = () => {
  logoError.value = true
}

// Navigation items
const navItems = [
  { path: '/', nameEn: 'Home', nameAr: 'الرئيسية' },
  { path: '/about', nameEn: 'About', nameAr: 'من نحن' },
  { path: '/programs', nameEn: 'Programs', nameAr: 'البرامج' },
  { path: '/contact', nameEn: 'Contact', nameAr: 'اتصل بنا' }
]

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.rtl-header {
  direction: rtl;
}

/* Custom hover effects */
.group:hover .backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Ensure proper z-index stacking */
.fixed {
  position: fixed;
}
</style>