<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>

    <div v-for="comment in comments" :key="comment.id" class="card-body">
      <div>
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }">{{  comment.Restaurant.name  }}
          </router-link>
        </h4>
        <p>{{  comment.text  }}</p>by
        <router-link :to="{ name: 'user', params: { id: comment.User.id } }">{{  comment.User.name  }}</router-link>
        {{  comment.createdAt | fromNow  }}
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from './../utils/mixins'

export default {
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowFilter],
  name: 'NewestComments',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
}
</script>