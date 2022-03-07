<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  error: String,
  modelValue: [String, Number, Boolean, Array, Object],
})

defineEmits(['update:modelValue'])

const isError = computed(() => (props.error ? true : false))

const forLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-'))

const ariaDescribedbyLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-') + '-help')
</script>

<template>
  <div class="field">
    <label :for="forLabel">{{ label }}</label>

    <InputText
      class="w-full"
      :class="{ 'p-invalid': isError }"
      :id="forLabel"
      :aria-describedby="ariaDescribedbyLabel"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <small :id="ariaDescribedbyLabel" :class="{ 'p-error': isError }">
      {{ error }}
    </small>
  </div>
</template>
