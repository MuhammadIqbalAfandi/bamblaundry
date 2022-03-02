<script setup>
import { Head } from '@inertiajs/inertia-vue3'

import AppTable from '@/components/AppTable.vue'
import AppButtonMove from '@/components/AppButtonMove.vue'
import AppButtonDetail from '@/components/AppButtonDetail.vue'
import AppPagination from '@/components/AppPagination.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

defineProps({
  customers: Object,
})
</script>

<template>
  <Head title="Daftar Customer" />

  <DefaultLayout>
    <CRow class="mb-4">
      <CCol></CCol>

      <CCol xs="auto">
        <AppButtonMove :href="route('customers.create')">Tambah Customer</AppButtonMove>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <AppTable>
          <template #table-head>
            <CTableRow>
              <CTableHeaderCell>Id Customer</CTableHeaderCell>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>HP</CTableHeaderCell>
              <CTableHeaderCell>Alamat</CTableHeaderCell>
              <CTableHeaderCell>Jenis Kelamin</CTableHeaderCell>
            </CTableRow>
          </template>
          <template #table-body>
            <CTableRow v-for="customer in customers.data" :key="customer.id">
              <CTableDataCell>{{ customer.customer_number }}</CTableDataCell>
              <CTableDataCell>{{ customer.name }}</CTableDataCell>
              <CTableDataCell>{{ customer.phone }}</CTableDataCell>
              <CTableDataCell>{{ customer.address }}</CTableDataCell>
              <CTableDataCell>{{ customer.gender }}</CTableDataCell>
              <CTableDataCell>
                <AppButtonDetail :href="route('customers.edit', customer.id)" />
              </CTableDataCell>
            </CTableRow>
          </template>
        </AppTable>
      </CCol>
    </CRow>

    <CRow>
      <AppPagination :links="customers.links" />
    </CRow>
  </DefaultLayout>
</template>
