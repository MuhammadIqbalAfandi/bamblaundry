<script setup>
import { inject } from 'vue'

import logoNegative from '@/assets/brand/logoNegative'
import sygnet from '@/assets/brand/sygnet'
import AppSidebarNav from '@/components/AppSidebarNav'

const { sidebarVisible, sidebarUnfoldable, toggleUnfoldable } = inject('defaultLayout')
</script>

<template>
  <CSidebar position="fixed" :visible="sidebarVisible" :unfoldable="sidebarUnfoldable">
    <CSidebarBrand>
      <CIcon custom-class-name="sidebar-brand-full" :icon="logoNegative" height="35" />
      <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" height="35" />
    </CSidebarBrand>

    <AppSidebarNav :url="$page.url" />

    <CSidebarToggler class="d-none d-lg-flex" @click="toggleUnfoldable" />
  </CSidebar>
</template>
