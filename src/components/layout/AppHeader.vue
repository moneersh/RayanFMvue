<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg" :class="{ 'rtl-header': locale === 'ar' }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-3 group" :class="{ 'space-x-reverse': locale === 'ar' }">
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {{ locale === 'ar' ? 'راديو الريان' : 'Rayan FM' }}
              </h1>
              <p class="text-xs lg:text-sm text-gray-600 -mt-1">
                {{ locale === 'ar' ? 'إذاعة الريان' : 'Radio Station' }}
              </p>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8" :class="{ 'space-x-reverse': locale === 'ar' }">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="relative group px-3 py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            active-class="text-primary"
          >
            {{ locale === 'ar' ? item.nameAr : item.nameEn }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </nav>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4" :class="{ 'space-x-reverse': locale === 'ar' }">
          
          <!-- Live Status Badge -->
          <div class="hidden sm:flex items-center bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
            <div class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" :class="{ 'ml-2 mr-0': locale === 'ar' }"></div>
            {{ locale === 'ar' ? 'مباشر' : 'LIVE' }}
          </div>

          <!-- Language Toggle -->
          <button 
            @click="toggleLanguage"
            class="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300 group"
            :title="locale === 'ar' ? 'English' : 'العربية'"
          >
            <span class="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors duration-300">
              {{ locale === 'ar' ? 'EN' : 'ع' }}
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300 group"
            :class="{ 'bg-primary text-white': isMobileMenuOpen }"
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
        <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
          <div class="px-4 py-6 space-y-4">
            
            <!-- Mobile Navigation Links -->
            <div class="space-y-2">
              <router-link 
                v-for="item in navItems" 
                :key="item.path"
                :to="item.path"
                @click="closeMobileMenu"
                class="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all duration-300 group"
                active-class="text-primary bg-primary/5"
              >
                <span class="font-medium">{{ locale === 'ar' ? item.nameAr : item.nameEn }}</span>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" :class="{ 'rotate-180': locale === 'ar' }" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>

            <!-- Mobile Actions -->
            <div class="pt-4 border-t border-gray-200">
              <div class="flex items-center justify-between">
                
                <!-- Mobile Live Status -->
                <div class="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-medium">
                  <div class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" :class="{ 'ml-2 mr-0': locale === 'ar' }"></div>
                  {{ locale === 'ar' ? 'البث المباشر' : 'LIVE NOW' }}
                </div>

                <!-- Mobile Language Toggle -->
                <button 
                  @click="toggleLanguage"
                  class="flex items-center justify-center px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
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
  <div class="h-16 lg:h-20"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

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