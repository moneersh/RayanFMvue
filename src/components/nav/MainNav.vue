<template>
  <ul class="menu menu-horizontal px-1" :class="{ 'menu-vertical': isMobile }">
    <li>
      <router-link to="/" class="hover:bg-primary-focus">
        {{ $t('nav.home') }}
      </router-link>
    </li>
    <li>
      <router-link to="/about" class="hover:bg-primary-focus">
        {{ $t('nav.about') }}
      </router-link>
    </li>
    <li>
      <router-link to="/programs" class="hover:bg-primary-focus">
        {{ $t('nav.programs') }}
      </router-link>
    </li>
    <li>
      <router-link to="/news" class="hover:bg-primary-focus">
        {{ $t('nav.news') }}
      </router-link>
    </li>
    <li>
      <router-link to="/events" class="hover:bg-primary-focus">
        {{ $t('nav.events') }}
      </router-link>
    </li>
    <li>
      <router-link to="/blog" class="hover:bg-primary-focus">
        {{ $t('nav.blog') }}
      </router-link>
    </li>
    <li>
      <router-link to="/how-to-listen" class="hover:bg-primary-focus">
        {{ $t('nav.howToListen') }}
      </router-link>
    </li>
    <li>
      <router-link to="/contact" class="hover:bg-primary-focus">
        {{ $t('nav.contact') }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  isMobile?: boolean
}

defineProps<Props>()
</script>

<style scoped>
.router-link-active {
  @apply bg-primary-focus;
}
</style>