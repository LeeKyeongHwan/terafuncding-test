import { mount } from '@vue/test-utils'
import Main from '@/views/Main.vue'

import SearchFilter from '@/components/SearchFilter'
import ProductList from '@/components/ProductList'

describe('Main.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(Main)
  })

  describe('# Created', () => {
    it('Main 컴포넌트', () => {
      expect(wrapper.is(Main)).toBe(true)
    })

    it('data.json을 호출한다', () => {})
  })

  describe('# UI', () => {
    it('Filter 컴포넌트가 존재한다', () => {
      expect(wrapper.findAll(SearchFilter).length > 0).toBe(true)
    })

    it('ProductList 컴포넌트가 존재한다', () => {
      expect(wrapper.findAll(ProductList).length > 0).toBe(true)
    })
  })

  describe('# Data', () => {
  })
})
