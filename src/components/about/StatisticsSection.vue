<template>
  <section class="py-20 bg-gradient-to-br from-rayan-purple/10 via-rayan-orange/5 to-rayan-purple/10 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-32 h-32 bg-rayan-orange rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-rayan-purple rounded-full blur-xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/3 w-40 h-40 bg-rayan-orange/30 rounded-full blur-2xl animate-bounce"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-rayan-purple to-rayan-orange bg-clip-text text-transparent">
          {{ locale === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers' }}
        </h2>
        <p class="text-xl text-rayan-dark/70 max-w-2xl mx-auto">
          {{ locale === 'ar' ? 'أرقام تعكس نجاحنا وتميزنا في عالم الإذاعة' : 'Numbers that reflect our success and excellence in radio broadcasting' }}
        </p>
      </div>

      <!-- Statistics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Years of Work -->
        <div class="group relative">
          <div class="stat bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 rounded-3xl border border-rayan-orange/20 hover:border-rayan-orange/50 transform hover:scale-105 hover:-translate-y-4">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            <!-- Number -->
            <div class="stat-value text-center mb-4">
              <span class="text-5xl md:text-6xl font-black bg-gradient-to-r from-rayan-orange to-rayan-purple bg-clip-text text-transparent">
                {{ Math.round(animatedYears) }}
              </span>
              <span class="text-3xl font-bold text-rayan-orange">+</span>
            </div>
            
            <!-- Label -->
            <div class="stat-title text-center text-xl font-semibold text-rayan-dark">
              {{ $t('about.statistics.yearsOfWork') }}
            </div>
            
            <!-- Description -->
            <p class="text-center text-sm text-rayan-dark/60 mt-3">
              {{ locale === 'ar' ? 'من التميز والإبداع' : 'Of Excellence & Innovation' }}
            </p>
          </div>
        </div>

        <!-- Listeners -->
        <div class="group relative">
          <div class="stat bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 rounded-3xl border border-rayan-purple/20 hover:border-rayan-purple/50 transform hover:scale-105 hover:-translate-y-4">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-rayan-purple to-rayan-orange rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4.5c0-1.1.9-2 2-2s2 .9 2 2V18h8.5c.83 0 1.5.67 1.5 1.5S17.33 21 16.5 21h-13C2.67 21 2 20.33 2 19.5S2.67 18 3.5 18H4z"/>
                </svg>
              </div>
            </div>
            
            <!-- Number -->
            <div class="stat-value text-center mb-4">
              <span class="text-4xl md:text-5xl font-black bg-gradient-to-r from-rayan-purple to-rayan-orange bg-clip-text text-transparent">
                {{ formatNumber(animatedListeners) }}
              </span>
              <span class="text-2xl font-bold text-rayan-purple">+</span>
            </div>
            
            <!-- Label -->
            <div class="stat-title text-center text-xl font-semibold text-rayan-dark">
              {{ $t('about.statistics.listeners') }}
            </div>
            
            <!-- Description -->
            <p class="text-center text-sm text-rayan-dark/60 mt-3">
              {{ locale === 'ar' ? 'حول العالم يستمعون إلينا' : 'Around the World Listen to Us' }}
            </p>
          </div>
        </div>

        <!-- Interviewed Guests -->
        <div class="group relative">
          <div class="stat bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 rounded-3xl border border-rayan-orange/20 hover:border-rayan-orange/50 transform hover:scale-105 hover:-translate-y-4">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-rayan-orange to-rayan-purple rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
            </div>
            
            <!-- Number -->
            <div class="stat-value text-center mb-4">
              <span class="text-4xl md:text-5xl font-black bg-gradient-to-r from-rayan-orange to-rayan-purple bg-clip-text text-transparent">
                {{ formatNumber(animatedGuests) }}
              </span>
              <span class="text-2xl font-bold text-rayan-orange">+</span>
            </div>
            
            <!-- Label -->
            <div class="stat-title text-center text-xl font-semibold text-rayan-dark">
              {{ $t('about.statistics.interviewedGuests') }}
            </div>
            
            <!-- Description -->  
            <p class="text-center text-sm text-rayan-dark/60 mt-3">
              {{ locale === 'ar' ? 'شخصية مؤثرة استضفناها' : 'Influential Personalities Hosted' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Stats Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rayan-orange/10 hover:border-rayan-orange/30 transition-all duration-300">
          <div class="text-3xl font-bold text-rayan-orange mb-2">{{ Math.round(animatedPrograms) }}</div>
          <div class="text-sm font-medium text-rayan-dark">{{ locale === 'ar' ? 'برنامج متنوع' : 'Diverse Programs' }}</div>
        </div>
        
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rayan-purple/10 hover:border-rayan-purple/30 transition-all duration-300">
          <div class="text-3xl font-bold text-rayan-purple mb-2">24/7</div>
          <div class="text-sm font-medium text-rayan-dark">{{ locale === 'ar' ? 'بث مستمر' : 'Live Broadcasting' }}</div>
        </div>
        
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rayan-orange/10 hover:border-rayan-orange/30 transition-all duration-300">
          <div class="text-3xl font-bold text-rayan-orange mb-2">{{ Math.round(animatedStaff) }}</div>
          <div class="text-sm font-medium text-rayan-dark">{{ locale === 'ar' ? 'عضو فريق' : 'Team Members' }}</div>
        </div>
        
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-rayan-purple/10 hover:border-rayan-purple/30 transition-all duration-300">
          <div class="text-3xl font-bold text-rayan-purple mb-2">90.2</div>
          <div class="text-sm font-medium text-rayan-dark">{{ locale === 'ar' ? 'تردد إف إم' : 'FM Frequency' }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Animation state
const animatedYears = ref(0)
const animatedListeners = ref(0)
const animatedGuests = ref(0)
const animatedPrograms = ref(0)
const animatedStaff = ref(0)

// Target values
const targetYears = 15
const targetListeners = 1000000
const targetGuests = 2700
const targetPrograms = 6
const targetStaff = 11

// Animation function
const animateNumber = (target: number, current: any, duration: number = 2000, increment: number = 1) => {
  const steps = duration / 16 // 60fps
  const stepSize = target / steps
  
  const animate = () => {
    if (current.value < target) {
      current.value = Math.min(current.value + stepSize * increment, target)
      // Round to 2 decimal places during animation
      current.value = Math.round(current.value * 100) / 100
      requestAnimationFrame(animate)
    } else {
      current.value = target
    }
  }
  
  animate()
}

// Format large numbers
const formatNumber = (num: number): string => {
  // Round to 2 decimal places first
  const rounded = Math.round(num * 100) / 100
  
  if (rounded >= 1000000) {
    return (rounded / 1000000).toFixed(1) + 'M'
  } else if (rounded >= 1000) {
    return (rounded / 1000).toFixed(0) + 'K'
  }
  return Math.round(rounded).toString()
}

// Intersection Observer for triggering animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Create intersection observer to trigger animations when component is visible
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations with staggered delays
          setTimeout(() => animateNumber(targetYears, animatedYears, 2000), 200)
          setTimeout(() => animateNumber(targetListeners, animatedListeners, 2500, 25000), 400)
          setTimeout(() => animateNumber(targetGuests, animatedGuests, 2200, 50), 600)
          setTimeout(() => animateNumber(targetPrograms, animatedPrograms, 1500), 800)
          setTimeout(() => animateNumber(targetStaff, animatedStaff, 1800), 1000)
          
          // Disconnect observer after first trigger
          if (observer) {
            observer.disconnect()
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe the statistics section directly
  const statisticsSection = document.querySelector('section')
  if (statisticsSection && observer) {
    observer.observe(statisticsSection)
  }
  
  // Fallback: Start animations after 1 second if observer doesn't work
  setTimeout(() => {
    if (animatedYears.value === 0) {
      setTimeout(() => animateNumber(targetYears, animatedYears, 2000), 200)
      setTimeout(() => animateNumber(targetListeners, animatedListeners, 2500, 25000), 400)
      setTimeout(() => animateNumber(targetGuests, animatedGuests, 2200, 50), 600)
      setTimeout(() => animateNumber(targetPrograms, animatedPrograms, 1500), 800)
      setTimeout(() => animateNumber(targetStaff, animatedStaff, 1800), 1000)
    }
  }, 1000)
})
</script>

<style scoped>
/* Custom shadow effects */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient text animation */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Pulse animation for icons */
@keyframes pulse-custom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.group:hover .group-hover\\:animate-pulse {
  animation: pulse-custom 2s infinite;
}

/* Card hover effects */
.stat:hover {
  transform: translateY(-16px) scale(1.05);
}

/* Background animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: float 6s ease-in-out infinite;
}
</style>