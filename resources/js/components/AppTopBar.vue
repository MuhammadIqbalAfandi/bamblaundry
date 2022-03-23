<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineEmits(["menu-toggle"]);
</script>

<template>
  <div class="layout-topbar">
    <div class="layout-topbar-logo">
      <img alt="Logo" src="/images/logo.png" class="mr-3" />
      <span>BAMB'S LAUNDRY</span>
    </div>

    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="$emit('menu-toggle')"
    >
      <i class="pi pi-bars"></i>
    </button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <span class="hidden lg:inline">{{ $page.props.auth.user.name }}</span>

        <Link
          :href="route('users.show', $page.props.auth.user.id)"
          class="p-link layout-topbar-button"
          v-tooltip.bottom="'Pengaturan Profil'"
        >
          <i class="pi pi-user"></i>
          <span>Pengaturan Profil</span>
        </Link>

        <Link
          :href="route('logout')"
          as="button"
          method="post"
          class="p-link layout-topbar-button"
          v-tooltip.bottom="'Sign Out'"
        >
          <i class="pi pi-sign-out"></i>
          <span>Sign Out</span>
        </Link>
      </li>
    </ul>
  </div>
</template>
