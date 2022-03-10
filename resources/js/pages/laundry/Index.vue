<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import TableHeader from './TableHeader'

defineProps({
  laundries: Object,
})
</script>

<template>
  <Head title="Daftar Tipe Laundry" />

  <AppLayout>
    <DataTable
      responsiveLayout="scroll"
      columnResizeMode="expand"
      :value="laundries.data"
      :rowHover="true"
      :stripedRows="true"
    >
      <template #header>
        <div class="grid">
          <div class="col-12 md:col-6">
            <div class="flex align-items-center">
              <h5 class="mr-3 mb-0">Laundry</h5>

              <InputText class="w-full md:w-27rem" placeholder="cari..." />
            </div>
          </div>

          <div class="col-12 md:col-6 flex justify-content-end">
            <AppButton :href="route('laundries.create')" label="Tambah Laundry" icon="pi pi-pencil" />
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
          <Link
            as="button"
            :href="route('laundries.edit', data.id)"
            class="p-button p-component p-button-icon-only p-button-rounded p-button-text"
          >
            <i class="pi pi-angle-double-right p-button-icon"></i>
          </Link>
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="laundries.links" />
  </AppLayout>
</template>
