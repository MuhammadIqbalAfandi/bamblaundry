<script setup>
import { ref, reactive, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppDropdown from '@/components/AppDropdown.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppAutocompleteBasic from '@/components/AppAutocompleteBasic.vue'
import AppLayout from '@/layouts/AppLayout.vue'

import { TransactionBasketTable } from './TableHeader.js'
import { IDRCurrencyFormat } from '@/utils/currency-format'

const props = defineProps({
  transactionNumber: String,
  laundries: {
    type: Array,
    default: [],
  },
  products: {
    type: Array,
    default: [],
  },
  customers: {
    type: Array,
    default: [],
  },
  discount: Number,

  customerNumber: String,
  genders: Array,
})

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

watch(
  () => props.customers,
  (newVal) => {
    if (Object.keys(newVal).length === 1) {
      form.customer = newVal[0]
    }
  }
)

watch(
  () => props.transactionNumber,
  (newVal) => {
    form.transactionNumber = newVal
  }
)

const customerDialogShow = ref(false)

const customerDialogOnShow = () => {
  Inertia.reload({
    only: ['customerNumber'],
  })

  formCustomer.customer_number = props.customerNumber
}

const customerDialogOnHide = () => {
  formCustomer.reset()

  formCustomer.clearErrors()

  usePage().props.value.errors = {}

  usePage().props.value.flash.error = null
}

const customerOnComplete = (event) => {
  Inertia.reload({
    data: { customer: event.query },
    only: ['customers'],
  })
}

const customerOnSelected = (event) => {
  form.customer = event.value
}

const laundryOnComplete = (event) => {
  Inertia.reload({
    data: { laundry: event.query },
    only: ['laundries'],
  })
}

const laundryOnSelected = (event) => {
  form.laundry = event.value
}

const productOnComplete = (event) => {
  Inertia.reload({
    data: { product: event.query },
    only: ['products'],
  })
}

const productOnSelected = (event) => {
  form.product = event.value
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
      customerOnComplete({ query: formCustomer.customer_number })

      formCustomer.reset()

      customerDialogShow.value = !customerDialogShow.value
    },
  })
}

const transactionBasket = reactive([])

const transactionBasketClear = () => {
  transactionBasket.splice(0)
}

const transactionBasketFilter = (search) => {
  return transactionBasket.filter((val) => val.label === search)
}

const transactionBasketOnDelete = (id) => {
  transactionBasket.splice(id, 1)
}

const transactionBasketCellEdit = (event) => {
  const { data, newValue, field } = event

  if (field === 'discount') {
    data[field] = newValue ?? 0

    const price = data['price'] * data['quantity']
    data['totalPrice'] = price - price * (newValue / 100)
  }
}

const validationAddTransactionBasket = () => {
  form.clearErrors()

  if (!form.laundry.id && !form.product.id) {
    form.setError('laundry', 'Salah satu harus diisi')
    form.setError('product', 'Salah satu harus diisi')
  }

  if (!form.quantityLaundry && form.laundry.id) {
    form.setError('quantityLaundry', 'Kuantitas tidak boleh 0 atau kosong')
  }

  if (!form.quantityProduct && form.product.id) {
    form.setError('quantityProduct', 'Kuantitas tidak boleh 0 atau kosong')
  }
}

const addTransactionBasket = () => {
  validationAddTransactionBasket()

  if (form.quantityLaundry) {
    transactionBasket.push({
      label: 'laundry',
      id: form.laundry.id,
      item: form.laundry.name,
      unit: form.laundry.unit,
      quantity: form.quantityLaundry.toFixed(1),
      price: form.laundry.price,
      discount: 0,
      totalPrice: form.quantityLaundry * form.laundry.price,
    })

    form.reset('laundry', 'quantityLaundry')
  }

  if (form.quantityProduct) {
    transactionBasket.push({
      label: 'product',
      id: form.product.id,
      item: form.product.name,
      unit: form.product.unit,
      price: form.product.price,
      quantity: form.quantityProduct,
      discount: 0,
      totalPrice: form.quantityProduct * form.product.price,
    })

    form.reset('product', 'quantityProduct')
  }
}

const subTotal = () => {
  return IDRCurrencyFormat(transactionBasket.reduce((prev, current) => prev + current.totalPrice, 0))
}

const discount = () => {
  form.discount = form.customer.checkTransaction + 1 === 7 ? props.discount : 0

  return IDRCurrencyFormat(form.discount)
}

const priceTotal = () => {
  let totalPrice = transactionBasket.reduce((prev, current) => prev + current.totalPrice, 0)
  totalPrice = totalPrice - form.discount
  if (totalPrice < 0) {
    totalPrice = 0
  }

  return IDRCurrencyFormat(totalPrice)
}

const form = useForm({
  transactionNumber: props.transactionNumber,
  customer: '',
  discount: props.discount,

  laundry: '',
  quantityLaundry: 0,

  product: '',
  quantityProduct: 0,
})

const submit = () => {
  form
    .transform((data) => ({
      transaction_number: data.transactionNumber,
      discount: data.discount,
      customer_number: data.customer.customerNumber,
      laundries: transactionBasketFilter('laundry'),
      products: transactionBasketFilter('product'),
    }))
    .post(route('transactions.store'), {
      onSuccess: () => {
        transactionBasketClear()

        Inertia.reload({
          data: { customer: form.customer.customerNumber },
          only: ['customers', 'transactionNumber'],
        })
      },
    })
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
                  v-model="form.transactionNumber"
                />
              </div>

              <div class="col-12 sm:col-6">
                <AppAutocompleteBasic
                  empty
                  label="Customer"
                  field="customerNumber"
                  placeholder="customer"
                  v-model="form.customer"
                  :error="form.errors.customer"
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
                      @click="customerDialogShow = !customerDialogShow"
                    >
                      Tambah Customer
                    </span>
                  </template>
                </AppAutocompleteBasic>
              </div>

              <div class="col-12 sm:col-6">
                <AppAutocompleteBasic
                  label="Laundry"
                  field="name"
                  placeholder="laundry"
                  v-model="form.laundry"
                  :error="form.errors.laundry"
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
                  v-model="form.quantityLaundry"
                  :use-grouping="false"
                  :label="form.laundry.id ? `Jumlah (${form.laundry.unit})` : '-'"
                  :disabled="!form.laundry.id"
                  :error="form.errors.quantityLaundry"
                  :step="0.1"
                  :min="0"
                />
              </div>

              <div class="col-12 sm:col-6">
                <AppAutocompleteBasic
                  label="Product"
                  field="name"
                  placeholder="product"
                  v-model="form.product"
                  :error="form.errors.product"
                  :suggestions="products"
                  @complete="productOnComplete"
                  @item-select="productOnSelected"
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
                  v-model="form.quantityProduct"
                  :use-grouping="false"
                  :label="form.product.id ? `Jumlah (${form.product.unit})` : '-'"
                  :disabled="!form.product.id"
                  :error="form.errors.quantityProduct"
                  :min="0"
                />
              </div>

              <div class="col-12 sm:col-6 sm:col-offset-6 flex justify-content-end">
                <Button
                  label="Tambahkan"
                  class="p-button-text"
                  icon="pi pi-shopping-cart"
                  @click="addTransactionBasket"
                />
              </div>

              <div class="col-12">
                <h1 class="text-base"><i class="pi pi-shopping-cart"></i> <span class="ml-2">Keranjang</span></h1>

                <DataTable
                  striped-rows
                  row-hover
                  responsive-layout="scroll"
                  column-resize-mode="expand"
                  edit-mode="cell"
                  :value="transactionBasket"
                  @cell-edit-complete="transactionBasketCellEdit"
                >
                  <template #header>
                    <span>Info Customer</span>
                    <div class="mt-2">
                      <span class="mr-3">Nama : {{ form.customer.name }}</span>
                      <span>HP : {{ form.customer.phone }}</span>
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
                <span>
                  Sub Total: <span class="font-bold">{{ subTotal() }}</span>
                </span>

                <span>
                  Diskon: <span class="font-bold">{{ discount() }}</span>
                </span>

                <span>
                  Total harga: <span class="font-bold">{{ priceTotal() }}</span>
                </span>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <Button
                label="Simpan Transaksi"
                icon="pi pi-check"
                class="p-button-text"
                :disabled="form.processing || transactionBasket.length === 0 || Object.keys(form.customer).length === 0"
                @click="submit"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <Dialog
      modal
      v-model:visible="customerDialogShow"
      class="p-fluid"
      header="Tambah Customer"
      :style="{ width: '450px' }"
      :breakpoints="{ '960px': '75vw' }"
      @hide="customerDialogOnHide"
      @show="customerDialogOnShow"
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
          <Button
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
