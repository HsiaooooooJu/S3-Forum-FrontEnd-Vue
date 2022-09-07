import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue' // 所有的路由都匹配不到的情況
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurant'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    // Vue Router 路由會由上往下進行匹配，所以當路由一條條解析下來，所有的路由都無法匹配，最後就會匹配到 path: '*'，代表「所有的網址」，管使用者輸入什麼，只要找不到對應網頁，最後就會返回 NotFound 這個頁面 (也代表要放在路由列表的最後一個)
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  // 透過 <router-link> 自動幫連結加上特定的 class 樣式
  linkExactActiveClass: 'active',
  routes
})

export default router
