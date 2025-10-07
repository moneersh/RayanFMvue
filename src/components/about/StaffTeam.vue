<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6">{{ $t('about.meetOurTeam') }}</h2>
        <p class="text-lg max-w-4xl mx-auto leading-relaxed">
          {{ $t('about.teamIntro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="member in teamMembers" 
          :key="member.name"
          class="group card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-95 hover:bg-base-300 cursor-pointer"
        >
          <div class="card-body text-center p-6 relative overflow-hidden">
            <div class="avatar mb-6 relative">
              <div class="w-24 h-24 rounded-full overflow-hidden mx-auto ring-2 ring-primary ring-offset-base-100 ring-offset-2 group-hover:ring-4 group-hover:ring-accent transition-all duration-500 group-hover:w-32 group-hover:h-32">
                <img 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  @error="handleImageError"
                />
              </div>
              <!-- Hover overlay effect -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
            <div class="transform transition-all duration-500 group-hover:translate-y-2">
              <h3 class="card-title text-lg justify-center mb-2 group-hover:text-primary transition-colors duration-300">{{ member.name }}</h3>
              <p class="text-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300">{{ member.position }}</p>
            </div>
            <!-- Decorative background effect -->
            <div class="absolute -inset-2 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'



interface TeamMember {
  name: string
  position: string
  image: string
}

const teamMembers = computed<TeamMember[]>(() => [
  {
    name: 'راما عبد الكريم',
    position: 'معدة ومقدمة برامج',
    image: '/images/staff/rama1.webp'
  },
  {
    name: 'مازن أبوحمدان',
    position: 'إدارة هندسية',
    image: '/images/staff/mazen1.webp'
  },
  {
    name: 'رواد حسون',
    position: 'معد ومدير برامج',
    image: '/images/staff/rawad.webp'
  },
  {
    name: 'صفاء جودية',
    position: 'مسؤولة الشؤون القانونية',
    image: '/images/staff/safaa1.webp'
  },
  {
    name: 'منار مرشد',
    position: 'معد ومقدم برامج',
    image: '/images/staff/MANAR1.webp'
  },
  {
    name: 'مرح الشاهين',
    position: 'معلقة ومقدمة برامج',
    image: '/images/staff/marah.webp'
  },
  {
    name: 'شيرين العقباني',
    position: 'معلقة ومقدمة برامج',
    image: '/images/staff/shireen1.webp'
  },
  {
    name: 'هبا دوارة',
    position: 'مسؤولة السوشال ميديا',
    image: '/images/staff/HEBA1.webp'
  },
  {
    name: 'أكرم أبو الفضل',
    position: 'المدير المالي',
    image: '/images/staff/AKRAM1.webp'
  },
  {
    name: 'عصام الأعور',
    position: 'معد برامج',
    image: '/images/staff/ISSAM1.webp'
  },
  {
    name: 'نورس أبو حسون',
    position: 'دي جي',
    image: '/images/staff/NAWRAS1.webp'
  }
])

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .slice(0, 2)
    .join('')
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  // Fallback to initials if image fails to load
  const member = teamMembers.value.find(m => target.alt === m.name)
  if (member && target.parentElement) {
    target.parentElement.innerHTML = `
      <div class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
        ${getInitials(member.name)}
      </div>
    `
  }
}
</script>