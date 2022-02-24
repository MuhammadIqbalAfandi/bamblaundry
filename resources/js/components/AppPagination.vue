<script setup>
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
  links: Array,
})
</script>

<template>
  <nav v-if="links.length > 3" class="mt-4">
    <ul class="pagination flex-wrap mb-0">
      <template v-for="(link, key) in links">
        <li v-if="link.url === null" :key="key" :class="{ disabled: link }" class="page-item">
          <div v-html="link.label" class="page-link"></div>
        </li>

        <li v-else :key="`link-${key}`" :class="{ active: link.active }" class="page-item">
          <Link v-html="link.label" :href="link.url" class="page-link" />
        </li>
      </template>
    </ul>
  </nav>
</template>
