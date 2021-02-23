import { createStore } from 'vuex'
import { products } from '@/data/products'
import { Products } from '@/interfaces/Products'

/**
 * Interface for state
 */
interface State {
  products: Products[]
  total: number
  cartItems: Products[]
}

/**
 * State variables
 */
const state: State = {
  products: products,
  total: 0,
  cartItems: []
}

const store = createStore({
  state,
  mutations: {
    /**
     * Add the amount to the total state
     * @param state state variables
     * @param amount amount to be added
     */
    addToTotal (state, amount): void {
      state.total = state.total += amount
    },

    /**
     * Add the product to the cart items
     * @param state state variables
     * @param id id of the product
     */
    addToCartItems (state, id): void {
      const product: Products[] = state.products
        .filter((item: Products) => item.productId === id)
      state.cartItems.push(product[0])
    }
  },
  actions: {
    /**
     * Add to total action
     * @param context context object
     * @param amount amount of the item
     */
    addToTotal (context, amount): void {
      context.commit('addToTotal', amount)
    },

    /**
     * Add the product to cart items
     * @param context context object
     * @param id id of the product
     */
    addToCartItems (context, id): void {
      context.commit('addToCartItems', id)
    }
  },
  getters: {
    /**
     * Get the product
     * @param state state variables
     */
    getProducts: (state): Products[] => {
      return state.products
    },

    /**
     * Get the total
     * @param state state variables
     */
    getTotal: (state): number => {
      return state.total
    },

    /**
     * Get the items in the cart
     * @param state state variables
     */
    getCartItems: (state): Products[] => {
      return state.cartItems
    }
  }
})

export default store
