<template>
  <div class="content">
    <div class="content__container flex flex-col">
      <div class="content__container__advertisment flex flex-row justify-between">
        <div class="bg-red-400" style="width: 70%;">Carousel</div>
        <div class="bg-blue-400" style="width: 30%;">Featured</div>
      </div>
      <div class="content__container__products bg-blue-600">
        <Card />
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
