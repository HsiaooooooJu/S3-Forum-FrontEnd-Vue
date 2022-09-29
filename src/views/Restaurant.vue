<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />

    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <h2 class="my-4">
      所有評論：
    </h2>
    <!-- 父元件監聽子元件事件 @after-delete-comment="afterDeleteComment"，若事件發生了，執行 afterDeleteComment -->
    <RestaurantComments :restaurant-comments="comment" v-for="comment in restaurantComments" :key="comment.id"
      @after-delete-comment="afterDeleteComment" />

    <!-- 新增評論 CreateComment -->
    <CreateComments :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />

  </div>
</template>

<script>
/* eslint-disable */
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComments from '../components/CreateComments.vue'

import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

import { mapState } from 'vuex'

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComments
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFav: false,
        isLiked: false
      },
      restaurantComments: [],
    }
  },
  computed: {
    ...mapState([ 'currentUser' ])
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        const { restaurant, isFavorited, isLiked } = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        };
        this.restaurantComments = Comments;
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment(commentId) {
      // filter 會保留回傳值為 true 的陣列項目
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      // payload 通常就是指「放在物件裡的一包資料」
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        // 直接抓當下的時間
        createdAt: new Date()
      })
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  }
}
</script>