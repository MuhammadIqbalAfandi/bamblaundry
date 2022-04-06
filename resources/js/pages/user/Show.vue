<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppInputText from '@/components/AppInputText.vue'
import AppDropdown from '@/components/AppDropdown.vue'

const props = defineProps({
  user: Object,
  roles: Array,
  outlets: Array,
  genders: Array,
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
  formChangePassword.post(route('users.change-password', props.user.id))
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
                      class="p-button-text"
                      :disabled="form.processing"
                      @click="submit"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Ubah Password">
                <div class="grid">
                  <div class="col-12 md:col-6">
                    <div class="field">
                      <label for="old_password">Password Lama</label>
                      <Password
                        id="old_password"
                        label="Password Lama"
                        placeholder="password lama"
                        class="w-full"
                        inputClass="w-full"
                        :toggleMask="true"
                        :error="form.errors.old_password"
                        v-model="formChangePassword.old_password"
                      />
                    </div>
                  </div>

                  <div class="col-12 md:col-6">
                    <div class="field">
                      <label for="new_password">Password Baru</label>
                      <Password
                        id="new_password"
                        label="Password Baru"
                        placeholder="password baru"
                        class="w-full"
                        inputClass="w-full"
                        :toggleMask="true"
                        :error="formChangePassword.errors.new_password"
                        v-model="formChangePassword.new_password"
                      />
                    </div>
                  </div>

                  <div class="col-12 md:col-6">
                    <div class="field">
                      <label for="new_password_confirmation">Konfirmasi Password</label>
                      <Password
                        id="new_password_confirmation"
                        label="Konfirmasi Password"
                        placeholder="konfirmasi password"
                        class="w-full"
                        inputClass="w-full"
                        :toggleMask="true"
                        v-model="formChangePassword.new_password_confirmation"
                      />
                    </div>
                  </div>

                  <div class="col-12 flex justify-content-end">
                    <Button
                      label="Simpan"
                      icon="pi pi-check"
                      class="p-button-text"
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
