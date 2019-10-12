import { shallowMount } from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Product.vue', () => {
  let wrapper = shallowMount(Product, {
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

  it('Product 컴포넌트', () => {
    expect(wrapper.is(Product)).toBe(true)
  })
})
