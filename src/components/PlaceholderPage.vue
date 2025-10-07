<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
      <p class="text-lg opacity-70 mb-8">هذه الصفحة قيد التطوير</p>
      <router-link to="/" class="btn btn-primary">العودة للرئيسية</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'صفحة قيد التطوير'
})
</script>