import type { Menu } from '#/global'

const menus: Menu.recordRaw = {
  meta: {
    title: '小工具',
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: '/useful_tools/weather',
      meta: {
        title: '天气',
      },
    },
  ],
}

export default menus
