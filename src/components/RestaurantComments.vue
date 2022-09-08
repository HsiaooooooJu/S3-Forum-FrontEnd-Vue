<template>
  <div>
    <!-- <h2 class="my-4">
      所有評論：
    </h2> -->

    <div>
      <blockquote class="blockquote mb-0">
        <button v-if="currentUser.isAdmin" type="button" class="btn btn-danger float-right">
          Delete
        </button>
        <h3>
          <router-link to="#">
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
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
    restaurantComment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: this.restaurantComment,
      currentUser: dummyUser.currentUser
    }
  },
}
</script>