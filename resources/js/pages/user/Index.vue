<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'

import TableHeader from './TableHeader'

defineProps({
  users: Object,
})
</script>

<template>
  <Head title="Daftar User" />

  <AppLayout>
    <DataTable
      responsiveLayout="scroll"
      columnResizeMode="expand"
      :value="users.data"
      :rowHover="true"
      :stripedRows="true"
    >
      <template #header>
        <div class="grid">
          <div class="col-12 md:col-6">
            <div class="flex align-items-center">
              <h5 class="mr-3 mb-0">User</h5>

              <InputText class="w-full md:w-27rem" placeholder="cari..." />
            </div>
          </div>

          <div class="col-12 md:col-6 flex justify-content-end">
            <AppButton :href="route('users.create')" label="Tambah User" icon="pi pi-pencil" class="p-button-text" />
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
            :href="route('users.edit', data.id)"
            class="p-button p-component p-button-icon-only p-button-rounded p-button-text"
          >
            <i class="pi pi-angle-double-right p-button-icon"></i>
          </Link>
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="users.links" />
  </AppLayout>
</template>
