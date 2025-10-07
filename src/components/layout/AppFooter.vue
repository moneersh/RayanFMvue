<template>
  <!-- Footer -->
  <footer class="relative bg-gradient-to-br from-primary via-primary-focus to-accent text-primary-content overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>
    
    <div class="relative container mx-auto px-6 py-20" :class="{ 'rtl-container': locale === 'ar' }">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16" :class="{ 'rtl-grid': locale === 'ar' }">
        <!-- About Section -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center mb-8">
            <div class="w-2 h-12 bg-gradient-to-b from-accent to-secondary rounded-full mr-4"></div>
            <h3 class="font-bold text-3xl bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              {{ $t('footer.about') }}
            </h3>
          </div>
          <p class="text-base leading-relaxed opacity-90 mb-8 max-w-lg">{{ $t('footer.description') }}</p>
          
          <!-- Enhanced Social Media Section -->
          <div class="space-y-4">
            <h4 class="font-semibold text-lg text-accent">{{ $t('footer.followUs') }}</h4>
            <div class="flex gap-3 flex-wrap">
              <!-- Facebook -->
              <a v-if="siteStore.settings.socialMedia.facebook"
                 :href="siteStore.settings.socialMedia.facebook" 
                 class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Facebook">
                <svg class="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <!-- Instagram -->
              <a v-if="siteStore.settings.socialMedia.instagram"
                 :href="siteStore.settings.socialMedia.instagram" 
                 class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Instagram">
                <svg class="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538zm7.424 0c-2.508 0-4.537-2.03-4.537-4.538s2.029-4.537 4.537-4.537 4.538 2.029 4.538 4.537-2.03 4.538-4.538 4.538z"/>
                </svg>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <!-- YouTube -->
              <a v-if="siteStore.settings.socialMedia.youtube"
                 :href="siteStore.settings.socialMedia.youtube" 
                 class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="YouTube">
                <svg class="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <!-- Telegram -->
              <a v-if="siteStore.settings.socialMedia.telegram"
                 :href="siteStore.settings.socialMedia.telegram" 
                 class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Telegram">
                <svg class="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.348 0 0 5.348 0 11.944s5.348 11.944 11.944 11.944 11.944-5.348 11.944-11.944S18.54 0 11.944 0zm4.618 7.703l-1.73 8.165c-.13.596-.469.744-.95.463l-2.625-1.934-1.267 1.22c-.14.14-.259.259-.532.259l.19-2.683 4.87-4.4c.212-.188-.046-.293-.329-.106l-6.026 3.796-2.596-.811c-.564-.177-.576-.564.118-.834l10.15-3.914c.469-.177.881.106.727.835z"/>
                </svg>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <!-- WhatsApp -->
              <a v-if="siteStore.settings.socialMedia.whatsapp"
                 :href="siteStore.settings.socialMedia.whatsapp" 
                 class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="WhatsApp">
                <svg class="w-6 h-6 text-white group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                </svg>
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <div class="flex items-center mb-6">
            <div class="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded-full mr-3"></div>
            <h3 class="font-bold text-xl text-white">{{ $t('footer.quickLinks') }}</h3>
          </div>
          <nav class="space-y-3">
            <router-link to="/" class="block text-white/80 hover:text-accent hover:translate-x-2 transition-all duration-300 group">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('nav.home') }}
              </span>
            </router-link>
            <router-link to="/about" class="block text-white/80 hover:text-accent hover:translate-x-2 transition-all duration-300 group">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('nav.about') }}
              </span>
            </router-link>
            <router-link to="/programs" class="block text-white/80 hover:text-accent hover:translate-x-2 transition-all duration-300 group">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('nav.programs') }}
              </span>
            </router-link>
            <router-link to="/contact" class="block text-white/80 hover:text-accent hover:translate-x-2 transition-all duration-300 group">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('nav.contact') }}
              </span>
            </router-link>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="flex items-center mb-6">
            <div class="w-2 h-8 bg-gradient-to-b from-accent to-secondary rounded-full mr-3"></div>
            <h3 class="font-bold text-xl text-white">{{ $t('footer.contact') }}</h3>
          </div>
          <div class="space-y-5">
            <div class="group flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <a href="tel:+971507811815" class="text-white/90 hover:text-accent transition-colors duration-300 font-medium">
                +971507811815
              </a>
            </div>
            
            <div class="group flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <a href="mailto:info@rayanfm.net" class="text-white/90 hover:text-accent transition-colors duration-300 font-medium break-all">
                info@rayanfm.net
              </a>
            </div>
            
            <div class="group flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span class="text-white/90 font-medium">{{ locale === 'en' ? 'As Suwayda, Syria' : 'السويداء، سوريا' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Bottom Section -->
      <div class="relative mt-16 pt-8">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-white/80 text-sm font-medium">
              {{ $t('footer.rights', { year: currentYear }) }}
            </p>
          </div>
          
          <div class="flex items-center justify-center md:justify-end">
            <div class="text-accent text-sm font-medium">
              ✨ {{ locale === 'en' ? 'Rayan FM Radio' : 'إذاعة راديو الريان' }} ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSiteStore } from '@/store/useSiteStore'

const { locale } = useI18n()
const siteStore = useSiteStore()

// Dynamic year for copyright
const currentYear = new Date().getFullYear()
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.1); }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
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

/* Enhanced social media hover effects */
.group:hover svg {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Floating animation for decorative elements */
.absolute.top-0.left-0 {
  animation: float 6s ease-in-out infinite;
}

.absolute.top-0.right-0 {
  animation: float 8s ease-in-out infinite reverse;
}

.absolute.bottom-0.left-1\/3 {
  animation: float 10s ease-in-out infinite;
}

/* Enhanced Arabic text spacing and styling */
[dir="rtl"] {
  font-family: 'Cairo', 'Noto Sans Arabic', sans-serif;
}

[dir="rtl"] .space-y-3 > * + * {
  margin-top: 1.25rem;
  margin-right: 0.75rem;
}

[dir="rtl"] .space-y-4 > * + * {
  margin-top: 1.5rem;
  margin-right: 1rem;
}

[dir="rtl"] .space-y-5 > * + * {
  margin-top: 1.75rem;
  margin-right: 1.25rem;
}

[dir="rtl"] .space-y-6 > * + * {
  margin-top: 2.25rem;
  margin-right: 1.5rem;
}

/* Enhanced Arabic text rendering with better spacing */
[dir="rtl"] p,
[dir="rtl"] span,
[dir="rtl"] a,
[dir="rtl"] div {
  letter-spacing: 0.03em;
  word-spacing: 0.15em;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

[dir="rtl"] h1,
[dir="rtl"] h2,
[dir="rtl"] h3,
[dir="rtl"] h4 {
  letter-spacing: 0.06em;
  word-spacing: 0.2em;
  line-height: 1.6;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
}

/* Arabic-specific grid and flex spacing */
[dir="rtl"] .grid {
  gap: 2.5rem;
}

[dir="rtl"] .flex {
  gap: 1rem;
}

[dir="rtl"] .flex-col {
  gap: 1.25rem;
}

/* Enhanced padding and margins for Arabic cards */
[dir="rtl"] .bg-white\/5,
[dir="rtl"] .bg-white\/10,
[dir="rtl"] .backdrop-blur-sm {
  padding: 1.25rem;
  margin: 0.5rem 0;
}

/* Better Arabic link styling */
[dir="rtl"] a {
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}

[dir="rtl"] a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-0.25rem);
}

/* Arabic navigation improvements */
[dir="rtl"] nav {
  padding-right: 1rem;
}

[dir="rtl"] nav a {
  margin: 0.5rem 0;
  padding-right: 1rem;
}

/* Copyright and bottom section Arabic styling */
[dir="rtl"] .text-center {
  text-align: right;
  padding-right: 1rem;
}

[dir="rtl"] .justify-between {
  justify-content: space-between;
  padding: 0 1.5rem;
}

/* Arabic container and grid enhancements */
.rtl-container {
  padding-left: 2rem;
  padding-right: 2rem;
  direction: rtl;
}

.rtl-grid {
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

@media (min-width: 768px) {
  .rtl-grid {
    gap: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .rtl-grid {
    gap: 4rem;
  }
}

/* Arabic section spacing */
[dir="rtl"] .lg\:col-span-2 {
  padding-left: 2rem;
  margin-bottom: 2rem;
}

/* Enhanced Arabic social media section */
[dir="rtl"] .flex.gap-3 {
  gap: 1.25rem;
  justify-content: flex-start;
  margin-top: 1rem;
}

/* Arabic quick links styling */
[dir="rtl"] nav.space-y-3 {
  padding-right: 1.5rem;
}

[dir="rtl"] nav.space-y-3 a {
  display: block;
  padding: 0.75rem 1rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

[dir="rtl"] nav.space-y-3 a:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateX(-0.5rem);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>