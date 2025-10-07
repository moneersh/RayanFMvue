<template>
  <div v-if="playerStore.currentTrack" 
       class="fixed bottom-0 left-0 right-0 bg-base-200 border-t border-base-300 p-4 z-50">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Track Info -->
      <div class="flex items-center space-x-4">
        <div v-if="playerStore.currentTrack.image" class="w-12 h-12 rounded overflow-hidden">
          <img :src="playerStore.currentTrack.image" :alt="playerStore.currentTrack.title" class="w-full h-full object-cover">
        </div>
        <div>
          <h4 class="font-semibold text-sm">{{ playerStore.currentTrackTitle }}</h4>
          <p v-if="playerStore.currentTrack.artist" class="text-xs opacity-70">
            {{ playerStore.currentTrack.artist }}
          </p>
          <div v-if="playerStore.isLive" class="flex items-center text-xs text-error">
            <div class="w-2 h-2 bg-error rounded-full mr-1 animate-pulse"></div>
            {{ $t('player.live') }}
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center space-x-4">
        <button @click="playerStore.togglePlay()" 
                class="btn btn-circle btn-primary">
          <svg v-if="!playerStore.isPlaying" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        
        <button @click="playerStore.stop()" class="btn btn-circle btn-outline btn-sm">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h12v12H6z"/>
          </svg>
        </button>
      </div>

      <!-- Progress Bar (for episodes, not live) -->
      <div v-if="!playerStore.isLive && playerStore.currentTrack.duration" 
           class="flex-1 mx-4">
        <div class="w-full bg-base-300 rounded-full h-2">
          <div class="bg-primary h-2 rounded-full transition-all duration-300" 
               :style="{ width: `${playerStore.progress}%` }"></div>
        </div>
      </div>

      <!-- Volume Control -->
      <div class="flex items-center space-x-2">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <input type="range" 
               min="0" 
               max="1" 
               step="0.1" 
               :value="playerStore.volume"
               @input="handleVolumeChange"
               class="range range-sm range-primary w-20">
      </div>

      <!-- Close Button -->
      <button @click="playerStore.stop()" class="btn btn-ghost btn-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/usePlayerStore'

const playerStore = usePlayerStore()

const handleVolumeChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  playerStore.setVolume(parseFloat(target.value))
}
</script>