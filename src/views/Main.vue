<template>
  <div class="main">
    <section class="filter-wrap">
      <div class="container">
        <search-filter
          id="contractType"
          :categories="filterCategories.contractType"
          :value.sync="filters.contractType"
          @searchFilter="getSearch"
        >
          상품유형
        </search-filter>
        <search-filter
          id="typedStatus"
          :categories="filterCategories.typedStatus"
          :value.sync="filters.typedStatus"
          @searchFilter="getSearch"
        >
          채권상태
        </search-filter>
      </div>
    </section>

    <section class="product-wrap">
      <div class="container">
        <product-list :search="search" :products="products" @getMoreProducts="getProducts"></product-list>
      </div>
    </section>
  </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter'
import ProductList from '@/components/ProductList'

export default {
  name: 'Main',
  components: {
    SearchFilter,
    ProductList
  },
  data () {
    return {
      originProducts: {
        total: 0,
        error: false,
        list: []
      },
      filterCategories: {
        contractType: ['건축자금', '부동산담보'],
        typedStatus: ['대기중', '모집중']
      },
      filters: {
        contractType: ['건축자금', '부동산담보'],
        typedStatus: ['대기중', '모집중']
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
  computed: {
    jsonURL () {
      return process.env.NODE_ENV === 'production' ? '/terafunding-test/data.json' : '/data.json'
    }
  },
  methods: {
    getOriginProducts () {
      return new Promise((resolve, reject) => {
        this.$axios.get(this.jsonURL).then(result => {
          // origin products data init
          this.originProducts = result.data
          return resolve()
        }).catch(e => {
          throw e
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
    }
  },
  created () {
    this.getOriginProducts().then(this.getSearch).catch(e => { throw e })
  }
}
</script>

<style scoped lang="scss">
.filter-wrap {
  display: flex;
  align-items: center;
  height: 200px;
  background-color: #f7f7f7;
}

.product-wrap { padding: 60px 0; }
</style>
