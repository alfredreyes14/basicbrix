<template>
  <svg
    v-html="icon"
    style="width:24px;height:24px"
    viewBox="0 0 24 24" role="img"
    aria-hidden="true"
    focusable="false"
  />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Icons from './icon'

/**
 * Interface for icon
 */
interface IconInterface {
  [key: string]: string
}
@Options({
  props: {
    name: {
      required: true,
      default: 'hamburger'
    }
  }
})
export default class Icon extends Vue {
  /**
   * Name of the icon(svg path) from the material design 
   * website 
   */
  name!: string

  /**
   * Computed function for getting the
   * path HTML element of the SVG from 
   * a separate .ts file
   */
  get icon (): string {
    const icons: IconInterface = Icons
    return icons[this.name]
  }
}
</script>
