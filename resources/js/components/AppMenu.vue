<script setup>
import AppSubMenu from '@/components/AppSubMenu.vue'

defineProps({
  model: Array,
})
</script>

<template>
  <div class="layout-menu-container">
    <AppSubMenu :items="model" :root="true" class="layout-menu" />
  </div>
</template>
