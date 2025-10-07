<template>
  <AppShell>
    <!-- Hero Section - President's Message -->
    <section class="hero min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
      <div class="hero-content text-center max-w-5xl">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-8">{{ $t('contact.presidentTitle') }}</h1>
          
          <div class="prose prose-lg max-w-4xl mx-auto text-justify leading-relaxed space-y-6">
            <p class="text-lg">
              {{ $t('contact.presidentMessage') }}
            </p>
            
            <p class="text-lg">
              {{ $t('contact.presidentMessage2') }}
            </p>
            
            <p class="text-lg">
              {{ $t('contact.presidentMessage3') }}
            </p>
            
            <div class="text-center mt-8">
              <p class="text-lg font-semibold italic">{{ $t('contact.presidentClosing') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Let's Connect Today Section -->
    <section class="py-16 bg-primary/10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-6 text-primary">{{ $t('contact.connectToday') }}</h2>
          <p class="text-lg max-w-3xl mx-auto leading-relaxed">{{ $t('contact.connectMessage') }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('contact.reachUs') }}</h2>
          <p class="text-lg opacity-70">{{ $t('contact.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Phone -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300">
            <div class="card-body text-center p-8">
              <i class="fas fa-phone text-4xl text-primary mb-6"></i>
              <h3 class="card-title justify-center mb-4 text-xl font-bold text-base-content">{{ $t('contact.phone') }}</h3>
              <div class="space-y-4">
                <a 
                  href="tel:+971507811815" 
                  class="block text-lg font-semibold text-primary hover:text-primary-focus transition-colors duration-300 hover:underline"
                >
                  +971507811815
                </a>
                <a 
                  href="https://wa.me/971507811815" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block text-lg font-semibold text-green-600 hover:text-green-700 transition-colors duration-300 hover:underline"
                >
                  <i class="fab fa-whatsapp mr-2"></i>
                  {{ locale === 'en' ? 'WhatsApp' : 'واتساب' }}
                </a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300">
            <div class="card-body text-center p-8">
              <i class="fas fa-envelope text-4xl text-secondary mb-6"></i>
              <h3 class="card-title justify-center mb-4 text-xl font-bold text-base-content">{{ $t('contact.email') }}</h3>
              <a 
                href="mailto:info@rayanfm.net"
                class="text-lg font-semibold text-secondary hover:text-secondary-focus transition-colors duration-300 hover:underline break-all"
              >
                info@rayanfm.net
              </a>
            </div>
          </div>

          <!-- Address -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300">
            <div class="card-body text-center p-8">
              <i class="fas fa-map-marker-alt text-4xl text-accent mb-6"></i>
              <h3 class="card-title justify-center mb-4 text-xl font-bold text-base-content">{{ $t('contact.address') }}</h3>
              <a 
                :href="locale === 'en' ? 'https://en.wikipedia.org/wiki/Suwayda' : 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D8%A7%D8%A1'"
                target="_blank" 
                rel="noopener noreferrer"
                class="text-lg font-semibold text-accent hover:text-accent-focus transition-colors duration-300 hover:underline"
              >
                {{ $t('contact.addressValue') }}
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppShell from '@/layouts/AppShell.vue'
import { useSeo } from '@/composables/useSeo'

const { t, locale } = useI18n()

// SEO setup
useSeo({
  title: t('contact.title'),
  description: t('contact.subtitle')
})
</script>