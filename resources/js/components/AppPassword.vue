<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: null,
  },
  modelValue: null,
})

defineEmits(['update:modelValue'])

const isError = computed(() => (props.error ? true : false))

const forLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-'))

const ariaDescribedbyLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-') + '-help')
</script>

<template>
  <div class="field">
    <label :for="forLabel">{{ label }}</label>

    <Password
      class="w-full"
      input-class="w-full"
      :id="forLabel"
      :placeholder="placeholder"
      :aria-describedby="ariaDescribedbyLabel"
      :toggleMask="true"
      :value="modelValue"
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <small v-if="error" :id="ariaDescribedbyLabel" :class="{ 'p-error': isError }">
      {{ error }}
    </small>
  </div>
</template>
