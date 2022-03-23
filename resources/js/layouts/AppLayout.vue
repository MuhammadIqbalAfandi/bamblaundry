<script setup>
import { ref, computed } from "vue";
import AppTopBar from "@/components/AppTopBar.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMessage from "@/components/AppMessage.vue";

import menu from "@/utils/menu";
import menuAdmin from "@/utils/menu_admin";

const containerClass = computed(() => {
  return [
    "layout-wrapper",
    "layout-static",
    {
      "layout-static-sidebar-inactive": staticMenuInactive.value,
      "layout-mobile-sidebar-active": mobileMenuActive.value,
    },
  ];
});

const mobileMenuActive = ref(false);

const staticMenuInactive = ref(false);

const menuClick = ref(false);

const isDesktop = () => window.innerWidth >= 992;

const onMenuToggle = () => {
  menuClick.value = true;

  if (isDesktop()) {
    staticMenuInactive.value = !staticMenuInactive.value;
  } else {
    mobileMenuActive.value = !mobileMenuActive.value;
  }
};

const onWrapperClick = () => {
  if (!menuClick.value) {
    mobileMenuActive.value = false;
  }

  menuClick.value = false;
};
</script>

<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />

    <div class="layout-sidebar">
      <AppSidebar :model="$page.props.isAdmin ? menuAdmin : menu" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <AppMessage />

        <slot />
      </div>

      <AppFooter />
    </div>

    <Transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </Transition>
  </div>
</template>
