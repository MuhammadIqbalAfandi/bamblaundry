<script setup>
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
  href: String,
})
</script>

<template>
  <Link :href="href" method="delete" as="button" class="btn btn-primary">
    <slot />
  </Link>
</template>
