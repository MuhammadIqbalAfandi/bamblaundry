<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppTextInput from '@/components/AppTextInput.vue'
import AppSelectInput from '@/components/AppSelectInput.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  customer_number: String,
})

const form = useForm({
  customer_number: props.customer_number,
  name: '',
  phone: '',
  address: '',
  gender: '',
})

const submit = () => {
  form.post(route('customers.store'))
}
</script>

<template>
  <Head title="Tambah Customer" />

  <DefaultLayout>
    <CRow>
      <CCol md="8">
        <CCard color="light" class="border-light">
          <CForm @submit.prevent="submit">
            <CRow class="p-4">
              <CCol md="6" class="mb-4">
                <CFormLabel>Id Customer</CFormLabel>
                <CFormInput disabled v-model="form.customer_number" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Nomor HP" placeholder="nomor hp" :error="form.errors.phone" v-model="form.phone" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput
                  label="Address"
                  placeholder="address"
                  :error="form.errors.address"
                  v-model="form.address"
                />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppSelectInput label="Jenis Kelamin" :error="form.errors.gender" v-model="form.gender">
                  <option value="1">Perempuan</option>
                  <option value="2">Laki-laki</option>
                </AppSelectInput>
              </CCol>
            </CRow>

            <CCardFooter class="d-flex justify-content-end">
              <AppButtonCreate :disabled="form.processing">Tambah Customer</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
