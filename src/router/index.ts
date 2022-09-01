import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const NotFound = () => import('@/views/notFound.vue')
type Route = RouteRecordRaw[]

// 批量导入路由文件
// 该方法仅适用于vite
// reference：https://cn.vitejs.dev/guide/features.html#glob-import
const modules:Route = Object.values(import.meta.glob('./pages/*.ts', {
  import: 'default',
  eager: true
}))

// 处理路由文件
const routes = modules.reduce((pre:Route, cur) => {
  // 类型守卫
  if (pre instanceof Array && cur instanceof Array) {
    return [...pre, ...cur]
  }
  return []
}, [{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }])

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
