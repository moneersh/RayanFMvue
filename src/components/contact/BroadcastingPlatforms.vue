<template>
  <section class="py-16 bg-rayan-orange/10">
    <div class="container mx-auto px-4">
      

      <!-- Broadcasting Platforms Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div 
          v-for="platform in platforms" 
          :key="platform.id"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rayan-orange/20 hover:border-rayan-orange/50"
        >
          <div class="card-body text-center p-6">
            <!-- Icon -->
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-rayan-orange to-rayan-purple flex items-center justify-center overflow-hidden">
                <!-- Image Icon -->
                <img 
                  v-if="platform.iconType === 'image'" 
                  :src="`/RayanFMvue${platform.icon}`" 
                  :alt="locale === 'ar' ? platform.nameAr : platform.nameEn"
                  class=" object-contain rounded"
                  @error="handleImageError"
                />
                <!-- SVG Icon -->
                <component 
                  v-else 
                  :is="getIcon(platform.icon)" 
                  class="w-8 h-8 text-white" 
                />
              </div>
            </div>
            
            <!-- Platform Name -->
            <h3 class="text-xl font-bold mb-2 text-rayan-purple">
              {{ locale === 'ar' ? platform.nameAr : platform.nameEn }}
            </h3>
            
            <!-- Description -->
            <p class="text-sm text-rayan-purple/70 mb-4">
              {{ locale === 'ar' ? platform.descriptionAr : platform.descriptionEn }}
            </p>
            
            <!-- Action Button/Links -->
            <div v-if="platform.type === 'single'" class="space-y-2">
              <a 
                v-if="platform.url"
                :href="platform.url" 
                :target="platform.external ? '_blank' : '_self'"
                :rel="platform.external ? 'noopener noreferrer' : ''"
                @click="platform.action === 'play-stream' ? handleStreamPlay() : null"
                class="btn btn-outline border-rayan-orange text-rayan-orange hover:bg-rayan-orange hover:text-white btn-sm w-full"
              >
                {{ locale === 'ar' ? 'استمع الآن' : 'Listen Now' }}
              </a>
              <div v-else class="text-sm text-rayan-purple/70">
                {{ platform.id === 'fm-frequency' ? (locale === 'ar' ? '90.2 إف إم' : '90.2 FM') : '' }}
              </div>
            </div>
            
            <!-- Multiple Links -->
            <div v-else-if="platform.type === 'multiple'" class="space-y-2">
              <a 
                v-for="link in platform.links" 
                :key="link.name"
                :href="link.url" 
                :target="link.external ? '_blank' : '_self'"
                :rel="link.external ? 'noopener noreferrer' : ''"
                :class="`btn btn-outline ${link.color} btn-xs w-full`"
              >
                {{ locale === 'ar' ? link.nameAr : link.nameEn }}
              </a>
            </div>
            
            <!-- Social Media Icons -->
            <div v-else-if="platform.type === 'social'" class="flex justify-center space-x-2">
              <a 
                v-for="social in platform.socials" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                rel="noopener noreferrer"
                :class="`btn btn-circle btn-outline ${social.color} btn-xs`"
              >
                <component :is="getIcon(social.icon)" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Define platform data structure based on JSON
interface JsonPlatform {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  type: string
  icon: string
  iconType?: string
  url?: string
  external?: boolean
  priority: number
  status: string
  action?: string
  links?: Array<{
    name: string
    nameEn: string
    nameAr: string
    url: string
    external: boolean
    color: string
  }>
  socials?: Array<{
    name: string
    url: string
    icon: string
    color: string
  }>
}

// Icon mapping function
const getIcon = (iconName: string) => {
  const icons: Record<string, () => any> = {
    radio: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8l-9 9z'
      })
    ]),
    antenna: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zM8 12H6c0-3.31 2.69-6 6-6s6 2.69 6 6h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4zm2 0c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.38-1 1.72v2.28h-2v-2.28c-.6-.34-1-.98-1-1.72z'
      })
    ])
  }
  return icons[iconName] || icons.radio
}

// Load platforms from JSON and transform them
const platforms = ref<JsonPlatform[]>([])

// Load data from JSON on component mount  
onMounted(async () => {
  try {
    const response = await fetch('/data/BroadcastingPlatforms.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    platforms.value = data.platforms
  } catch (error) {
    console.error('Failed to load broadcasting platforms data:', error)
    // Fallback to empty array if loading fails
    platforms.value = []
  }
})

// Emits for parent component
const emit = defineEmits(['play-stream'])

// Handle stream play action
const handleStreamPlay = () => {
  emit('play-stream')
}

// Handle image loading errors
const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
/* Custom gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Hover effects for cards */
.card:hover {
  transform: translateY(-8px);
}

/* Button hover animations */
.btn {
  transition: all 0.3s ease;
}

/* Icon animations */
.w-8.h-8 {
  transition: transform 0.3s ease;
}

.card:hover .w-8.h-8 {
  transform: scale(1.1);
}
</style>