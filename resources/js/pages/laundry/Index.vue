<script setup>
import { Head } from '@inertiajs/inertia-vue3'

import AppTable from '@/components/AppTable.vue'
import AppButtonMove from '@/components/AppButtonMove.vue'
import AppButtonDetail from '@/components/AppButtonDetail.vue'
import AppPagination from '@/components/AppPagination.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

defineProps({
  laundries: Object,
})
</script>

<template>
  <Head title="Daftar Tipe Laundry" />

  <DefaultLayout>
    <CRow class="mb-4">
      <CCol></CCol>

      <CCol xs="auto">
        <AppButtonMove :href="route('laundries.create')">Tambah tipe Laundry</AppButtonMove>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <AppTable>
          <template #table-head>
            <CTableRow>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>Harga</CTableHeaderCell>
              <CTableHeaderCell>Satuan</CTableHeaderCell>
            </CTableRow>
          </template>
          <template #table-body>
            <CTableRow v-for="laundry in laundries.data" :key="laundry.id">
              <CTableDataCell>{{ laundry.name }}</CTableDataCell>
              <CTableDataCell>{{ laundry.price }}</CTableDataCell>
              <CTableDataCell>{{ laundry.unit }}</CTableDataCell>
              <CTableDataCell>
                <AppButtonDetail :href="route('laundries.edit', laundry.id)" />
              </CTableDataCell>
            </CTableRow>
          </template>
        </AppTable>
      </CCol>
    </CRow>

    <CRow>
      <AppPagination :links="laundries.links" />
    </CRow>
  </DefaultLayout>
</template>
