import { shallowMount } from '@vue/test-utils'
import { PropOptions } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the msg prop as the heading', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, { propsData: { msg } })
    expect(wrapper.find('h1').text()).toBe(msg)
  })

  it('declares msg as a String prop', () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { msg: 'x' } })
    const props = wrapper.vm.$options.props as Record<string, PropOptions>
    expect(props.msg.type).toBe(String)
    expect(wrapper.vm.$options.name).toBe('HelloWorld')
  })

  it('renders the section headings and external links', () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { msg: 'x' } })
    expect(wrapper.findAll('h3').wrappers.map(h => h.text())).toEqual([
      'Installed CLI Plugins',
      'Essential Links',
      'Ecosystem'
    ])
    const links = wrapper.findAll('a').wrappers
    expect(links.length).toBe(13)
    links.forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener')
    })
  })
})
