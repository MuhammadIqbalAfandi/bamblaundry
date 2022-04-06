<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import dayjs from 'dayjs'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
import AppButton from '@/components/AppButton.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { IndexTable } from './TableHeader'

const props = defineProps({
  transactions: Object,
  transactionsStatus: Array,
  filters: Object,
  outlets: Array,
})

const filterForm = useForm({
  search: props.filters.search,
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
      '/transactions',
      pickBy({
        search: filterForm.search,
        startDate: filterForm.startDate,
        endDate: filterForm.endDate,
        outlet: filterForm.outlet,
      }),
      {
        preserveState: true,
      }
    )
  }, 300)
)

const transactionId = ref()

const updateStatusDialogShow = ref(false)

const updateStatusForm = useForm({
  transaction_status_id: null,
})

const updateStatusSubmit = () => {
  updateStatusForm.put(route('transactions.update', transactionId.value), {
    onSuccess: () => {
      updateStatusDialogShow.value = false
    },
  })
}

const updateStatusItems = ref([])

const overlayMenu = ref()

const overlayItems = ref([])

const startPrinting = (transactionNumber) => {
  Inertia.get(`/thermal-printing/${transactionNumber}`)
}

const overlayToggle = (event, data) => {
  overlayItems.value =
    data.transactionStatusId == 4
      ? [
          {
            label: 'Lihat detail',
            icon: 'pi pi-eye',
            to: route('transactions.show', data.id),
          },
          {
            label: 'Cetak ulang',
            icon: 'pi pi-print',
            command() {
              startPrinting(data.transactionNumber)
            },
          },
        ]
      : [
          {
            label: 'Perbaharui status',
            icon: 'pi pi-refresh',
            command() {
              updateStatusDialogShow.value = true
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
            command() {
              startPrinting(data.transactionNumber)
            },
          },
        ]

  updateStatusItems.value = props.transactionsStatus.filter((val) => val.value >= data.transactionStatusId)

  updateStatusForm.transaction_status_id = data.transactionStatusId

  transactionId.value = data.id

  overlayMenu.value.toggle(event)
}

const isAdmin = computed(() => usePage().props.value.isAdmin)
</script>

<template>
  <Head title="Daftar Transaksi" />

  <AppLayout>
    <DataTable
      responsive-layout="scroll"
      column-resize-mode="expand"
      :value="transactions.data"
      :row-hover="true"
      :striped-rows="true"
    >
      <template #header>
        <h1>Transaksi</h1>

        <div class="grid">
          <div class="col-12 md:col-8">
            <div class="grid">
              <div class="col-12 md:col-4">
                <InputText class="w-full" placeholder="cari..." v-model="filterForm.search" />
              </div>

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
              label="Tambah Transaksi"
              class="p-button-text md:w-16rem"
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
          <template v-if="field === 'transactionNumber'">
            <p class="font-bold">{{ data[field] }}</p>
            <p>{{ data.createdAt }}</p>
          </template>
          <template v-else-if="field === 'customer'">
            <p class="font-bold">{{ data.customer.number }}</p>
            <p>{{ data.customer.name }}</p>
            <p>{{ data.customer.phone }}</p>
          </template>
          <template v-else-if="field === 'transactionStatusName'">
            <Badge v-if="data['transactionStatusId'] === 1" :value="data[field]"></Badge>
            <Badge v-else-if="data['transactionStatusId'] === 2" :value="data[field]" severity="warning"></Badge>
            <Badge v-else :value="data[field]" severity="success"></Badge>
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
      v-model:visible="updateStatusDialogShow"
      class="p-fluid"
      header="Perbaharui Status"
      :style="{ width: '450px' }"
      :breakpoints="{ '960px': '75vw' }"
      @hide="updateStatusDialogShow"
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
          <Button
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
