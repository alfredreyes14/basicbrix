<template>
  <div class="content">
    <div class="content__container">
      <div class="content__container__advertisment">
        <div class="bg-red-400" style="width: 70%;">Carousel</div>
        <div class="bg-blue-400" style="width: 30%;">Featured</div>
      </div>
      <div class="content__container__products">
        <Card
          v-for="product in displayed"
          :key="product.productId"
          :productName="product.productName"
          :price="product.price"
          :productId="product.productId"
          :path="product.path"
          :quantity="product.quantity"
          @addToCart="addToCart"
        />
      </div>
      <div class="content__container__button">
        <button>
          View More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Card from '@/components/elements/Card'
import { Products } from '@/interfaces/Products'

@Options({
  components: {
    Card
  }
})
export default class Contents extends Vue {
  /**
   * Array of first 5 displayed items
   */
  displayed: Products[] = []

  /**
   * Rehydrate displayed array on mount event
   */
  mounted (): void {
    const products: Products[] = this.$store.getters.getProducts
    const ids: number[] = this.getRandomizeProducts()
    products.forEach((product) => {
      if (ids.includes(product.productId) === true) {
        this.displayed.push(product)
      }
    })
  }

  /**
   * Get the randomized 5 product ids to be 
   * displayed
   */
  getRandomizeProducts (): number[] {
    const ids: number[] = []
    for (let counter = 1; ids.length < 5; counter++) {
      const id = Math.floor(Math.random() * 10) + 1
      if (ids.includes(id) === false) {
        ids.push(id)
        continue
      }
    }

    return ids
  }

  /**
   * Add the product to cart
   */
  addToCart ({ productId }: any): void {
    alert('id is: ' + productId)
  }
}
</script>

<style lang="postcss" scoped>
@import './Contents.css';
</style>
