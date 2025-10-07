<template>
  <AppShell>
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8">{{ $t('nav.about') }}</h1>
        
        <div class="prose prose-lg mx-auto">
          <p class="text-xl text-center mb-8">
            {{ $t('hero.aboutText') }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">رؤيتنا</h2>
                <p>أن نكون الصوت الرائد في نشر القيم الإسلامية والثقافة الهادفة عبر الإذاعة.</p>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">رسالتنا</h2>
                <p>تقديم محتوى إذاعي متميز يجمع بين الأصالة والمعاصرة، ويخدم المجتمع المسلم.</p>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">قيمنا</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="badge badge-primary badge-lg p-4">الصدق والأمانة</div>
              <div class="badge badge-secondary badge-lg p-4">الجودة والإتقان</div>
              <div class="badge badge-accent badge-lg p-4">الابتكار والتطوير</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Staff Team Section -->
    <StaffTeam />
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from '@/layouts/AppShell.vue'
import StaffTeam from '@/components/about/StaffTeam.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'حول الإذاعة',
  description: 'تعرف على إذاعة الریّان - رؤيتنا، رسالتنا، وقيمنا'
})
</script>