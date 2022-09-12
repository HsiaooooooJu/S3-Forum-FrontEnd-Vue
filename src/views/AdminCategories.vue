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
          <button @click.stop.prevent="createCategory" type="button" class="btn btn-primary">
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
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
import { v4 as uuidv4 } from 'uuid'

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
  components: {
    AdminNav
  },
  data() {
    return {
      newCategoryName: '',
      categories: [],
      isEditing: false
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories.map(category => {
        return {
          ...category,
          isEditing: false,
          // 把原始的餐廳類別名稱暫存起來
          nameCached: ''
        }
      })
    },
    createCategory() {

      // TODO: 透過 API 告知伺服器欲新增的餐廳類別

      // 將新的類別新增到陣列中
      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName
      })
      this.newCategoryName = ''
    },
    deleteCategory(categoryId) {

      // TODO: 透過 API 告知伺服器欲刪除的餐廳類別

      // 將該餐廳類別從陣列中移除
      this.categories = this.categories.filter(category => category.id !== categoryId)
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
    updateCategory({ categoryId, name }) {
      // TODO: 透過 API 去向伺服器更新餐廳類別名稱

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
  padding: 0.375rem 0.75rem;
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