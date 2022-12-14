import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue' // 所有的路由都匹配不到的情況
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from './../store'

Vue.use(VueRouter)

// 判斷使用者是否有檢視頁面的權限
// 由於 /admin 底下的路由都會需要驗證使用者有無 isAdmin 的權限，因此可以把它寫成一個獨立的方法 authorizeIsAdmin
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    // 沒有權限的使用者，即使知道網址、也應該被轉址到 404 頁面
    next('/404')
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
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
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    // 用 :id 定義動態路徑參數
    // 之後在 Vue 物件裡，可以再透過 this.$route.params 取得網址上的 :id
    // Vue 的路由進行匹配的順序是由上而下的，一旦成功匹配到路由，就不會再繼續往下去解析
    // 若動態參數 :id 先出現，那麼傳入 feeds 和 tops 字串時，格式都能成功匹配，導致使用者無法進入 RestaurantsTops 和 RestaurantsFeeds 的頁面
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
    // 判斷使用者是否有檢視頁面的權限
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
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


// 類似 beforeRouteUpdate，但 beforeEach 作用於整個專案
// 只需要在 Vue Router 內定義一次，不需要在每個元件內分別定義
router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem('token')
  // 取得 store 裡儲存的 token
  const tokenInStore = store.state.token

  // 預設是尚未驗證
  let isAuthenticated = store.state.isAuthenticated

  // 如果 localStorage 有 token 而且 localStorage 的 token 和 store 裡的不一樣再驗證
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 呼叫 actions 方法的關鍵字是 dispatch
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-in', 'sign-up']
  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果 token 有效則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router
