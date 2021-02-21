<template>
  <div>
    <Navbar />
    <router-view />
    <div class="bg-yellow-400">
      footer
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/elements/Navbar'

@Options({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>
<style lang="postcss">
@import './assets/css/main.css';
</style>
