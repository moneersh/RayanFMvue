<template>
  <!-- Enhanced Premium Player Bar -->
  <div v-if="playerStore.currentTrack" 
       class="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out"
       :class="{ 'translate-y-full': !isVisible }"
  >
    <!-- Backdrop Blur Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl border-t border-white/10"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>
    
    <!-- Main Content -->
    <div class="relative container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        
        <!-- Track Info Section -->
        <div class="flex items-center space-x-4 flex-1 min-w-0">
          <!-- Album Art / Radio Logo -->
          <div class="relative group">
            <div class="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary shadow-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300 group-hover:scale-105">
              <img 
                v-if="playerStore.currentTrack.image" 
                :src="playerStore.currentTrack.image" 
                :alt="playerStore.currentTrack.title" 
                class="w-full h-full object-cover"
              >
              <div v-else class="w-full h-full flex items-center justify-center text-white text-2xl">
                🎧
              </div>
            </div>
            <!-- Live Indicator Overlay -->
            <div v-if="playerStore.isLive" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse shadow-lg">
              LIVE
            </div>
          </div>
          
          <!-- Track Details -->
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-white text-lg truncate mb-1">
              {{ playerStore.currentTrackTitle }}
            </h4>
            <p v-if="playerStore.currentTrack.artist" class="text-gray-300 text-sm truncate mb-1">
              {{ playerStore.currentTrack.artist }}
            </p>
            <div v-if="playerStore.isLive" class="flex items-center text-red-400 text-sm font-medium">
              <div class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              {{ $t('player.live') || 'LIVE BROADCAST' }}
            </div>
          </div>
        </div>

        <!-- Main Controls Section -->
        <div class="flex items-center space-x-6 mx-8">
          <!-- Previous Button (for future episodes) -->
          <button class="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50" disabled>
            <svg class="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          
          <!-- Main Play/Pause Button -->
          <button 
            @click="playerStore.togglePlay()" 
            class="group relative w-14 h-14 rounded-full bg-gradient-to-r from-primary via-primary-focus to-secondary shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 transform active:scale-95"
          >
            <!-- Button Glow Effect -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
            
            <!-- Play/Pause Icon -->
            <div class="relative flex items-center justify-center w-full h-full">
              <svg v-if="!playerStore.isPlaying" class="w-7 h-7 text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </div>
          </button>
          
          <!-- Stop Button -->
          <button 
            @click="playerStore.stop()" 
            class="group p-3 rounded-full bg-white/10 hover:bg-red-500/80 transition-all duration-300 hover:scale-110"
          >
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h12v12H6z"/>
            </svg>
          </button>
        </div>

        <!-- Right Section: Volume & Utilities -->
        <div class="flex items-center space-x-4 flex-1 justify-end">
          
          <!-- Progress Bar (for episodes, not live) -->
          <div v-if="!playerStore.isLive && playerStore.currentTrack.duration" 
               class="hidden md:flex items-center space-x-3 flex-1 max-w-xs">
            <span class="text-xs text-gray-400 font-mono">
              {{ formatTime(playerStore.currentTrack.currentTime || 0) }}
            </span>
            <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer group">
              <div class="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 group-hover:shadow-lg" 
                   :style="{ width: `${playerStore.progress}%` }"></div>
            </div>
            <span class="text-xs text-gray-400 font-mono">
              {{ formatTime(playerStore.currentTrack.duration || 0) }}
            </span>
          </div>

          <!-- Volume Control -->
          <div class="hidden sm:flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
            <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.05" 
              :value="playerStore.volume"
              @input="handleVolumeChange"
              class="w-20 h-2 bg-white/20 rounded-full appearance-none cursor-pointer volume-slider"
            >
          </div>

          <!-- Minimize Button -->
          <button 
            @click="toggleVisibility()" 
            class="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg class="w-5 h-5 text-white transition-transform duration-300" :class="{ 'rotate-180': !isVisible }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Close Button -->
          <button 
            @click="playerStore.stop()" 
            class="group p-3 rounded-full bg-white/10 hover:bg-red-500/80 transition-all duration-300 hover:scale-110"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePlayerStore } from '@/store/usePlayerStore'

const playerStore = usePlayerStore()
const isVisible = ref(true)

const handleVolumeChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  playerStore.setVolume(parseFloat(target.value))
}

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
</script>

<style scoped>
/* Custom Volume Slider Styles */
.volume-slider {
  background: linear-gradient(to right, #4f46e5 0%, #7c3aed 100%);
  background-size: var(--value, 80%) 100%;
  background-repeat: no-repeat;
}

.volume-slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.4);
  transition: all 0.3s ease;
}

.volume-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.6);
}

.volume-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.4);
  transition: all 0.3s ease;
}

.volume-slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.6);
}

/* Animation for the player bar entrance */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Glassmorphism effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Custom animations */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-breathe {
  animation: breathe 2s ease-in-out infinite;
}

/* Enhanced hover effects for buttons */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:active .active\:scale-95 {
  transform: scale(0.95);
}

/* Progress bar enhancements */
.progress-bar-container {
  position: relative;
  overflow: hidden;
}

.progress-bar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>