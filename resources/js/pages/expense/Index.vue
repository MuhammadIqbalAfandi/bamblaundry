<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppButton from '@/components/AppButton.vue'

import TableHeader from './TableHeader'

const props = defineProps({
  expenses: Object,
  filters: Object,
})

const filterForm = useForm({
  dates: props.filters.dates,
})
</script>

<template>
  <Head title="Pengeluaran" />

  <AppLayout>
    <DataTable
      responsive-layout="scroll"
      column-resize-mode="expand"
      :value="expenses.data"
      :row-hover="true"
      :striped-rows="true"
    >
      <template #header>
        <h5>Pengeluaran</h5>

        <div class="grid">
          <div class="col-12 md:col-8">
            <Calendar
              class="w-full md:w-27rem"
              v-model="filterForm.dates"
              selection-mode="range"
              placeholder="filter waktu..."
              date-format="dd/mm/yy"
              :show-button-bar="true"
              :manual-input="false"
            />
          </div>
          <div class="col-12 md:col-4 flex justify-content-end">
            <AppButton
              label="Tambah Pengeluaran"
              class="p-button-text"
              icon="pi pi-pencil"
              :href="route('expenses.create')"
            />
          </div>
        </div>
      </template>

      <Column
        v-for="tableHeader in TableHeader"
        :field="tableHeader.field"
        :header="tableHeader.header"
        :key="tableHeader.field"
      />

      <Column>
        <template #body="{ data }">
          <AppButton
            icon="pi pi-link"
            class="p-button-text p-button-icon-only p-button-rounded p-button-text"
            :href="route('expenses.show', data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="expenses.links" />
  </AppLayout>
</template>
