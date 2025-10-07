import { defineStore } from 'pinia'
import { getAssetPath } from '../utils/assets'

export interface StaffMember {
  id: string
  nameAr: string
  nameEn: string
  positionAr: string
  positionEn: string
  image: string
  speciality: string
  experience: string
  programs?: string[]
  bio: {
    ar: string
    en: string
  }
}

export interface StaffDepartment {
  nameAr: string
  nameEn: string
  memberIds: string[]
}

export interface StaffData {
  teamInfo: {
    titleAr: string
    titleEn: string
    descriptionAr: string
    descriptionEn: string
  }
  members: StaffMember[]
  departments: StaffDepartment[]
  metadata: {
    totalMembers: number
    departments: number
    lastUpdated: string
    version: string
  }
}

interface StaffState {
  staffData: StaffData | null
  loading: boolean
  error: string | null
}

export const useStaffStore = defineStore('staff', {
  state: (): StaffState => ({
    staffData: null,
    loading: false,
    error: null
  }),

  getters: {
    teamMembers: (state) => state.staffData?.members || [],
    departments: (state) => state.staffData?.departments || [],
    membersByDepartment: (state) => (departmentName: string) => {
      const department = state.staffData?.departments.find(d => 
        d.nameEn === departmentName || d.nameAr === departmentName
      )
      if (!department || !state.staffData) return []
      
      return state.staffData.members.filter(member => 
        department.memberIds.includes(member.id)
      )
    },
    getMemberById: (state) => (id: string) => {
      return state.staffData?.members.find(member => member.id === id)
    }
  },

  actions: {
    async fetchStaffData() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(getAssetPath('data/staff.json'))
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        this.staffData = data
      } catch {
        this.error = 'فشل في تحميل بيانات فريق العمل'
        // Fallback to empty data
        this.staffData = {
          teamInfo: {
            titleAr: 'فريق العمل',
            titleEn: 'Our Team',
            descriptionAr: 'فريق عمل متميز',
            descriptionEn: 'Distinguished team'
          },
          members: [],
          departments: [],
          metadata: {
            totalMembers: 0,
            departments: 0,
            lastUpdated: new Date().toISOString().split('T')[0],
            version: '1.0.0'
          }
        }
      } finally {
        this.loading = false
      }
    }
  }
})