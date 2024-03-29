<script setup>
import { Inertia } from '@inertiajs/inertia'
import { watch, onMounted } from 'vue'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import dayjs from 'dayjs'
import pickBy from 'lodash/pickBy'
import AppLayout from '@/layouts/AppLayout.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppButton from '@/components/AppButton.vue'

import TableHeader from './TableHeader'

const props = defineProps({
  expenses: Object,
  filters: Object,
  outlets: Array,
})

const filterForm = useForm({
  dates: null,
  startDate: props.filters.startDate,
  endDate: props.filters.endDate,
  outlet: props.filters.outlet,
})

onMounted(() => {
  if (props.filters.startDate || props.filters.endDate) {
    if (props.filters.endDate) {
      filterForm.dates = [new Date(props.filters.startDate), new Date(props.filters.endDate)]
    } else {
      filterForm.dates = [new Date(props.filters.startDate), null]
    }
  }
})

watch(filterForm, () => {
  if (filterForm.dates) {
    if (filterForm.dates[1]) {
      filterForm.startDate = dayjs(filterForm.dates[0]).format('YYYY-MM-DD')
      filterForm.endDate = dayjs(filterForm.dates[1]).format('YYYY-MM-DD')
    } else {
      filterForm.startDate = dayjs(filterForm.dates[0]).format('YYYY-MM-DD')
      filterForm.endDate = null
    }
  } else {
    filterForm.endDate = null
    filterForm.startDate = null
  }

  Inertia.get(
    '/expenses',
    pickBy({
      startDate: filterForm.startDate,
      endDate: filterForm.endDate,
      outlet: filterForm.outlet,
    }),
    {
      preserveState: true,
    }
  )
})

const filterReset = () => {
  Inertia.get('/expenses')
}
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
        <h1>Pengeluaran</h1>

        <div class="grid">
          <div class="col-12 md:col-8">
            <div class="grid">
              <div class="col-12 md:col-4">
                <Calendar
                  class="w-full"
                  v-model="filterForm.dates"
                  selection-mode="range"
                  placeholder="filter waktu..."
                  date-format="dd/mm/yy"
                  :manual-input="false"
                />
              </div>
              <div v-if="$page.props.auth.user.role_id === 1" class="col-12 md:col-4">
                <Dropdown
                  class="w-full"
                  placeholder="pilih outlet..."
                  v-model="filterForm.outlet"
                  option-label="label"
                  option-value="value"
                  :options="outlets"
                />
              </div>
              <div class="col-auto mt-2 ml-2">
                <Button label="reset" class="p-button-link" @click="filterReset" />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-4 flex flex-column md:flex-row justify-content-end">
            <AppButton
              label="Tambah Pengeluaran"
              class="p-button-outlined"
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
            icon="pi pi-angle-double-right"
            class="p-button-text p-button-icon-only p-button-rounded p-button-text"
            :href="route('expenses.show', data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="expenses.links" />
  </AppLayout>
</template>
