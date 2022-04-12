<script setup>
import { ref, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { useForm, Head, usePage } from '@inertiajs/inertia-vue3'
import AppInputText from '@/components/AppInputText.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppButton from '@/components/AppButton.vue'
import AppDialog from '@/components/AppDialog.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps({
  user: Object,
  genders: Array,
  outlets: Array,
  roles: Array,
})

const form = useForm({
  name: props.user.name,
  phone: props.user.phone,
  email: props.user.email,
  gender_id: props.user.gender_id,
  outlet_id: props.user.outlet_id,
  role_id: props.user.role_id,
})

const submit = () => {
  form.put(route('users.update', props.user.id))
}

const visibleDialog = ref(false)

const confirmDialog = () => {
  visibleDialog.value = true
}

const onAgree = (id) => Inertia.delete(route('users.destroy', id))

const onCancel = () => (visibleDialog.value = false)

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})
</script>

<template>
  <Head title="Ubah User" />

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
                <AppInputText label="Email" placeholder="email" :error="form.errors.email" v-model="form.email" />
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

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Hak Akses"
                  placeholder="Pilih satu"
                  v-model="form.role_id"
                  :options="roles"
                  :error="form.errors.role_id"
                />
              </div>

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Outlet"
                  placeholder="Pilih satu"
                  v-model="form.outlet_id"
                  :options="outlets"
                  :error="form.errors.outlet_id"
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
                @agree="onAgree(user.id)"
                @cancel="onCancel"
              />

              <Button label="Hapus" icon="pi pi-trash" class="p-button-outlined p-button-danger" @click="confirmDialog" />

              <div class="flex flex-column sm:flex-row align-items-center sm:justify-content-center">
                <AppButton
                  label="Blokir"
                  icon="pi pi-ban"
                  method="delete"
                  class="p-button-outlined p-button-danger md:mr-3"
                  :href="route('users.block', user.id)"
                />

                <Button
                  label="Simpan"
                  class="p-button-outlined"
                  icon="pi pi-check"
                  :disabled="form.processing"
                  @click="submit"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
