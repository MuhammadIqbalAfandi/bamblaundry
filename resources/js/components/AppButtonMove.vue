<script setup>
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
  href: String,
})
</script>

<template>
  <Link class="btn btn-primary" :href="href">
    <slot />
  </Link>
</template>
