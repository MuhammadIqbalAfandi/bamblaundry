<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { IndexTable } from './TableHeader'

const props = defineProps({
  transactions: Object,
  transactionsStatus: Array,
})

const transactionId = ref()

const updateStatusDialog = ref(false)

const updateStatusForm = useForm({
  transaction_status_id: null,
})

const updateStatusSubmit = () => {
  updateStatusForm.put(route('transactions.update', transactionId.value), {
    onSuccess: () => {
      updateStatusDialog.value = false
    },
  })
}

const updateStatusItems = ref([])

const overlayMenu = ref()

const overlayItems = ref([])

const overlayToggle = (event, data) => {
  overlayItems.value = [
    {
      label: 'Perbaharui status',
      icon: 'pi pi-refresh',
      command() {
        updateStatusDialog.value = true
      },
    },
    {
      label: 'Lihat detail',
      icon: 'pi pi-eye',
      to: route('transactions.show', data.id),
    },
    {
      label: 'Cetak ulang',
      icon: 'pi pi-print',
      command() {},
    },
  ]

  updateStatusItems.value = props.transactionsStatus.filter((val) => val.value >= data.transactionStatusId)

  updateStatusForm.transaction_status_id = data.transactionStatusId

  transactionId.value = data.id

  overlayMenu.value.toggle(event)
}
</script>

<template>
  <Head title="Daftar Transaksi" />

  <AppLayout>
    <DataTable
      responsiveLayout="scroll"
      columnResizeMode="expand"
      :value="transactions.data"
      :rowHover="true"
      :stripedRows="true"
    >
      <template #header>
        <div class="grid">
          <div class="col-12 md:col-6">
            <div class="flex align-items-center">
              <h5 class="mr-3 mb-0">Transaksi</h5>

              <InputText class="w-full md:w-27rem" placeholder="cari..." />
            </div>
          </div>

          <div class="col-12 md:col-6 flex justify-content-end">
            <AppButton
              label="Tambah Transaksi"
              class="p-button-text"
              icon="pi pi-pencil"
              :href="route('transactions.create')"
            />
          </div>
        </div>
      </template>

      <Column
        v-for="indexTable in IndexTable"
        :field="indexTable.field"
        :header="indexTable.header"
        :key="indexTable.field"
      >
        <template #body="{ data, field }">
          <template v-if="field === 'transactionStatusName'">
            <Badge v-if="data['transactionStatusId'] === 1" :value="data[field]"></Badge>
            <Badge v-else-if="data['transactionStatusId'] === 2" :value="data[field]" severity="warning"></Badge>
            <Badge v-else :value="data[field]" severity="success"></Badge>
          </template>
          <template v-else-if="field === 'customer'">
            <p class="font-bold">{{ data.customer.number }}</p>
            <p>{{ data.customer.name }}</p>
            <p>{{ data.customer.phone }}</p>
          </template>
          <template v-else-if="field === 'transactionNumber'">
            <p class="font-bold">{{ data[field] }}</p>
            <p>{{ data.dateLaundry }}</p>
          </template>
          <template v-else>
            {{ data[field] }}
          </template>
        </template>
      </Column>

      <Column>
        <template #body="slotProps">
          <Button
            icon="pi pi-angle-double-down"
            class="p-button-rounded p-button-text"
            aria-controls="overlay_menu"
            @click="overlayToggle($event, slotProps.data)"
          />
          <AppMenu id="overlay_menu" ref="overlayMenu" :popup="true" :model="overlayItems" />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="transactions.links" />

    <Dialog
      modal
      v-model:visible="updateStatusDialog"
      class="p-fluid"
      header="Perbaharui Status"
      :style="{ width: '450px' }"
      :breakpoints="{ '960px': '75vw' }"
      @hide="updateStatusDialog"
    >
      <div class="grid">
        <div class="col-12">
          <AppDropdown
            label="Perbaharui Status"
            placeholder="pilih satu"
            v-model="updateStatusForm.transaction_status_id"
            :error="updateStatusForm.error"
            :options="updateStatusItems"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-content-end">
          <AppButton
            label="Simpan"
            icon="pi pi-check"
            class="p-button-text"
            :disabled="updateStatusForm.processing"
            @click="updateStatusSubmit"
          />
        </div>
      </template>
    </Dialog>
  </AppLayout>
</template>
