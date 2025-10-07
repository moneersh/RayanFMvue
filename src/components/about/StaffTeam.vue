<template>
  <div class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6">{{ $t('about.meetOurTeam') }}</h2>
        <p class="text-lg max-w-4xl mx-auto leading-relaxed">
          {{ $t('about.teamIntro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="member in teamMembers" 
          :key="member.name"
          class="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
        >
          <!-- Large Image Section -->
          <figure class="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
              @error="handleImageError"
              loading="lazy"
            />
            <!-- Gradient overlay for better text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Hover text overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-lg sm:text-xl font-bold mb-1 drop-shadow-lg">{{ member.name }}</h3>
              <p class="text-sm opacity-90 drop-shadow-md">{{ member.position }}</p>
            </div>
          </figure>
          
          <!-- Card Content -->
          <div class="card-body p-6 text-center">
            <h3 class="card-title text-lg justify-center mb-2 group-hover:text-primary transition-colors duration-300">{{ member.name }}</h3>
            <p class="text-sm opacity-70 group-hover:opacity-90 transition-opacity duration-300">{{ member.position }}</p>
            
            <!-- Decorative elements -->
            <div class="flex justify-center mt-4">
              <div class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
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