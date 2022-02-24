<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  error: String,
  modelValue: [String, Number, Boolean],
})

defineEmits(['update:modelValue'])

const isError = computed(() => (props.error ? true : false))
</script>

<template>
  <CFormLabel>{{ label }}:</CFormLabel>
  <CFormSelect :invalid="isError" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option></option>
    <slot />
  </CFormSelect>
  <CFormFeedback invalid>{{ error }}</CFormFeedback>
</template>
