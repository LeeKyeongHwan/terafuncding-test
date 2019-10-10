<template>
  <div class="main">
    목록

    <ul class="product-list">
      <li is="Product" v-for="(item, index) in 10" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'home',
  components: {
    Product
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
