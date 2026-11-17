import Vue from 'vue'

describe('main entry', () => {
  it('mounts App onto #app and disables the production tip', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    await import('@/main')
    expect(Vue.config.productionTip).toBe(false)
    expect(document.querySelector('#app img')?.getAttribute('alt')).toBe('Vue logo')
    expect(document.querySelector('#app h1')?.textContent).toBe('Welcome to Your Vue.js App')
  })
})
