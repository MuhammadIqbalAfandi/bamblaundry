import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'

Vue.prototype.$route = route

createInertiaApp({
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: (h) => h(App, props),
    }).$mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
