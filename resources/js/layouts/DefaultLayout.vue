<script setup>
import { provide, ref } from 'vue'

import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppFlashMessages from '@/components/AppFlashMessages.vue'

const sidebarVisible = ref(true)
const toggleSidebar = () => (sidebarVisible.value = !sidebarVisible.value)

const sidebarUnfoldable = ref(false)
const toggleUnfoldable = () => (sidebarUnfoldable.value = !sidebarUnfoldable.value)

const modalAlertVisible = ref(false)
const toggleModalAlert = () => (modalAlertVisible.value = !modalAlertVisible.value)

provide('defaultLayout', {
  sidebarVisible,
  toggleSidebar,
  sidebarUnfoldable,
  toggleUnfoldable,
  modalAlertVisible,
  toggleModalAlert,
})
</script>

<template>
  <AppSidebar />

  <div class="wrapper">
    <AppHeader />

    <CContainer fluid>
      <AppFlashMessages />

      <slot :toggleModalAlert="toggleModalAlert" />
    </CContainer>

    <AppFooter />
  </div>
</template>

<style lang="scss">
@import '@coreui/coreui/scss/coreui';

.wrapper {
  width: 100%;
  @include ltr-rtl('padding-left', var(--cui-sidebar-occupy-start, 0));
  will-change: auto;
  @include transition(padding 0.15s);
}
</style>
