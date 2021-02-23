<template>
  <div class="card">
    <div class="card__container">
      <div class="card__container__image">
        <img :src="require(`@/assets/products/${path}`)">
      </div>
      <div class="card__container__details">
        <p class="card__container__details__title">{{ productName }}</p>
        <p class="card__container__details__price">PHP {{ price }}</p>
      </div>
      <div class="card__container__cart">
        <button
          @click="emitId"
          class="card__container__button"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { props } from './Props'

@Options({
  props: props,
  emits: ['addToCart']
})
export default class Card extends Vue {
  productId!: number

  emitId (): void {
    const productId: number = this.productId
    this.$emit('addToCart', { productId })
  }
}
</script>

<style lang="postcss" scoped>
@import './Card.css';
</style>
