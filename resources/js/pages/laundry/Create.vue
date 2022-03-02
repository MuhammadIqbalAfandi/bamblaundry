<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppTextInput from '@/components/AppTextInput.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const form = useForm({
  name: '',
  price: '',
  unit: '',
})

const submit = () => {
  form.post(route('laundries.store'))
}
</script>

<template>
  <Head title="Tambah tipe Laundry" />

  <DefaultLayout>
    <CRow>
      <CCol md="8">
        <CCard color="light" class="border-light">
          <CForm @submit.prevent="submit">
            <CRow class="p-4">
              <CCol md="6" class="mb-4">
                <AppTextInput label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Harga" placeholder="harga" :error="form.errors.price" v-model="form.price" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Satuan" placeholder="unit" :error="form.errors.unit" v-model="form.unit" />
              </CCol>
            </CRow>

            <CCardFooter class="d-flex justify-content-end">
              <AppButtonCreate :disabled="form.processing">Tambah tipe Laundry</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
