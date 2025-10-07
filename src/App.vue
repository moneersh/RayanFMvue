<script setup lang="ts">
import { onMounted } from 'vue'
import { useSiteStore } from '@/store/useSiteStore'
import { useRtl } from '@/composables/useRtl'

const siteStore = useSiteStore()
const { setLanguage } = useRtl()

onMounted(() => {
  // Initialize language and RTL settings
  setLanguage('ar')
  
  // Initialize site theme
  siteStore.setTheme('light')
})
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

[dir="ltr"] {
  text-align: left;
}

/* Custom scrollbar for RTL */
[dir="rtl"] ::-webkit-scrollbar {
  width: 8px;
}

[dir="rtl"] ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

[dir="rtl"] ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

[dir="rtl"] ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
