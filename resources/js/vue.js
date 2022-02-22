import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'

import icons from '@/assets/icons'

createInertiaApp({
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(CoreuiVue)
      .mixin({ methods: { route } })
      .provide('icons', icons)
      .component('CIcon', CIcon)
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
