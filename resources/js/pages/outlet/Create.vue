<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppTextInput from '@/components/AppTextInput.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  outlet_number: String,
})

const form = useForm({
  outlet_number: props.outlet_number,
  name: '',
  phone: '',
  address: '',
})

const submit = () => {
  form.post(route('outlets.store'))
}
</script>

<template>
  <Head title="Tambah Outlet" />

  <DefaultLayout>
    <CRow>
      <CCol md="8">
        <CCard color="light" class="border-light">
          <CForm @submit.prevent="submit">
            <CRow class="p-4">
              <CCol md="6" class="mb-4">
                <CFormLabel>Id Outlet</CFormLabel>
                <CFormInput disabled v-model="form.outlet_number" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Nomor HP" placeholder="nomor hp" :error="form.errors.phone" v-model="form.phone" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Alamat" placeholder="alamat" :error="form.errors.address" v-model="form.address" />
              </CCol>
            </CRow>

            <CCardFooter class="d-flex justify-content-end">
              <AppButtonCreate :disabled="form.processing">Tambah Outlet</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
