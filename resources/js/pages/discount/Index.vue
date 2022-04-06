<script setup>
import { ref } from 'vue'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppInputNumber from '@/components/AppInputNumber.vue'
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
    <div class="grid">
      <div class="col-fixed">
        <Card>
          <template #title> Diskon </template>

          <template #content>
            <AppInputNumber
              label="Jumlah diskon"
              placeholder="jumlah diskon"
              :disabled="btnDisabled"
              :error="form.errors.discount"
              v-model="form.discount"
            />
          </template>

          <template #footer>
            <div class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
              <Button
                label="Edit"
                icon="pi pi-pencil"
                class="p-button-text p-button-warning mb-3 sm:mb-0"
                @click="btnDisabled = false"
              />

              <Button
                label="Simpan"
                icon="pi pi-check"
                class="p-button-text"
                :disabled="form.processing"
                @click="submit"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
@media screen and (max-width: 640px) {
  .col-fixed {
    width: 100%;
  }
}
</style>
