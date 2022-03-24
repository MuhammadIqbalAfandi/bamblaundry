<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppLayout from '@/layouts/AppLayout.vue'

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

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText :disabled="true" label="Id Outlet" v-model="form.outlet_number" placeholder="id outlet" />
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
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <AppButton @click="submit" label="Simpan" icon="pi pi-check" class="p-button-text" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
