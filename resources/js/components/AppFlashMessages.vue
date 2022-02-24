<script setup>
import { ref, watch, computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'

const show = ref(true)
const flashMessage = computed(() => usePage().props.value.flash)

watch(
  flashMessage,
  () => {
    show.value = true
  },
  { deep: true }
)
</script>

<template>
  <CRow>
    <CCol md="8">
      <CAlert
        v-if="$page.props.flash.success && show"
        color="success"
        dismissible
        @close="show = false"
        class="d-flex align-items-center"
      >
        <CIcon icon="cil-check-circle" class="flex-shrink-0 me-2" width="24" height="24" />
        <div>{{ $page.props.flash.success }}</div>
      </CAlert>

      <CAlert
        v-if="($page.props.flash.error || Object.keys($page.props.errors).length > 0) && show"
        color="danger"
        dismissible
        @close="show = false"
        class="d-flex align-items-center"
      >
        <CIcon icon="cil-x-circle" class="flex-shrink-0 me-2" width="24" height="24" />
        <div v-if="$page.props.flash.error">{{ $page.props.flash.error }}</div>
        <div v-else>
          <div v-if="Object.keys($page.props.errors).length === 1">Ditemukan satu error pada form</div>
          <div v-else>Ditemukan {{ Object.keys($page.props.errors).length }} error pada form</div>
        </div>
      </CAlert>
    </CCol>
  </CRow>
</template>
