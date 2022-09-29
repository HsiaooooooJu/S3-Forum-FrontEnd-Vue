import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

// http://localhost:8080/#/restaurants?page=1&category=5
export default {
  getRestaurant ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${ searchParams.toString() }`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  createComments(formData) {
    return apiHelper.post('/comments', { ...formData }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delComments({ commentId }) {
    return apiHelper.delete(`/comments/${ commentId }`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}