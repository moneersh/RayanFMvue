<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
    <figure class="px-4 pt-4">
      <img :src="program.image" :alt="program.title" class="rounded-xl h-48 w-full object-cover">
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ program.title }}</h2>
      <p class="text-sm opacity-70">{{ $t('programs.host') }}: {{ program.host }}</p>
      <p class="text-sm opacity-70">{{ $t('programs.schedule') }}: {{ program.schedule }}</p>
      <p class="text-sm mb-4">{{ program.description }}</p>
      <div class="card-actions justify-end">
        <router-link :to="`/programs/${program.slug}`" class="btn btn-primary btn-sm">
          عرض التفاصيل
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '@/types/content'

interface Props {
  program: Program
}

defineProps<Props>()
</script>