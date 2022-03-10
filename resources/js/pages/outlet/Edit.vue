<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppLayout from '@/layouts/AppLayout.vue'

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

const visibleDialog = ref(false)

const confirmDialog = () => {
  visibleDialog.value = true
}

const onAgree = (id) => Inertia.delete(route('outlets.destroy', id))

const onCancel = () => (visibleDialog.value = false)
</script>

<template>
  <Head title="Ubah Outlet" />

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText :disabled="true" label="Id Outlet" v-model="form.outlet_number" />
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
            <div
              class="flex flex-column sm:flex-row align-items-center sm:justify-content-center sm:justify-content-between"
            >
              <AppDialog
                message="Yakin akan menghapus data ini?"
                v-model:visible="visibleDialog"
                @agree="onAgree(outlet.id)"
                @cancel="onCancel"
              />

              <Button label="Hapus" icon="pi pi-trash" class="p-button-text p-button-danger" @click="confirmDialog" />

              <AppButton @click="submit" label="Simpan" icon="pi pi-check" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
