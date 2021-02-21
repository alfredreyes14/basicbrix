<template>
  <div class="home">
    g
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/elements/Navbar'
import Icon from '@/components/elements/Icon'

@Options({
  components: {
    Navbar,
    Icon
  }
})
export default class Home extends Vue {}
</script>
