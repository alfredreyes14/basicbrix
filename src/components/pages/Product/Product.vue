<template>
  <div class="products">
    <div class="products__container">
      <Card
        v-for="product in displayed"
        :key="product.productId"
        :productName="product.productName"
        :price="product.price"
        :productId="product.productId"
        :path="product.path"
        :quantity="product.quantity"
      />
    </div>
    <div class="products__pagination">
      <v-pagination
        v-model="activePage"
        :pages="pages"
        :range-size="pages"
        active-color="#DCEDFF"
        @update:modelValue="changPage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Card from '@/components/elements/Card'
import { Products } from '@/interfaces/Products'
import VPagination from 'vue3-pagination'
import 'vue3-pagination/dist/vue3-pagination.css'

@Options({
  components: {
    Card,
    VPagination
  }
})
export default class Product extends Vue {
  /**
   * The active page
   */
  activePage = 1

  /**
   * Number of pages 
   */
  pages = 1

  /**
   * Array of products to be displayed
   */
  products: Products[] = []

  /**
   * Products to be displayed
   */
  displayed: Products[] = []

  /**
   * Rehydrate displayed array on mount event
   */
  mounted (): void {
    const products: Products[] =
      this.$store.getters.getProducts
    this.products = products
    this.pages = Math.ceil(products.length / 3)
    this.displayed = [...products]
      .slice((this.activePage - 1) * 3, this.activePage * 3)
  }

  /**
   * Add to cart action
   */
  addToCart ({ productId }: {productId: number}): void {
    alert(productId)
  }

  /**
   * Change the page event function
   */
  changPage (page: number): void {
    this.activePage = page
    this.displayed = [...this.products]
      .slice((this.activePage - 1) * 3, this.activePage * 3)
    console.log('displayed', this.displayed)
  }
}
</script>

<style lang="postcss" scoped>
@import './Product.css';
</style>
