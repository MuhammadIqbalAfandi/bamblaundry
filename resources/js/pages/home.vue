<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/inertia-vue3'

const vue = ref(3)
</script>

<template>
  <h1>Hello <span class="lv">Laravel</span> Vue {{ vue }}</h1>

  <Link :href="route('about')">To page About</Link>
</template>

<style lang="scss" scoped>
.lv {
  color: #eb4432;
}
</style>
