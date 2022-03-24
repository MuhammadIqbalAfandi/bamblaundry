<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppLayout from '@/layouts/AppLayout.vue'

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

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Harga" placeholder="harga" :error="form.errors.price" v-model="form.price" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Satuan" placeholder="satuan" :error="form.errors.unit" v-model="form.unit" />
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
