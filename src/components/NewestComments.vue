<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>

    <div v-for="comment in comments" :key="comment.id" class="card-body">
      <div>
        <h4>
          <router-link to="#">{{ comment.Restaurant.name }}</router-link>
        </h4>
        <p>{{comment.text}}</p>by
        <router-link>{{comment.User.name}}</router-link>
        {{comment.createdAt | fromNow}}
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NewestComments',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return '-'
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow()
    }
  },
}
</script>