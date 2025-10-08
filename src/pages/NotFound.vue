<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    <div class="max-w-md mx-auto text-center px-6">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-white mb-4">
          404
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
      </div>
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">
          {{ $t("404.title") }}
        </h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          {{ $t("404.description") }}
        </p>
      </div>
      <div class="space-y-4">
        <router-link
          to="/"
          class="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          {{ $t("404.goHome") }}
        </router-link>
        <div class="mt-6">
          <button
            class="text-gray-300 hover:text-white underline transition-colors duration-200"
            @click="goBack"
          >
            {{ $t("404.goBack") }}
          </button>
        </div>
      </div>
      <div class="mt-12 opacity-50">
        <div class="flex justify-center space-x-4 text-gray-400">
          <router-link
            to="/about"
            class="hover:text-white transition-colors"
          >
            {{ $t("nav.about") }}
          </router-link>
          <span>•</span>
          <router-link
            to="/programs"
            class="hover:text-white transition-colors"
          >
            {{ $t("nav.programs") }}
          </router-link>
          <span>•</span>
          <router-link
            to="/contact"
            class="hover:text-white transition-colors"
          >
            {{ $t("nav.contact") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSeo } from '@/composables/useSeo'

const router = useRouter()

useSeo({
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found.',
})

const goBack = () => {
    if (window.history.length > 1) {
        router.go(-1)
    } else {
        router.push('/')
    }
}
</script>