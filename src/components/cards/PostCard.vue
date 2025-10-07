<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
    <figure class="px-4 pt-4" v-if="post.image">
      <img :src="post.image" :alt="post.title" class="rounded-xl h-48 w-full object-cover">
    </figure>
    <div class="card-body">
      <div class="badge badge-primary badge-sm">{{ post.category }}</div>
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="text-sm opacity-70">{{ $t('news.by') }} {{ post.author }}</p>
      <p class="text-sm opacity-70">{{ formatDate(post.publishedAt) }}</p>
      <p class="text-sm mb-4">{{ post.excerpt }}</p>
      <div class="card-actions justify-end">
        <router-link :to="`/${post.category}/${post.slug}`" class="btn btn-primary btn-sm">
          {{ $t('news.readMore') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/content'

interface Props {
  post: Post
}

defineProps<Props>()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ar-SA').format(date)
}
</script>