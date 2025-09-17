import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/useful_tools',
  component: Layout,
  name: 'usefulTools',
  meta: {
    title: '小工具',
    icon: 'ep:briefcase',
  },
  children: [
    {
      path: 'page',
      name: 'weather',
      component: () => import('@/views/useful_tools/weather.vue'),
      meta: {
        title: '天气',
        icon: 'ep:sunny',
      },
    },
    // {
    //   path: 'level2',
    //   name: 'multilevelMenuExample2',
    //   meta: {
    //     title: '导航2',
    //   },
    // },
  ],
}

export default routes
