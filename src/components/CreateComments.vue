<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
      <button type="submit" class="btn btn-primary mr-0">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"

export default {
  name: 'CreateComments',
  // 父元件才知道現在渲染的是哪一筆餐廳資料，用 props，讓父元件把 restaurantId 傳進來
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    handleSubmit() {
      // console.log('submit')
      // 使用者按下 Submit 按鈕之後，CreateComment 元件會向後端伺服器發送 POST 請求
      // TODO: 向 API 發送 POST 請求

      // 伺服器新增 Comment 成功後，子元件要用 $emit 觸發一個事件，通知父元件資料的狀態改變
      this.$emit('after-create-comment', {
        commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = ''  // 送出後，將表單內的資料清空
    }
  }
}
</script>