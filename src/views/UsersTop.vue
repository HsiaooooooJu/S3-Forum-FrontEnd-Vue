<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image | emptyImage" class="mb-3" width="140px" height="140px">
        </router-link>
        <h2>{{  user.name  }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{  user.followerCount  }}</span>
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

// const dummyData = {
//   'users': [
//     {"image": 'https://i.pinimg.com/564x/f6/28/59/f6285991eda4499cbba7af4dc161e83c.jpg'},
//     {"image": 'https://i.pinimg.com/564x/43/85/5c/43855c0004d8e3df52eac898321b9572.jpg'},
//     {"image": 'https://i.pinimg.com/564x/22/d6/a2/22d6a24a91c52c2025f302b3a568d61e.jpg'}
//   ]
// }

import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        // 也可以寫 this.users = data.users 就好
        // 但是 followerCount 就要寫資料寫的 FollowerCount
        this.users = data.users.map((user) => {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed
          }
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    async follow(userId) {
      try {
        const { data } = await usersAPI.following({ userId })
        if(data.status === 'error') {
          throw new Error(data.message)
        }
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
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async unfollow(userId) {
      try {
        const { data } = await usersAPI.unfollowing({ userId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
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
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  created() {
    this.fetchTopUsers()
  }
}
</script>