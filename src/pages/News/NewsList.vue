<template>
  <AppShell>
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ $t('news.title') }}</h1>
        <p class="text-lg opacity-80">{{ $t('news.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard 
          v-for="post in newsPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
      
      <div v-if="newsPosts.length === 0" class="text-center py-12">
        <p class="text-lg opacity-60">{{ $t('common.noData') }}</p>
      </div>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppShell from '@/layouts/AppShell.vue'
import PostCard from '@/components/cards/PostCard.vue'
import { useSeo } from '@/composables/useSeo'
import type { Post } from '@/types/content'

useSeo({
  title: 'الأخبار',
  description: 'آخر الأخبار والمستجدات من إذاعة الריّان'
})

// Mock news data
const newsPosts = ref<Post[]>([
  {
    id: '1',
    title: 'إطلاق برنامج جديد في إذاعة الริّان',
    content: 'محتوى الخبر...',
    excerpt: 'تعلن إذاعة الریّان عن إطلاق برنامج جديد يهتم بقضايا الشباب المسلم',
    slug: 'new-program-launch',
    publishedAt: new Date(),
    category: 'news',
    tags: ['برامج', 'إعلان'],
    author: 'فريق التحرير',
    image: '/images/news/new-program.jpg'
  }
])
</script>