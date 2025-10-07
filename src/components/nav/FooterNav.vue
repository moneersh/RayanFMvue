<template>
  <ul class="menu menu-vertical text-sm space-y-2">
    <li><router-link to="/" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</router-link></li>
    <li><router-link to="/about" class="hover:text-primary transition-colors">{{ $t('nav.about') }}</router-link></li>
    <li><router-link to="/programs" class="hover:text-primary transition-colors">{{ $t('nav.programs') }}</router-link></li>
    <li><router-link to="/contact" class="hover:text-primary transition-colors">{{ $t('nav.contact') }}</router-link></li>
  </ul>
</template>

<script setup lang="ts">
// Footer navigation component
</script>