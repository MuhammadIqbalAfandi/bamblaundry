<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AuthValidationErrors from '@/components/AuthValidationErrors.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import logoNegative from '@/assets/brand/logoNegative'

const props = defineProps({
  token: String,
  email: String,
})

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('password.update'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <Head title="Reset Password" />

  <div class="bg-light min-vh-100 d-flex align-items-center">
    <CContainer>
      <AuthValidationErrors />

      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="submit">
                  <h1>Reset Password</h1>
                  <p class="text-medium-emphasis">Tulis Password baru untuk login</p>

                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="email" v-model="form.email" />
                  </CInputGroup>

                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="password" v-model="form.password" />
                  </CInputGroup>

                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="konfirmasi password"
                      v-model="form.password_confirmation"
                    />
                  </CInputGroup>

                  <CRow>
                    <CCol>
                      <div class="d-grid">
                        <AppButtonCreate :disabled="form.processing">Reset Password</AppButtonCreate>
                      </div>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>

            <CCard class="text-white bg-primary py-5">
              <CCardBody class="text-center">
                <CRow class="align-items-center" style="height: 100%">
                  <CCol>
                    <CIcon :icon="logoNegative" height="35" />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
