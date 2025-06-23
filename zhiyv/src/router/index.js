import { createRouter, createWebHashHistory } from 'vue-router'
/* eslint-disable */
import StartView from '@/views/StartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
