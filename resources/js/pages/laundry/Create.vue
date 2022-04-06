<script setup>
import { watch, computed } from 'vue'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

const form = useForm({
  name: null,
  price: null,
  unit: null,
})

const submit = () => {
  form.post(route('laundries.store'), { onSuccess: () => form.reset() })
}
</script>

<template>
  <Head title="Tambah Tipe Laundry" />

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
                <AppInputNumber label="Harga" placeholder="harga" :error="form.errors.price" v-model="form.price" />
              </div>

              <div class="col-12 md:col-6">
                <AppInputText label="Satuan" placeholder="satuan" :error="form.errors.unit" v-model="form.unit" />
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <Button label="Simpan" icon="pi pi-check" class="p-button-text" @click="submit" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
