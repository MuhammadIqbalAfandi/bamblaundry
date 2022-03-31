<script setup>
import { Inertia } from '@inertiajs/inertia'
import { watch, computed, onMounted, ref } from 'vue'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import dayjs from 'dayjs'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
import AppLayout from '@/layouts/AppLayout.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppButton from '@/components/AppButton.vue'

import { TransactionReportTable } from './TableHeader'

const props = defineProps({
  transactions: Object,
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

watch(
  filterForm,
  throttle(() => {
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
      '/reports/transactions',
      pickBy({
        startDate: filterForm.startDate,
        endDate: filterForm.endDate,
        outlet: filterForm.outlet,
      }),
      {
        preserveState: true,
      }
    )

    const params = window.location.search
    exportExcelLink.value = `/reports/transactions/export/excel${params}`
  }, 300)
)

const exportExcelLink = ref('/reports/transactions/export/excel')

const isAdmin = computed(() => usePage().props.value.isAdmin)
</script>

<template>
  <AppLayout>
    <Head title="Laporan Transaksi" />

    <DataTable
      responsive-layout="scroll"
      column-resize-mode="expand"
      :value="transactions.data"
      :row-hover="true"
      :striped-rows="true"
    >
      <template #header>
        <h5>Laporan Transaksi</h5>

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
                  :show-button-bar="true"
                  :manual-input="false"
                />
              </div>
              <div class="col-12 md:col-4">
                <Dropdown
                  v-if="isAdmin"
                  class="w-full"
                  placeholder="pilih outlet..."
                  v-model="filterForm.outlet"
                  option-label="label"
                  option-value="value"
                  :options="outlets"
                />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-4 flex justify-content-end">
            <AppButton
              v-if="transactions.data.length"
              label="Export excel"
              class-button="p-button-text md:w-16rem"
              icon="pi pi-file-excel"
              :inertia-link="false"
              :href="exportExcelLink"
            />
          </div>
        </div>
      </template>

      <Column
        v-for="tableHeader in TransactionReportTable"
        :field="tableHeader.field"
        :header="tableHeader.header"
        :key="tableHeader.field"
      />

      <Column>
        <template #body="{ data }">
          <AppButton
            icon="pi pi-link"
            class="p-button-text p-button-icon-only p-button-rounded p-button-text"
            :href="`/transactions?startDate=${data.startDate}&endDate=${data.startDate}`"
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="transactions.links" />
  </AppLayout>
</template>