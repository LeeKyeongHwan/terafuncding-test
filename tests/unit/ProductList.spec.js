import { shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  let wrapper = null

  beforeAll(() => {
    wrapper = shallowMount(ProductList, {
      propsData: {
        search: {
          total: 0,
          page: 0,
          totalPages: 0,
          count: 5,
          list: []
        },
        products: []
      }
    })
  })

  it('ProductList 컴포넌트', () => {
    expect(wrapper.is(ProductList)).toBe(true)
  })
})
