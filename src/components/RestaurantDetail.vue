<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img class="img-responsive center-block" src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;">
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <!-- <p>{{ restaurant.description }}</p> -->
      <p>{{restaurant.description}}</p>
      <a class="btn btn-primary btn-border mr-2" href="#">Dashboard</a>

      <button v-if="restaurant.isFav" @click.stop.prevent="deleteFav(restaurant.id)" type="button"
        class="btn btn-danger btn-border mr-2">
        移除最愛
      </button>
      <button v-else @click.stop.prevent="addFav(restaurant.id)" type="button" class="btn btn-primary btn-border mr-2">
        加到最愛
      </button>
      <button v-if="restaurant.isLiked" @click.stop.prevent="deleteLike(restaurant.id)" type="button"
        class="btn btn-danger like mr-2">
        Unlike
      </button>
      <button v-else @click.stop.prevent="addLike(restaurant.id)" type="button" class="btn btn-primary like mr-2">
        Like
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'RestaurantDetail',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    addFav(restaurantId) {
      this.restaurant = {
        ...this.restaurant,
        isFav: true
      }
    },
    deleteFav(restaurantId) {
      this.restaurant = {
        ...this.restaurant,
        isFav: false
      }
    },
    addLike(restaurantId) {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      }
    },
    deleteLike(restaurantId) {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }
    }
  }
}
</script>