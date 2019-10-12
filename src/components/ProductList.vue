<template>
  <div class="product-list">
    <div class="product-result">총 <em>{{ search.total }}</em>건의 상품이 검색되었습니다.</div>
      <ul class="products">
        <li is="Product" v-for="(item, index) in products" :key="index" :product="item"></li>
      </ul>
      <div class="product-btn-more" v-if="search.page < search.totalPages">
        <button type="button" class="btn btn__more" @click="getMoreProdducts">더보기 ({{ search.page }}/{{ search.totalPages }})</button>
      </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  filters: {},
  props: {
    search: {
      type: Object,
      required: true,
      default: () => ({})
    },
    products: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  computed: {},
  methods: {
    getMoreProdducts () {
      this.$emit('getMoreProducts')
    }
  }
}
</script>

<style scoped lang="scss">
.product-result {
  font-size: 16px;

  em { color: $primary; }
}

.products {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 60px -12.5px;
  width: calc(100% + 25px);
}

.product-btn-more {
  display: flex;
  justify-content: center;
  width: 100%;

  .btn__more { width: 350px; }
}
</style>
