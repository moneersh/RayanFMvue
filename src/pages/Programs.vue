<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          {{ locale === 'ar' ? 'البرامج' : 'Our Programs' }}
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          {{ locale === 'ar' ? 'مجموعة متنوعة من البرامج الثقافية والاجتماعية' : 'A diverse collection of cultural and social programs' }}
        </p>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Morning Show -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">🌅</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'صباح الخير' : 'Good Morning' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'برنامج الصباح' : 'Morning Show' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'ابدأ يومك مع أجمل الأغاني والأخبار' : 'Start your day with beautiful music and news' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? '6:00 - 10:00 صباحاً' : '6:00 - 10:00 AM' }}
              </div>
            </div>
          </div>

          <!-- Music Hour -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">🎵</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'ساعة الموسيقى' : 'Music Hour' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'أجمل الأغاني' : 'Best Music' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'مجموعة من أروع الأغاني العربية والعالمية' : 'Collection of amazing Arabic and international songs' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? '2:00 - 4:00 مساءً' : '2:00 - 4:00 PM' }}
              </div>
            </div>
          </div>

          <!-- Evening Talk -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">🎙️</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'حديث المساء' : 'Evening Talk' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'لقاءات وحوارات' : 'Interviews & Discussions' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'لقاءات شيقة مع الضيوف وحوارات مفتوحة' : 'Exciting interviews with guests and open discussions' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? '7:00 - 9:00 مساءً' : '7:00 - 9:00 PM' }}
              </div>
            </div>
          </div>

          <!-- News -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">📰</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'الأخبار' : 'News' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'آخر الأخبار' : 'Latest News' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'تابع آخر الأخبار المحلية والعالمية' : 'Follow the latest local and international news' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? 'كل ساعة' : 'Every Hour' }}
              </div>
            </div>
          </div>

          <!-- Sports -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">⚽</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'الرياضة' : 'Sports' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'الأخبار الرياضية' : 'Sports News' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'تغطية شاملة للأحداث الرياضية' : 'Comprehensive coverage of sports events' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? '4:00 - 6:00 مساءً' : '4:00 - 6:00 PM' }}
              </div>
            </div>
          </div>

          <!-- Night Show -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">🌙</div>
                <h3 class="text-2xl font-bold">{{ locale === 'ar' ? 'سهرة الليل' : 'Night Show' }}</h3>
              </div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-3 text-gray-800">
                {{ locale === 'ar' ? 'أمسية ممتعة' : 'Enjoyable Evening' }}
              </h4>
              <p class="text-gray-600 mb-4">
                {{ locale === 'ar' ? 'برنامج ليلي مع أجمل الأغاني الهادئة' : 'Night program with beautiful calm music' }}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ locale === 'ar' ? '10:00 مساءً - 2:00 صباحاً' : '10:00 PM - 2:00 AM' }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">
          {{ locale === 'ar' ? 'استمع الآن' : 'Listen Now' }}
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            🎧 {{ locale === 'ar' ? 'البث المباشر' : 'Live Stream' }}
          </button>
          <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            📱 {{ locale === 'ar' ? 'تحميل التطبيق' : 'Download App' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Try to use i18n if available, fallback gracefully
let locale: any
try {
  const { locale: i18nLocale } = useI18n()
  locale = i18nLocale
} catch (e) {
  locale = { value: 'en' }
}

console.log('Programs page loaded successfully!')
</script>