import { defineStore } from 'pinia'
import type { Program, Episode } from '@/types/content'
import { getImagePath } from '@/utils/assets'

interface ProgramsState {
  programs: Program[]
  currentProgram: Program | null
  episodes: Episode[]
  loading: boolean
  error: string | null
}

export const useProgramsStore = defineStore('programs', {
  state: (): ProgramsState => ({
    programs: [],
    currentProgram: null,
    episodes: [],
    loading: false,
    error: null
  }),

  getters: {
    featuredPrograms: (state) => state.programs.filter(p => p.isActive).slice(0, 6),
    programsByCategory: (state) => (category: string) => 
      state.programs.filter(p => p.category === category && p.isActive),
    getProgramBySlug: (state) => (slug: string) => 
      state.programs.find(p => p.slug === slug)
  },

  actions: {
    async fetchPrograms() {
      this.loading = true
      this.error = null
      try {
        // Fetch programs data from public JSON file
        const response = await fetch('/RayanFMvue/data/programs.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const programsData = await response.json()
        this.programs = Array.isArray(programsData) ? programsData : []
      } catch (error) {
        this.error = 'خطأ في تحميل البرامج'
        console.error('Error fetching programs:', error)
        // Fallback to empty array if fetch fails
        this.programs = []
      } finally {
        this.loading = false
      }
    },

    async fetchProgramDetails(slug: string) {
      this.loading = true
      this.error = null
      try {
        const program = this.getProgramBySlug(slug)
        if (program) {
          this.currentProgram = program
          // Fetch episodes for this program
          await this.fetchEpisodes(program.id)
        } else {
          throw new Error('Program not found')
        }
      } catch (error) {
        this.error = 'خطأ في تحميل تفاصيل البرنامج'
        console.error('Error fetching program details:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchEpisodes(programId: string) {
      try {
        // Mock data - replace with actual API call
        this.episodes = [
          {
            id: '1',
            programId,
            title: 'الحلقة الأولى',
            titleEn: 'Episode 1',
            description: 'وصف الحلقة الأولى',
            descriptionEn: 'Description of episode 1',
            slug: 'episode-1',
            audioUrl: '/audio/episode-1.mp3',
            duration: 3600,
            publishedAt: new Date('2025-01-01'),
            image: getImagePath('images/episodes/episode-1.jpg')
          }
        ]
      } catch (error) {
        console.error('Error fetching episodes:', error)
      }
    }
  }
})