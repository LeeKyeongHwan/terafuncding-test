<template>
  <li class="product">
    <div class="product__image">
      <img src="//placehold.it/500x500" alt="">
    </div>
    <div class="product-progress">
      <div class="progress__bar"></div>
      <div class="progress__value">50% 달성</div>
    </div>
    <div class="product-contents">
      <div class="product-contract-type">
        <div class="contract__type">부동산담보</div>
      </div>
      <div class="product-details">
        <div class="product__rate">16%</div>
        <div class="bar--vertical"></div>
        <div class="product__period">13개월</div>
        <div class="bar--vertical"></div>
        <div class="product__grade">B2</div>
        <div class="bar--vertical"></div>
        <div class="product__amount">3.7억</div>
      </div>
      <div class="product__title">제3053차 성남 삼평동 봇들마을이지더원2단지아파트 담보상품</div>
      <div class="product-button">
        <a href="#" class="btn btn--primary-outline">상세보기</a>
        <a href="#" class="btn btn--primary">바로투자</a>
      </div>
    </div>
    <div class="product__soldout">마감임박</div>
  </li>
</template>

<script>
export default {
  name: 'Product',
  props: {}
}
</script>

<style scoped lang="scss">
.product {
  position: relative;
  margin: 24px 12px 0 12px;
  width: 350px;
  height: 414px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
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
    background: linear-gradient(to right, #5ac3fc 0%,#3d6afe 100%);
  }
  .progress__value {
    position: absolute;
    top: -29px;
    left: 50%;
    padding: 0 6px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background-color: $primary;

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
