<template>
  <div class="main">
    <section class="filter-wrap">
      <div class="container">
        <div class="filter">
          <div class="filter__title">상품유형</div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_all" v-model="filters.contractTypeAll" @change="filterContractTypeAll">
            <label for="contractType_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_1" value="건축자금" v-model="filters.contractType" @change="filterContractType">
            <label for="contractType_1">건축자금</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="contractType_2" value="부동산담보" v-model="filters.contractType" @change="filterContractType">
            <label for="contractType_2">부동산담보</label>
          </div>
        </div>
        <div class="filter">
          <div class="filter__title">채권상태</div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_all" v-model="filters.typedStatusAll" @change="filterTypedStatusAll">
            <label for="typedStatus_all">전체</label>
          </div>
          <div class="vertical-bar"></div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_1" value="대기중" v-model="filters.typedStatus" @change="filterTypedStatus">
            <label for="typedStatus_1">대기중</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="typedStatus_2" value="모집중" v-model="filters.typedStatus" @change="filterTypedStatus">
            <label for="typedStatus_2">모집중</label>
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrap">
      <div class="container">
        <div class="product-result">총 <em>{{ search.total }}</em>건의 상품이 검색되었습니다.</div>
        <ul class="product-list">
          <li is="Product" v-for="(item, index) in products" :key="index" :product="item"></li>
        </ul>
        <div class="product-btn-more">
          <button type="button" class="btn btn__more" @click="getProducts">더보기 ({{ search.page }}/{{ search.totalPages }})</button>
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
      filters: {
        contractTypeAll: true,
        contractType: ['건축자금', '부동산담보'],
        typedStatusAll: true,
        typedStatus: ['대기중', '모집중']
      },
      originProducts: {
        total: 0,
        error: false,
        list: []
      },
      search: {
        total: 0,
        page: 0,
        totalPages: 0,
        count: 5,
        list: []
      },
      products: []
    }
  },
  methods: {
    getOriginProducts () {
      return new Promise(resolve => {
        this.$axios.get('/data.json').then(result => {
          // origin products data init
          this.originProducts = result.data
          return resolve()
        })
      })
    },
    getSearch () {
      this.setFilters()
      this.setSort()
      this.initPagination()
      this.getProducts()
    },
    setFilters () {
      const { contractType, typedStatus } = this.filters

      this.search.list = this.originProducts.list.filter(item => {
        return (
          contractType.some(contract => contract === item.contractType) &&
          typedStatus.some(typed => typed === item.typedStatus)
        )
      })
    },
    setSort () {
      this.search.list.sort((a, b) => {
        if (b.currentRate === a.currentRate) {
          return b.currentRate - a.currentRate && a.id - b.id
        }
        return b.currentRate - a.currentRate
      })
    },
    initPagination () {
      this.search.page = 0
      this.search.total = this.search.list.length
      this.search.totalPages = Math.ceil(this.search.total / this.search.count)
      this.products = []
    },
    setPagination () {
      const { totalPages, page, count } = this.search

      if (page !== 0 && totalPages === page) return

      const currentPagePerCount = page * count
      const moreProducts = this.search.list.slice(currentPagePerCount, currentPagePerCount + count)

      this.products = this.products.concat(moreProducts)
      this.search.page++
    },
    getProducts () {
      this.setPagination()
    },
    filterContractTypeAll () {
      const contractTypeAll = this.filters.contractTypeAll
      this.filters.contractType = contractTypeAll ? ['건축자금', '부동산담보'] : []

      this.getSearch()
    },
    filterContractType () {
      this.filters.contractTypeAll = this.filters.contractType.length === 2

      this.getSearch()
    },
    filterTypedStatusAll () {
      const typedStatusAll = this.filters.typedStatusAll
      this.filters.typedStatus = typedStatusAll ? ['대기중', '모집중'] : []

      this.getSearch()
    },
    filterTypedStatus () {
      this.filters.typedStatusAll = this.filters.typedStatus.length === 2

      this.getSearch()
    }
  },
  async created () {
    await this.getOriginProducts()
    this.getSearch()
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
