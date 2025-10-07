<template>
  <AppShell>
    <!-- Hero Section -->
    <section class="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <div class="hero-content text-center max-w-4xl">
        <div>
          <h1 class="text-5xl font-bold mb-6">{{ $t('about.heroTitle') }}</h1>
          <p class="text-lg leading-relaxed mb-8">
            {{ $t('about.heroDescription1') }}
          </p>
          <p class="text-lg leading-relaxed">
            {{ $t('about.heroDescription2') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="stat text-center">
            <div class="stat-value text-primary">15+</div>
            <div class="stat-title">{{ $t('about.statistics.yearsOfWork') }}</div>
          </div>
          <div class="stat text-center">
            <div class="stat-value text-secondary">1,000,000+</div>
            <div class="stat-title">{{ $t('about.statistics.listeners') }}</div>
          </div>
          <div class="stat text-center">
            <div class="stat-value text-accent">2,700+</div>
            <div class="stat-title">{{ $t('about.statistics.interviewedGuests') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Radio Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('about.aboutRadio.title') }}</h2>
          <div class="prose prose-lg mx-auto text-center mb-8">
            <p class="text-lg leading-relaxed mb-6">
              {{ $t('about.aboutRadio.description1') }}
            </p>
            <p class="text-lg leading-relaxed">
              {{ $t('about.aboutRadio.description2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mechanisms Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('about.mechanisms.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.mechanisms.item1') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.mechanisms.item2') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.mechanisms.item3') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.mechanisms.item4') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg md:col-span-2">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.mechanisms.item5') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('about.goals.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-lg border-r-4 border-primary">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item1') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg border-r-4 border-secondary">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item2') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg border-r-4 border-accent">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item3') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg border-r-4 border-primary">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item4') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg border-r-4 border-secondary md:col-span-2">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item5') }}</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg border-r-4 border-accent md:col-span-2">
              <div class="card-body">
                <p class="text-sm leading-relaxed">{{ $t('about.goals.item6') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('about.story.title') }}</h2>
          <div class="timeline timeline-vertical">
            <div class="timeline-start timeline-box">
              <h3 class="text-xl font-bold text-primary mb-2">{{ $t('about.story.year2009') }}</h3>
              <h4 class="text-lg font-semibold mb-4">{{ $t('about.story.milestone') }}</h4>
              <p class="text-sm leading-relaxed">
                {{ $t('about.story.description') }}
              </p>
            </div>
            <div class="timeline-middle">
              <div class="timeline-marker bg-primary"></div>
            </div>
            <div class="timeline-end"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Editorial Standards Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">{{ $t('about.editorialStandards.title') }}</h2>
          <p class="text-lg mb-12 leading-relaxed">
            {{ $t('about.editorialStandards.description') }}
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.accuracy') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.neutrality') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.credibility') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.objectivity') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.privacy') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.transparency') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.integrity') }}</div>
            <div class="badge badge-outline badge-lg p-4">{{ $t('about.editorialStandards.responsibility') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Staff Team Section -->
    <StaffTeam />
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from '@/layouts/AppShell.vue'
import StaffTeam from '@/components/about/StaffTeam.vue'
import { useSeo } from '@/composables/useSeo'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeo({
  title: t('about.title'),
  description: t('about.heroDescription1')
})
</script>