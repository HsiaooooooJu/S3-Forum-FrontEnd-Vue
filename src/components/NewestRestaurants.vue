<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card-body">
      <div>
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">{{  restaurant.name  }}</router-link>
          &nbsp;
          <small>{{  restaurant.Category ? restaurant.Category.name : '未分類'  }}</small>
        </h4>
        <p>{{  restaurant.description  }}</p>{{  restaurant.createdAt | fromNow  }}
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>

<script>
// 載入 moment
import { fromNowFilter } from './../utils/mixins'

export default {
  name: "NewestRestaurants",
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      // 告訴元件傳進來的資料型態是 Array
      type: Array,
      // 資料是必要的，一定要傳進來
      required: true
    }
  }
}
</script>