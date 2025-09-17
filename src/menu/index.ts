import type { Menu } from '#/global'

import Learn from './modules/learn.menu'

const menu: Menu.recordMainRaw[] = [
  {
    meta: {
      title: '演示',
      icon: 'uim:box',
    },
    children: [
      Learn,
    ],
  },
]

export default menu
