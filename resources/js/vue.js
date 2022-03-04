import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import '@/assets/styles/layout.scss'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import PrimeVue from 'primevue/config'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import StyleClass from 'primevue/styleclass'
import Ripple from 'primevue/ripple'

import icons from '@/assets/icons'

createInertiaApp({
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(CoreuiVue)
      .use(PrimeVue, { ripple: true })
      .mixin({ methods: { route } })
      .provide('icons', icons)
      .directive('styleclass', StyleClass)
      .directive('ripple', Ripple)
      .component('CIcon', CIcon)
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
