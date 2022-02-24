<script setup>
import { useForm, Link, Head } from '@inertiajs/inertia-vue3'

import AppTextInput from '@/components/AppTextInput.vue'
import AppSelectInput from '@/components/AppSelectInput.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import AppButtonDelete from '@/components/AppButtonDelete.vue'
import AppButtonAction from '@/components/AppButtonAction.vue'
import AppModalAlert from '@/components/AppModalAlert.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const props = defineProps({
  user: Object,
  outlets: Array,
  roles: Array,
})

const form = useForm({
  name: props.user.name,
  phone: props.user.phone,
  email: props.user.email,
  address: props.user.address,
  gender: props.user.gender,
  outlet_id: props.user.outlet,
  role_id: props.user.role,
})

const submit = () => {
  form.put(route('users.update', props.user.id))
}
</script>

<template>
  <Head title="Ubah User" />

  <DefaultLayout v-slot="{ toggleModalAlert }">
    <CRow>
      <CCol md="8">
        <CCard color="light" class="border-light">
          <CForm @submit.prevent="submit">
            <CRow class="p-4">
              <CCol md="6" class="mb-4">
                <AppTextInput label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Nomor HP" placeholder="nomor hp" :error="form.errors.phone" v-model="form.phone" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput label="Email" placeholder="email" :error="form.errors.email" v-model="form.email" />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppTextInput
                  label="Address"
                  placeholder="address"
                  :error="form.errors.address"
                  v-model="form.address"
                />
              </CCol>

              <CCol md="6" class="mb-4">
                <AppSelectInput label="Jenis Kelamin" :error="form.errors.gender" v-model="form.gender">
                  <option value="1">Perempuan</option>
                  <option value="2">Laki-laki</option>
                </AppSelectInput>
              </CCol>

              <CCol md="6" class="mb-4">
                <AppSelectInput label="Outlet" :error="form.errors.outlet_id" v-model="form.outlet_id">
                  <option v-for="outlet in outlets" key="outlet.id" :value="outlet.id">{{ outlet.name }}</option>
                </AppSelectInput>
              </CCol>

              <CCol md="6">
                <AppSelectInput label="Hak Akses" :error="form.errors.role_id" v-model="form.role_id">
                  <option v-for="role in roles" key="role.id" :value="role.id">{{ role.name }}</option>
                </AppSelectInput>
              </CCol>
            </CRow>

            <CCardFooter class="d-flex justify-content-between align-items-center">
              <AppButtonAction @click="toggleModalAlert">Hapus User</AppButtonAction>

              <AppModalAlert>
                Anda yakin ingin mengahapus user ini?

                <template #footer>
                  <AppButtonDelete :href="route('users.destroy', user.id)">Hapus User</AppButtonDelete>
                </template>
              </AppModalAlert>

              <div>
                <Link
                  :href="route('users.block', user.id)"
                  as="button"
                  method="delete"
                  class="btn btn-ghost-primary me-2"
                >
                  Block User
                </Link>

                <AppButtonCreate :disabled="form.processing">Ubah User</AppButtonCreate>
              </div>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  </DefaultLayout>
</template>
