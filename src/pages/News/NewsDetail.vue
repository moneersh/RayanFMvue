<template>
  <AppShell>
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8">تفاصيل الخبر</h1>
      <div class="max-w-4xl mx-auto prose prose-lg">
        <p>تفاصيل المقال ستظهر هنا...</p>
      </div>
    </div>
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from '@/layouts/AppShell.vue'

interface Props {
  slug: string
}

defineProps<Props>()
</script>