<script setup>
import { ref, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppInputText from '@/components/AppInputText.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  outlet: Object,
})

const form = useForm({
  name: props.outlet.name,
  phone: props.outlet.phone,
  address: props.outlet.address,
})

const submit = () => {
  form.put(route('outlets.update', props.outlet.id))
}

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

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

              <Button label="Simpan" icon="pi pi-check" class="p-button-text" @click="submit" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
