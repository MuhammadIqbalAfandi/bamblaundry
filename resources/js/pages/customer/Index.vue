<script setup>
import { watch, ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { IndexTable } from './TableHeader'

const props = defineProps({
  customers: Object,
  filters: Object,
})

const filterForm = useForm({
  search: props.filters.search,
})

watch(
  filterForm,
  throttle(() => {
    Inertia.get('/customers', pickBy({ search: filterForm.search }), { preserveState: true })

    const params = window.location.search
    exportExcelLink.value = `/reports/customers/export/excel${params}`
  }, 300)
)

const exportExcelLink = ref('/reports/customers/export/excel')
</script>

<template>
  <Head title="Daftar Customer" />

  <AppLayout>
    <DataTable
      responsiveLayout="scroll"
      columnResizeMode="expand"
      :value="customers.data"
      :rowHover="true"
      :stripedRows="true"
    >
      <template #header>
        <h1>Customer</h1>

        <div class="grid">
          <div class="col-12 md:col-8">
            <div class="grid">
              <div class="col-12 md:col-3">
                <InputText class="w-full" placeholder="cari..." v-model="filterForm.search" />
              </div>
              <div v-if="customers.data" class="col-12 md:col-3">
                <AppButton
                  label="Export excel"
                  class-button="p-button-outlined w-full md:w-16rem"
                  icon="pi pi-file-excel"
                  :inertia-link="false"
                  :href="exportExcelLink"
                />
              </div>
            </div>
          </div>

          <div class="col-12 md:col-4 flex flex-column md:flex-row justify-content-end">
            <AppButton
              :href="route('customers.create')"
              label="Tambah Customer"
              icon="pi pi-pencil"
              class="p-button-outlined"
            />
          </div>
        </div>
      </template>

      <Column
        v-for="indexTable in IndexTable"
        :field="indexTable.field"
        :header="indexTable.header"
        :key="indexTable.field"
      />

      <Column>
        <template #body="{ data }">
          <AppButton
            icon="pi pi-angle-double-right"
            class="p-button-icon-only p-button-rounded p-button-text"
            :href="route('customers.edit', data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="customers.links" />
  </AppLayout>
</template>
