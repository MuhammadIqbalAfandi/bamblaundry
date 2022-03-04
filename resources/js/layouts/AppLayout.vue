<script setup>
import { ref, computed } from 'vue'
import AppTopBar from '@/components/AppTopBar.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppFooter from '@/components/AppFooter.vue'

import menu from '@/utils/menu'

const mobileMenuActive = ref(false)
const staticMenuInactive = ref(false)
const menuClick = ref(false)

const containerClass = computed(() => {
  return [
    'layout-wrapper',
    'layout-static',
    {
      'layout-static-sidebar-inactive': staticMenuInactive.value,
      'layout-mobile-sidebar-active': mobileMenuActive.value,
    },
  ]
})

const isDesktop = () => window.innerWidth >= 992

const onMenuToggle = () => {
  menuClick.value = true

  if (isDesktop()) {
    staticMenuInactive.value = !staticMenuInactive.value
  } else {
    mobileMenuActive.value = !mobileMenuActive.value
  }
}

const onWrapperClick = () => {
  if (!menuClick.value) {
    mobileMenuActive.value = false
  }

  menuClick.value = false
}
</script>

<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />

    <div class="layout-sidebar">
      <AppMenu :model="menu" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <slot />
      </div>

      <AppFooter />
    </div>

    <Transition name="layout-mask">
      <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
    </Transition>
  </div>
</template>
