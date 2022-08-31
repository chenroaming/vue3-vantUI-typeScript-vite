import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import pages from './pages/pages'
import tabBar from './pages/tabBar'
const NotFound = () => import('@/views/notFound.vue')
type Route = RouteRecordRaw[]
console.log(pages, tabBar)
const routes:Route = [
  ...pages,
  ...tabBar,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
