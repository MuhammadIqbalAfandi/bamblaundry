<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
  items: Array,
  root: {
    type: Boolean,
    default: false,
  },
})

const activeIndex = ref(null)

const onMenuItemClick = (event, item, index) => {
  if (!item.to) {
    event.preventDefault()
  }

  activeIndex.value = index === activeIndex.value ? null : index
}
</script>

<template>
  <ul v-if="items">
    <li
      v-for="(item, i) of items"
      :key="item.label || i"
      :class="[{ 'layout-menuitem-category': root, 'active-menuitem': activeIndex === i && !item.to }]"
    >
      <template v-if="root">
        <div class="layout-menuitem-root-text" :aria-label="item.label">{{ item.label }}</div>

        <AppSubMenu :items="item.items"></AppSubMenu>
      </template>
      <template v-else>
        <Link
          v-if="item.to"
          :href="item.to"
          class="p-ripple"
          :class="{ 'router-link-active': activeIndex, 'router-link-exact-active': activeIndex }"
          @click="onMenuItemClick($event, item, i)"
          :aria-label="item.label"
          v-ripple
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <i v-if="item.items" class="pi pi-angle-down menuitem-toggle-icon"></i>
        </Link>

        <a
          v-if="!item.to"
          :href="item.url || '#'"
          class="p-ripple"
          @click="onMenuItemClick($event, item, i)"
          :aria-label="item.label"
          v-ripple
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <i v-if="item.items" class="pi pi-angle-down menuitem-toggle-icon"></i>
        </a>

        <Transition name="layout-submenu-wrapper">
          <AppSubMenu v-show="activeIndex === i" :items="item.items"></AppSubMenu>
        </Transition>
      </template>
    </li>
  </ul>
</template>
