<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link to="#">
          <img :src="user.image" class="mb-3" width="140px" height="140px">
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.stop.prevent="unfollow(user.id)" type="button" class="btn btn-danger">
            取消追蹤
          </button>
          <button v-else @click.stop.prevent="follow(user.id)" type="button" class="btn btn-primary">
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "Jane",
      "email": "root@example.com",
      "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
      "isAdmin": true,
      "image": 'https://i.pinimg.com/564x/f6/28/59/f6285991eda4499cbba7af4dc161e83c.jpg',
      "createdAt": "2022-08-01T03:06:33.000Z",
      "updatedAt": "2022-08-01T03:06:33.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "Dakota",
      "email": "user1@example.com",
      "password": "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
      "isAdmin": false,
      "image": 'https://i.pinimg.com/564x/43/85/5c/43855c0004d8e3df52eac898321b9572.jpg',
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "Bella",
      "email": "user2@example.com",
      "password": "$2a$10$kxnI/c2D5FG1PZfWN4OH5O9eZOK6nm2A23r7wfIpddRK1LTW5ZVHy",
      "isAdmin": false,
      "image": 'https://i.pinimg.com/564x/22/d6/a2/22d6a24a91c52c2025f302b3a568d61e.jpg',
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}


export default {
  name: 'UsersTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }
      })
    },
    follow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user
        } else {
          return {
            ...user,
            followerCount: user.followerCount + 1,
            isFollowed: true,
          }
        }
      })
    },
    unfollow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user
        } else {
          return {
            ...user,
            followerCount: user.followerCount - 1,
            isFollowed: false
          }
        }
      })
    }
  },
  created() {
    this.fetchTopUsers()
  }
}
</script>