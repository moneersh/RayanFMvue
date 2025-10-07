<template>
  <!-- Hero Section - President's Message -->
  <section 
    class="hero py-20 bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url('${currentBackground}')` }"
  >
    <!-- Background overlay -->
    <div class="absolute inset-0 bg-black/00"></div>
    <div class="hero-content text-center text-white relative z-10">
      <div class="max-w-4xl">
        <h1 class="mb-8 text-6xl font-black leading-loose bg-gradient-to-r from-rayan-orange to-white bg-clip-text text-transparent">{{ $t('contact.presidentTitle') }}</h1>
        
        <div class="prose prose-lg mx-auto text-center leading-relaxed space-y-6">
          <p class="mb-5 text-2xl font-semibold text-rayan-light">
            {{ $t('contact.presidentMessage') }}
          </p>
          
          <p class="mb-8 text-lg text-rayan-gray">
            {{ $t('contact.presidentMessage2') }}
          </p>
          
          <p class="mb-8 text-lg text-rayan-gray">
            {{ $t('contact.presidentMessage3') }}
          </p>
          
          <div class="text-center mt-8">
            <p class="text-lg font-semibold italic text-rayan-light">{{ $t('contact.presidentClosing') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Broadcasting Platforms Section -->
    <BroadcastingPlatforms @play-stream="handlePlayStream" />

    <!-- Contact Information Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('contact.reachUs') }}</h2>
          <p class="text-lg opacity-70">{{ $t('contact.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Phone -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300 flex flex-col justify-center items-center">
              <div class="card-body flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-6 mb-6">
                <a 
                href="tel:+971507811815"
                class="hover:scale-110 transition-transform duration-300"
                >
                <svg class="w-16 h-16 text-primary hover:text-primary-focus" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                </a>
                <a 
                href="https://wa.me/971507811815" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:scale-110 transition-transform duration-300"
                >
                <svg class="w-16 h-16 text-green-600 hover:text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                </svg>
                </a>
              </div>
              <div class="space-y-4"></div>
              </div>
            </div>

          <!-- Email -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300">
            <div class="card-body text-center p-8">
              <div class="flex justify-center mb-6">
                <svg class="w-16 h-16 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <a 
                href="mailto:info@rayanfm.net"
                class="text-lg font-semibold text-secondary hover:text-secondary-focus transition-colors duration-300 hover:underline break-all"
              >
                info@rayanfm.net
              </a>
            </div>
          </div>
        </div>


    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BroadcastingPlatforms from '@/components/contact/BroadcastingPlatforms.vue'
import { useRandomBackground } from '@/composables/useRandomBackground'

const { t, locale } = useI18n()

// Random background
const { currentBackground } = useRandomBackground()

// Handle stream play action from BroadcastingPlatforms component
const handlePlayStream = () => {
  // Here you can integrate with your player store or emit to parent
  console.log('Stream play requested from Contact page')
  // Example: playerStore.playLiveStream()
}
</script>