<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AppTextInput from '@/components/AppTextInput.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppButtonDelete from '@/components/AppButtonDelete.vue'
import AppButtonAction from '@/components/AppButtonAction.vue'
import AppModalAlert from '@/components/AppModalAlert.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  laundry: Object,
})

const form = useForm({
  name: props.laundry.name,
  price: props.laundry.price,
  unit: props.laundry.unit,
})

const submit = () => {
  form.put(route('laundries.update', props.laundry.id))
}
</script>

<template>
  <Head title="Ubah tipe Laundry" />

  <DefaultLayout v-slot="{ toggleModalAlert }">
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

            <CCardFooter class="d-flex justify-content-between">
              <AppButtonAction @click="toggleModalAlert">Hapus tipe Laundry</AppButtonAction>

              <AppModalAlert>
                Anda yakin ingin mengahapus tipe laundry ini?

                <template #footer>
                  <AppButtonDelete :href="route('laundries.destroy', laundry.id)">Hapus tipe Laundry</AppButtonDelete>
                </template>
              </AppModalAlert>

              <AppButtonCreate :disabled="form.processing">Ubah tipe Laundry</AppButtonCreate>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
