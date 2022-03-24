import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import '@/assets/styles/layout.scss'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import PrimeVue from 'primevue/config'
import StyleClass from 'primevue/styleclass'
import AutoComplete from 'primevue/autocomplete'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Paginator from 'primevue/paginator'
import Password from 'primevue/password'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'

createInertiaApp({
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(PrimeVue, { ripple: true })
      .mixin({ methods: { route } })
      .directive('styleclass', StyleClass)
      .directive('ripple', Ripple)
      .directive('tooltip', Tooltip)
      .component('AutoComplete', AutoComplete)
      .component('Button', Button)
      .component('Badge', Badge)
      .component('Card', Card)
      .component('Calendar', Calendar)
      .component('Column', Column)
      .component('DataTable', DataTable)
      .component('Dialog', Dialog)
      .component('Divider', Divider)
      .component('Dropdown', Dropdown)
      .component('InputNumber', InputNumber)
      .component('InputText', InputText)
      .component('Message', Message)
      .component('Paginator', Paginator)
      .component('Password', Password)
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
