<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3'

import AuthValidationErrors from '@/components/AuthValidationErrors.vue'
import AuthSessionSuccess from '@/components/AuthSessionSuccess.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import logoNegative from '@/assets/brand/logoNegative'

const form = useForm({
  email: 'admin@laundry.com',
  password: 'admin',
  remember: false,
})

const submit = () => {
  form.post(route('login'), {
    onFinish: () => form.reset('password'),
  })
}
</script>

<template>
  <Head title="Log in" />

  <div class="bg-light min-vh-100 d-flex align-items-center">
    <CContainer>
      <AuthValidationErrors />

      <AuthSessionSuccess />

      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="submit">
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">Masuk ke akun anda</p>

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

                  <CRow>
                    <CCol xs="12" lg="6">
                      <AppButtonCreate :disabled="form.processing">Login</AppButtonCreate>
                    </CCol>

                    <CCol xs="12" lg="6" class="text-start">
                      <Link :href="route('password.request')">Lupa Password?</Link>
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
