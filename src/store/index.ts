import { createStore } from 'vuex'
import { products } from '@/data/products'
import { Products } from '@/interfaces/Products'

/**
 * Interface for state
 */
interface State {
  products: Products[]
}

/**
 * State variables
 */
const state: State = {
  products: products,
}

const store = createStore({
  state: state,
  mutations: {},
  actions: {},
  getters: {
    getProducts: (state): Products[] => {
      return state.products
    }
  }
})

export default store
