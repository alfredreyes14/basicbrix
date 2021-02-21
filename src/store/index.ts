import { createStore } from 'vuex'
import { products } from '@/data/products'
import { Products } from '@/interfaces/Products'

/**
 * Interface for state
 */
interface State {
  products: Products[],
  name: string
}

/**
 * State variables
 */
const state: State = {
  products: products,
  name: 'Vue'
}

const store = createStore({
  state: state,
  mutations: {},
  actions: {},
  getters: {
    getName: state => {
      return state.name
    },
    getProducts: (state): Products[] => {
      return state.products
    }
  }
})

export default store
