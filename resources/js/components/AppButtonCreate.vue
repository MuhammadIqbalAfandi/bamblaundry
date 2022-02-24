<script setup>
defineProps(['disabled'])
</script>

<template>
  <CButton type="submit" class="btn-primary px-4" :disabled="disabled">
    <slot />
  </CButton>
</template>
