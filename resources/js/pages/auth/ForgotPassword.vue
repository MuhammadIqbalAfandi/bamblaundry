<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3'

import AuthValidationErrors from '@/components/AuthValidationErrors.vue'
import AuthSessionSuccess from '@/components/AuthSessionSuccess.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import logoNegative from '@/assets/brand/logoNegative'

const form = useForm({
  email: '',
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <Head title="Lupa Password" />

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
                  <h1>Lupa Password</h1>
                  <p class="text-medium-emphasis">Tulis Email anda untuk mereset Password.</p>

                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-at" />
                    </CInputGroupText>
                    <CFormInput type="email" placeholder="email" v-model="form.email" />
                  </CInputGroup>

                  <CRow>
                    <CCol>
                      <div class="d-grid">
                        <AppButtonCreate :disabled="form.processing">Permintaan Password baru</AppButtonCreate>
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
