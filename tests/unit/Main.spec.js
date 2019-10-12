import { shallowMount } from '@vue/test-utils'
import Main from '@/views/Main.vue'

describe('Main.vue', () => {
  let wrapper = null

  beforeAll(() => {
    wrapper = shallowMount(Main)
  })

  it('Main 컴포넌트', () => {
    expect(wrapper.is(Main)).toBe(true)
  })
})
