<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="restaurant.name" id="name" type="text" class="form-control" name="name" placeholder="Enter name"
        required>
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select v-model="restaurant.categoryId" id="categoryId" class="form-control" name="categoryId" required>
        <option value="" selected disabled>
          --請選擇--
        </option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{  category.name  }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input v-model="restaurant.tel" id="tel" type="text" class="form-control" name="tel"
        placeholder="Enter telephone number">
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input v-model="restaurant.address" id="address" type="text" class="form-control" placeholder="Enter address"
        name="address">
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input v-model="restaurant.openingHours" id="opening-hours" type="time" class="form-control" name="opening_hours">
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="restaurant.description" id="description" class="form-control" rows="3" name="description" />
    </div>

    <div class="form-group">
      <label for="image">Image</label>

      <!-- 加入一個 <img> 元素，顯示暫存圖片 -->
      <!-- 使用 :src="restaurant.image" 綁定暫存網址 -->
      <img v-if="restaurant.image" :src="restaurant.image" class="d-block img-thumbnail mb-3" width="200" height="200">

      <!-- <input type="file"> 是 HTML5 提供的檔案上傳功能，會在瀏覽器上呈現出一個互動介面，讓使用者可以上傳檔案，上傳的檔案會轉換成一個叫 FileList 的 DOM 物件列表，存放在 files 屬性裡 -->
      <input @change="handleFileChange" id="image" type="file" name="image" accept="image/*" class="form-control-file">

    </div>

    <button type="submit" class="btn btn-primary">
      送出
    </button>
  </form>
</template>

<script>

const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

export default {
  name: 'AdminRestaurantForm',
  props: {
    initialRestaurant: {
      type: Object,
      // 要為物件或陣列類型的資料設定預設值時，需要使用 () => ({}) 的寫法來回傳物件
      // arrow function 回傳 object literal (key-value) 外層要再加一個小括號
      // 或 () => { return {...}}
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      })
    }
  },
  data() {
    return {
      categories: [],
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
    }
  },
  created() {
    this.fetchCategories()
    this.restaurant = {

      // 先展開 data 裡的預設值，也就是空白表單
      ...this.restaurant,

      // 接著展開 props 裡的資料，也就是父層傳進來的資料
      // 如果沒有資料，就調動 default 的回傳值，也是空白表單
      ...this.initialRestaurant
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories
    },
    handleFileChange(e) {
      const files = e.target.files
      // console.log('files', files)

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = ''

      } else {
        // 否則產生預覽圖
        // 使用 window.URL.createObjectURL() 為本機檔案來產生一個暫存的 URL
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit(e) {
      // 把 <form> 的內容轉換成一個物件，傳送給後端

      // 透過 e.target 取得表單本身
      const form = e.target

      // 透過 new FormData(form) 產生物件實例，存在 formData 裡
      const formData = new FormData(form)

      // 透過 $emit 發送 after-submit 的事件到父層 AdminRestaurantNew，並攜帶表單資料：
      this.$emit('after-submit', formData)

      // 可以透過 entries() 方法逐條列出表單的欄位和值，取得表單的內容
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
    }
  }
}
</script>