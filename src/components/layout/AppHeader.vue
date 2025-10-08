<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-rayan-dark/95 via-rayan-purple/95 to-rayan-dark/95 backdrop-blur-xl border-b border-rayan-orange/30 shadow-2xl overflow-hidden"
    :class="{ 'rtl-header': isArabic }"
  >
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-0 left-0 w-32 h-32 bg-rayan-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"
      />
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-rayan-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"
      />
    </div>
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Logo Section -->
        <div class="flex-shrink-0 flex items-center">
          <router-link
            to="/"
            class="flex items-center space-x-4 group"
            :class="{ 'space-x-reverse': isArabic }"
          >
            <!-- Rayan FM Logo -->
            <div
              class="relative w-16 h-16 lg:w-20 lg:h-20 group-hover:scale-105 transition-transform duration-300"
            >
              <!-- Logo Image with Brand Styling -->
              <div
                class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md ring-2 ring-rayan-orange/50 group-hover:ring-rayan-orange/80 transition-all duration-500 group-hover:scale-110"
              >
                <img
                  v-if="!logoError"
                  :src="logoUrl"
                  alt="Rayan FM Logo"
                  class="w-full h-full object-cover"
                  @error="handleLogoError"
                />
                <!-- Fallback with same styling if logo fails to load -->
                <div
                  v-if="logoError"
                  class="absolute inset-0 rounded-2xl bg-gradient-to-br from-rayan-orange to-rayan-purple shadow-2xl flex items-center justify-center"
                >
                  <div
                    class="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner"
                  >
                    <span
                      class="text-white font-black text-lg lg:text-xl drop-shadow-lg"
                      >R</span
                    >
                  </div>
                </div>
                <!-- Glass overlay effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                />
              </div>
              <!-- Enhanced sound waves animation -->
              <div
                class="absolute inset-0 rounded-2xl border-2 border-rayan-orange/40 animate-ping"
              />
              <div
                class="absolute inset-0 rounded-2xl border border-rayan-purple/30 animate-pulse animation-delay-1000"
              />
            </div>

            <!-- Brand Text -->
            <div class="flex flex-col">
              <h1
                class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-rayan-orange to-white bg-clip-text text-transparent leading-tight drop-shadow-lg"
              >
                {{ isArabic ? "راديو الريان" : "Rayan FM" }}
              </h1>
              <div
                class="flex items-center space-x-2 -mt-1"
                :class="{ 'space-x-reverse': isArabic }"
              >
                <span
                  class="text-sm lg:text-base font-bold text-white/90 drop-shadow-md"
                  >FM 90.2 MHz</span
                >
                <div
                  class="w-2 h-2 bg-gradient-to-r from-rayan-orange to-rayan-purple rounded-full animate-pulse shadow-lg"
                />
              </div>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav
          class="hidden lg:flex items-center space-x-8"
          :class="{ 'space-x-reverse': isArabic }"
        >
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group relative px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl text-white/90 hover:text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg border border-white/20 hover:border-rayan-orange/50"
            active-class="bg-gradient-to-r from-rayan-orange to-rayan-purple text-white border-rayan-orange/80 shadow-lg"
          >
            {{ t(item.key) }}
            <!-- Gradient overlay for hover state -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            />
          </router-link>
        </nav>

        <!-- Right Side Actions -->
        <div
          class="flex items-center space-x-4"
          :class="{ 'space-x-reverse': isArabic }"
        >
          <!-- Live Status Badge -->
          <div
            class="hidden sm:flex items-center bg-gradient-to-r from-rayan-orange to-rayan-purple px-4 py-2 rounded-2xl text-white text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20"
          >
            <div
              class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-md"
              :class="{ 'ml-2 mr-0': isArabic }"
            />
            {{ isArabic ? "مباشر" : "LIVE" }}
          </div>

          <!-- Language Toggle -->
          <button
            class="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-lg border border-white/20 hover:border-rayan-orange/50 group relative"
            :title="isArabic ? 'English' : 'العربية'"
            @click="toggleLanguage"
          >
            <span
              class="text-sm font-bold text-white/90 group-hover:text-rayan-orange transition-colors duration-300 drop-shadow-md relative z-10"
            >
              {{ isArabic ? "EN" : "ع" }}
            </span>
            <!-- Gradient overlay for hover state -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            />
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-lg border border-white/20 hover:border-rayan-orange/50 group relative"
            :class="{
              'bg-gradient-to-r from-rayan-orange to-rayan-purple text-white border-rayan-orange/80 shadow-lg':
                isMobileMenuOpen,
            }"
            @click="toggleMobileMenu"
          >
            <svg
              class="w-6 h-6 transition-transform duration-500 text-white/90 group-hover:text-rayan-orange drop-shadow-md relative z-10"
              :class="{ 'rotate-180': isMobileMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <!-- Gradient overlay for hover state -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            />
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
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden border-t border-rayan-orange/30 bg-gradient-to-br from-rayan-dark/95 via-rayan-purple/95 to-rayan-dark/95 backdrop-blur-xl"
        >
          <div class="px-4 py-6 space-y-4">
            <!-- Mobile Navigation Links -->
            <div class="space-y-2">
              <router-link
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="group flex items-center justify-between w-full px-6 py-4 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-2xl text-white/90 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-lg border border-white/10 hover:border-rayan-orange/50"
                active-class="bg-gradient-to-r from-rayan-orange to-rayan-purple text-white border-rayan-orange/80 shadow-lg"
                @click="closeMobileMenu"
              >
                <span class="font-semibold text-lg">{{ t(item.key) }}</span>
                <svg
                  class="w-5 h-5 text-white/60 group-hover:text-rayan-orange transition-colors duration-300"
                  :class="{ 'rotate-180': isArabic }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <!-- Gradient overlay for hover state -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                />
              </router-link>
            </div>

            <!-- Mobile Actions -->
            <div class="pt-6 border-t border-white/20">
              <div class="flex items-center justify-between space-x-4">
                <!-- Mobile Live Status -->
                <div
                  class="flex items-center bg-gradient-to-r from-rayan-orange to-rayan-purple px-4 py-3 rounded-2xl text-white text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <div
                    class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-md"
                    :class="{ 'ml-2 mr-0': isArabic }"
                  />
                  {{ isArabic ? "البث المباشر" : "LIVE NOW" }}
                </div>

                <!-- Mobile Language Toggle -->
                <button
                  class="flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold transition-all duration-500 hover:shadow-lg border border-white/20 hover:border-rayan-orange/50 group relative"
                  @click="toggleLanguage"
                >
                  <span class="relative z-10">{{
                    isArabic ? "English" : "العربية"
                  }}</span>
                  <!-- Gradient overlay for hover state -->
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-rayan-orange/20 to-rayan-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>

  <!-- Header Spacer -->
  <div class="h-20 lg:h-24" />
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useSiteStore } from "../../store/useSiteStore";
import { getAssetPath } from "../../utils/assets";

// Logo URL using Vite's base configuration
const logoUrl = ref(getAssetPath("logo.webp"));

// Use i18n and site store - same approach as footer
const { t, locale } = useI18n();
const siteStore = useSiteStore();

// Unified reactive flag for Arabic state used across template
const isArabic = computed(() => locale.value === "ar");

// Language toggle function that matches footer approach
const toggleLanguage = () => {
  const newLocale = locale.value === "ar" ? "en" : "ar";
  locale.value = newLocale;
  siteStore.setLocale(newLocale);
};

// Watch for locale changes to keep store in sync
watch(
  locale,
  (newLocale) => {
    if (siteStore.currentLocale !== newLocale) {
      siteStore.setLocale(newLocale);
    }
  },
  { immediate: true }
);

// Mobile menu state
const isMobileMenuOpen = ref(false);
const logoError = ref(false);

// Logo error handling
const handleLogoError = () => {
  logoError.value = true;
};

// Navigation items
const navItems = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "nav.about" },
  { path: "/programs", key: "nav.programs" },
  { path: "/contact", key: "nav.contact" },
];

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.rtl-header {
  direction: rtl;
}

/* Animation delays for decorative elements */
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom hover effects */
.group:hover .backdrop-blur-sm {
  backdrop-filter: blur(12px);
}

/* Enhanced gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Glass morphism enhancement */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Ensure proper z-index stacking */
.fixed {
  position: fixed;
}

/* Enhanced shadow effects */
.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.drop-shadow-md {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
</style>
