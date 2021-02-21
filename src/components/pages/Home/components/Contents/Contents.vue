<template>
  <div class="content">
    <div class="content__container">
      <div class="content__container__advertisment">
        <div class="bg-red-400" style="width: 70%;">Carousel</div>
        <div class="bg-blue-400" style="width: 30%;">Featured</div>
      </div>
      <div class="content__container__products">
        <Card
          :productName="'Yonex Astrox D Game'"
          :price="5000"
          :productId="1"
          :path="'astrox_d_game.jpg'"
          :quantity="10"
        />
        <Card
          :productName="'Yonex Astrox D Game'"
          :price="5000"
          :productId="1"
          :path="'astrox_d_game.jpg'"
          :quantity="10"
        />
        <Card
          :productName="'Yonex Astrox D Game'"
          :price="5000"
          :productId="1"
          :path="'astrox_d_game.jpg'"
          :quantity="10"
        />
        <Card
          :productName="'Yonex Astrox D Game'"
          :price="5000"
          :productId="1"
          :path="'astrox_d_game.jpg'"
          :quantity="10"
        />
        <Card
          :productName="'Yonex Astrox D Game'"
          :price="5000"
          :productId="1"
          :path="'astrox_d_game.jpg'"
          :quantity="10"
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

@Options({
  components: {
    Card
  }
})
export default class Contents extends Vue {}
</script>

<style lang="postcss" scoped>
@import './Contents.css';
</style>
