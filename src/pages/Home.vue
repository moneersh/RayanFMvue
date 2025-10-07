<template>
  <AppShell>
    <!-- Hero Section -->
    <section class="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div class="hero-content text-center text-primary-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ $t('hero.title') }}</h1>
          <p class="mb-5 text-xl">{{ $t('hero.subtitle') }}</p>
          <p class="mb-8">{{ $t('hero.description') }}</p>
          <div class="space-x-4">
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

    <!-- Latest News -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('news.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('news.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <PostCard 
            v-for="post in latestNews" 
            :key="post.id" 
            :post="post" 
          />
        </div>
        
        <div class="text-center">
          <router-link to="/news" class="btn btn-primary">
            عرض جميع الأخبار
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('testimonials.subtitle') }}</p>
        </div>
        
        <Testimonials />
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-primary text-primary-content">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('newsletter.title') }}</h2>
        <p class="text-lg mb-8">{{ $t('newsletter.subtitle') }}</p>
        <NewsletterSignup />
      </div>
    </section>
  </AppShell>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import AppShell from '@/layouts/AppShell.vue'
import ProgramCard from '@/components/cards/ProgramCard.vue'
import PostCard from '@/components/cards/PostCard.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import NewsletterSignup from '@/components/sections/NewsletterSignup.vue'
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

// Mock latest news data
const latestNews = computed(() => [
  {
    id: '1',
    title: 'خبر هام من إذاعة الריּان',
    excerpt: 'نص مختصر للخبر الأول...',
    slug: 'important-news',
    publishedAt: new Date(),
    category: 'news' as const,
    tags: ['أخبار'],
    author: 'فريق التحرير',
    content: '',
    image: '/images/news/news-1.jpg'
  }
])

const playLive = () => {
  playerStore.playLiveStream()
}

onMounted(() => {
  programsStore.fetchPrograms()
})
</script>