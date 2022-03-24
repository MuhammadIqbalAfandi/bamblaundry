<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppButton from '@/components/AppButton.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  customer: Object,
  genders: Array,
})

const form = useForm({
  customer_number: props.customer.customer_number,
  name: props.customer.name,
  phone: props.customer.phone,
  address: props.customer.address,
  gender_id: props.customer.gender_id,
})

const submit = () => {
  form.put(route('customers.update', props.customer.id))
}

const visibleDialog = ref(false)

const confirmDialog = () => {
  visibleDialog.value = true
}

const onAgree = (id) => Inertia.delete(route('customers.destroy', id))

const onCancel = () => (visibleDialog.value = false)
</script>

<template>
  <Head title="Ubah Customer" />

  <AppLayout>
    <div class="grid">
      <div class="col-12 lg:col-8">
        <Card>
          <template #content>
            <div class="grid">
              <div class="col-12 md:col-6">
                <AppInputText
                  :disabled="true"
                  label="Id Customer"
                  v-model="form.customer_number"
                  placeholder="id customer"
                />
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
            <div
              class="flex flex-column sm:flex-row align-items-center sm:justify-content-center sm:justify-content-between"
            >
              <AppDialog
                message="Yakin akan menghapus data ini?"
                v-model:visible="visibleDialog"
                @agree="onAgree(customer.id)"
                @cancel="onCancel"
              />

              <Button label="Hapus" icon="pi pi-trash" class="p-button-text p-button-danger" @click="confirmDialog" />

              <AppButton @click="submit" label="Simpan" icon="pi pi-check" class="p-button-text" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
