import { apiHelper } from "../utils/helpers";

// http://localhost:8080/#/restaurants?page=1&category=5
export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  createComments(formData) {
    return apiHelper.post('/comments', { ...formData })
  },
  delComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}