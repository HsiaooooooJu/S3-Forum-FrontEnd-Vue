<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />
    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input v-model="newCategoryName" type="text" class="form-control" placeholder="新增餐廳類別...">
        </div>
        <div class="col-auto">
          <button :disabled="isProcessing" @click.stop.prevent="createCategory" type="button" class="btn btn-main">
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th scope="col" width="210">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input v-show="category.isEditing" v-model="category.name" type="text">
            <span v-show="category.isEditing" @click="handleCancel(category.id)" class="cancel">
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button v-show="!category.isEditing" @click.stop.prevent="toggleIsEditing(category.id)" type="button"
              class="btn btn-link mr-2">
              Edit
            </button>
            <button v-show="category.isEditing"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })" type="button"
              class="btn btn-link mr-2">
              Save
            </button>
            <button @click.stop.prevent="deleteCategory(category.id)" type="button" class="btn btn-link mr-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import AdminNav from '@/components/AdminNav'

import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

import Spinner from './../components/Spinner'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      newCategoryName: '',
      categories: [],
      isEditing: false,
      isProcessing: false,
      isLoading: true
    }
  },
  methods: {
    async fetchCategories() {
      try{
        this.isLoading = true
        const { data, status } = await adminAPI.categories.get()
        if(status === 'error') {
          throw new Error(statusText)
        }
        this.categories = data.categories.map(category => {
          return {
            ...category,
            isEditing: false,
            // 把原始的餐廳類別名稱暫存起來
            nameCached: ''
          }
        })
        this.isLoading = false
      } catch(error){
        cthis.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 雖然後端已經 create 好資料了，但前端必須重新整理才能看到資料
        // 這時加上 push 資料就會即時更新在畫面上
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        })

        Toast.fire({
          icon: 'success',
          title: '成功新增餐廳類別'
        })

        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 雖然後端已經刪除資料了，但前端必須重新整理才能看到資料
        // 這時加上 filter 資料就會即時更新在畫面上
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        )
        Toast.fire({
          icon: 'success',
          title: '刪除餐廳類別成功'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
      }
    },
    // 轉成編輯狀態
    toggleIsEditing(categoryId) {
      // map 掃瞄一次 categories 資料，用 id 對照，如果不是要編輯的類別，就照樣回傳類別內容
      // 挑出需要編輯的類別物件後，就用 spread operator 展開物件
      // 把 isEditing: !category.isEditing 加進去
      this.categories = this.categories.map(category => {
        if (categoryId === category.id) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }
        return category
      })
    },
    // 儲存編輯
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if(data.status === 'error') {
          throw new Error(data.message)
        }        
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳類別，請稍後再試'
        })
      }
      // 已經在 input 使用 v-model 做了雙向資料綁定
      // 所以當使用者輸入資料時，其實已經同步更新 category.name 了
      this.toggleIsEditing(categoryId)
    },
    // 取消編輯
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (categoryId === category.id) {
          return {
            ...category,
            name: category.nameCached
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    }
  },
  created() {
    this.fetchCategories()
  }
}
</script>


<style scoped>
/* CSS 天性是全域的，scoped 屬性，可以讓這組 CSS 只作用到當下的這一個 component */
.category-name {
  padding: 0rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>