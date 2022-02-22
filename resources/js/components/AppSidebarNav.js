import { h, defineComponent, resolveComponent, onMounted } from 'vue'
import { Link, usePage } from '@inertiajs/inertia-vue3'

import nav from '@/utils/nav'

const SidebarNav = defineComponent({
  setup() {
    const page = usePage

    const renderItem = (item) => {
      if (item.items) {
        h(
          resolveComponent('CNavGroup'),
          {},
          {
            toggleContent: () => [
              h(resolveComponent('CIcon'), {
                customClassName: 'nav-icon',
                icon: item.icon,
              }),
              item.name,
            ],
            default: () => item.items.renderItem(child),
          }
        )
      }

      return item.to
        ? h(
            resolveComponent(item.component),
            {},
            {
              default: () =>
                h(
                  Link,
                  {
                    href: item.to,
                    class: ['nav-link', { active: page.url === item.to }],
                  },
                  {
                    default: () => [
                      item.icon &&
                        h(resolveComponent('CIcon'), {
                          customClassName: 'nav-icon',
                          name: item.icon,
                        }),
                      item.name,
                      item.badge &&
                        h(
                          resolveComponent('CBadge'),
                          {
                            class: 'ms-auto',
                            color: item.badge.color,
                          },
                          {
                            default: () => item.badge.text,
                          }
                        ),
                    ],
                  }
                ),
            }
          )
        : h(resolveComponent(item.component), {}, { default: () => item.name })
    }

    return () =>
      h(
        resolveComponent('CSidebarNav'),
        {},
        {
          default: () => nav.map((item) => renderItem(item)),
        }
      )
  },
})

export default SidebarNav
