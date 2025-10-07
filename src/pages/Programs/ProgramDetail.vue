<template>
  <PlaceholderPage title="تفاصيل البرنامج" />
</template>

<script setup lang="ts">
import PlaceholderPage from '@/components/PlaceholderPage.vue'

interface Props {
  slug: string
}

defineProps<Props>()
</script>