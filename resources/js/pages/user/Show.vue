<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  user: Object,
  roles: Array,
  genders: Array,
})
</script>

<template>
  <Head title="User Profile" />

  <AppLayout>
    <h1>{{ user.name }}</h1>
  </AppLayout>
</template>
