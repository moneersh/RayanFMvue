<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
    <figure class="w-full h-64 overflow-hidden">
      <img 
        :src="getImagePath(program.image)" 
        :alt="localizedTitle" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        @error="handleImageError"
        loading="lazy"
      >
    </figure>
    <div class="card-body p-6">
      <h2 class="card-title text-xl font-bold mb-3">{{ localizedTitle }}</h2>
      <div class="space-y-2 mb-4">
        <p class="text-sm opacity-70 flex items-center">
          <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
          {{ $t('programs.host') }}: {{ localizedHost }}
        </p>
        <p class="text-sm opacity-70 flex items-center">
          <span class="w-2 h-2 bg-secondary rounded-full mr-2"></span>
          {{ $t('programs.schedule') }}: {{ localizedSchedule }}
        </p>
      </div>
      <p class="text-sm leading-relaxed">{{ localizedDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '@/types/content'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { getImagePath } from '@/utils/assets'

interface Props {
  program: Program
}

const props = defineProps<Props>()
const { locale } = useI18n()

// Computed properties for localized content
const localizedTitle = computed(() => {
  return locale.value === 'en' ? props.program.titleEn || props.program.title : props.program.title
})

const localizedDescription = computed(() => {
  return locale.value === 'en' ? props.program.descriptionEn || props.program.description : props.program.description
})

const localizedHost = computed(() => {
  return locale.value === 'en' ? props.program.hostEn || props.program.host : props.program.host
})

const localizedSchedule = computed(() => {
  return locale.value === 'en' ? props.program.scheduleEn || props.program.schedule : props.program.schedule
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback to a default program image
  img.src = getImagePath('images/programs/default-program.svg')
  console.warn(`Failed to load image for program`)
}
</script>