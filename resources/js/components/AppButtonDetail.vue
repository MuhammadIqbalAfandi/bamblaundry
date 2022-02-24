<script setup>
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
  href: String,
})
</script>

<template>
  <Link :href="href"><CIcon icon="cil-chevron-right" /></Link>
</template>
