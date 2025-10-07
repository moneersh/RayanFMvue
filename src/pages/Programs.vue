<template>
  <div class="min-h-screen bg-rayan-light">
    <!-- Hero Section -->
    <section 
      class="hero py-20 bg-cover bg-center bg-no-repeat relative"
      :style="{ backgroundImage: `url('${currentBackground}')` }"
    >
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-black/0" />
      <div class="hero-content text-center text-white relative z-10">
        <div class="max-w-4xl">
          <h1 class="mb-8 text-6xl font-black leading-loose bg-gradient-to-r from-rayan-orange to-white bg-clip-text text-transparent">
            {{ locale === 'ar' ? 'البرامج والفريق' : 'Programs & Crew' }}
          </h1>
          <p class="mb-5 text-2xl font-semibold text-rayan-light">
            {{ locale === 'ar' ? 'مجموعة متنوعة من البرامج الثقافية والاجتماعية وتعرف على فريق العمل المميز' : 'A diverse collection of cultural and social programs and meet our amazing crew' }}
          </p>
          <p class="mb-8 text-lg text-rayan-gray">
            {{ locale === 'ar' ? 'استكشف عالم الإذاعة معنا واستمتع بأفضل المحتوى' : 'Explore the world of radio with us and enjoy the best content' }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <!-- Enhanced Live Stream Button -->
            <button 
              class="group relative bg-gradient-to-r from-rayan-orange via-rayan-orange to-rayan-purple text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" 
              @click="playLive"
            >
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-r from-rayan-purple via-rayan-orange to-rayan-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <!-- Live indicator -->
              <div class="absolute top-2 right-2 flex items-center">
                <div class="w-3 h-3 bg-rayan-orange rounded-full animate-pulse mr-2" />
                <span class="text-xs font-medium">{{ locale === 'ar' ? 'مباشر' : 'LIVE' }}</span>
              </div>
              
              <!-- Button content -->
              <div class="relative flex items-center justify-center">
                <div class="text-3xl mr-3 group-hover:animate-bounce">
                  🎧
                </div>
                <div>
                  <div class="text-xl font-bold">
                    {{ locale === 'ar' ? 'البث المباشر' : 'Listen Live' }}
                  </div>
                  <div class="text-sm opacity-90">
                    {{ locale === 'ar' ? 'اضغط للاستماع' : 'Click to Listen' }}
                  </div>
                </div>
              </div>
              
              <!-- Ripple effect -->
              <div class="absolute inset-0 rounded-2xl opacity-30 group-hover:animate-ping bg-white" />
            </button>
            
            <!-- Explore Programs Button -->
            <router-link 
              to="/programs" 
              class="group bg-white/20 hover:bg-white/30 text-white px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
            >
              <div class="flex items-center justify-center">
                <div class="text-2xl mr-3 group-hover:animate-bounce">
                  📻
                </div>
                <div>
                  <div class="font-bold">
                    {{ locale === 'ar' ? 'عرض البرامج' : 'View Programs' }}
                  </div>
                  <div class="text-sm opacity-90">
                    {{ locale === 'ar' ? 'استكشف المزيد' : 'Discover More' }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Programs -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-rayan-purple">
            {{ $t('programs.title') }}
          </h2>
          <p class="text-lg text-rayan-dark/70">
            {{ $t('programs.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ProgramCard 
            v-for="program in featuredPrograms" 
            :key="program.id" 
            :program="program" 
            class="transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Enhanced Call to Action -->
    <section class="py-20 bg-gradient-to-br from-rayan-light via-white to-rayan-orange/10 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-rayan-orange rounded-full blur-xl" />
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-rayan-purple rounded-full blur-xl" />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-rayan-orange rounded-full blur-2xl" />
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="mb-12">
          <h2 class="text-4xl md:text-5xl font-black text-rayan-purple mb-6 bg-gradient-to-r from-rayan-purple to-rayan-orange bg-clip-text text-transparent">
            {{ locale === 'ar' ? 'استمع الآن' : 'Listen Now' }}
          </h2>
          <p class="text-xl text-rayan-dark/80 max-w-2xl mx-auto">
            {{ locale === 'ar' ? 'انضم إلينا واستمع إلى أفضل البرامج مباشرة من إذاعة الريان' : 'Join us and listen to the best programs live from Rayan Radio' }}
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <!-- Enhanced Live Stream Button -->
          <button 
            class="group relative bg-gradient-to-r from-primary via-primary-focus to-secondary text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" 
            @click="playLive"
          >
            <!-- Animated background -->
            <div class="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <!-- Live indicator -->
            <div class="absolute top-2 right-2 flex items-center">
              <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2" />
              <span class="text-xs font-medium">{{ locale === 'ar' ? 'مباشر' : 'LIVE' }}</span>
            </div>
            
            <!-- Button content -->
            <div class="relative flex items-center justify-center">
              <div class="text-3xl mr-3 group-hover:animate-bounce">
                🎧
              </div>
              <div>
                <div class="text-xl font-bold">
                  {{ locale === 'ar' ? 'البث المباشر' : 'Live Stream' }}
                </div>
                <div class="text-sm opacity-90">
                  {{ locale === 'ar' ? 'اضغط للاستماع' : 'Click to Listen' }}
                </div>
              </div>
            </div>
            
            <!-- Ripple effect -->
            <div class="absolute inset-0 rounded-2xl opacity-30 group-hover:animate-ping bg-white" />
          </button>
          
          <!-- Download App Button -->
          <button class="group bg-white hover:bg-gray-50 text-gray-800 px-10 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-gray-200 hover:border-primary/30">
            <div class="flex items-center justify-center">
              <div class="text-2xl mr-3 group-hover:animate-bounce">
                📱
              </div>
              <div>
                <div class="font-bold">
                  {{ locale === 'ar' ? 'تحميل التطبيق' : 'Download App' }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ locale === 'ar' ? 'قريباً' : 'Coming Soon' }}
                </div>
              </div>
            </div>
          </button>
        </div>
        
        <!-- Live Status Indicator -->
        <div
          class="flex justify-center items-center space-x-6"
          :class="{ 'space-x-reverse': locale === 'ar' }"
        >
          <div class="flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <div
              class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"
              :class="{ 'ml-2 mr-0': locale === 'ar' }"
            />
            <span class="font-semibold">{{ locale === 'ar' ? 'الإذاعة متصلة' : 'Radio Online' }}</span>
          </div>
          <div class="text-gray-600">
            <span class="font-medium">{{ locale === 'ar' ? 'المستمعون الآن:' : 'Listeners Now:' }}</span>
            <span class="font-bold text-primary ml-2">1,247+</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Staff Team Section -->
    <StaffTeam />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ProgramCard from '../components/cards/ProgramCard.vue'
import StaffTeam from '../components/about/StaffTeam.vue'
import { useProgramsStore } from '../store/useProgramsStore'
import { usePlayerStore } from '../store/usePlayerStore'
import { useSeo } from '../composables/useSeo'
import { useRandomBackground } from '../composables/useRandomBackground'

const { locale, t } = useI18n()

const programsStore = useProgramsStore()
const playerStore = usePlayerStore()

// Random background
const { currentBackground } = useRandomBackground()

const featuredPrograms = computed(() => programsStore.featuredPrograms)

const playLive = () => {
  playerStore.playLiveStream()
}

// SEO
useSeo({
  title: t('programs.title'),
  description: t('programs.subtitle')
})

onMounted(() => {
  programsStore.fetchPrograms()
})
</script>