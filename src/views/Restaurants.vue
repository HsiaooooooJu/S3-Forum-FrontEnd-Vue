<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->


    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!-- 後面 isFavorited 與 isLiked 的值還會被修改，把 restaurant 資料傳給卡片之後，資料還會有變動，這只是初始值 -->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->


  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue';

const dummyData = {
  "restaurants": [
    {
      "id": 4,
      "name": "Mr. Rusty Hilll",
      "tel": "775.546.7738",
      "address": "893 Gibson Way",
      "opening_hours": "08:00",
      "description": "Sunt consequatur aspernatur eum eaque consectetur ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.16004556968416",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 6,
      "name": "May Walker",
      "tel": "901.595.3720 x786",
      "address": "1804 Fannie Centers",
      "opening_hours": "08:00",
      "description": "Perferendis aut mollitia et. Quaerat dolor quas fu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.48139402721577",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 7,
      "name": "Jordane Krajcik",
      "tel": "(801) 768-7427",
      "address": "2233 Blick Isle",
      "opening_hours": "08:00",
      "description": "Et eligendi quo maxime quod praesentium magni labo",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.024383303839365",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 8,
      "name": "Rogelio Stamm",
      "tel": "(893) 292-6072",
      "address": "9895 Freddy Turnpike",
      "opening_hours": "08:00",
      "description": "Reiciendis laboriosam ut nemo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.39611636823813",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 9,
      "name": "Gardner DuBuque",
      "tel": "393-801-6256 x99131",
      "address": "4618 Bartell Isle",
      "opening_hours": "08:00",
      "description": "Numquam aut fugiat voluptas nostrum. Necessitatibu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.61438914169945",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 10,
      "name": "Hailee Hintz",
      "tel": "(201) 774-8720",
      "address": "614 Larkin Path",
      "opening_hours": "08:00",
      "description": "debitis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.813832624134065",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 11,
      "name": "Santino Muller",
      "tel": "721.408.7009",
      "address": "855 Strosin Ville",
      "opening_hours": "08:00",
      "description": "Quis nihil voluptatibus.\nQui doloribus neque sint ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.366587449772187",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 12,
      "name": "Emilie Koch",
      "tel": "(930) 536-4651 x52312",
      "address": "89201 Presley Overpass",
      "opening_hours": "08:00",
      "description": "impedit",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.52824074146105",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 13,
      "name": "Augustine Rutherford",
      "tel": "742-670-9360 x39802",
      "address": "891 Reagan Row",
      "opening_hours": "08:00",
      "description": "Facilis aperiam voluptas nemo voluptate id vero ut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.53579399385697",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 14,
      "name": "Glennie Trantow",
      "tel": "(820) 255-0025",
      "address": "6324 Kyleigh Divide",
      "opening_hours": "08:00",
      "description": "Sed velit distinctio est perferendis nisi voluptas",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.901037749853652",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z"
    }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
    1,
    2,
    3,
    4,
    5
  ],
  "prev": 1,
  "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
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
      nextPage: -1
      // -1 代表現在還沒拿到資料，因為之後一定用其他的值把 -1 覆蓋掉，也可以寫 undefined 或 0 來表達這種狀況。
    }
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
    // this.restaurants = dummyData.restaurants
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>