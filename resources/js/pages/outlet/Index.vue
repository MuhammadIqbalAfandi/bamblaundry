<script setup>
import { Head } from '@inertiajs/inertia-vue3'

import AppTable from '@/components/AppTable.vue'
import AppButtonMove from '@/components/AppButtonMove.vue'
import AppButtonDetail from '@/components/AppButtonDetail.vue'
import AppPagination from '@/components/AppPagination.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

defineProps({
  outlets: Object,
})
</script>

<template>
  <Head title="Daftar Outlet" />

  <DefaultLayout>
    <CRow class="mb-4">
      <CCol></CCol>

      <CCol xs="auto">
        <AppButtonMove :href="route('outlets.create')">Tambah Outlet</AppButtonMove>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <AppTable>
          <template #table-head>
            <CTableRow>
              <CTableHeaderCell>Id Outlet</CTableHeaderCell>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>HP</CTableHeaderCell>
              <CTableHeaderCell>Alamat</CTableHeaderCell>
            </CTableRow>
          </template>
          <template #table-body>
            <CTableRow v-for="outlet in outlets.data" :key="outlet.id">
              <CTableDataCell>{{ outlet.outlet_number }}</CTableDataCell>
              <CTableDataCell>{{ outlet.name }}</CTableDataCell>
              <CTableDataCell>{{ outlet.phone }}</CTableDataCell>
              <CTableDataCell>{{ outlet.address }}</CTableDataCell>
              <CTableDataCell>
                <AppButtonDetail :href="route('outlets.edit', outlet.id)" />
              </CTableDataCell>
            </CTableRow>
          </template>
        </AppTable>
      </CCol>
    </CRow>

    <CRow>
      <AppPagination :links="outlets.links" />
    </CRow>
  </DefaultLayout>
</template>
