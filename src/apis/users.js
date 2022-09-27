import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

// 後端會先依 token 找出使用者，接著才會為使用者和餐廳建立關聯，因此這個 API 的動作以 user 為中心
export default {
  // axios.post(url, [data[, config]])
  // data - 要發送的資料，如果沒有則寫 null
  // config - 這裡可以把 token 帶到 headers 中
  addFav({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delFav({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}