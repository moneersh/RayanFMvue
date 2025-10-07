<template>
  <div class="card bg-white border border-rayan-gray shadow-xl hover:shadow-2xl hover:border-rayan-orange/50 transition-all duration-300 overflow-hidden group">
    <figure class="w-full h-64 overflow-hidden relative">
      <img 
        :src="getImagePath(program.image)" 
        :alt="localizedTitle" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        @error="handleImageError"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-rayan-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </figure>
    <div class="card-body p-6">
      <h2 class="card-title text-xl font-bold mb-3 text-rayan-purple group-hover:text-rayan-orange transition-colors duration-300">
        {{ localizedTitle }}
      </h2>
      <div class="space-y-2 mb-4">
        <p class="text-sm text-rayan-dark/70 flex items-center">
          <span class="w-2 h-2 bg-rayan-orange rounded-full mr-2" />
          {{ $t('programs.host') }}: {{ localizedHost }}
        </p>
        <p class="text-sm text-rayan-dark/70 flex items-center">
          <span class="w-2 h-2 bg-rayan-purple rounded-full mr-2" />
          {{ $t('programs.schedule') }}: {{ localizedSchedule }}
        </p>
      </div>
      <p class="text-sm leading-relaxed text-rayan-dark/80">
        {{ localizedDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '../../types/content'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { getImagePath } from '../../utils/assets'

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
}
</script>