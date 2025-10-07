<template>
  <AppShell>
    <div class="container mx-auto px-4 py-16">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">{{ $t('programs.title') }}</h1>
        <p class="text-lg opacity-80">{{ $t('programs.subtitle') }}</p>
      </div>

      <!-- Programs Grid -->
      <div v-if="!programsStore.loading && programsStore.programs.length > 0" 
           class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ProgramCard 
          v-for="program in programsStore.programs" 
          :key="program.id" 
          :program="program" 
          class="transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Loading State -->
      <div v-else-if="programsStore.loading" class="text-center py-12">
        <div class="loading loading-spinner loading-lg"></div>
        <p class="mt-4">{{ $t('common.loading') }}</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="!programsStore.loading && programsStore.programs.length === 0" 
           class="text-center py-12">
        <div class="card bg-base-100 shadow-xl max-w-md mx-auto">
          <div class="card-body text-center">
            <h2 class="card-title justify-center">{{ $t('programs.comingSoon') }}</h2>
            <p>{{ $t('common.noData') }}</p>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="programsStore.error" class="text-center py-12">
        <div class="alert alert-error max-w-md mx-auto">
          <span>{{ programsStore.error }}</span>
        </div>
      </div>


    </div>
  </AppShell>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import AppShell from '@/layouts/AppShell.vue'
import ProgramCard from '@/components/cards/ProgramCard.vue'
import { useProgramsStore } from '@/store/useProgramsStore'
import { useSeo } from '@/composables/useSeo'

const programsStore = useProgramsStore()

// SEO
useSeo({
  title: 'البرامج',
  description: 'تصفح مجموعة البرامج المتنوعة في إذاعة الريان'
})



onMounted(() => {
  programsStore.fetchPrograms()
})
</script>