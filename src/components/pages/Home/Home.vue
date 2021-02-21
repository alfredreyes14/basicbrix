<template>
  <div class="home" style="padding-top: 80px;">
    <Contents />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/elements/Navbar'
import Icon from '@/components/elements/Icon'
import Contents from './components/Contents'

@Options({
  components: {
    Navbar,
    Icon,
    Contents
  }
})
export default class Home extends Vue {}
</script>
