<template>
  <AppShell>
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8">{{ $t('programs.title') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <h2 class="card-title">البرامج قريباً</h2>
            <p>ستتوفر قائمة البرامج قريباً</p>
          </div>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from '@/layouts/AppShell.vue'
</script>