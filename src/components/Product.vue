<template>
  <li class="product">
    <div class="product__image">
      <img :src="_product.url" :alt="_product.title">
    </div>
    <div class="product-progress">
      <div class="progress__bar" :style="{'width': `${_product.currentRate}%`}"></div>
      <div class="progress__value"
        v-if="_product.currentRate > 0"
        :class="{'overvalue': _product.currentRate > 80}"
        :style="{'left': `${_product.currentRate}%`}"
      >
        {{ _product.currentRate }}% 달성
      </div>
    </div>
    <div class="product-contents">
      <div class="product-contract-type">
        <div class="contract__type">{{ _product.contractType }}</div>
      </div>
      <div class="product-details">
        <div class="product__rate">{{ `${_product.rateOfReturn}%` }}</div>
        <div class="bar--vertical"></div>
        <div class="product__period">{{ `${_product.loanPeriod}개월` }}</div>
        <div class="bar--vertical"></div>
        <div class="product__grade">{{ _product.grade }}</div>
        <div class="bar--vertical"></div>
        <div class="product__amount">{{ _product.targetAmount | amountFilter }}</div>
      </div>
      <div class="product__title">{{ _product.title }}</div>
      <div class="product-button">
        <a href="#" class="btn btn--primary-outline">상세보기</a>
        <template v-if="_product.typedStatus === '대기중'">
          <a href="#" class="btn disabled">오픈예정</a>
        </template>
        <template v-else>
          <a href="#" class="btn btn--primary">바로투자</a>
        </template>
      </div>
    </div>
    <div class="product__soldout" v-if="_product.soldOutSoon === 'TRUE'">마감임박</div>
  </li>
</template>

<script>
export default {
  name: 'Product',
  filters: {
    amountFilter (value) {
      return `${(value / 100000000).toFixed(1)}억`
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    _product () {
      return { ...this.product }
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  position: relative;
  margin: 24px 12px 0 12px;
  width: 350px;
  height: 414px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 2px 1px -1px rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.14);
}
.product__image {
  height: 195px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.product-progress {
  position: relative;
  height: 6px;
  background-color: $gray;

  .progress__bar {
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, #5ac3fc 0%,$primary 100%);
  }
  .progress__value {
    position: absolute;
    top: -29px;
    left: 0;
    padding: 0 6px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    background-color: $primary;

    &.overvalue { transform: translateX(-100%); }
  }
}
.product-contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: calc(100% - 195px - 6px);
  padding: 16px;

  .product-contract-type {
    display: flex;

    .contract__type {
      margin-right: 4px;
      padding: 0 4px;
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      color: #666;
      font-size: 12px;
      background-color: #f7f7f7;
    }
  }
  .product-details {
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-weight: 700;

    .bar--vertical {
      margin: 0 16px 2px;
      width: 1px;
      height: 14px;
      background-color: rgba(0,0,0,.6);
    }

    .product__rate {
      color: $primary;
      font-size: 30px;
    }
  }
  .product__title {
    height: 48px;
    font-size: 16px;
    line-height: 1.5;
  }
  .product-button {
    display: flex;
    justify-content: space-between;
  }
}
.product__soldout {
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px 10px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  background-color: $pink;
}
</style>
