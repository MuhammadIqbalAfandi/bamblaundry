<script setup>
import { watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import TableHeader from './TableHeader'

const props = defineProps({
  products: Object,
  filters: Object,
})

const filterForm = useForm({
  search: props.filters.search,
})

watch(
  filterForm,
  throttle(() => {
    Inertia.get('/products', pickBy({ search: filterForm.search }), { preserveState: true })
  }, 300)
)
</script>

<template>
  <Head title="Daftar Product" />

  <AppLayout>
    <DataTable
      responsiveLayout="scroll"
      columnResizeMode="expand"
      :value="products.data"
      :rowHover="true"
      :stripedRows="true"
    >
      <template #header>
        <h1>Product</h1>

        <div class="grid">
          <div class="col-12 md:col-8">
            <div class="flex align-items-center">
              <InputText class="w-full md:w-27rem" placeholder="cari..." v-model="filterForm.search" />
            </div>
          </div>

          <div class="col-12 md:col-4 flex justify-content-end">
            <AppButton
              label="Tambah Product"
              icon="pi pi-pencil"
              class="p-button-text"
              :href="route('products.create')"
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
            class="p-button-icon-only p-button-rounded p-button-text"
            :href="route('products.edit', data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="products.links" />
  </AppLayout>
</template>
