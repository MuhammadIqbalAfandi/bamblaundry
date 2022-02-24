<script setup>
import { inject } from 'vue'

const { modalAlertVisible, toggleModalAlert } = inject('defaultLayout')
</script>

<template>
  <CModal alignment="center" backdrop="static" :visible="modalAlertVisible">
    <CModalBody>
      <slot />
    </CModalBody>
    <CModalFooter>
      <CButton type="button" class="btn btn-ghost-primary" @click="toggleModalAlert">Tutup</CButton>

      <slot name="footer" />
    </CModalFooter>
  </CModal>
</template>
