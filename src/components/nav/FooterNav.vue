<template>
  <ul class="menu menu-vertical">
    <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
    <li><router-link to="/about">{{ $t('nav.about') }}</router-link></li>
    <li><router-link to="/programs">{{ $t('nav.programs') }}</router-link></li>
    <li><router-link to="/editorial-standards">{{ $t('nav.editorialStandards') }}</router-link></li>
    <li><router-link to="/contact">{{ $t('nav.contact') }}</router-link></li>
  </ul>
</template>

<script setup lang="ts">
// Footer navigation component
</script>