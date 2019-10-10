<template>
  <div class="main">
    <section class="filter-wrap">
      <div class="container">
        <div class="filter">
          <div class="filter__title">상품유형</div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_all">
            <label for="typedStatus_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_1" value="건축자금">
            <label for="typedStatus_1">건축자금</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_2" value="부동산담보">
            <label for="typedStatus_2">부동산담보</label>
          </div>
        </div>
        <div class="filter">
          <div class="filter__title">채권상태</div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_all">
            <label for="contractType_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_1" value="대기중">
            <label for="contractType_1">대기중</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_2" value="모집중">
            <label for="contractType_2">모집중</label>
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrap">
      <div class="container">
        <div class="product-result">총 <em>100</em>건의 상품이 검색되었습니다.</div>
        <ul class="product-list">
          <li is="Product" v-for="(item, index) in 10" :key="index"></li>
        </ul>
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
    return {}
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
  justify-content: space-between;
}
</style>
