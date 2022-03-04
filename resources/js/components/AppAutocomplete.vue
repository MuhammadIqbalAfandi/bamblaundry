<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['selected'])

const searchTerm = ref('')

const searchItems = computed(() => {
  if (searchTerm.value === '') {
    return []
  }

  return props.items.filter((item) => {
    if (
      item.customer_number.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.value.toLowerCase())
    ) {
      return item
    }
  })
})

const selectedItem = ref('')

const selectData = (item) => {
  selectedItem.value = item
  searchTerm.value = item.customer_number

  emit('selected', item)
}
</script>

<template>
  <CFormLabel>{{ label }}</CFormLabel>

  <CFormInput :placeholder="placeholder" v-model="searchTerm" :value="searchTerm"></CFormInput>

  <ul v-if="searchItems.length" class="list-group mt-2">
    <li
      v-for="item in searchItems"
      :key="item.id"
      @click="selectData(item)"
      class="list-group-item list-group-item-action"
    >
      {{ item.customer_number }} - {{ item.name }} - {{ item.phone }}
    </li>
  </ul>
</template>
