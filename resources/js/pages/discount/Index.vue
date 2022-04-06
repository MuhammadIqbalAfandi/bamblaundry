<script setup>
import { ref, watch } from 'vue'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppButton from '@/components/AppButton.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  id: Number,
  discount: Number,
})

const btnDisabled = ref(true)

const form = useForm({
  discount: props.discount,
})

const submit = () => {
  if (form.discount == null) {
    form.discount = 0
  }

  form.post(route('discounts.store'), { onSuccess: () => (btnDisabled.value = true) })
}
</script>

<template>
  <Head title="Pengaturan Diskon" />

  <AppLayout>
    <h1>Diskon</h1>

    <div class="grid">
      <div class="col-12 md:col-6">
        <Card>
          <template #content>
            <AppInputNumber
              class="md:w-16rem"
              label="Jumlah diskon"
              placeholder="jumlah diskon"
              :disabled="btnDisabled"
              :error="form.errors.discount"
              v-model="form.discount"
            />
          </template>

          <template #footer>
            <div class="flex flex-column sm:flex-row sm:justify-content-between">
              <Button
                label="Edit"
                icon="pi pi-trash"
                class="p-button-text p-button-warning mb-3 sm:md-0"
                @click="btnDisabled = false"
              />

              <AppButton @click="submit" label="Simpan" icon="pi pi-check" class="p-button-text" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
