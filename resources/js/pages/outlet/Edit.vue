<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppTextInput from '@/components/AppTextInput.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppButtonDelete from '@/components/AppButtonDelete.vue'
import AppButtonAction from '@/components/AppButtonAction.vue'
import AppModalAlert from '@/components/AppModalAlert.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  outlet: Object,
})

const form = useForm({
  outlet_number: props.outlet.outlet_number,
  name: props.outlet.name,
  phone: props.outlet.phone,
  address: props.outlet.address,
})

const submit = () => {
  form.put(route('outlets.update', props.outlet.id))
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

            <CCardFooter class="d-flex justify-content-between">
              <AppButtonAction @click="toggleModalAlert">Hapus Outlet</AppButtonAction>

              <AppModalAlert>
                Anda yakin ingin mengahapus outlet ini?

                <template #footer>
                  <AppButtonDelete :href="route('outlets.destroy', outlet.id)">Hapus Outlet</AppButtonDelete>
                </template>
              </AppModalAlert>

              <AppButtonCreate :disabled="form.processing">Ubah Outlet</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
