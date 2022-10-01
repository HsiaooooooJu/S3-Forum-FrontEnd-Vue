<template>
  <div class="container py-5">
    <NavTabs />

    <Spinner v-if="isLoading" />

    <template v-else>
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
              <span class="badge badge-secondary">收藏數：{{  restaurant.FavoriteCount  }}</span>
              <p class="card-text">
                {{  restaurant.description  }}
              </p>
              <a href="#" class="btn btn-main mr-2">Show</a>

              <button v-if="restaurant.isFavorited" @click.prevent.stop="deleteFav(restaurant.id)" type="button"
                class="btn btn-danger mr-2">
                移除最愛
              </button>
              <button v-else @click.prevent.stop="addFav(restaurant.id)" type="button" class="btn btn-main">
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
/* eslint-disable */

import NavTabs from '../components/NavTabs.vue'

import restaurantsAPI from '.././apis/restaurants'
import usersAPI from '.././apis/users'
import { Toast } from './../utils/helpers'

import Spinner from '../components/Spinner.vue'

export default {
  name: 'RestaurantTop',
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        })
      }
    },
    async addFav(restaurantId) {
      try {
        const { data } = await usersAPI.addFav({ restaurantId })
        console.log(data)
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurantId !== restaurant.id) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1
            }
          }
        }).sort((a, b) => b.FavoriteCount - a.FavoriteCount)
        // Arrays of objects can be sorted by comparing the value of one of their properties
        // favoriteCount 多的會排在上面

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFav(restaurantId) {
      try {
        const { data } = await usersAPI.delFav({ restaurantId })
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurantId !== restaurant.id) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1
            }
          }
        }).sort((a, b) => b.FavoriteCount - a.FavoriteCount)
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    }
  },
  created() {
    this.fetchTopRestaurants()
  }
}
</script>