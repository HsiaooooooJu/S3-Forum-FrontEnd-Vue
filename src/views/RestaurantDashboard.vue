<template>
  <div class="container py-5">
    <div>
      <h1>{{  restaurant.name  }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{  restaurant.categoryName  }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{  restaurant.commentsLength  }}</li>
      <li>瀏覽次數： {{  restaurant.viewCounts  }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Laury Gerlach",
    "tel": "(362) 086-0126 x4590",
    "address": "550 Walter Fields",
    "opening_hours": "08:00",
    "description": "enim apsxapsock",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.67624997722729",
    "viewCounts": 0,
    "createdAt": "2022-07-30T09:11:32.000Z",
    "updatedAt": "2022-08-12T16:17:50.000Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z"
    },
    "Comments": [
      {
        "id": 1,
        "text": "Illo ex quis repellat tenetur corporis consequatur omnis maxime nobis.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$/mJWLJyJpvonEmG2jp4wb.vSuFYRKGcDnF6k..6sT4CNeDnIb7PhC",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-30T09:11:32.000Z",
          "updatedAt": "2022-07-30T09:11:32.000Z"
        }
      },
      {
        "id": 51,
        "text": "Suscipit rerum ut est voluptates ipsam qui minima earum.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$4uOer1U8UxL1jv7IWjrnged.7ienQ..l2MKiz2WW8p5GT/juzIrG2",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-30T09:11:32.000Z",
          "updatedAt": "2022-07-30T09:11:32.000Z"
        }
      },
      {
        "id": 101,
        "text": "Quia officiis libero laborum ad ut ullam.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$/mJWLJyJpvonEmG2jp4wb.vSuFYRKGcDnF6k..6sT4CNeDnIb7PhC",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-30T09:11:32.000Z",
          "updatedAt": "2022-07-30T09:11:32.000Z"
        }
      }
    ]
  }
}

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData
      const { id, name, Category, Comments, viewCounts } = restaurant
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        commentsLength: Comments.length,
        viewCounts,
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  }
}
</script>