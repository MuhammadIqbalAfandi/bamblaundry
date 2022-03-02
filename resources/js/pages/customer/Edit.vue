<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppTextInput from '@/components/AppTextInput.vue'
import AppSelectInput from '@/components/AppSelectInput.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppButtonDelete from '@/components/AppButtonDelete.vue'
import AppButtonAction from '@/components/AppButtonAction.vue'
import AppModalAlert from '@/components/AppModalAlert.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  customer: Object,
})

const form = useForm({
  customer_number: props.customer.customer_number,
  name: props.customer.name,
  phone: props.customer.phone,
  address: props.customer.address,
  gender: props.customer.gender,
})

const submit = () => {
  form.put(route('customers.update', props.customer.id))
}
</script>

<template>
  <Head title="Ubah Customer" />

  <DefaultLayout v-slot="{ toggleModalAlert }">
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
                <AppTextInput label="Alamat" placeholder="alamat" :error="form.errors.address" v-model="form.address" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppSelectInput label="Jenis Kelamin" :error="form.errors.gender" v-model="form.gender">
                  <option value="1">Perempuan</option>
                  <option value="2">Laki-laki</option>
                </AppSelectInput>
              </CCol>
            </CRow>

            <CCardFooter class="d-flex justify-content-between align-items-center">
              <AppButtonAction @click="toggleModalAlert">Hapus Customer</AppButtonAction>

              <AppModalAlert>
                Anda yakin ingin mengahapus customer ini?

                <template #footer>
                  <AppButtonDelete :href="route('customers.destroy', customer.id)">Hapus Customer</AppButtonDelete>
                </template>
              </AppModalAlert>

              <AppButtonCreate :disabled="form.processing">Ubah Customer</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
