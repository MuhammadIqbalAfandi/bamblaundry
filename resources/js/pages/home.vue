<template>
  <div>
    <h1>Hello <span class="lv">Laravel</span> Vue {{ vue }}</h1>

    <Link :href="$route('about')">To page About</Link>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue'

export default {
  components: {
    Link,
  },
  data() {
    return {
      vue: 2,
    }
  },
}
</script>

<style lang="scss" scoped>
.lv {
  color: #eb4432;
}
</style>
