import { mount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'
import Product from '@/components/Product.vue'

const product = {
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

describe('ProductList.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(ProductList, {
      propsData: {
        search: {
          total: 10,
          page: 1,
          totalPages: 2,
          count: 5,
          list: [{ ...product }, { ...product }, { ...product }, { ...product }, { ...product }, { ...product }, { ...product }, { ...product }, { ...product }, { ...product }]
        },
        products: [{ ...product }, { ...product }, { ...product }, { ...product }, { ...product }]
      }
    })
  })

  describe('# Created', () => {
    it('ProductList 컴포넌트', () => {
      expect(wrapper.is(ProductList)).toBe(true)
    })
  })

  describe('# UI', () => {
    it('ProductList 기본 렌더링 시 count만큼 Product가 그려진다', () => {
      expect(wrapper.findAll(Product).length).toBe(wrapper.vm.search.count)
    })
  })

  describe('# Data', () => {
  })

  describe('# Event', () => {
    // FIXME: emit?
    /* it('더보기 버튼 클릭시, count만큼 Product가 늘어난다', () => {
      expect(wrapper.vm.products.length).toBe(wrapper.vm.search.count)
      const button = wrapper.find('.btn__more')
      button.trigger('click')
      expect(wrapper.vm.products.length).toBe(wrapper.vm.search.count + wrapper.vm.search.count)
    }) */
  })
})
