<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />

    <template v-else>
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
            <button v-else @click.stop.prevent="follow(user.id)" type="button" class="btn btn-main">
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

import Spinner from '../components/Spinner.vue'

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
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
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
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