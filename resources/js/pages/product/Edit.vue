<script setup>
import { ref, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppInputText from '@/components/AppInputText.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  product: Object,
})

const form = useForm({
  name: props.product.name,
  price: props.product.price,
  unit: props.product.unit,
})

const submit = () => {
  form.put(route('products.update', props.product.id))
}

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

const visibleDialog = ref(false)

const confirmDialog = () => {
  visibleDialog.value = true
}

const onAgree = (id) => Inertia.delete(route('products.destroy', id))

const onCancel = () => (visibleDialog.value = false)
</script>

<template>
  <Head title="Ubah Product" />

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
            <div class="grid">
              <div class="col-12 md:col-6 flex flex-column md:flex-row justify-content-center md:justify-content-start">
                <AppDialog
                  message="Yakin akan menghapus data ini?"
                  v-model:visible="visibleDialog"
                  @agree="onAgree(product.id)"
                  @cancel="onCancel"
                />

                <Button
                  v-if="!product.relation"
                  label="Hapus"
                  icon="pi pi-trash"
                  class="p-button-outlined p-button-danger"
                  @click="confirmDialog"
                />
              </div>

              <div class="col-12 md:col-6 flex flex-column md:flex-row justify-content-center md:justify-content-end">
                <Button label="Simpan" icon="pi pi-check" class="p-button-outlined" @click="submit" />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
