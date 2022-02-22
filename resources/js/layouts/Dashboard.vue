<script setup>
import { provide, ref } from 'vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'

const sidebarVisible = ref(true)
const sidebarUnfoldable = ref(false)
const toggleSidebar = () => (sidebarVisible.value = !sidebarVisible.value)
const toggleUnfoldable = () => (sidebarUnfoldable.value = !sidebarUnfoldable.value)

provide('sidebar', {
  sidebarVisible,
  toggleSidebar,
  sidebarUnfoldable,
  toggleUnfoldable,
})
</script>

<template>
  <div>
    <AppSidebar />

    <div class="wrapper">
      <AppHeader />

      <CContainer lg>
        <slot />
      </CContainer>

      <AppFooter />
    </div>
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
