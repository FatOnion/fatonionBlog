import type { Menu } from '#/global'

const menus: Menu.recordMainRaw = {
  meta: {
    title: '学习实验',
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: '/learn/page',
      meta: {
        title: 'forEach',
      },
    },
  ],
}

export default menus
