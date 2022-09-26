import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

// http://localhost:8080/#/restaurants?page=1&category=5
export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${ searchParams.toString() }`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}