import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    // state - 傳入上方的 state 物件，準備變更物件內容、currentUser - 接收從 Vue component 傳入的資料
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    // 透過 fetchCurrentUser 取得登入使用者的資訊
    // 在 actions 的方法內取得 commit 這個方法: fetchCurrentUser({commit})
    // 再透過 mutations 裡的 setCurrentUser 改變 state
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch(error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
