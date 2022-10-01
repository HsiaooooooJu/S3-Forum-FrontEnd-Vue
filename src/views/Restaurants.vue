<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills :categories="categories" />

      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <!-- 後面 isFavorited 與 isLiked 的值還會被修改，把 restaurant 資料傳給卡片之後，資料還會有變動，這只是初始值 -->
        <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination v-if="totalPage.length > 1" :current-page="currentPage" :total-page="totalPage"
        :category-id="categoryId" :previous-page="previousPage" :next-page="nextPage" />
      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue';
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'

// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

import Spinner from '../components/Spinner.vue'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      // 在網址的 query 裡使用
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      // -1 代表現在還沒拿到資料，因為之後一定用其他的值把 -1 覆蓋掉，也可以寫 undefined 或 0 來表達這種狀況。
      isLoading: true
    }
  },
  methods: {
    // STEP 2：將 fetchRestaurants 改成 async...await 的語法
    // 並且可以帶入參數 page 與 categoryId
    // 呼叫 API 後取得 response
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })

        // // 故意測試錯誤
        // if (response.statusText === 'OK') {
        //   throw new Error(response.statusText)
        // }

        // 透過解構賦值，將所需要的資料從 response.data 取出
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data

        // 將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next

        this.isLoading = false

      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to, from, next) {
    // to - 使用者將要前往的路由 to: { query: {categoryId: '', page: 2} }
    // from - 使用者來自哪個路由
    // next - 表示繼續往下
    // console.log('to', to)
    // console.log('from', from)

    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  created() {
    // 取得動態路由資訊，確保 created 也有處理到 queryString 
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  }
}
</script>