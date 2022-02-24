<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'

const status = computed(() => usePage().props.value.status)
</script>

<template>
  <CRow class="justify-content-center">
    <CCol md="8">
      <CAlert v-if="status" color="success">{{ status }}</CAlert>
    </CCol>
  </CRow>
</template>
