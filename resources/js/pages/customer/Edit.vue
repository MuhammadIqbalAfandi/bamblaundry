<script setup>
import { ref, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { TransactionTable } from './TableHeader'

const props = defineProps({
  customer: Object,
  genders: Array,
  transactions: Object,
})

const form = useForm({
  customer_number: props.customer.customer_number,
  name: props.customer.name,
  phone: props.customer.phone,
  gender_id: props.customer.gender_id,
})

const submit = () => {
  form.put(route('customers.update', props.customer.id))
}

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

const visibleDialog = ref(false)

const confirmDialog = () => {
  visibleDialog.value = true
}

const onAgree = (id) => Inertia.delete(route('customers.destroy', id))

const onCancel = () => (visibleDialog.value = false)
</script>

<template>
  <Head title="Ubah Customer" />

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText
                  :disabled="true"
                  label="Id Customer"
                  v-model="form.customer_number"
                  placeholder="id customer"
                />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Nomor HP" placeholder="nomor hp" :error="form.errors.phone" v-model="form.phone" />
              </div>

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Jenis Kelamin"
                  placeholder="Pilih satu"
                  v-model="form.gender_id"
                  :options="genders"
                  :error="form.errors.gender_id"
                />
              </div>
            </div>
          </template>

          <template #footer>
            <div
              class="flex flex-column sm:flex-row align-items-center sm:justify-content-center sm:justify-content-between"
            >
              <AppDialog
                message="Yakin akan menghapus data ini?"
                v-model:visible="visibleDialog"
                @agree="onAgree(customer.id)"
                @cancel="onCancel"
              />

              <Button label="Hapus" icon="pi pi-trash" class="p-button-text p-button-danger" @click="confirmDialog" />

              <Button label="Simpan" icon="pi pi-check" class="p-button-text" @click="submit" />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <h2>Riwayat Transaksi</h2>
    <div class="grid">
      <div class="col-12">
        <Card>
          <template #content>
            <DataTable
              responsive-layout="scroll"
              column-resize-mode="expand"
              :value="transactions.data"
              :row-hover="true"
              :striped-rows="true"
            >
              <Column
                v-for="transactionTable in TransactionTable"
                :field="transactionTable.field"
                :header="transactionTable.header"
                :key="transactionTable.field"
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
                    <Badge
                      v-else-if="data['transactionStatusId'] === 2"
                      :value="data[field]"
                      severity="warning"
                    ></Badge>
                    <Badge v-else :value="data[field]" severity="success"></Badge>
                  </template>
                  <template v-else>
                    {{ data[field] }}
                  </template>
                </template>
              </Column>

              <Column>
                <template #body="{ data }">
                  <AppButton
                    icon="pi pi-angle-double-right"
                    class="p-button-icon-only p-button-rounded p-button-text"
                    :href="route('transactions.show', data.id)"
                  />
                </template>
              </Column>
            </DataTable>

            <AppPagination :links="transactions.links" />
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
