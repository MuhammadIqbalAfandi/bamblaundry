<script setup>
import AuthSessionSuccess from '@/components/AuthSessionSuccess.vue'
import AppButtonCreate from '@/components/AppButtonCreate.vue'
import logoNegative from '@/assets/brand/logoNegative'
</script>

<template>
  <div class="bg-light min-vh-100 d-flex align-items-center">
    <CContainer>
      <AuthSessionSuccess />

      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Email Verifikasi</h1>
                  <p class="text-medium-emphasis">
                    <span class="fw-bold">Cek Email anda</span> untuk link Email verifikasi, atau kirim ulang Email
                    verifikasi <span class="fw-bold">jika belum ada</span>
                  </p>

                  <CRow>
                    <CCol>
                      <div class="d-grid">
                        <AppButtonCreate>Reset Password</AppButtonCreate>
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
