import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mixin({ methods: { route } })
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#eb4432',
})
