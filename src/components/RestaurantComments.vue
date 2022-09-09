<template>
  <div>
    <div>
      <blockquote class="blockquote mb-0">
        <button v-if="currentUser.isAdmin" @click.stop.prevent="handleDelBtn(comment.id)" type="button"
          class="btn btn-danger float-right">
          Delete
        </button>
        <h3>
          <router-link to="#">
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

// 只有管理員才能刪除使用者評論，因此只有管理員看到刪除按鈕
// dummyUser 模擬登入使用者
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

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
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    // 事件的流程會從子元件 RestaurantComments 開始
    // 但是負責整個頁面渲染的是 Restaurant，因此子元件需要通知父元件去更新畫面的狀態
    handleDelBtn(commentId) {
      console.log('handleDelBtn', commentId)

      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 資料處理之後，使用 $emit 觸發一個叫做 after-delete-comment 的事件
      // 並把 commentId 放進第二個參數，告訴父元件是哪一條評論被刪掉了

      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>