<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'

const errors = computed(() => usePage().props.value.errors)
const hasErrors = computed(() => Object.keys(errors.value).length > 0)
</script>

<template>
  <CRow class="justify-content-center">
    <CCol md="8">
      <CAlert v-if="hasErrors" color="danger">
        <ul class="mb-0">
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </CAlert>
    </CCol>
  </CRow>
</template>
