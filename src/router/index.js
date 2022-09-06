import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue' // 所有的路由都匹配不到的情況

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // Vue Router 路由會由上往下進行匹配，所以當路由一條條解析下來，所有的路由都無法匹配，最後就會匹配到 path: '*'，代表「所有的網址」，管使用者輸入什麼，只要找不到對應網頁，最後就會返回 NotFound 這個頁面 (也代表要放在路由列表的最後一個)
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
