import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

// 後端會先依 token 找出使用者，接著才會為使用者和餐廳建立關聯，因此這個 API 的動作以 user 為中心
export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // axios.post(url, [data[, config]])
  // data - 要發送的資料，如果沒有則寫 null
  // config - 這裡可以把 token 帶到 headers 中
  addFav({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  delFav({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  delLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  following({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  unfollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}