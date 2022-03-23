<script setup>
import AppSubSidebar from "@/components/AppSubSidebar.vue";

defineProps({
  model: Array,
});
</script>

<template>
  <div class="layout-menu-container">
    <AppSubSidebar :items="model" :root="true" class="layout-menu" />
  </div>
</template>
