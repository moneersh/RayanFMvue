import { defineStore } from 'pinia'
import { useSiteStore } from './useSiteStore'

interface PlayerState {
  isPlaying: boolean
  isLive: boolean
  currentTrack: {
    title: string
    artist?: string
    image?: string
    duration?: number
    currentTime?: number
  } | null
  volume: number
  streamUrl: string
  audioElement: HTMLAudioElement | null
}

export const usePlayerStore = defineStore('player', {
  state: (): PlayerState => ({
    isPlaying: false,
    isLive: false,
    currentTrack: null,
    volume: 0.8,
    streamUrl: 'https://broadcast.shoutstream.co.uk:8078/stream',
    audioElement: null
  }),

  getters: {
    currentTrackTitle: (state) => state.currentTrack?.title || 'إذاعة الريّان',
    progress: (state) => {
      if (!state.currentTrack?.duration || !state.currentTrack?.currentTime) return 0
      return (state.currentTrack.currentTime / state.currentTrack.duration) * 100
    }
  },

  actions: {
    initializePlayer() {
      if (!this.audioElement) {
        this.audioElement = new Audio()
        this.audioElement.volume = this.volume
        this.audioElement.crossOrigin = 'anonymous'
        
        this.audioElement.addEventListener('play', () => {
          this.isPlaying = true
        })
        
        this.audioElement.addEventListener('pause', () => {
          this.isPlaying = false
        })
        
        this.audioElement.addEventListener('timeupdate', () => {
          if (this.currentTrack && this.audioElement) {
            this.currentTrack.currentTime = this.audioElement.currentTime
          }
        })
        
        this.audioElement.addEventListener('loadedmetadata', () => {
          if (this.currentTrack && this.audioElement) {
            this.currentTrack.duration = this.audioElement.duration
          }
        })
        
        this.audioElement.addEventListener('error', () => {
          this.isPlaying = false
        })
        
        this.audioElement.addEventListener('loadstart', () => {
          // Stream loading started
        })
        
        this.audioElement.addEventListener('canplay', () => {
          // Stream ready to play
        })
      }
    },

    async playLiveStream() {
      this.initializePlayer()
      const siteStore = useSiteStore()
      if (this.audioElement) {
        // Use the streaming URL from site store
        this.audioElement.src = siteStore.settings.radioStream.liveUrl
        this.streamUrl = siteStore.settings.radioStream.liveUrl
        this.isLive = true
        this.currentTrack = {
          title: 'البث المباشر - إذاعة الريّان',
          artist: 'Rayan Radio Live'
        }
        try {
          await this.audioElement.play()
        } catch {
          // Try to handle CORS or other streaming issues
          throw new Error('Unable to play live stream. Please check your internet connection.')
        }
      }
    },

    async playEpisode(episode: { title: string; audioUrl: string; image?: string }) {
      this.initializePlayer()
      if (this.audioElement) {
        this.audioElement.src = episode.audioUrl
        this.isLive = false
        this.currentTrack = {
          title: episode.title,
          image: episode.image
        }
        try {
          await this.audioElement.play()
        } catch {
          // Error playing episode - fail silently
        }
      }
    },

    togglePlay() {
      if (!this.audioElement) return
      
      if (this.isPlaying) {
        this.audioElement.pause()
      } else {
        this.audioElement.play()
      }
    },

    stop() {
      if (this.audioElement) {
        this.audioElement.pause()
        this.audioElement.currentTime = 0
        this.isPlaying = false
      }
    },

    setVolume(volume: number) {
      this.volume = Math.max(0, Math.min(1, volume))
      if (this.audioElement) {
        this.audioElement.volume = this.volume
      }
    },

    seek(time: number) {
      if (this.audioElement && !this.isLive) {
        this.audioElement.currentTime = time
      }
    }
  }
})