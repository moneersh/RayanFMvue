import { defineStore } from 'pinia'
import type { Program, Episode } from '@/types/content'

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
        // Mock data - replace with actual API call
        this.programs = [
          {
            id: '1',
            title: 'البرنامج الصباحي',
            titleEn: 'Morning Show',
            description: 'برنامج صباحي يومي يقدم آخر الأخبار والفقرات المتنوعة',
            descriptionEn: 'Daily morning show with news and diverse segments',
            slug: 'morning-show',
            host: 'محمد أحمد',
            hostEn: 'Mohammed Ahmed',
            schedule: 'يومياً من 6:00 إلى 9:00 صباحاً',
            scheduleEn: 'Daily from 6:00 to 9:00 AM',
            image: '/images/programs/morning-show.jpg',
            isActive: true,
            category: 'news'
          },
          {
            id: '2',
            title: 'نور الهداية',
            titleEn: 'Light of Guidance',
            description: 'برنامج ديني يقدم تفسير القرآن والأحاديث النبوية',
            descriptionEn: 'Religious program featuring Quran interpretation and Prophetic traditions',
            slug: 'light-of-guidance',
            host: 'الشيخ عبد الله',
            hostEn: 'Sheikh Abdullah',
            schedule: 'يومياً من 5:00 إلى 6:00 مساءً',
            scheduleEn: 'Daily from 5:00 to 6:00 PM',
            image: '/images/programs/guidance.jpg',
            isActive: true,
            category: 'religious'
          }
        ]
      } catch (error) {
        this.error = 'خطأ في تحميل البرامج'
        console.error('Error fetching programs:', error)
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
            image: '/images/episodes/episode-1.jpg'
          }
        ]
      } catch (error) {
        console.error('Error fetching episodes:', error)
      }
    }
  }
})