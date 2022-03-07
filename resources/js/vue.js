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
import Button from 'primevue/button'
import Column from 'primevue/column'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Message from 'primevue/message'
import Paginator from 'primevue/paginator'
import Password from 'primevue/password'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'

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
      .directive('tooltip', Tooltip)
      .component('CIcon', CIcon)
      .component('Button', Button)
      .component('Column', Column)
      .component('Card', Card)
      .component('DataTable', DataTable)
      .component('InputText', InputText)
      .component('Menu', Menu)
      .component('Message', Message)
      .component('Paginator', Paginator)
      .component('Password', Password)
      .component('Dropdown', Dropdown)
      .component('Dialog', Dialog)
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
