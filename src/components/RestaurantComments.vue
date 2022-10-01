<template>
  <div>
    <div>
      <blockquote class="blockquote mb-0">
        <button v-if="currentUser.isAdmin" @click.stop.prevent="handleDelBtn(comment.id)" type="button"
          class="btn btn-danger float-right">
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>

    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'

import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

import { mapState } from 'vuex'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // return props 進來的資料
      comment: this.restaurantComments,
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    // 事件的流程會從子元件 RestaurantComments 開始
    // 但是負責整個頁面渲染的是 Restaurant，因此子元件需要通知父元件去更新畫面的狀態
    async handleDelBtn(commentId) {
      try {
        // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
        // 資料處理之後，使用 $emit 觸發一個叫做 after-delete-comment 的事件
        const { data } = await restaurantsAPI.delComments({ commentId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 把 commentId 放進第二個參數，告訴父元件是哪一條評論被刪掉了
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit('after-delete-comment', commentId)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>