// @vitest-environment node
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { build, resolveConfig } from 'vite'

describe('production build', () => {
  let outDir: string

  beforeAll(async () => {
    outDir = mkdtempSync(join(tmpdir(), 'vue-gerbera-dist-'))
    await build({ logLevel: 'silent', build: { outDir, emptyOutDir: true } })
  }, 60_000)

  afterAll(() => {
    rmSync(outDir, { recursive: true, force: true })
  })

  it('outputs to dist/', async () => {
    const config = await resolveConfig({}, 'build')
    expect(config.build.outDir).toBe('dist')
  })

  it('emits index.html that mounts the app entry onto #app', () => {
    const html = readFileSync(join(outDir, 'index.html'), 'utf8')
    expect(html).toContain('<title>vue-gerbera</title>')
    expect(html).toContain('<div id="app"></div>')
    expect(html).toContain('href="/favicon.ico"')
    expect(html).toMatch(/<script type="module" crossorigin src="\/js\/app\.[\w-]+\.js"><\/script>/)
    expect(html).toMatch(/<link rel="stylesheet" crossorigin href="\/css\/app\.[\w-]+\.css">/)
  })

  it('keeps the js/, css/ and img/ layout with source maps', () => {
    expect(readdirSync(outDir).sort()).toEqual(['css', 'favicon.ico', 'img', 'index.html', 'js'])
    const js = readdirSync(join(outDir, 'js'))
    expect(js.some(name => /^app\.[\w-]+\.js$/.test(name))).toBe(true)
    expect(js.some(name => /^app\.[\w-]+\.js\.map$/.test(name))).toBe(true)
    expect(readdirSync(join(outDir, 'img')).some(name => /^gerbera\.[\w-]+\.jpg$/.test(name))).toBe(true)
  })
})
