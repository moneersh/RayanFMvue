<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">تفاصيل الفعالية</h1>
      <p class="text-lg opacity-70 mb-8">تفاصيل الفعالية قيد التطوير</p>
      <router-link to="/events" class="btn btn-primary">العودة للفعاليات</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
}

defineProps<Props>()
</script>