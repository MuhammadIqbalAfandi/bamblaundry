<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  customer_number: String,
  genders: Array,
})

const form = useForm({
  customer_number: props.customer_number,
  name: '',
  phone: '',
  address: '',
  gender_id: '',
})

const submit = () => {
  form.post(route('customers.store'))
}
</script>

<template>
  <Head title="Tambah Customer" />

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText :disabled="true" label="Id Customer" v-model="form.customer_number" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Nomor HP" placeholder="nomor hp" :error="form.errors.phone" v-model="form.phone" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Alamat" placeholder="alamat" :error="form.errors.address" v-model="form.address" />
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
            <div class="flex justify-content-end">
              <AppButton @click="submit" label="Simpan" icon="pi pi-check" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
