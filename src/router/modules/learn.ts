import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/learn',
  component: Layout,
  name: 'learn',
  meta: {
    title: '学习实验',
    icon: 'ep:briefcase',
  },
  children: [
    {
      path: 'page',
      name: 'forEach',
      component: () => import('@/views/learn/forEach.vue'),
      meta: {
        title: 'ForEach',
        icon: '',
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
