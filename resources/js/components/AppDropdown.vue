<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  optionLabel: {
    type: String,
    default: 'label',
  },
  optionValue: {
    type: String,
    default: 'value',
  },
  placeholder: String,
  options: {
    type: Array,
    required: true,
  },
  error: String,
  modelValue: [String, Number, Boolean, Array, Object],
})

defineEmits(['update:modelValue'])

const isError = computed(() => (props.error ? true : false))

const forLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-'))

const ariaDescribedbyLabel = computed(() => props.label.toLowerCase().replace(/\s+/g, '-') + '-help')

const selectedDropdownLabel = (value) => {
  const result = props.options.find((option) => option[props.optionValue] == value)
  if (result) {
    return result[props.optionLabel]
  }
}
</script>

<template>
  <label :for="forLabel">{{ label }}</label>

  <Dropdown
    class="w-full"
    :class="{ 'p-invalid': isError }"
    :id="forLabel"
    :aria-describedby="ariaDescribedbyLabel"
    :option-label="optionLabel"
    :option-value="optionValue"
    :placeholder="placeholder"
    :options="options"
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event.value)"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value">
        {{ selectedDropdownLabel(slotProps.value) }}
      </div>
      <div v-else>
        {{ slotProps.placeholder }}
      </div>
    </template>
  </Dropdown>
  <small :id="ariaDescribedbyLabel" :class="{ 'p-error': isError }">
    {{ error }}
  </small>
</template>
