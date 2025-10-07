import { defineStore } from 'pinia'

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
    streamUrl: 'https://stream.rayanradio.com/live',
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
      }
    },

    async playLiveStream() {
      this.initializePlayer()
      if (this.audioElement) {
        this.audioElement.src = this.streamUrl
        this.isLive = true
        this.currentTrack = {
          title: 'البث المباشر - إذاعة الريّان',
          artist: 'Rayan Radio Live'
        }
        try {
          await this.audioElement.play()
        } catch (error) {
          console.error('Error playing live stream:', error)
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
        } catch (error) {
          console.error('Error playing episode:', error)
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