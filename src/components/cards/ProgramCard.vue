<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <figure class="w-full h-64 overflow-hidden">
      <img 
        :src="program.image" 
        :alt="program.title" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        @error="handleImageError"
        loading="lazy"
      >
    </figure>
    <div class="card-body p-6">
      <h2 class="card-title text-xl font-bold mb-3">{{ program.title }}</h2>
      <div class="space-y-2 mb-4">
        <p class="text-sm opacity-70 flex items-center">
          <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
          {{ $t('programs.host') }}: {{ program.host }}
        </p>
        <p class="text-sm opacity-70 flex items-center">
          <span class="w-2 h-2 bg-secondary rounded-full mr-2"></span>
          {{ $t('programs.schedule') }}: {{ program.schedule }}
        </p>
      </div>
      <p class="text-sm leading-relaxed">{{ program.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '@/types/content'

interface Props {
  program: Program
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback to a default program image
  img.src = '/images/programs/default-program.svg'
  console.warn(`Failed to load image for program`)
}
</script>