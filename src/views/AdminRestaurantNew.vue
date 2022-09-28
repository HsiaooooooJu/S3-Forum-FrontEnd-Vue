<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm :is-processing="isProcessing" @after-submit="afterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      // submit 按鈕位於子元件 AdminRestaurantForm，要把 isProcessing 當作 props 傳進去
      isProcessing: false
    }
  },
  methods: {
    async afterSubmit(formData) {
      try {
        this.isProcessing = true

        const { data } = await adminAPI.restaurants.create({ formData })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        
        // 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: 'admin-restaurants' })

      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
      // // 透過 API 將表單資料送到伺服器
      // // 先用 console 確定資料有成功傳上來
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
    }
  }
}
</script>