// 撰寫 Signin API 請求

// 設定好的 apiHelper 拿進來，這個變數裡放的是 axios 設定
// 做 axios.post() 發送請求時，要改寫成 apiHelper.post()
import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}