<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">حلقة البودكاست</h1>
      <p class="text-lg opacity-70 mb-8">محتوى الحلقة قيد التطوير</p>
      <router-link to="/podcast" class="btn btn-primary">العودة للبودكاست</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
}

defineProps<Props>()
</script>