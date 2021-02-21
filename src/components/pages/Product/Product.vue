<template>
  <div style="padding-top: 80px;">
    Product Page
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

Options({})
export default class Product extends Vue {
  mounted (): void {
    alert('product page')
  }
}
</script>
