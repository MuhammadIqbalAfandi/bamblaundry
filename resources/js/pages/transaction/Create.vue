<script setup>
import { ref, reactive, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppAutocompleteBasic from '@/components/AppAutocompleteBasic.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { TransactionBasketTable } from './TableHeader.js'
import { IDRCurrencyFormat } from '@/utils/helpers'

const props = defineProps({
  transactionNumber: String,
  outlets: Array,
  laundries: Array,
  customers: Array,

  customerNumber: String,
  genders: Array,
})

const form = useForm({
  transaction_number: props.transactionNumber,
  customer_id: '',
  laundry_id: '',
  discount_all: 0,
  quantity: 0,
})

const submit = () => {
  form
    .transform((data) => ({
      transaction_number: data.transaction_number,
      discount_all: data.discount_all,
      customer_id: data.customer_id.id,
      laundries: transactionBasket,
    }))
    .post(route('transactions.store'))
}

const customerDialog = ref(false)

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

const customerDialogOnHide = () => {
  formCustomer.reset()

  formCustomer.clearErrors()

  usePage().props.value.errors = {}

  usePage().props.value.flash.success = null

  usePage().props.value.flash.error = null
}

const customerOnComplete = (event) => {
  Inertia.reload({
    data: { customer: event.query },
    only: ['customers'],
  })
}

const customerOnSelected = (event) => {
  form.customer_id = event.value
}

const formCustomer = useForm({
  transaction_number: props.transactionNumber,
  customer_number: props.customerNumber,
  name: '',
  phone: '',
  address: '',
  gender_id: '',
})

const submitCustomer = () => {
  formCustomer.post(route('customers.store'), {
    onSuccess: () => {
      formCustomer.reset()

      formCustomer.customer_number = props.customerNumber
    },
  })
}

const laundryOnComplete = (event) => {
  Inertia.reload({
    data: { laundry: event.query },
    only: ['laundries'],
  })
}

const laundryOnSelected = (event) => {
  form.laundry_id = event.value
}

const transactionBasket = reactive([])

const transactionBasketOnClick = () => {
  form.clearErrors()

  if (!form.laundry_id.id) {
    form.setError('laundry_id', 'Tipe laundry tidak boleh kosong')
  }

  if (!form.quantity && form.laundry_id.id) {
    form.setError('quantity', 'Kuantitas tidak boleh 0 atau kosong')
  }

  if (form.hasErrors) {
    return false
  }

  transactionBasket.push({
    laundryId: form.laundry_id.id,
    laundry: `${form.laundry_id.name} ${form.laundry_id.price}/${form.laundry_id.unit}`,
    quantity: form.quantity,
    discount: 0,
    price: form.laundry_id.price,
    totalPrice: form.quantity * form.laundry_id.price,
  })

  form.reset('laundry_id', 'quantity')
}

const transactionBasketCellEdit = (event) => {
  const { data, newValue, field } = event

  if (field === 'discount') {
    data[field] = newValue ?? 0

    const price = data['price'] * data['quantity']
    data['totalPrice'] = price - price * (newValue / 100)
  }
}

const transactionBasketOnDelete = (id) => {
  transactionBasket.splice(id, 1)
}

const transactionPriceTotal = () => {
  form.discount_all = form.discount_all ?? 0

  const totalPrice = transactionBasket.reduce((prev, current) => prev + current.totalPrice, 0)
  const totalPriceAfterDiscount = totalPrice - totalPrice * (form.discount_all / 100)

  return IDRCurrencyFormat(totalPriceAfterDiscount)
}
</script>

<template>
  <AppLayout>
    <Head title="Tambah Transaksi" />

    <div class="grid">
      <div class="col-12">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 sm:col-6">
                <AppInputText
                  disabled
                  label="Id Transaksi"
                  placeholder="id transaksi"
                  v-model="form.transaction_number"
                />
              </div>

              <div class="col-12 sm:col-6">
                <AppAutocompleteBasic
                  empty
                  dropdown
                  complete-on-focus
                  label="Customer"
                  field="customerNumber"
                  placeholder="Customer"
                  v-model="form.customer_id"
                  :error="form.errors.customer_id"
                  :suggestions="customers"
                  @complete="customerOnComplete"
                  @item-select="customerOnSelected"
                >
                  <template #item="slotProps">
                    <template v-if="slotProps.item">
                      <div class="flex flex-column">
                        <span>{{ slotProps.item.name }}</span>
                        <span class="font-bold">{{ slotProps.item.phone }}</span>
                        <span class="font-bold">{{ slotProps.item.customerNumber }}</span>
                      </div>
                    </template>
                  </template>

                  <template #empty>
                    <span
                      class="cursor-pointer"
                      style="color: var(--primary-color)"
                      @click="customerDialog = !customerDialog"
                    >
                      Tambah Customer
                    </span>
                  </template>
                </AppAutocompleteBasic>
              </div>

              <div class="col-12 sm:col-6">
                <AppAutocompleteBasic
                  dropdown
                  label="Tipe Laundry"
                  field="name"
                  placeholder="Tipe Laundry"
                  v-model="form.laundry_id"
                  :error="form.errors.laundry_id"
                  :suggestions="laundries"
                  @complete="laundryOnComplete"
                  @item-select="laundryOnSelected"
                >
                  <template #item="slotProps">
                    <template v-if="slotProps.item">
                      <div class="flex flex-column">
                        <span>{{ slotProps.item.name }}</span>
                        <span class="font-bold">{{ slotProps.item.price }} / {{ slotProps.item.unit }}</span>
                      </div>
                    </template>
                  </template>
                </AppAutocompleteBasic>
              </div>

              <div class="col-12 sm:col-6">
                <AppInputNumber
                  show-buttons
                  placeholder="kuantitas"
                  v-model="form.quantity"
                  :use-grouping="false"
                  :label="form.laundry_id.id ? `Jumlah (${form.laundry_id.unit})` : '-'"
                  :disabled="!form.laundry_id.id"
                  :error="form.errors.quantity"
                  :step="0.1"
                  :min="0"
                />
              </div>

              <div class="col-12 sm:col-6 sm:col-offset-6 flex justify-content-end">
                <Button
                  label="Tambahkan"
                  class="p-button-text"
                  icon="pi pi-shopping-cart"
                  @click="transactionBasketOnClick"
                />
              </div>

              <div class="col-12">
                <h1 class="text-base"><i class="pi pi-shopping-cart"></i> <span class="ml-2">Daftar Laundry</span></h1>

                <DataTable
                  striped-rows
                  row-hover
                  responsive-layout="scroll"
                  column-resize-mode="expand"
                  edit-mode="cell"
                  :value="transactionBasket"
                  @cell-edit-complete="transactionBasketCellEdit"
                >
                  <template v-if="$page.props.errors.laundries" #empty>
                    <div class="flex justify-content-center p-error">
                      {{ $page.props.errors.laundries }}
                    </div>
                  </template>

                  <template #header>
                    <span>Info Customer</span>
                    <div class="mt-2">
                      <span class="mr-3">Nama : {{ form.customer_id.name }}</span>
                      <span>HP : {{ form.customer_id.phone }}</span>
                    </div>
                  </template>

                  <Column
                    v-for="transactionBasketTable in TransactionBasketTable"
                    :field="transactionBasketTable.field"
                    :header="transactionBasketTable.header"
                    :key="transactionBasketTable.field"
                  >
                    <template #body="{ data, field }">
                      <template v-if="field === 'discount'"> {{ data[field] }}% </template>

                      <template v-else-if="field === 'price'">
                        {{ IDRCurrencyFormat(data[field]) }}
                      </template>

                      <template v-else-if="field === 'totalPrice'">
                        {{ IDRCurrencyFormat(data[field]) }}
                      </template>

                      <template v-else>
                        {{ data[field] }}
                      </template>
                    </template>

                    <template #editor="{ data, field }">
                      <template v-if="field === 'discount'">
                        <InputNumber
                          id="discount"
                          input-class="w-4rem"
                          v-model="data[field]"
                          suffix="%"
                          :min="0"
                          :max="100"
                        />
                      </template>

                      <template v-else-if="field === 'price'">
                        {{ IDRCurrencyFormat(data[field]) }}
                      </template>

                      <template v-else-if="field === 'totalPrice'">
                        {{ IDRCurrencyFormat(data[field]) }}
                      </template>

                      <template v-else>
                        {{ data[field] }}
                      </template>
                    </template>
                  </Column>

                  <Column>
                    <template #body="{ index }">
                      <Button
                        icon="pi pi-trash"
                        class="p-button-rounded p-button-text"
                        @click="transactionBasketOnDelete(index)"
                      />
                    </template>
                  </Column>
                </DataTable>
              </div>

              <div class="col-12 sm:col-6 sm:col-offset-6 flex flex-column align-items-end">
                <div class="field">
                  <label for="discount">Diskon</label>

                  <InputNumber
                    id="discount"
                    input-class="w-4rem ml-2"
                    v-model="form.discount_all"
                    suffix="%"
                    :min="0"
                    :max="100"
                  />
                </div>

                <span>
                  Total harga: <span class="font-bold">{{ transactionPriceTotal() }}</span>
                </span>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <AppButton
                label="Simpan Transaksi"
                icon="pi pi-check"
                class="p-button-text"
                :disabled="
                  form.processing || transactionBasket.length === 0 || Object.keys(form.customer_id).length === 0
                "
                @click="submit"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <Dialog
      modal
      v-model:visible="customerDialog"
      class="p-fluid"
      header="Tambah Customer"
      :style="{ width: '450px' }"
      :breakpoints="{ '960px': '75vw' }"
      @hide="customerDialogOnHide"
    >
      <div class="grid">
        <div class="col-12 md:col-6">
          <AppInputText disabled label="Id Customer" placeholder="id customer" v-model="formCustomer.customer_number" />
        </div>

        <div class="col-12 md:col-6">
          <AppInputText label="Nama" placeholder="nama" :error="formCustomer.errors.name" v-model="formCustomer.name" />
        </div>

        <div class="col-12 md:col-6">
          <AppInputText
            label="Nomor HP"
            placeholder="nomor hp"
            v-model="formCustomer.phone"
            :error="formCustomer.errors.phone"
          />
        </div>

        <div class="col-12 md:col-6">
          <AppInputText
            label="Alamat"
            placeholder="alamat"
            v-model="formCustomer.address"
            :error="formCustomer.errors.address"
          />
        </div>

        <div class="col-12 md:col-6">
          <AppDropdown
            label="Jenis Kelamin"
            placeholder="Pilih satu"
            v-model="formCustomer.gender_id"
            :options="genders"
            :error="formCustomer.errors.gender_id"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-content-end">
          <AppButton
            label="Simpan"
            icon="pi pi-check"
            class="p-button-text"
            :disabled="formCustomer.processing"
            @click="submitCustomer"
          />
        </div>
      </template>
    </Dialog>
  </AppLayout>
</template>
