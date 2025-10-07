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

/* Arabic text improvements */
[dir="rtl"] .menu a {
  letter-spacing: 0.025em;
  word-spacing: 0.1em;
  padding-left: 1rem;
  padding-right: 1rem;
}

[dir="rtl"] .menu-horizontal > li + li {
  margin-right: 0.5rem;
}

[dir="rtl"] .menu-vertical > li + li {
  margin-top: 0.25rem;
}
</style>