<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit" class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input v-model="email" id="email" name="email" type="email" class="form-control" placeholder="Email"
          autocomplete="username" required autofocus>
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input v-model="password" id="password" name="password" type="password" class="form-control"
          placeholder="Password" autocomplete="current-password" required>
      </div>

      <button :disabled="isProcessing" class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2022-2023
      </p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  name: 'SignIn',
  // Data must be a function to keep a component’s data separate for each initialization.
  // Methods and such stay the same.
  // Vue avoids error happen by having data be a function that returns an object.
  data() {
    // A function needs to be returned
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit(e) {
      try {
        // 如果 email 或 password 為空，使用 Toast 提示
        // 然後 return 不繼續往後執行
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 Email 和 Password'
          })
          return
        }

        this.isProcessing = true

        // 呼叫 authorizationAPI 裡的 signIn 方法，呼叫後會取得 Promise 物件
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        // console.log('response: ', response)
        // response { data:{...} }
        const { data } = response

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 成功登入後轉址到餐廳首頁
        this.$router.push('/restaurants')

      } catch (error) {
        // 將密碼欄位清空
        this.password = ''
        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing = false

        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        // console.log('error', error)
      }
    }
  }
}
</script>

