// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '@/views/five/HomeView.vue'
const constRoutes =  [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // 除了首页直接导入 其他都是懒加载导入 为了性能优化
    component: () => import('../views/five/AboutView.vue')
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:createWebHashHistory(),
  routes:constRoutes
})
export default router
