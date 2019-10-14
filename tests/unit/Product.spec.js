import { shallowMount } from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Product.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Product, {
      propsData: {
        product: {
          'id': 16,
          'title': '제3054차 강남 한티역 인근 근린생활시설 신축사업 사업자대출',
          'typedStatus': '모집중',
          'rateOfReturn': 15,
          'loanPeriod': 16,
          'targetAmount': 2260000000,
          'contractType': '건축자금',
          'grade': 'B1',
          'investAmount': 0,
          'url': 'https://cdn.terafunding.com/UploadedFiles/19-LN-3224/19-LN-3224_2019082915190987.jpg',
          'soldOutSoon': 'FALSE',
          'currentRate': 0
        }
      }
    })
  })

  describe('# Created', () => {
    it('Product 컴포넌트', () => {
      expect(wrapper.is(Product)).toBe(true)
    })
  })

  describe('# UI', () => {
    it('이미지 나타난다', () => {
      expect(wrapper.find('.product__image img').attributes('src')).toBe(wrapper.vm.product.url)
    })

    it('title(제목)이 표시된다', () => {
      expect(wrapper.find('.product__title').text()).toBe(wrapper.vm.product.title)
    })

    it('soldOutSoon이 "TRUE"이면 마감임박이 표시된다', () => {
      let wrapper = shallowMount(Product, {
        propsData: {
          product: { 'soldOutSoon': 'TRUE' }
        }
      })
      expect(wrapper.find('.product__soldout').text()).toBe('마감임박')
    })

    it('soldOutSoon이 "FALSE"이면 마감임박이 표시가 표시되지 않는다', () => {
      let wrapper = shallowMount(Product, {
        propsData: {
          product: { 'soldOutSoon': 'FALSE' }
        }
      })
      expect(wrapper.find('.product__soldout').exists()).toBe(false)
    })

    it('contractType(상품유형)이 표시된다', () => {
      expect(wrapper.find('.contract__type').text()).toBe(wrapper.vm.product.contractType)
    })

    it('rateOfReturn(수익률)이 표시된다', () => {
      expect(wrapper.find('.product__rate').text()).toBe(wrapper.vm.product.rateOfReturn + '%')
    })

    it('loadPeriod(투자기간)이 표시된다', () => {
      expect(wrapper.find('.product__period').text()).toBe(wrapper.vm.product.loanPeriod + '개월')
    })

    it('grade(상품등급?)이 표시된다', () => {
      expect(wrapper.find('.product__grade').text()).toBe(wrapper.vm.product.grade)
    })

    it('targetAmount(목표금액)이 표시된다', () => {
      let amount = (wrapper.vm.product.targetAmount / 100000000).toFixed(1)
      expect(wrapper.find('.product__amount').text()).toBe(amount + '억')
    })
  })
})
