import { createStore } from 'vuex'

const store = createStore({
  state:{
    name: 'Vue'
  },
  mutations: {},
  actions: {},
  getters: {
    getName: state => {
      return state.name
    }
  }
})

export default store
