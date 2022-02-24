<script setup>
import { inject } from 'vue'

import AppBreadCrumb from '@/components/AppBreadCrumb.vue'
import AppDropdownAccount from '@/components/AppDropdownAccount.vue'

const { toggleSidebar } = inject('defaultLayout')
</script>

<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="toggleSidebar">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <CHeaderNav>
        <AppDropdownAccount />
      </CHeaderNav>
    </CContainer>

    <CHeaderDivider />

    <CContainer fluid>
      <AppBreadCrumb />
    </CContainer>
  </CHeader>
</template>
