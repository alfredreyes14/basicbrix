<template>
  <div class="nav">
    <nav class="nav__element">
      <div class="nav__logo">
        <a href="#">
          <img
            src="@/assets/sample_logo.png"
            alt="Logo"
          >
        </a>
      </div>
      <div class="nav__search">
        <input class="form-input" placeholder="Search">
        <button>
          <Icon style="color: #726f6d;" :name="'search'"/>
        </button>
      </div>
      <div class="nav__actions">
        <Icon style="color: #726f6d; width:" :name="'cart'"/>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Icon from '@/components/elements/Icon'
import { sampleItems } from '@/data/sampleItems'
import { Item } from '@/interfaces/Items'

@Options({
  components: {
    Icon
  }
})
export default class Navbar extends Vue {
  /**
   * Toggle if the hamburger is visible
   */
  isContentsVisible = false

  /**
   * Toggle vertical contents
   */
  showVerticalContents = false

  /**
   * List of items for the nav items
   */
  items: Item[] = sampleItems

  /**
   * The active tab
   */
  activeTab: string = this.items[0].id

  /**
   * Toggle the hide and show of breakpoint contents
  */
  clickHamburger (): void {
    this.isContentsVisible = !this.isContentsVisible
    this.showVerticalContents = !this.showVerticalContents
  }

  mounted (): void {
    console.log(this.$store.getters['getName'])
  }

  /**
   * Emit an event whenver a user clicks an item
   */
  clickItem (item: Item): void {
    this.$emit('clickItem', item)
    this.activeTab = item.id
  }
}
</script>

<style lang="postcss" scoped>
@import './Navbar.css';
</style>
