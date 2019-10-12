<template>
  <div class="filter">
    <div class="filter__title"><slot></slot></div>
    <div class="checkbox">
      <input type="checkbox" :id="`${id}_all`" v-model="filterAll" @change="filterCheckAll">
      <label :for="`${id}_all`">전체</label>
    </div>
    <div class="vertical-bar"></div>
    <div class="checkbox" v-for="(item, index) in categories" :key="`${id}_${index}`">
      <input type="checkbox" :id="`${id}_${index}`" :value="item" v-model="values" @change="filterCheck">
      <label :for="`${id}_${index}`">{{ item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',
  components: {
  },
  filters: {},
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => ([])
    },
    id: {
      type: String,
      required: true,
      default: 'filter_id'
    },
    value: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data () {
    return {
      filterAll: true,
      values: this.categories
    }
  },
  computed: {},
  methods: {
    filterCheckAll () {
      const All = this.filterAll
      this.values = All ? this.categories : []

      this.filterCheck()
    },
    filterCheck () {
      this.filterAll = this.values.length === this.categories.length

      this.$emit('update:value', this.values)
      this.$emit('searchFilter')
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 48px;
  background-color: #fff;
  border-bottom: 1px solid $gray;

  .filter__title {
    margin-right: 68px;
    font-weight: 700;
  }
  .vertical-bar {
    margin: 0 8px;
    width: 1px;
    height: 24px;
    background-color: $gray;
  }
  .checkbox {
    margin: 0 16px;
    input[type='checkbox'] { margin: 0 4px 0 0; }
  }
}
</style>
