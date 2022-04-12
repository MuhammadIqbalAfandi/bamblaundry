<script setup>
import { computed, watch } from 'vue'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppDropdown from '@/components/AppDropdown.vue'
import AppPassword from '@/components/AppPassword.vue'

const props = defineProps({
  user: Object,
  roles: Array,
  outlets: Array,
  genders: Array,
})

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
  formChangePassword.clearErrors()
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

const formChangePassword = useForm({
  old_password: '',
  new_password: '',
  new_password_confirmation: '',
})

const changePassword = () => {
  formChangePassword.post(route('users.change-password', props.user.id), {
    onSuccess: () => formChangePassword.reset(),
  })
}
</script>

<template>
  <Head title="Profil Saya" />

  <AppLayout>
    <div class="grid">
      <div class="col-12 md:col-8">
        <Card>
          <template #title>Profil Saya</template>

          <template #content>
            <TabView lazy>
              <TabPanel header="Ubah Profil">
                <div class="grid">
                  <div class="col-12 md:col-6">
                    <AppInputText label="Nama" placeholder="nama" :error="form.errors.name" v-model="form.name" />
                  </div>

                  <div class="col-12 md:col-6">
                    <AppInputText
                      label="Nomor HP"
                      placeholder="nomor hp"
                      :error="form.errors.phone"
                      v-model="form.phone"
                    />
                  </div>

                  <div class="col-12 md:col-6">
                    <AppInputText label="Email" placeholder="email" :error="form.errors.email" v-model="form.email" />
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

                  <div class="col-12 flex justify-content-end">
                    <Button
                      label="Simpan"
                      icon="pi pi-check"
                      class="p-button-outlined"
                      :disabled="form.processing"
                      @click="submit"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Ubah Password">
                <div class="grid">
                  <div class="col-12">
                    <AppPassword
                      label="Password Lama"
                      placeholder="password lama"
                      :error="formChangePassword.errors.old_password"
                      v-model="formChangePassword.old_password"
                    />
                  </div>

                  <div class="col-12">
                    <AppPassword
                      label="Password Baru"
                      placeholder="password baru"
                      :error="formChangePassword.errors.new_password"
                      v-model="formChangePassword.new_password"
                    />
                  </div>

                  <div class="col-12">
                    <AppPassword
                      label="Konfirmasi Password"
                      placeholder="konfirmasi password"
                      v-model="formChangePassword.new_password_confirmation"
                    />
                  </div>

                  <div class="col-12 flex justify-content-end">
                    <Button
                      label="Simpan"
                      icon="pi pi-check"
                      class="p-button-outlined"
                      :disabled="formChangePassword.processing"
                      @click="changePassword"
                    />
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
