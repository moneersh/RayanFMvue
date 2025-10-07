<template>
  <AppShell>
    <!-- Hero Section -->
    <section class="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div class="hero-content text-center text-primary-content">
        <div class="max-w-4xl">
          <h1 class="mb-5 text-5xl font-bold">{{ $t('hero.title') }}</h1>
          <p class="mb-5 text-xl">{{ $t('hero.subtitle') }}</p>
          <p class="mb-8 text-lg">{{ $t('hero.description') }}</p>
          <div class="space-x-4 mb-8">
            <button @click="playLive" class="btn btn-accent btn-lg">
              {{ $t('hero.listenLive') }}
            </button>
            <router-link to="/programs" class="btn btn-outline btn-lg">
              {{ $t('hero.explorePrograms') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('hero.welcome') }}</h2>
          <h3 class="text-2xl font-semibold mb-8">{{ $t('hero.title') }}</h3>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="prose prose-lg mx-auto text-center mb-12">
            <p class="text-lg leading-relaxed">{{ $t('hero.aboutText') }}</p>
          </div>
          
          <div class="prose prose-lg mx-auto text-center">
            <p class="text-lg leading-relaxed">{{ $t('hero.missionText') }}</p>
          </div>
          
          <div class="text-center mt-8">
            <router-link to="/about" class="btn btn-primary">
              {{ $t('hero.learnMore') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Programs -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('programs.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('programs.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ProgramCard 
            v-for="program in featuredPrograms" 
            :key="program.id" 
            :program="program" 
          />
        </div>
        
        <div class="text-center">
          <router-link to="/programs" class="btn btn-primary">
            {{ $t('programs.viewAll') }}
          </router-link>
        </div>
      </div>
    </section>






  </AppShell>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import AppShell from '@/layouts/AppShell.vue'
import ProgramCard from '@/components/cards/ProgramCard.vue'



import { useProgramsStore } from '@/store/useProgramsStore'
import { usePlayerStore } from '@/store/usePlayerStore'
import { useSeo } from '@/composables/useSeo'

const programsStore = useProgramsStore()
const playerStore = usePlayerStore()

// SEO
useSeo({
  title: 'الرئيسية',
  description: 'إذاعة الريّان - صوت الحق والإسلام'
})

const featuredPrograms = computed(() => programsStore.featuredPrograms)



const playLive = () => {
  playerStore.playLiveStream()
}

onMounted(() => {
  programsStore.fetchPrograms()
})
</script>