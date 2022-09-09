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

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Judy Runte",
    "tel": "(918) 827-1962",
    "address": "98138 Elisa Road",
    "opening_hours": "08:00",
    "description": "Dicta et cupiditate",
    "image": "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    "createdAt": "2019-06-22T09:00:43.000Z",
    "updatedAt": "2019-06-22T09:00:43.000Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2019-06-22T09:00:43.000Z",
      "updatedAt": "2019-06-22T09:00:43.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 3,
        "text": "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          "image": "https://i.imgur.com/XooCt5K.png",
          "isAdmin": false,
          "createdAt": "2019-06-22T09:00:43.000Z",
          "updatedAt": "2019-06-23T01:16:31.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

// currentUser 假資料
// 在做前後分離的時候，後端會加開一組路由，讓前端可以在任何需要的時候直接取得登入使用者
// 再到 data 設定 currentUser
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}


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
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('restaurantId', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
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
    },
    afterDeleteComment(commentId) {
      // filter 會保留回傳值為 true 的陣列項目
      console.log(commentId)
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