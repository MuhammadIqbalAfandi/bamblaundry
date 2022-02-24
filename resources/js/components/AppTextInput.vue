<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  placeholder: String,
  error: String,
  modelValue: [String, Number, Boolean],
})

defineEmits(['update:modelValue'])

const isError = computed(() => (props.error ? true : false))
</script>

<template>
  <CFormLabel>{{ label }}:</CFormLabel>
  <CFormInput
    :placeholder="placeholder"
    :invalid="isError"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <CFormFeedback invalid>{{ error }}</CFormFeedback>
</template>
