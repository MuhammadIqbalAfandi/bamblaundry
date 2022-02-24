import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

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
