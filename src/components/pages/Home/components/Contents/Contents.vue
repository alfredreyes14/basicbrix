<template>
  <div class="content">
    <div class="content__container">
      <div class="content__container__advertisment">
        <div class="bg-red-500" style="width: 70%; padding: 20px;">Carousel</div>
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
        <button @click="goToProductPage">
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

interface ProductId {
  productId: number
}

@Options({
  components: {
    Card
  }
})
export default class Contents extends Vue {
  page = 1

  /**
   * Array of first 5 displayed items
   */
  displayed: Products[] = []

  /**
   * Slideshow image names
   */
  slideshow: string[] = [
    'lcw1',
    'lcw2',
    'lcw3',
    'lcw4',
    'lcw5'
  ]

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
  addToCart ({ productId }: ProductId): void {
    alert('id is: ' + productId)
  }

  /**
   * Jump to product page
   */
  goToProductPage (): void {
    this.$router.push('/product')
  }
}
</script>

<style lang="postcss" scoped>
@import './Contents.css';
</style>
