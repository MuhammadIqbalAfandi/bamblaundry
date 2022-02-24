<script setup>
import { Head } from '@inertiajs/inertia-vue3'

import AppTable from '@/components/AppTable.vue'
import AppButtonMove from '@/components/AppButtonMove.vue'
import AppButtonDetail from '@/components/AppButtonDetail.vue'
import AppPagination from '@/components/AppPagination.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

defineProps({
  users: Object,
})
</script>

<template>
  <Head title="Daftar User" />

  <DefaultLayout>
    <CRow class="mb-4">
      <CCol></CCol>

      <CCol xs="auto">
        <AppButtonMove :href="route('users.create')">Tambah User</AppButtonMove>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <AppTable>
          <template #table-head>
            <CTableRow>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>HP</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Alamat</CTableHeaderCell>
              <CTableHeaderCell>Jenis Kelamin</CTableHeaderCell>
              <CTableHeaderCell>Role</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </template>
          <template #table-body>
            <CTableRow v-for="user in users.data" key="user.id">
              <CTableDataCell>{{ user.name }}</CTableDataCell>
              <CTableDataCell>{{ user.phone }}</CTableDataCell>
              <CTableDataCell>{{ user.email }}</CTableDataCell>
              <CTableDataCell>{{ user.address }}</CTableDataCell>
              <CTableDataCell>{{ user.gender }}</CTableDataCell>
              <CTableDataCell>{{ user.role }}</CTableDataCell>
              <CTableDataCell>{{ user.status }}</CTableDataCell>
              <CTableDataCell>
                <AppButtonDetail :href="route('users.edit', user.id)" />
              </CTableDataCell>
            </CTableRow>
          </template>
        </AppTable>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <AppPagination :links="users.links" />
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
