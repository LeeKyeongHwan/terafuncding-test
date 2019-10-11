<template>
  <div class="main">
    <section class="filter-wrap">
      <div class="container">
        <div class="filter">
          <div class="filter__title">상품유형</div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_all">
            <label for="contractType_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_1" value="건축자금">
            <label for="contractType_1">건축자금</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_2" value="부동산담보">
            <label for="contractType_2">부동산담보</label>
          </div>
        </div>
        <div class="filter">
          <div class="filter__title">채권상태</div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_all">
            <label for="typedStatus_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_1" value="대기중">
            <label for="typedStatus_1">대기중</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_2" value="모집중">
            <label for="typedStatus_2">모집중</label>
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrap">
      <div class="container">
        <div class="product-result">총 <em>{{ search.total }}</em>건의 상품이 검색되었습니다.</div>
        <ul class="product-list">
          <li is="Product" v-for="(item, index) in 5" :key="index"></li>
        </ul>
        <div class="product-btn-more">
          <button type="button" class="btn btn__more">더보기 ({{ search.page + 1 }}/{{ search.totalPages }})</button>
        </div>
      </div>
    </section>
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
    return {
      products: {
        total: 0,
        error: false,
        list: []
      },
      filters: {},
      search: {
        total: 0,
        page: 0,
        totalPages: 0,
        count: 5,
        list: []
      }
    }
  },
  methods: {
    getProducts () {
      this.$axios.get('/data.json').then(result => {
        // origin products data init
        this.products = result.data
        // basic search init
        Object.assign(this.search, this.products)
        // basic pagination init
        this.search.totalPages = Math.ceil(this.search.total / this.search.count)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
.filter-wrap {
  display: flex;
  align-items: center;
  height: 200px;
  background-color: #f7f7f7;

  .filter {
    display: flex;
    align-items: center;
    padding: 0 40px;
    height: 48px;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;

    .filter__title {
      margin-right: 68px;
      font-weight: 700;
    }
    .vertical-bar {
      margin: 0 8px;
      width: 1px;
      height: 24px;
      background-color: #e1e1e1;
    }
    .checkbox {
      margin: 0 16px;
      input[type='checkbox'] { margin: 0 4px 0 0; }
    }
  }
}

.product-wrap { padding: 60px 0; }
.product-result {
  font-size: 16px;

  em { color: $primary; }
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 60px -12.5px;
  width: calc(100% + 25px);
}

.product-btn-more {
  display: flex;
  justify-content: center;

  .btn__more { width: 350px; }
}
</style>
