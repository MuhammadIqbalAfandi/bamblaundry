<script setup>
import { useForm, Head } from '@inertiajs/inertia-vue3'
import AppInputText from '@/components/AppInputText.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppButton from '@/components/AppButton.vue'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  genders: Array,
  outlets: Array,
  roles: Array,
})

const form = useForm({
  name: '',
  phone: '',
  email: '',
  address: '',
  gender_id: '',
  outlet_id: '',
  role_id: '',
})

const submit = () => {
  form.post(route('users.store'))
}
</script>

<template>
  <Head title="Tambah User" />

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
                <AppInputText label="Alamat" placeholder="alamat" :error="form.errors.address" v-model="form.address" />
              </div>

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Jenis Kelamin"
                  placeholder="pilih satu"
                  v-model="form.gender_id"
                  :options="genders"
                  :error="form.errors.gender_id"
                />
              </div>

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Hak Akses"
                  placeholder="pilih satu"
                  v-model="form.role_id"
                  :options="roles"
                  :error="form.errors.role_id"
                />
              </div>

              <div class="col-12 md:col-6">
                <AppDropdown
                  label="Outlet"
                  placeholder="pilih satu"
                  v-model="form.outlet_id"
                  :options="outlets"
                  :error="form.errors.outlet_id"
                />
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <AppButton @click="submit" label="Simpan" icon="pi pi-check" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
