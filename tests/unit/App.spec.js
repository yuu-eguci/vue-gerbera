import { mount, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('App.vue', () => {
  it('renders the gerbera image inside #app', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.attributes('id')).toBe('app')
    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('Vue logo')
    expect(img.attributes('src')).toBeTruthy()
  })

  it('passes the welcome message to HelloWorld', () => {
    const wrapper = shallowMount(App)
    const hello = wrapper.findComponent(HelloWorld)
    expect(hello.exists()).toBe(true)
    expect(hello.props('msg')).toBe('Welcome to Your Vue.js App')
  })

  it('renders the welcome heading when fully mounted', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1').text()).toBe('Welcome to Your Vue.js App')
  })
})
