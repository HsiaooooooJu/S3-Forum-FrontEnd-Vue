<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card mb-3"
      style="max-width: 540px;margin: auto;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{  restaurant.name  }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{  restaurant.favoriteCount  }}</span>
            <p class="card-text">
              {{  restaurant.description  }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button v-if="restaurant.isFavorited" @click.prevent.stop="deleteFav(restaurant.id)" type="button"
              class="btn btn-danger mr-2">
              移除最愛
            </button>
            <button v-else @click.prevent.stop="addFav(restaurant.id)" type="button" class="btn btn-primary">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Floyd Von",
      "tel": "171.118.3744",
      "address": "53191 Alvena Underpass",
      "opening_hours": "08:00",
      "description": "et ullam quis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.53740187806488",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Mckenzie Schamberger",
      "tel": "648-475-5933 x339",
      "address": "140 Dino Rapid",
      "opening_hours": "08:00",
      "description": "Rerum et eum asperiores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.38993532909373",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Trisha Ortiz",
      "tel": "1-576-356-5392 x3634",
      "address": "08169 Louie Harbors",
      "opening_hours": "08:00",
      "description": "Repellendus ut esse enim et accusamus aspernatur h",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.22600350264268",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Sydney Weimann",
      "tel": "(848) 976-1166 x2122",
      "address": "88414 Elda Radial",
      "opening_hours": "08:00",
      "description": "Saepe non animi laudantium sed dolorum ea quod tem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.64768403248351",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Odie Kassulke",
      "tel": "173.296.9766 x2534",
      "address": "607 Considine Park",
      "opening_hours": "08:00",
      "description": "voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.68640278416153",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Dedrick Swaniawski",
      "tel": "838-411-5268 x44096",
      "address": "808 Rosenbaum Tunnel",
      "opening_hours": "08:00",
      "description": "Iure dolorum ullam adipisci aperiam necessitatibus",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.099850018082677",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Thad Hackett",
      "tel": "1-450-146-4354 x62068",
      "address": "6163 Jimmie Station",
      "opening_hours": "08:00",
      "description": "Quis delectus non et tempore iste est et sapiente ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.56290753215711",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Abdullah Kuhic",
      "tel": "1-841-916-4093 x53240",
      "address": "42919 Torphy Stream",
      "opening_hours": "08:00",
      "description": "Ipsa porro quam. Ipsa numquam rem numquam iure dol",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.30183558149541",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Hillary Schinner",
      "tel": "(577) 298-5681 x30083",
      "address": "66818 Jolie Spur",
      "opening_hours": "08:00",
      "description": "Cumque doloribus blanditiis quo voluptatem similiq",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.66420908156955",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Frieda Upton",
      "tel": "1-056-392-6987 x75947",
      "address": "6792 Legros Shoals",
      "opening_hours": "08:00",
      "description": "Provident dignissimos dolorum error totam veniam h",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.173618099478976",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

export default {
  name: 'RestaurantTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchTopRestaurants() {
      // this.restaurants = dummyData.restaurants
      this.restaurants = dummyData.restaurants.map(restaurant => {
        return {
          id: restaurant.id,
          name: restaurant.name,
          image: restaurant.image,
          favoriteCount: restaurant.FavoriteCount,
          isFavorited: restaurant.isFavorited
        }
      })
    },
    addFav(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurantId !== restaurant.id) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: true,
            favoriteCount: restaurant.favoriteCount + 1
          }
        }
      })
        // Arrays of objects can be sorted by comparing the value of one of their properties
        // favoriteCount 多的會排在上面
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
    },
    deleteFav(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurantId !== restaurant.id) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: false,
            favoriteCount: restaurant.favoriteCount - 1
          }
        }
      }).sort((a, b) => b.favoriteCount - a.favoriteCount)
    }
  },
  created() {
    this.fetchTopRestaurants()
  }
}
</script>